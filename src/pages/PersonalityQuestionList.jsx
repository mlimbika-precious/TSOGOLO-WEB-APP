import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SideNav from '../components/SideNav';
import NavBar from '../components/NavBar';
import AddPersonalityQuestions from './AddPersonalityQuestions';
import { useLocation, useNavigate } from 'react-router-dom';



export default function PersonalityQuestionList() {
const [questions, setQuestions] = useState([]);


const navigate = useNavigate();
const location = useLocation();
const params = new URLSearchParams(location.search);
const editQuestionId = params.get('id');


  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://tsogoloapi-production.up.railway.app/personality-questions');
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://tsogoloapi-production.up.railway.app/personality-questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error(error);
    }
  };

 
  const handleUpdate = (id) => {
    const questionToUpdate = questions.find((question) => question.id === id);
    navigate(`/addQuestions?id=${id}`, { state: questionToUpdate });
  };
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <TableContainer sx={{ marginTop: '50px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Question</TableCell>
                  <TableCell>Agree Type</TableCell>
                  <TableCell>Denial Type</TableCell>
                  <TableCell>Update</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questions.map((question) => (
                  <TableRow key={question.id}>
                    <TableCell>{question.id}</TableCell>
                    <TableCell>{question.question}</TableCell>
                    <TableCell>{question.agreeType}</TableCell>
                    <TableCell>{question.denialType}</TableCell>
                    <TableCell>
                    {editQuestionId === question.id ? (
                        <AddPersonalityQuestions
                          question={question.question}
                          agreeType={question.agreeType}
                          denialType={question.denialType}
                        />
                      ) : (
                        <IconButton onClick={() => handleUpdate(question.id)}>
                          <EditIcon />
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(question.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
