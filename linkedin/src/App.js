import { Switch, Router, Route } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <>
      <Profile />
      {/* <Router>
        <Switch>
          <Route component={Profile} path="/profile/me" exact />
        </Switch>
      </Router> */}
    </>
  );
}

export default App;
