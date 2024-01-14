import "../login/Login.css"
import {Link} from "react-router-dom"

const LandingButton = ({isStudent, setStudent}) => {


  return (
    <div>
        <button
          className= {`landing-btn student ${isStudent ? "btn-active" : ""}`} 
          onClick={() => { setStudent(true); console.log("student btn clicked")
          }}>

            <Link to="/login"  style={{ textDecoration: 'none' , color:"white"} }  >
              Student
            </Link>

        </button>
        <button
          className= {`landing-btn business ${!isStudent ? "btn-active" : ""}`} 
          onClick={() => { setStudent(false);console.log("business btn clicked")}}>

            <Link to="/login" style={{ textDecoration: 'none' , color:"white"}} >
              Business
            </Link>

        </button>
    </div>
  )
}

export default LandingButton