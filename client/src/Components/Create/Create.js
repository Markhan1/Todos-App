import React, { useRef, useState } from "react";
import ModalCreated from "../Modal/ModalCreated/ModalCreated";
import "./Create.css";

const Create = () => {
  // Modal (after new document created)
  const [openModal, setOpenModal] = useState(false);

  // API request variables
  const uri = process.env.REACT_APP_SERVER_URI;
  const uriCreate  = `${uri}/todos/add`;
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

  async function createNewDoc() {
    let flag = checkForm();
    if (flag === 0) return;

    let date = form.current.date.value;
    if (date === "") date = null;

    let tags = form.current.tags.value;
    if (tags === "") tags = null;
    else tags = tags.split(",");

    let body = {
      name: form.current.name.value,
      text: form.current.text.value,
      status: form.current.status.value,
      tags: tags,
      date: date,
    };

    try {
      const response = await fetch(uriCreate, {
        method: "POST",
        headers: fetchHeaders,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        let message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return null;
      }

      const result = await response.json();
      console.log(result);
      if (result) {
        setOpenModal(true);
        form.current.name.value = "";
        form.current.text.value = "";
        form.current.tags.value = "";
        form.current.date.value = "";
      }
      return result;
    } catch (err) {
      alert(err);
      window.alert(err);
      return null;
    }
  }
  return (
    <>
      {openModal && <ModalCreated setOpenModal={setOpenModal} />}
      <div className="container-create">
        <div className="title">
          <span>Create a new Todo</span>
        </div>
        <div className="body">
          <form
            ref={form}
            id="formCreate"
            onSubmit={(e) => {
              e.preventDefault();
              createNewDoc();
            }}
          >
            <label>
              Name: <input type="text" name="name" className="user" required />
            </label>
            <label>
              Text: <textarea name="text" className="user" required />
            </label>
            <label>
              Status:{" "}
              <label>
                <input type="radio" name="status" id="open" value="open" required />
                open
              </label>
              <label>
                <input type="radio" name="status" id="closed" value="closed" />
                closed
              </label>
              <label>
                <input type="radio" name="status" id="unsure" value="unsure" />
                unsure
              </label>
            </label>
            <label>
              Tags: <textarea name="tags" className="user" />
            </label>
            <label>
              Date:{" "}
              <input
                type="text"
                name="date"
                placeholder="YYYY-MM-DD hh:mm:ss"
                className="user"
              />
            </label>
          </form>
          <div className="footer">
            <button type="submit" form="formCreate" className="btn">
              Create
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
