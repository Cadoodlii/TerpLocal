import React from 'react'
import {Link} from "react-router-dom"

const LandingButton = ({setStudent, land}) => {


  return (
    <div>
        <Link to="/login/*">
            <button className= "btn" onClick={() => { setStudent(false); land(true); console.log("student")}}>
                Student
            </button>
        </Link>
        <Link to="/login/*">
            <button className= "btn" onClick={() => { setStudent(true); land(true); console.log("business")}}>
                Business
            </button>
        </Link>
    </div>
  )
}

export default LandingButton