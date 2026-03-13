import React from "react";
import "./Dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="profile-section">
          <div className="avatar">👤</div>
          <h2>JOHN DON</h2>
          <p>johndon@company.com</p>
        </div>

        <nav className="menu">
          <a href="#" className="active">🏠 home</a>
           <a href="/skills">🧠 Skills</a>
            <a href="/addskill">➕ Add Skills</a>
          <a href="#">🔔 notification</a>
          <a href="#">📍 location</a>
          <a href="#">📊 graph</a>
        </nav>
      </aside>

      <main className="content">
        <header className="top-bar">
          <h1>Dashboard User</h1>
          <div className="hamburger">☰</div>
        </header>

        <section className="stats-row">
          {/*
          <div className="card dark-card">
            <div className="card-header">
              Earning <span>💰</span>
            </div>
            <div className="card-value">$ 628</div>
          </div>*/}

          <div className="card">
            <div className="card-header">
             Upload Skills <span className="icon orange">↗️</span>
            </div>
            <div className="card-value">2434</div>
          </div>

          <div className="card">
            <div className="card-header">
              Skills <span className="icon orange">👍</span>
            </div>
            <div className="card-value">1259</div>
          </div>

          <div className="card">
            <div className="card-header">
              Rating <span className="icon orange">⭐</span>
            </div>
            <div className="card-value">8.5</div>
          </div>
        </section>

        <section className="grid-layout">
          <div className="main-charts">
            <div className="card chart-large">
              <h3>Result</h3>
              <div className="bar-chart-mock"></div>
            </div>

            <div className="card chart-large">
              <div className="wave-chart-mock"></div>
            </div>
          </div>

          <aside className="side-widgets">
            <div className="card donut-card">
              <div className="donut">45%</div>

              <ul className="list">
                <li>Lorem ipsum</li>
                <li>Lorem ipsum</li>
              </ul>

              <button className="btn-orange">Check Now</button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
