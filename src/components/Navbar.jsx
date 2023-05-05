import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success" style={{height:'4.5rem'}}>
  
  
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ">
      <li className="navbar-brand m-1  p-4">
      <Link className="navbar-brand " to="/">Home</Link>
      </li>
      <li className="navbar-brand m-1 p-4">
        <Link className="navbar-brand" to="/login">Login</Link>
      </li>
      <li className="navbar-brand m-1 p-4">
        <Link className="navbar-brand" to="/createuser">Signup</Link>
      </li>
    
    
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar
