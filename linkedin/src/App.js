import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile.jsx";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavbar />
      <Profile userId="6099186a619e5d00151f8f86" />
      <MyFooter />
    </div>
  );
}

export default App;
