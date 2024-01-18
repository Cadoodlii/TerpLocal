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
        <AiOutlineTeam size="125px" />
        <Active status={true}/>
        <div className="project-inner-sum">
          <br></br>
          <h2>{currentProject.title}</h2>
          <br></br>
          <div>
            <pre className="dashboard_description">
              Company: {currentProject.company}, looking for {currentProject.major} majors
            </pre>
            <Modal project={project} updateProject={updateProject} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
