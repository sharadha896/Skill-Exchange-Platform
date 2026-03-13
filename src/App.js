import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function Skills() {
  return <h1 style={{ textAlign: "center" }}>Skills Page</h1>;
}

function AddSkill() {
  return <h1 style={{ textAlign: "center" }}>Add Skill Page</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/addskill" element={<AddSkill />} />
        <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;