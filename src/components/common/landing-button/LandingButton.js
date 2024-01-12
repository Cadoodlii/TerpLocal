import "../login/Login.css"

const LandingButton = ({isStudent, setStudent}) => {


  return (
    <div>
        <button 
          className= {`landing-btn student ${isStudent ? "btn-active" : ""}`} 
          onClick={() => { setStudent(true); console.log("student")}}>
            Student
        </button>
        <button 
          className= {`landing-btn business ${!isStudent ? "btn-active" : ""}`} 
          onClick={() => { setStudent(false);console.log("business")}}>
            Business
        </button>
    </div>
  )
}

export default LandingButton