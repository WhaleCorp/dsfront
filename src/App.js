
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Components/Main';
import Controller from './Components/Controller';
import Nav from './Components/Nav';
import Login from './Components/Account/LogIn';
import SignUp from './Components/Account/SignUp';
import WorkPlace from './Components/Account/MonitorPage/WorkPlace';
import WorkPage from './Components/WorkPage';
import ErrorPage from './Components/ErrorPage';
export default function App() {

  return (
    <div>
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/controller" element={<Controller />} />
            <Route path="/workplace" element={<WorkPage />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
