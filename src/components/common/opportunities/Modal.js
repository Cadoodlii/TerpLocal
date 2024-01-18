import { useState } from "react";
import "../dashboard/projects/Modal.css";
import "./Opportunities.css"

const Modal = ({ project, updateProject }) => {
  const [modal, setModal] = useState(false);
  const [table, setTable] = useState(false);
  
  const [title, setTitle] = useState(project.title);
  const [company, setCompany] = useState(project.company);
  const [major, setMajor] = useState(project.major);
  const [description, setDescription] = useState(project.description);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleTable = () => {
    setTable(!table);
  };

  const handleDelete = () => {
    updateProject();
    toggleModal();
  }

  const handleSave = () => {
    const newProject = {
        ...project,
        title: title,
        company: company,
        major: major,
        description: description,
    };

    updateProject(newProject);
    toggleModal();
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const selectMajor = <select className="edit_field" onChange={(e) => setMajor(e.target.value)} value={major}>
    <option value="computer science">computer science</option>
    <option value="business">business</option>
    <option value="art">art</option>
  </select>

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        EDIT POSTING
      </button>&nbsp;&nbsp;

      <button className="btn-modal" onClick={toggleTable}>
        APPLICATIONS
      </button>

      {modal && (
        <div className="modal edit">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>Title: <input className="edit_field" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/></h2>
            <p>- Company: <input className="edit_field" type="text" value={company} onChange={(e) => setCompany(e.target.value)}/></p>
            <p>- We're looking for {selectMajor} majors</p>
            <p>- Description: <br></br><textarea className="desc_field" onChange={(e) => setDescription(e.target.value)}>{description}</textarea></p>
            <button className="close-modal" onClick={toggleModal}>
              close
            </button>
            <div className="center">
                <button className="edit_button" onClick={handleDelete}>Delete Posting</button>
                <button className="edit_button" onClick={handleSave}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {table && (
        <div className="overlay applications">
                    
            <div className="tableContainer">
            
        <table className="table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Status</th>
              <th><button className="close" onClick={toggleTable}>
              close
            </button></th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>John Doe</td>
                <td>@terpmail.umd.edu</td>
                <td><span className="redeemed">Submitted</span></td>
                <td></td>
            </tr>
            <tr>
                <td>Jane Doe</td>
                <td>@terpmail.umd.edu</td>
                <td><span className="unredeemed">Incomplete</span></td>
                <td></td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
      )}
    </>
  );
};

export default Modal;
