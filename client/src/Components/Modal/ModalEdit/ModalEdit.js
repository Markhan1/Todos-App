import React, { useRef } from "react";
import "./ModalEdit.css";

const ModalEdit = ({ setOpenModal, currentDocData, getAllDoc, index }) => {

  const uri = process.env.REACT_APP_SERVER_URI;
  const uriEdit = `${uri}/todos/update/${currentDocData._id}`;
  const fetchHeaders = { "Content-Type": "application/json" };

  const form = useRef();

  function checkForm() {
    if (
      form.current.name.value === "" ||
      form.current.text.value === "" ||
      form.current.status.value === ""
    ) {
      let message = "Please fill out these sections: ( Name, Text, Status )";
      window.alert(message);
      return 0;
    }
    return 1;
  }

  async function updateDoc() {
    let flag = checkForm();
    if (flag === 0) return;

    let date = form.current.date.value;
    if (date === "") {
      date = null;
    }

    let tags = form.current.tags.value;
    if (tags === "") {
      tags = null;
    } else {
      tags = tags.split(",");
    }

    let body = {
      name: form.current.name.value,
      text: form.current.text.value,
      status: form.current.status.value,
      tags: tags,
      date: date,
    };

    try {
      const response = await fetch(uriEdit, {
        method: "PATCH",
        headers: fetchHeaders,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        let message = `An error occured; ${response.statusText}`;
        window.alert(message);
        return [];
      }

      const result = await response.json();

      console.log(result);

      if (result) {
        getAllDoc();
        setOpenModal(false);
        window.alert(`Document "${index}" updated.`);
      }

      return result;
    } catch (err) {
      alert(err);
      window.alert(err);
      return null;
    }
  }

  return (
    <div className="modal-edit-background">
      <div className="container-edit">
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
          <h2>You are editing "{index}" right now.</h2>
        </div>
        <div className="body">
          <form
            ref={form}
            id="formEdit"
            onSubmit={(e) => {
              e.preventDefault();
              updateDoc();
            }}
          >
            <label>
              Name:{" "}
              <input
                type="text"
                name="name"
                id="name"
                className="user"
                defaultValue={currentDocData.name}
              />
            </label>
            <label>
              Text:{" "}
              <textarea
                name="text"
                className="user"
                defaultValue={currentDocData.text}
              />
            </label>
            <label>
              Status:{" "}
              <label>
                <input
                  type="radio"
                  name="status"
                  id="open"
                  value="open"
                  defaultChecked={currentDocData.status === "open" && "checked"}
                />
                open
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  id="closed"
                  value="closed"
                  defaultChecked={
                    currentDocData.status === "closed" && "checked"
                  }
                />
                closed
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  id="unsure"
                  value="unsure"
                  defaultChecked={
                    currentDocData.status === "unsure" && "checked"
                  }
                />
                unsure
              </label>
            </label>
            <label>
              Tags:{" "}
              <textarea
                name="tags"
                className="user"
                defaultValue={currentDocData.tags}
              />
            </label>
            <label>
              Date:{" "}
              <input
                name="date"
                className="user"
                defaultValue={currentDocData.date}
              />
            </label>
          </form>
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
            type="submit"
            form="formEdit"
            onClick={() => {
              console.log("update button clicked.");
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalEdit;
