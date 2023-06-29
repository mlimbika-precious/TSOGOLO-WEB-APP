import React, { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import Box from '@mui/material/Box';
import NavBar from '../components/NavBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Dashboard() {
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    // Fetch questions from the Tsogolo database
    fetch('http://localhost:3000/personality-questions')
      .then(response => response.json())
      .then(data => {
        setQuestions(data);
        setQuestionCount(data.length);
      })
      .catch(error => console.log(error));

    // Fetch total number of users from the Tsogolo database
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => {
        setUserCount(data.length);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <NavBar />
      <Box height={30} />


      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box
          component="main"
          sx={{ flexGrow: 5, p: 7, marginLeft: 'auto' }} // Added marginLeft: 'auto'
        >
         
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Card sx={{ minWidth: 375, height:300 }}>
              <CardContent>
                <b><p>Questions</p></b>
                <p>Total Questions: {questionCount}</p>
                {questions.map(question => (
                  <p key={question.id}>{question.text}</p>
                ))}
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 375 }}>
              <CardContent>
                <b><p>Users</p></b>
                <p>Total Users: {userCount}</p>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}
