import './App.css';
import React from 'react';
import { useState } from "react";
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";

function App() {
  const [projects, setProjects] = useState([
      {
        id: 1,
        text: "design my website",
        manager: "ella.co",
        major: "computer science",
      },
      {
        id: 2,
        text: "draw a logo",
        manager: "supreme",
        major: "art",
      },
      {
        id: 3,
        text: "make a business plan",
        manager: "react.company",
        major: "business",
      }
  ])

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path = "/" element = {<Dashboard projects = {projects}/>} />
        <Route path = "/opportunites" element = {<Opportunites />} />
        <Route path = "/rewards" element = {<Rewards/>} />
        <Route path = "/profile" element = {<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
