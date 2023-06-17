import { Box } from '@mui/material'
import React from 'react'
import SideNav from '../components/SideNav'
import NavBar from '../components/NavBar'

export default function AddPersonalityQuestions() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx = {{display: "flex"}}>
      <SideNav />
      <Box component="main" sx = {{flexGrow: 1, p: 3}}>
       <p>Add</p>
       </Box>
    </Box>
    </>
  )
}
