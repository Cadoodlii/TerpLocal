const LandingButton = ({setStudent}) => {


  return (
    <div>
        <button className= "btn" onClick={() => { setStudent(true); console.log("student")}}>
            Student
        </button>
        <button className= "btn" onClick={() => { setStudent(false);console.log("business")}}>
            Business
        </button>
    </div>
  )
}

export default LandingButton