//import React from 'react'
import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      {/* <h1>Navbar</h1> */}
      {/* <Link to="/" >Home </Link>
      <Link to="/Card" >Card </Link>
      <NavLink to="Counter" >Counter</NavLink>
  <NavLink to="/lang" >Languages </NavLink> */}

<nav className="navbar navbar-expand-lg navbar-light bg-info">
  <div className="container-fluid">
    <NavLink className="navbar-brand text-white fw-bold" to="/">KIET MCA</NavLink>
    <div id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/"
           style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
             Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Card" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            Card</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Counter" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            Counter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/lang" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            Languages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            Student</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about" 
          style={({isActive})=>(isActive?{color:"green",fontWeight:"bold"}:{color:"white"})}>
            About us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
