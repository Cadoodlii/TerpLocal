import './App.css';
import React from 'react';
import { useState } from 'react';
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";
import LandingButton from './components/common/landing-button/LandingButton';

function App() {
  const [isStudent, setStudent] = useState(false);
  const [projects, setProjects] = useState([
      {
        id: 1,
        title: "design my website",
        company: "ella.co",
        major: "computer science",
        description: "design our shopping website targeted towards teens ;)",
      },
      {
        id: 2,
        title: "draw a logo",
        company: "supreme",
        major: "art",
        description: "ours is a very supreme company that always looks our for others",
      },
      {
        id: 3,
        title: "make a business plan",
        company: "react.company",
        major: "business",
        description: "we need help asap because we're about to go very broke",
      }
  ])

  return (
    <div className="App">

      <Header />

      <LandingButton setStudent= {setStudent}/>
      
      <Routes>
        <Route path = "/" element = {<Dashboard projects= {projects} isStudent= {isStudent} />} />
        <Route path = "/opportunites" element = {<Opportunites isStudent= {isStudent}/>} />
        <Route path = "/rewards" element = {<Rewards isStudent= {isStudent}/>} />
        <Route path = "/profile" element = {<Profile isStudent= {isStudent}/>} />
      </Routes>
    </div>
  );
}

export default App;
