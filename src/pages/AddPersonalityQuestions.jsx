import { Box, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';

export default function AddPersonalityQuestions() {
  const handleInput = (event) => {
    event.target.value = event.target.value.slice(0, 1).toUpperCase();
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
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
             label="Question"
              variant="outlined" 
              margin="normal" 
              sx={{ width: '400px' }}
               />
            <TextField 
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
               />
            <TextField 
            label="Deniel Type"
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
              
              />
            <Button
             variant="contained" 
             color="primary"
             size="large"
             sx={{ width: '400px' }} >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
