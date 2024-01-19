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

import LittleBoyBakeryImage from "./images/LittleBoyBakery.png";
import ValenciasProduceImage from "./images/ValenciasProduce.png";
import RandaliaBeehivesImage from "./images/RandaliaBeehives.png";
import WoodsFlowersAndGiftsImage from "./images/WoodsFlowersAndGifts.png";
import FairDaysPlay from "./images/FairDaysPlay.png";
import FiasFabulousFinds from "./images/FiasFabulousFinds.png";

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
      company: "Valencia's Produce",
      major: "computer science",
      description:
        "Help us build our website! Looking for computer science majors with at least 1 year of web development experience",
      image: ValenciasProduceImage,
      url: "https://www.instagram.com/valenciasproduce/",
    },
    {
      id: 2,
      title: "Design a New Logo",
      company: "Wood's Flowers And Gifts",
      major: "art",
      description:
        "Help us design a logo for our business! We are looking for an updated logo that incorporates both the drinks and games aspect of our restaurant. Looking for students skilled in art/graphic design",
      image: WoodsFlowersAndGiftsImage,
      url: "https://www.woodsflowersandgifts.com/",
    },
    {
      id: 3,
      title: "Make a Marketing Campaign",
      company: "Little Boy Bakery",
      major: "business",
      description:
        "Help us grow our social media account by creating a marketing campaign plan. Looking for students who have experience in marketing",
      image: LittleBoyBakeryImage,
      url: "https://littleboybakery.com/",
    },
    {
      id: 4,
      title: "Design a Logo",
      company: "Fair Day's Play",
      major: "art",
      description:
        "Help us design a logo for our business! We're a small business dedicated providing kids with fun and unique toys.",
      image: FairDaysPlay,
      url: "https://fairdaysplay.com/",
    },
    {
      id: 5,
      title: "Manage Our Socials",
      company: "Randalia Beehives",
      major: "business",
      description:
        "Help us grow our social media account by creating a marketing campaign plan. Looking for students who have experience in marketing",
      image: RandaliaBeehivesImage,
      url: "https://randaliafarm.com/",
    },
    {
      id: 6,
      title: "Design a Logo",
      company: "Fia's Fabulous Finds",
      major: "art",
      description:
        "Help us design a logo for our business! We're a small business dedicated to upscaling garments that have previously been donated.",
      image: FiasFabulousFinds,
      url: "https://www.facebook.com/Fiasfabfinds/",
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
