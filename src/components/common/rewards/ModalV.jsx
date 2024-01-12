import React from "react";
import vigilanteQR from "../../../images/vigilanteqr.png";
import "./Modal.css";

const ModalV = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button className="button" onClick={() => closeModal(false)}>
            X
          </button>
        </div>

        <div className="imgContainer">
          <img className="img" src={vigilanteQR} alt="QR Code" />
        </div>

        <div className="body">
          <h3>Scan the QR Code</h3>
          <h2>
            or use the code{" "}
            <span style={{ color: "rgb(140, 47, 57)" }}>FREEJAVA</span>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default ModalV;
