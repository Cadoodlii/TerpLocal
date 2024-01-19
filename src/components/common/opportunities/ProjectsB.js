import Project from "./Project";
import "./Opportunities.css";
import { useState } from "react";
import Image from "./Image";
import { useNavigate } from "react-router-dom";

const ProjectsB = ({projects, dashboard}) => {
    const [formModal, setFormModal] = useState(false);
    const [img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png");
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [major, setMajor] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    const navigate = useNavigate();

    const toggleForm = () => {
        setFormModal(!formModal);
      };

    const [currentProjects, setProjects] = useState(projects);
    const [key, setKey] = useState(currentProjects.length + 1);

    const updateProjects = (key) => {
        const update = currentProjects.filter(project => project.id !== key);
        console.log(update);
        setProjects(update);
    };

    const updateImg = (img) => {
        setImg(img);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setImg(selectedFile);
    };

    const toAllProjects = () => {
        navigate("/opportunities");
    }
    
    const addProject = () => {
        const newProject = [
            {
                id: key,
                title: title,
                company: company,
                major: major,
                description: description,
                url: url,
                image: img,
            }
        ];

        const update = newProject.concat(currentProjects);
        console.log(newProject);
        console.log(update);
        setProjects(update);
        setKey(key + 1);
        toggleForm();
    };

    return (
        <>
            {!dashboard && (
                <button className="add" onClick={toggleForm}>
                    Create New Posting
                </button>
            )}
            {(formModal && (
                <div>
                    <form className="add_form">
                       <Image updateImg= {updateImg} /> <p></p>
                       {/* <input type="file" onChange={handleFileChange} /> */}
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
                        <p>Website: <input className="edit_button url" type="text" onChange={(e) => setUrl(e.target.value)}/> </p>
                        <button className="add_button" onClick= {addProject}>Post</button>
                        <button className="add_button" onClick= {toggleForm}>Cancel</button>
                    </form>
                </div>
            ))}
            {currentProjects.map((project) => (
                <Project key = {project.id} project = {project} updateProjects= {updateProjects}/>
            ))}

            {dashboard && (
                <div>
                    <button className="add" onClick={toAllProjects}>
                        All Projects
                    </button>
                </div>
            )}
        </>
    )
}

export default ProjectsB;