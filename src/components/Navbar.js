import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">SkillExchange</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/register"><button>Register</button></Link>
         <Link to="/login"><button>Login</button></Link>
      </div>
    </nav>
  );
}

export default Navbar;