
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dspage from './Components/Dspage';
import Main from './Components/Main';
import Controller from './Components/Controller';
import Nav from './Components/Nav';
import Login from './Components/Account/LogIn';
import SignUp from './Components/Account/SignUp';
export default function App() {

  return (
    <div>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}
