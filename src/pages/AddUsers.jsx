import React, {useState} from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';
import axios from 'axios'

export default function AddUsers() {

  
  const [successMessage, setSuccessMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  try {
      const response = await axios.post('https://tsogoloapi-production.up.railway.app/users/register', formData);
      console.log(response.data);
      setSuccessMessage('Submission successful!');
      setFormData({
        question: '',
        agreeType: '',
        denialType: '',
      });
      window.location.reload();
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
            Add Users
          </Typography>
          <Box
          component= "form"
          onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
          {successMessage && (
              <Typography variant="body1" align="center" sx={{ color: 'green' }}>
                {successMessage}
              </Typography>
            )} 
            <TextField
             name = "name"
             label="Name"
              variant="outlined" 
              margin="normal" 
              sx={{ width: '400px' }}
              value={formData.name}
              onChange={handleChange}
               />
            <TextField 
            name = "email"
            label="Email"
             variant="outlined"
              margin="normal"
               sx={{ width: '400px' }} 
               type='email'
               value={formData.email}
              onChange={handleChange}
               />
            <TextField 
            name = "password"
            label="Password"
             variant="outlined"
              margin="normal"
              sx={{ width: '400px' }} 
              type='password' 
              value={formData.password}
              onChange={handleChange}
              />
            <Button
             variant="contained" 
             color="primary"
             size="large"
             type = "submit"
             sx={{ width: '400px' }} >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
