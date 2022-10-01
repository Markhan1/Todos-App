import React from "react";
import "./ModalCreated.css";

const ModalCreated = ({ setOpenModal }) => {
  return (
    <div className="modalCreatedBackground">
      <div className="modalCreatedContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h2>New Todo added.</h2>
        </div>
        <div className="footer">
          <button onClick={() => {
            setOpenModal(false)
          }}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalCreated;