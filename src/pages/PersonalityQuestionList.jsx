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
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const editQuestionId = params.get('id');

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/personality-questions');
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/personality-questions/${id}`);
      fetchQuestions();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = (id) => {
    const questionToUpdate = questions.find((question) => question.id === id);
    setSelectedQuestion(questionToUpdate);
    navigate(`/addQuestions?id=${id}`);
  };

  const handleCancelUpdate = () => {
    setSelectedQuestion(null);
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
                  <TableCell><b>ID</b></TableCell>
                  <TableCell><b>Question</b></TableCell>
                  <TableCell><b>Agree Type</b></TableCell>
                  <TableCell><b>Denial Type</b></TableCell>
                  <TableCell><b>Update</b></TableCell>
                  <TableCell><b>Delete</b></TableCell>
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
                      {editQuestionId === question.id && selectedQuestion ? (
                        <AddPersonalityQuestions
                          question={selectedQuestion.question}
                          agreeType={selectedQuestion.agreeType}
                          denialType={selectedQuestion.denialType}
                          onCancel={handleCancelUpdate}
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
