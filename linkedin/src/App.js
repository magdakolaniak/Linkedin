import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import './index.css';

import Profile from './components/Profile.jsx';
import LateralProfiles from './components/LateralProfiles';

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Route component={Profile} path="/me" exact />
        <Route component={Profile} path="/userprofile/:userId" exact />
        <Route component={LateralProfiles} path="/lateralprofiles" exact />
      </Router>
    </div>
  );
}

export default App;
