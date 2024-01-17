//import { BsPersonVideo2 } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
//import { MdArrowForwardIos } from "react-icons/md";
import Modal from "./Modal";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="project-dashboard">
      <div className="icon">
        <IoIosArrowRoundForward size="75px" />
      </div>
      <div className="project-inner">
        <AiOutlineTeam size="125px" />
        <div className="project-inner-sum">
          <br></br>
          <h2>{project.title}</h2>
          <br></br>
          <div>
            <pre className="dashboard_description">
              Company: {project.company}, looking for {project.major} majors
            </pre>
            <Modal project={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
