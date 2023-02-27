
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dspage from './Components/Dspage';
import Main from './Components/Main';
import Controller from './Components/Controller';
export default function App() {

  return (
    <div className="App">

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/white" element={<Dspage />} />
            <Route path="/controller" element={<Controller/>}/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}
