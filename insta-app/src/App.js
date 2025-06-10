import Loginpage from "./Components/Login/Loginpage";
import Signuppage from "./Components/Signup/Signuppage";
import Content from './components/Content/Content'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  return (
    <>
     <Loginpage />
     <Signuppage />
      <Navbar/>
     <Content/>
    </>
   );
}

export default App
