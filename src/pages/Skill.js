// src/pages/Skill.js
import React from "react";

function Skill({ skillName }) {
  return (
    <div className="skill-detail">
      <h1>{skillName}</h1>
      <div className="tutorials">
        <p>Tutorial 1: Introduction</p>
        <p>Tutorial 2: Basics</p>
      </div>
      <div className="comments">
        <h3>Comments</h3>
        <p>User1: Very helpful!</p>
      </div>
    </div>
  );
}

export default Skill;