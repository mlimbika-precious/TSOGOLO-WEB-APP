import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AddPersonalityQuestions from './pages/AddPersonalityQuestions';
import PersonalityQuestionList from './pages/PersonalityQuestionList';




class App extends React.Component {
  render() {

    return  <>
  
       <Routes>
        <Route path='/' exact element = {<Login />}></Route>
        <Route path='/home' exact element = {<Home />}></Route>
        <Route path='/addQuestions' exact element = {<AddPersonalityQuestions />}></Route>
        <Route path='/questionList' exact element = {<PersonalityQuestionList/>}></Route>
       </Routes>
      
      </>
    
      }
}

export default App;
