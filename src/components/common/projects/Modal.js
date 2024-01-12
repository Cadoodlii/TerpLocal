import { useState } from "react"
import "./Modal.css"

const Modal = ({project}) => {
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
            open project description
        </button>

        {modal && (
            <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h2>
                    {project.title}
                </h2>
                <p>
                    - we're looking for {project.major} majors
                </p>
                <p>
                    - {project.description}
                </p>
                <p>
                    - company : {project.company}
                </p>
                <button className="close-modal" onClick={toggleModal}>
                    close
                </button>
            </div>
            </div> )
        }
    </>
  )
}

export default Modal