
import "./App.css";
import "./index.css";
import LateralProfiles from "./components/LateralProfiles";

import { Switch, Router, Route } from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import logo from "./logo.svg";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <h1>Hello!</h1>
      <LateralProfiles />
    </div>
  );
}

export default App;
