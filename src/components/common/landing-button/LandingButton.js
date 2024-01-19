import "../login/Login.css"
import {Link} from "react-router-dom"

const LandingButton = ({isStudent, setStudent}) => {


  return (
    <div className = "dual_buttons"> {/*   Student/Business Button*/}
            
          <Link to="/login"
            className= {`landing-btn student ${isStudent ? "btn-active" : ""}`}
            onClick={ () => {
              setStudent(true);
              console.log("student btn clicked");
            } }
          >
            Student
          </Link>


          <Link to="/login"
            className= {`landing-btn business ${!isStudent ? "btn-active" : ""}` }
            onClick={ () => {
              setStudent(false);
              console.log("business btn clicked");
            } }
          >
            Business
          </Link>

    </div>
  )
}

export default LandingButton