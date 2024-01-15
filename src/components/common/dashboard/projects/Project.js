import { BsPersonVideo2 } from "react-icons/bs";
import Modal from "./Modal";
import "./Project.css";


const Project = ({project, isOpport}) => {
    return (
            <div className={`project-inner ${isOpport ? "opport" : ""}`}>
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
    )
}

export default Project