import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Profile from "./components/Profile.jsx";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div>
      <MyNavbar />
      <Profile userId="5fc4b02bb708c200175de890" />
      <MyFooter />
    </div>
  );
}

export default App;
