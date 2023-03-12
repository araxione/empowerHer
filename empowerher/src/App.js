import './App.css';
import React, { Component } from 'react';
import NavBar from './navbar';
import { LandingPage } from './LandingPage';
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
        </Routes>
        </div>
      </Router>
      </>
    );
  }
}

export default App
