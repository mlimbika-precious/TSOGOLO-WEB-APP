import { Box } from '@mui/material'
import React from 'react'
import SideNav from '../components/SideNav'
import NavBar from '../components/NavBar'


export default function UsersList() {
  return (
    <>
    <NavBar/>
    <Box height={30}/>
    <Box sx = {{display: "flex"}}>
      <SideNav/>
    <Box component="main" sx = {{flexGrow: 1, p: 3}}>
       <p>List</p>
       </Box>
    </Box>
    </>
  )
}
