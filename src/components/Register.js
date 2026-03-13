import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="signup-container">

      <div className="signup-card">

        <div className="signup-left">
          <h2>Sign Up</h2>

          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <div className="signup-right">
          <button className="signup-btn">Sign Up</button>

          <p>
            Already have an account? <a href="/login">Log in</a>
          </p>

          <p className="or-text">Or</p>

          <button className="google-btn">
            Sign up with Google
          </button>
        </div>

      </div>

    </div>
  );
}

export default Register;