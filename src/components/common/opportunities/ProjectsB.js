import Project from "./Project";
import "./Opportunities.css";
import { useState } from "react";

const ProjectsB = ({projects}) => {
    const [formModal, setFormModal] = useState(false);
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [major, setMajor] = useState('');
    const [description, setDescription] = useState('');
  
    const toggleForm = () => {
        setFormModal(!formModal);
      };

    const [currentProjects, setProjects] = useState(projects);
    const updateProjects = (key) => {
        const update = currentProjects.filter(project => project.id !== key);
        console.log(update);
        setProjects(update);
    };
    let currID = 4;
    const addProject = () => {
        const update = currentProjects.concat(
            [
                {
                    id: currID++,
                    title: title,
                    company: company,
                    major: major,
                    description: description,
                }
            ]
        );

        setProjects(update);
        toggleForm();
    };

    return (
        <>
            <button className="add" onClick={toggleForm}>
                Create New Posting
            </button>
            {(formModal && (
                <div>
                    <form className="add_form">
                        <h2>Title: <input onChange={(e) => setTitle(e.target.value)} className="edit_field" type="text" /></h2>
                        <p>Company Name: <input onChange={(e) => setCompany(e.target.value)} className="edit_field" type="text" /></p>
                        <p>Preferred Major:
                            <select onChange={(e) => setMajor(e.target.value)} className="edit_field">
                                <option value="" hidden></option>
                                <option value="computer science">Computer Science</option>
                                <option value="business">Business</option>
                                <option value="art">Art</option>
                            </select>
                        </p>
                        <p>Description: <br></br><textarea onChange={(e) => setDescription(e.target.value)} className="add_desc"></textarea></p>
                        <button className="edit_button" onClick= {addProject}>Post</button>
                        <button className="edit_button" onClick= {toggleForm}>Cancel</button>
                    </form>
                </div>
            ))}
            {currentProjects.map((project) => (
                <Project key = {project.id} project = {project} updateProjects= {updateProjects}/>
            ))}
        </>
    )
}

export default ProjectsB