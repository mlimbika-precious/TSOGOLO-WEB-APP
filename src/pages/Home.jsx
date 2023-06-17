import React from 'react'
import SideNav from '../components/SideNav'
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx ={{display: "flex"}}>
       <SideNav/>
       <Box component="main" sx = {{flexGrow: 1, p: 3}}>
       <p>Home</p>
       </Box>
    
    </Box>
    </>
  )
}
