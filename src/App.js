import React from 'react';
import HomePage from './components/HomePage';
import Login from './components/Login';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div>
      {/* <HomePage/> */}
      <Login/>
      </div>
    
    );
  }
}

export default App;
