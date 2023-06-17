import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Button, Link, Input } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { PersonOutline } from '@mui/icons-material';


export default function Login() {
  const navigate = useNavigate();
  return (
    <CssVarsProvider>
      <main style={{ display: 'flex', justifyContent: 'center' }}>
        <Sheet
          sx={{
            width: 300,
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1" align="center">
             <b>Welcome!</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="Group2ICT@email.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button
            sx={{
              mt: 1 /* margin top */,
              '&:hover': {
                backgroundColor: 'orange',
              },
            }}
            onClick={() => navigate('/dashboard')}
          >
            Log in
          </Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
