import './App.css';
import React from 'react';
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";
import LandingButton from './components/common/landing-button/LandingButton';

function App(isStudent, setStudent) {

  return (
    <div className="App">

      <Header />

      {/*  <LandingButton setStudent= {() => setStudent} land = {() => {}}/> */}
      
      <Routes>
        <Route path = "*/login/dashboard" element = {<Dashboard isStudent= {isStudent} />} />
        <Route path = "*/login/opportunites" element = {<Opportunites />} />
        <Route path = "*/login/rewards" element = {<Rewards/>} />
        <Route path = "*/login/profile" element = {<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
