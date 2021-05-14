import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Profile from './components/Profile.jsx';

import React from 'react';
import MyNavbar from './components/MyNavbar';

import MyFooter from './components/MyFooter';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Route component={Home} path="/home" />
        <MyFooter />
      </Router>
    </div>
  );
}
export default App;
