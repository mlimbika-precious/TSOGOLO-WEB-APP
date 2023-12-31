import { Box, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';
import axios from 'axios';

export default function AddPersonalityQuestions() {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    question: '',
    agreeType: '',
    denialType: '',
  });
  
  const [submittedData, setSubmittedData] = useState(null);

  const handleInput = (event) => {
    const modifiedValue = event.target.value.slice(0, 1).toUpperCase();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: modifiedValue,
    }));
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.question === '' || formData.agreeType === '' || formData.denialType === '') {
      setErrorMessage('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/personality-questions', formData);
      console.log(response.data);
      setSuccessMessage('Submission successful!');
      setSubmittedData(formData);
      setFormData({
        question: '',
        agreeType: '',
        denialType: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
        }}
      >
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Add Questions
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {successMessage && (
              <Typography variant="body1" align="center" sx={{ color: 'green' }}>
                {successMessage}
              </Typography>
            )}
            {submittedData && (
              <Box sx={{ textAlign: 'center', my: 2 }}>
                <Typography variant="body1" align="center">
                  Question: {submittedData.question}
                </Typography>
                <Typography variant="body1" align="center">
                  Agree Type: {submittedData.agreeType}
                </Typography>
                <Typography variant="body1" align="center">
                  Denial Type: {submittedData.denialType}
                </Typography>
              </Box>
            )}
            {errorMessage && (
              <Typography variant="body1" align="center" sx={{ color: 'red' }}>
                {errorMessage}
              </Typography>
            )}
            <TextField
              name="question"
              label="Question"
              variant="outlined"
              margin="normal"
              sx={{ width: '400px' }}
              value={formData.question}
              onChange={handleChange}
            />
            <TextField
              name="agreeType"
              label="Agree Type"
              variant="outlined"
              margin="normal"
              sx={{ width: '400px' }}
              InputProps={{
                inputProps: {
                  maxLength: 1,
                  style: {
                    textTransform: 'uppercase',
                  },
                },
                onChange: handleInput,
              }}
              value={formData.agreeType}
              onChange={handleChange}
            />
            <TextField
              name="denialType"
              label="Denial Type"
              variant="outlined"
              margin="normal"
              sx={{ width: '400px' }}
              InputProps={{
                inputProps: {
                  maxLength: 2,
                  style: {
                    textTransform: 'uppercase',
                  },
                },
                onChange: handleInput,
              }}
              value={formData.denialType}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{
                width: '400px',
                '&:hover': {
                  backgroundColor: 'orange',
                },
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
