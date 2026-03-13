import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-box">
        <h2>Welcome back</h2>

        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          <a href="#">Forgot password?</a>
        </div>

        <button className="login-btn">Sign in</button>

        <button className="google-btn">
          Sign in with Google
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/register">Sign up</a>
        </p>
      </div>

    </div>
  );
}

export default Login;