import './App.css';
import React from 'react';
import { useState } from 'react';
import Login from './components/common/login';
import SignUp from './components/common/signup/SignUp';
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

  const handleSignUp = (username, password) => {
    // database backend storage stuff
    setIsLoggedIn(false);
  };

  return (
    <div className="App">

      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}/>

      <LandingButton setStudent= {setStudent}/>
      
      <Routes>
        <Route path = "/" element = {<Dashboard isStudent= {isStudent} />} />
        <Route path = "/opportunites" element = {<Opportunites isStudent= {isStudent}/>} />
        <Route path = "/rewards" element = {<Rewards isStudent= {isStudent}/>} />
        <Route path = "/profile" element = {<Profile isStudent= {isStudent} username= {username}/>} />
        <Route path = "/login" element = {<Login onLogin= {handleLogin} isStudent= {isStudent}/>} />
        <Route path = "/signup" element = {<SignUp onSignUp= {handleSignUp} isStudent= {isStudent} />} />
      </Routes>
    </div>
  );
}

export default App;
