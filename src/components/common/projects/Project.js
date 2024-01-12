import { BsPersonVideo2 } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Modal";
import "./Project.css";


const Project = ({project}) => {
    return (
        <div className="project">
            <div className="icon">
                <IoIosArrowRoundForward size = "100px"/>
                <MdArrowForwardIos size = "80px"/>

            </div>
            <div className="project-inner">
                <BsPersonVideo2 size = "150px"/>
                <div className="project-inner-sum">
                    <br></br>
                    <h2>
                        {project.title}
                    </h2>
                    <br></br>
                    <div>
                        <pre> company: {project.company} ,  looking for {project.major} majors</pre>
                        <Modal project = {project}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project