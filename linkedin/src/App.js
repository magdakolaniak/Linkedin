import { Switch, Router, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import './index.css';
import LateralProfiles from './components/LateralProfiles';

import logo from './logo.svg';

import Profile from './components/Profile.jsx';

function App() {
  return (
    <div>
      <MyNavbar />
      <Profile userId="5fc4b02bb708c200175de890" />
    </div>
  );
}

export default App;
