import Loginpage from "./Components/Login/Loginpage";
import Signuppage from "./Components/Signup/Signuppage";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  return (
    <>
     <Loginpage />
     <Signuppage />
      <Navbar/>
    </>

  );
}

export default App;
