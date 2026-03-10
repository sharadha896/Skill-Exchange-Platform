import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // After profile creation go to home page
    navigate("/");
  };

  return (
    <div className="profile-bg">

      <div className="profile-card">

        <h2>Create Your Profile</h2>

        <form onSubmit={handleSubmit}>

          <input type="text" placeholder="Full Name" required />

          <input type="text" placeholder="Your Skills (Example: React, Python)" required />

          <input type="text" placeholder="Skills you want to learn" required />

          <textarea placeholder="Short Bio"></textarea>

          <button className="profile-btn">Save Profile</button>

        </form>

      </div>

    </div>
  );
}

export default Profile;