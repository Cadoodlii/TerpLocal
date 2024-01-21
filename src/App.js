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
import Footer from "./components/common/footer/Footer";

import AirisStudio from "./images/Airi'sStudio.jpeg";
import EllasBakery from "./images/Ella'sBakery.jpeg";
import Flowerist from "./images/Flowerist.jpg";
import LightAsFeather from "./images/LightAsFeather.jpeg";
import RetailTherapy from "./images/RetailTherapy.jpeg";
import Sparkle from "./images/Sparkle.jpeg";

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
      company: "Airi's Studio",
      major: "computer science",
      description:
        "Help us build our website! Looking for computer science majors with at least 1 year of web development experience",
      image: AirisStudio,
      url: "google.com",
    },
    {
      id: 2,
      title: "Design a New Logo",
      company: "Flowerist",
      major: "art",
      description:
        "Help us design a logo for our business! We are looking for an updated logo that incorporates both the drinks and games aspect of our restaurant. Looking for students skilled in art/graphic design",
      image: Flowerist,
      url: "google.com",
    },
    {
      id: 3,
      title: "Make a Marketing Campaign",
      company: "Ella's Bakery",
      major: "business",
      description:
        "Help us grow our social media account by creating a marketing campaign plan. Looking for students who have experience in marketing. We're offering vouchers.",
      image: EllasBakery,
      url: "google.com",
    },
    {
      id: 4,
      title: "Build Our website",
      company: "Sparkle",
      major: "computer science",
      description:
        "Help us design a website for our business! We're a small business dedicated to providing the highest quality jewelry.",
      image: Sparkle,
      url: "google.com",
    },
    {
      id: 5,
      title: "Manage Our Socials",
      company: "Light As Feather",
      major: "business",
      description:
        "Help us grow our social media account by creating a marketing campaign plan. Looking for students who have experience in marketing",
      image: LightAsFeather,
      url: "google.com",
    },
    {
      id: 6,
      title: "Design a Logo",
      company: "Retail Therapy",
      major: "art",
      description:
        "Help us design a logo for our business! We're a small business dedicated to upscaling garments that have previously been donated.",
      image: RetailTherapy,
      url: "google.com",
    },
  ]);



  return (
    <>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
          isStudent={isStudent}
        />

        <Routes className = "login_box">
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

        {!isLoggedIn && (
          <LandingButton isStudent={isStudent} setStudent={setStudent} />
        )}
        
      </div>
      <Footer />
    </>
  );
}

export default App;
