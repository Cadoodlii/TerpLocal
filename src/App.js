import './App.css';
import React from 'react';
import { Header, Dashboard, Opportunites, Rewards, Profile} from './components/common';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path = "/" element = {<Dashboard/>} />
        <Route path = "/opportunites" element = {<Opportunites />} />
        <Route path = "/rewards" element = {<Rewards/>} />
        <Route path = "/profile" element = {<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
