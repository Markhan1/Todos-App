import React, { useCallback } from "react";
import "./todoList.css";
import { useEffect, useState } from "react";

import ModalDelete from "../Modal/ModalDelete/ModalDelete";
import ModalEdit from "../Modal/ModalEdit/ModalEdit";

const TodoList = () => {
  const uri = process.env.REACT_APP_SERVER_URI;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDocData, setSelectedDocData] = useState({});

  const getAllDoc = useCallback(async (signal) => {
    try {
      const response = await fetch(
        uri + "/todos",
        { signal },
        { method: "GET" }
      );
      if (!response.ok) {
        let message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return [];
      }
      const result = await response.json();
      if (result) {
        console.log(result);
        setData(result);
        return result;
      }
      return [];
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("cancelled!");
      } else {
        alert(err);
        window.alert(err);
      }
      return [];
    }
  }, [uri]);

  async function deleteOneDoc(id) {
    try {
      let path = `${uri}/todos/${id}`;
      console.log(path);
      const response = await fetch(path, { method: "DELETE" });
      if (!response.ok) {
        let message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return null;
      }
      const result = await response.json();
      console.log(result);
      window.alert("Successfully deleted one document.");
      getAllDoc();
      return result;
    } catch (err) {
      alert(err);
      window.alert(err);
      return null;
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getAllDoc(signal);
    return () => {
      controller.abort();
    };
  }, [getAllDoc]);

  return (
    <>
      {openEditModal && (
        <ModalEdit
          setOpenModal={setOpenEditModal}
          currentDocData={selectedDocData}
          getAllDoc={getAllDoc}
          index={selectedIndex}
        />
      )}
      {openDeleteModal && (
        <ModalDelete
          setOpenModal={setOpenDeleteModal}
          id={selectedId}
          index={selectedIndex}
          deleteOneDoc={deleteOneDoc}
          setData={setData}
        />
      )}
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th className="text">Text</th>
            <th>Status</th>
            <th className="tags">Tags</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{element.name}</td>
                <td className="text">{element.text}</td>
                <td>{element.status}</td>
                <td className="tags">
                  {element.tags.map((element) => {
                    return element + ", ";
                  })}
                </td>
                <td>{element.date}</td>
                <td>
                  <div className="actionBtns">
                    <button
                      id="editBtn"
                      onClick={() => {
                        setSelectedDocData(element);
                        setSelectedIndex(index);
                        setOpenEditModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => {
                        setSelectedIndex(index);
                        setSelectedId(element._id);
                        setOpenDeleteModal(true);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;
