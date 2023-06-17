import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';

export default function AddUsers() {
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
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <TextField
             label="Name"
              variant="outlined" 
              margin="normal" 
              sx={{ width: '400px' }}
               />
            <TextField 
            label="Email"
             variant="outlined"
              margin="normal"
               sx={{ width: '400px' }} 
               type='email'
               />
            <TextField 
            label="Password"
             variant="outlined"
              margin="normal"
              sx={{ width: '400px' }} 
              type='password' 
              />
            <Button
             variant="contained" 
             color="primary"
             size="large"
             sx={{ width: '400px' }} >
              Add
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
