import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <h1>Skill Exchange Platform</h1>
          <p>Share skills and learn from others.</p>
          <button>Get Started</button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div className="feature-box">
          <h3>Learn Skills</h3>
          <p>Learn new skills from experts.</p>
        </div>

        <div className="feature-box">
          <h3>Share Skills</h3>
          <p>Teach what you know to others.</p>
        </div>

        <div className="feature-box">
          <h3>Grow Together</h3>
          <p>Connect and collaborate with people.</p>
        </div>
      </div>

      {/* CONTACT US */}
      <div className="contact">
        <h2 style={{ textAlign: "center" }}>Contact Us</h2>
        <p style={{ textAlign: "center" }}>Email: skillexchange@gmail.com</p>
        <p style={{ textAlign: "center" }}>Phone: +91 9876543210</p>
       
      </div>

    </div>
  );
}

export default Home;
