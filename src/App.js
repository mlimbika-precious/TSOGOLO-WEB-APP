import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import AddPersonalityQuestions from './components/AddPersonalityQuestions';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
     
      <div>
      <Header />
        <SideNav />
    
    
      </div>
    
    );
  }
}

export default App;
