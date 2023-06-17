import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import AddPersonalityQuestions from './pages/AddPersonalityQuestions';
import PersonalityQuestionList from './pages/PersonalityQuestionList';
import Dashboard from './pages/Dashboard';
import AddUsers from './pages/AddUsers';
import UsersList from './pages/UsersList';




class App extends React.Component {
  render() {

    return  <>
  
       <Routes>
        <Route path='/' exact element = {<Login />}></Route>
        <Route path='/dashboard' exact element = {<Dashboard />}></Route>
        <Route path='/addQuestions' exact element = {<AddPersonalityQuestions />}></Route>
        <Route path='/questionList' exact element = {<PersonalityQuestionList/>}></Route>
        <Route path='/addUsers' exact element = {<AddUsers/>}></Route>
        <Route path='/allUsers' exact element = {<UsersList/>}></Route> 

       </Routes>
      
      </>
    
      }
}

export default App;
