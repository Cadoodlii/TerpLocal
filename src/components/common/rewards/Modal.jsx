import React from "react";
import bbQR from "../../../images/boardQR.png";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButtonContainer">
          <button className="closeButton" onClick={() => closeModal(false)}>
            X
          </button>
        </div>

        <div className="imgContainer">
          <img className="img" src={bbQR} alt="QR Code" />
        </div>

        <div className="body">
          <h3>Scan the QR Code</h3>
          <h2>
            or use the code{" "}
            <span style={{ color: "rgb(140, 47, 57)" }}>SAVE15</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Modal;
