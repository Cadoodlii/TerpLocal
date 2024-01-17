import React, { useState } from "react";
import "./ModalTable.css";

const Modal = ({ closeModal, onSubmit }) => {
  const [addData, setAddData] = useState({
    student: "",
    email: "",
    status: "redeemed",
  });

  const handleAddData = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const addNewData = { ...addData, [fieldName]: fieldValue };
    setAddData(addNewData);
  };

  const checkForm = () => {
    if (addData.status && addData.email && addData.student) {
      return true;
    } else {
      return false;
    }
  };

  const setSubmit = (event) => {
    event.preventDefault();

    if (checkForm() === false) {
      return;
    }
    onSubmit(addData);
    closeModal();
  };

  return (
    <div className="modalTableBackground">
      <div className="modalTableContainer">
        <div>
          <form>
            <div className="form">
              <label htmlFor="student">Student</label>
              <input
                name="student"
                value={addData.student}
                onChange={handleAddData}
              />
            </div>
            <div className="form">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={addData.email}
                onChange={handleAddData}
              />
            </div>
            <div className="form">
              <label htmlFor="status">Status</label>
              <select
                name="status"
                value={addData.status}
                onChange={handleAddData}
              >
                <option value="redeemed">Redeemed</option>
                <option value="unredeemed">Unredeemed</option>
              </select>
            </div>
            <button type="submit" className="submitButton" onClick={setSubmit}>
              SUBMIT
            </button>
            <button
              type="close"
              className="closeButtonTable"
              onClick={() => closeModal(false)}
            >
              CLOSE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
