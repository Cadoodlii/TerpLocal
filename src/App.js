import './App.css';
import React from 'react';
import { useState } from 'react';
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";
import LandingButton from './components/common/landing-button/LandingButton';

function App() {
  const [isStudent, setStudent] = useState(false);

  return (
    <div className="App">

      <Header />

      <LandingButton setStudent= {setStudent}/>
      
      <Routes>
        <Route path = "/" element = {<Dashboard isStudent= {isStudent} />} />
        <Route path = "/opportunites" element = {<Opportunites isStudent= {isStudent}/>} />
        <Route path = "/rewards" element = {<Rewards isStudent= {isStudent}/>} />
        <Route path = "/profile" element = {<Profile isStudent= {isStudent}/>} />
      </Routes>
    </div>
  );
}

export default App;
