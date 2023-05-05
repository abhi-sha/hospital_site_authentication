import Home from "./Pages/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from "./Pages/Login";
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./Pages/Signup";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>} > </Route>
          <Route path="/login" element={<Login></Login>} > </Route>
        <Route path="/createuser" element={<Signup/>} > </Route>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
