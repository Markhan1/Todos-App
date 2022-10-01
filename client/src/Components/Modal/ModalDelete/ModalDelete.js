import React from "react";
import "./ModalDelete.css";

const ModalDelete = ({ setOpenModal, id, index, deleteOneDoc, setData }) => {
  return (
    <div className="modalDeleteBackground">
      <div className="modalDeleteContainer">
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
          <h2>Are you sure you want to delete "{index}" ?</h2>
        </div>
        <div className="body">
          <p>You will not be able to recover this document!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenModal(false);
              setData([]);
              deleteOneDoc(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
