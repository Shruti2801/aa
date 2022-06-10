
import './App.css';
import User from './components/user'
import GetData from './components/GetData';

import { BrowserRouter as Router, Switch, 
  Route, Navigate, Routes, Redirect,  Link  } from "react-router-dom";

function App() {
  return (
    <>
    <div className="App">  
    {/* <ul>  
      <li>  
        <Link to="/">Home</Link>  
      </li>  
      <li>  
        <Link to="/about">About Us</Link>  
      </li>  
      <li>  
        <Link to="/contact">Contact Us</Link>  
      </li>  
    </ul>   */}    
</div>  
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/getdata" element={<GetData/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
