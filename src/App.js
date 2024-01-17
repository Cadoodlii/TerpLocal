import "./App.css";
import React from "react";
import { useState } from "react";
import Login from "./components/common/login";
import SignUp from "./components/common/signup/SignUp";
import HomePage from "./components/common/home/HomePage";
import {
  Header,
  Dashboard,
  Opportunites,
  Rewards,
  Profile,
} from "./components/common";
import { Routes, Route } from "react-router-dom";
import LandingButton from "./components/common/landing-button/LandingButton";

function App() {
  const [isStudent, setStudent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (email) => {
    setIsLoggedIn(true);
    setEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
  };

  const handleSignUp = (email, password) => {
    // database backend storage stuff
    setIsLoggedIn(false);
  };
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Build a Website",
      company: "Three Little Birds Sewing Co",
      major: "computer science",
      description:
        "Help us build the frontend of our website! At least one year of web development experience is preferred.",
    },
    {
      id: 2,
      title: "Design a Logo",
      company: "Board and Brew",
      major: "art",
      description:
        "Help us design a logo for our business! Looking for art students with experience in graphic design/digital art.",
    },
    {
      id: 3,
      title: "Make a Marketing Campaign",
      company: "Vigilante Coffee Co",
      major: "business",
      description:
        "Help us grow our social media account by creating a marketing campaign plan. This project is open to all business majors, but students specializing in marketing will be given preference.",
    },
  ]);

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        isStudent={isStudent}
      />

      {!isLoggedIn && (
        <LandingButton isStudent={isStudent} setStudent={setStudent} />
      )}

      <Routes>
        <Route path="/" element={<HomePage isStudent={isStudent} />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isStudent={isStudent}
              projects={projects}
              email={email}
            />
          }
        />
        <Route
          path="/opportunities"
          element={<Opportunites isStudent={isStudent} projects={projects} />}
        />
        <Route path="/rewards" element={<Rewards isStudent={isStudent} />} />
        <Route
          path="/profile"
          element={<Profile isStudent={isStudent} email={email} />}
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} isStudent={isStudent} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSignUp={handleSignUp} isStudent={isStudent} />}
        />
      </Routes>
    </div>
  );
}

export default App;
