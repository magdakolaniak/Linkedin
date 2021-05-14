import MyFooter from './components/MyFooter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import './index.css';
import Profile from './components/Profile.jsx';

import React from 'react';
import MyNavbar from './components/MyNavbar';
import Feeds from './components/Feeds';

function App() {
  return (
    <div>
      <Router>
        <Feeds />
      </Router>
    </div>
  );
}
export default App;
