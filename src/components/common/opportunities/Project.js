import { AiOutlineTeam } from "react-icons/ai";
import Modal from "./Modal";
import "../dashboard/projects/Project.css";
import { useState } from "react";
import Active from "./Active";

const Project = ({ key, project, updateProjects }) => {
    const [currentProject, setProject] = useState(project);
    const updateProject = (newProject) => {
        if(newProject) {
            setProject(newProject);
        } else {
            console.log(currentProject.id);
            updateProjects(currentProject.id);
        }
    }
    

  return (
    <div className="project-dashboard">
      <div className="project-inner">
      <Active status={true}/>
        <div className="dotted-line"> 
          <img className="project-image" src={project.image} alt="project image" />
        </div>
        <div className="project-inner-sum">
          <br></br>
          <h2>{currentProject.title}</h2>
          <br></br>
          <div className="dashboard_description">
            <pre>
              Company: {currentProject.company}
              <br></br>
              We're looking for {currentProject.major} majors
            </pre>
            <Modal project={project} updateProject= {updateProject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

