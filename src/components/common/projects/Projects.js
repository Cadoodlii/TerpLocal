import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <>
            {projects.map((project) => (
                <Project project = {project} />
            ))}
        </>
    )
}

export default Projects