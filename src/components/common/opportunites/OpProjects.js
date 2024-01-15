import Project from "../dashboard/projects/Project"
import "../dashboard/projects/Project.css";

const OpProjects = ({projects}) => {
    return (
        <>
            <div>
            {projects.map((project) => (
                <Project key = {project.id} project = {project} isOpport = {true}/>
            ))}
            </div>
        </>
    )
}

export default OpProjects