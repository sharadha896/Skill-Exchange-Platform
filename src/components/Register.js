import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // after registration success
    navigate("/");
  };

  return (
    <div className="auth-bg">

      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button className="auth-btn">Register</button>
        </form>

      </div>

    </div>
  );
}

export default Register;