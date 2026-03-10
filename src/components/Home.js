import React from "react";
import "./Home.css";

function Home() {

  return (
    <div className="home-container">

      <h1>Welcome to Skill Exchange</h1>

      <h2>Popular Skills</h2>

      <div className="skills">

        <div className="skill-card">React Development</div>
        <div className="skill-card">Python Programming</div>
        <div className="skill-card">UI/UX Design</div>
        <div className="skill-card">Data Science</div>

      </div>

      <h2>Learning Videos</h2>

      <div className="videos">

        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/bMknfKXIFA8"
          title="React Tutorial"
        ></iframe>

        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/rfscVS0vtbw"
          title="Python Tutorial"
        ></iframe>

      </div>

    </div>
  );
}

export default Home;