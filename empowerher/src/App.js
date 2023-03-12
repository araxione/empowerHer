import './App.css';
import React, { Component } from 'react';
import NavBar from './navbar';
import { LandingPage } from './LandingPage';
import { Interest } from './Interest';
import { MentorList } from './MentorList';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <NavBar />
      <Router>
        <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/interest' element={<Interest/>} />
          <Route path='/mentorlist' element={<MentorList/>} />
        </Routes>
        </div>
      </Router>
      </>
    );
  }
}

export default App