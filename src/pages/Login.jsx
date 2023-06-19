import React, { useState } from 'react';
import { CssBaseline, Container, Typography, Card, CardContent, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Send login request to the backend API
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        // Login successful, redirect to dashboard
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Invalid email or password');
    }
  };

  return (
    <CssBaseline>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Card sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" align="center">
              <b>Login</b>
              {error && (
                <Card sx={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#dd4b39',padding:0, width: 300,  height: 'fit-content',mx: 'auto' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" align="center" sx={{ fontSize: 18, fontFamily: 'sans-serif', color: 'white' }}>
                  Error!
                 </Typography>
                 <Typography color="error" align="center" sx={{ fontSize: 18, fontFamily: 'sans-serif', color: 'white' }}>
              {error}
       </Typography>
    </CardContent>
  </Card>
)}

            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: 300, marginTop: '1rem' }}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: 300, marginTop: '1rem' }}
            />
            <Button variant="contained" onClick={handleLogin} sx={{ marginTop: '1rem', alignSelf: 'center' }}>
              Log in
            </Button>
          </CardContent>
        </Card>
      </Container>
    </CssBaseline>
  );
}
