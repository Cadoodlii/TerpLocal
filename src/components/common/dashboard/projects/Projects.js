import Project from "./Project";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";


const Projects = ({projects}) => {
    return (
        <>
            {projects.map((project) => (
                <div className="project">
                    <div className="icon">
                        <IoIosArrowRoundForward size = "100px"/>
                        <MdArrowForwardIos size = "80px"/>
                    </div>
                    <Project key = {project.id} project = {project} isOpport= {false}/>
                </div>
            ))}
        </>
    )
}

export default Projects