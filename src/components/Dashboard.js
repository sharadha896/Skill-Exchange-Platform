import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-bg">
      <div className="dashboard-card">

        <h1>Welcome to Dashboard</h1>
        <p>Manage your skills and explore learning opportunities.</p>

        <div className="dashboard-boxes">

          <div className="box">
            <h3>View Skills</h3>
            <p>Browse skills shared by other users</p>
          </div>

          <div className="box">
            <h3>Add Skill</h3>
            <p>Share your knowledge with others</p>
          </div>

          <div className="box">
            <h3>My Profile</h3>
            <p>Manage your personal information</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;