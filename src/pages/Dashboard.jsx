import React from 'react';
import SideNav from '../components/SideNav';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <p>Dashboard</p>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <p>Questions</p>
            </CardContent>
          </Card>
          <Box sx={{ height: 20 }} />
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <p>Users</p>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </>
  );
}
