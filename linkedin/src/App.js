import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Profile from "./components/Profile.jsx";
import MyNavbar from "./components/MyNavbar";
import Feeds from "./components/Feeds";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Route component={Home} path="/home" exact />
        <Route component={Profile} path="/userprofile/:userId" />

        <MyFooter />
      </Router>
    </div>
  );
}

export default App;
