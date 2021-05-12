import MyFooter from './components/MyFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Profile from './components/Profile.jsx';

import React from 'react';
import MyNavbar from './components/MyNavbar';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Profile />
        <MyFooter />
      </Router>
    </div>
  );
}
export default App;
