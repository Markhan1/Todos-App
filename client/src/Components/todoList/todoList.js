import React, { useEffect } from "react";
import "./todoList.css";

const TodoList = ({
  setOpenDeleteModal,
  data,
  setSelectedIndex,
  setSelectedId,
  setSelectedDocData,
  setOpenEditModal,
  getAllDoc,
}) => {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getAllDoc(signal);
    return () => {
      controller.abort();
    };
  }, [getAllDoc]);

  return (
    <div className="doc-table">
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th className="th-text">Text</th>
            <th>Status</th>
            <th className="th-tags">Tags</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="index">{index}</div>
                </td>
                <td>
                  <div className="name">{element.name}</div>
                </td>
                <td>
                  <div className="text">{element.text}</div>
                </td>
                <td>
                  <div className="status">{element.status}</div>
                </td>
                <td>
                  <div className="tags">
                    {element.tags.map((element) => {
                      return element + ", ";
                    })}
                  </div>
                </td>
                <td>
                  <div className="date">{element.date}</div>
                </td>
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
    </div>
  );
};
export default TodoList;
