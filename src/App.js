import './App.css';
import React from 'react';
import { useState } from 'react';
import Login from './components/common/login';
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";
import LandingButton from './components/common/landing-button/LandingButton';

function App() {
  const [isStudent, setStudent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('')

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div className="App">

      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>

      <LandingButton setStudent= {setStudent}/>
      
      <Routes>
        <Route path = "/" element = {<Dashboard isStudent= {isStudent} />} />
        <Route path = "/opportunites" element = {<Opportunites isStudent= {isStudent}/>} />
        <Route path = "/rewards" element = {<Rewards isStudent= {isStudent}/>} />
        <Route path = "/profile" element = {<Profile isStudent= {isStudent}/>} />
        <Route path = "/login" element = {<Login onLogin= {handleLogin} isStudent= {isStudent}/>} />
      </Routes>
    </div>
  );
}

export default App;
