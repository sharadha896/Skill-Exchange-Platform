import React, { useState } from "react";
import "./SearchSkill.css";

function SearchSkill() {

  const skillsData = [
    {
      title: "React Basics",
      author: "Sharadha",
      video: "https://www.youtube.com/embed/bMknfKXIFA8",
    },
    {
      title: "React State Management",
      author: "Suresh",
      video: "https://www.youtube.com/embed/Ke90Tje7VS0",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredSkills = skillsData.filter((skill) =>
    skill.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="search-page">

      <h1>Skill Videos</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search skills..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Results */}
      <div className="results">

        {filteredSkills.map((skill, index) => (
          <div className="video-card" key={index}>

            <iframe
              width="300"
              height="180"
              src={skill.video}
              title="Skill Video"
              allowFullScreen
            ></iframe>

            <div className="video-info">
              <h3>{skill.title}</h3>
              <p>by {skill.author}</p>

              <button className="watch-btn">Watch Video</button>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default SearchSkill;