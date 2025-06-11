import Loginpage from "./components/Login/Loginpage";
import Signuppage from "./components/Signup/Signuppage";
import Content from "./components/Content/Content";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Routing from "./Routing/Routing";
function App() {
  return (
    <>
      {/* <Loginpage />
      <Signuppage />
      <Navbar />
      <Content /> */}
      <Routing />
    </>
  );
}

export default App;
