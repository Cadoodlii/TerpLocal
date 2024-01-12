import { BsPersonVideo2 } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Modal";

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
                    <h2>
                        {project.title}
                    </h2>
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