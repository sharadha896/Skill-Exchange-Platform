import React from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // after login success
    navigate("/");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button className="auth-btn">Login</button>
        </form>

        <p>
          Don't have account? <a href="/register">Register</a>
        </p>

      </div>
    </div>
  );
}

export default Login;