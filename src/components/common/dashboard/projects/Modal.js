import { useState } from "react";
import "./Modal.css";

const Modal = ({ project }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        LEARN MORE
      </button>

      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2>{project.title}</h2>
            <br></br>
            <p>- Company: {project.company}</p>
            <p>- We're looking for {project.major} majors</p>
            <p>- {project.description}</p>
            <p>- Visit us at <a href={project.url}>{project.url}</a> </p>
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
