import { Box, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';

export default function UsersList() {
  // Assume you have an array of users fetched from an API or any other data source
  const users = [];

  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Table sx={{ marginTop: '50px' }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Update</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>Update Button</TableCell>
                  <TableCell>Delete Button</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Box>
    </>
  );
}
