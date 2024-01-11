import LandingButton from './components/common/landing-button/LandingButton';
import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import App from "./App";

import React from 'react'

const Landing = () => {
    const [isStudent, setStudent] = useState(true)
    const [landed, land] = useState(false);

  return (
    <div>
        {!landed ? <LandingButton setStudent= {setStudent} land = {land}/> : "" }

        <Routes>
        <Route path = "/login/*" element = {<App isStudent= {isStudent} setStudent = {setStudent}/>} />
        </Routes>
    </div>
  )
}

export default Landing