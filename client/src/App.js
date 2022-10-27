import React, { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Components/Main/Main";
import TodoList from "./Components/todoList/todoList";
import Navbar from "./Components/Navbar/Navbar";
import Create from "./Components/Create/Create";

import AuthProvider from "./Context/AuthContext";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet";
import Login from "./Components/Login/Login";
import { useLocation } from "react-router-dom";

import ModalDelete from "./Components/Modal/ModalDelete/ModalDelete";
import ModalEdit from "./Components/Modal/ModalEdit/ModalEdit";

import "./App.css";

const App = () => {
  const location = useLocation();
  const uri = process.env.REACT_APP_SERVER_URI;
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [selectedDocData, setSelectedDocData] = useState({});

  const getAllDoc = useCallback(
    async (signal) => {
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
    },
    [uri]
  );

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



  return (
    <>
      {openDeleteModal && (
        <ModalDelete
          setOpenModal={setOpenDeleteModal}
          id={selectedId}
          index={selectedIndex}
          deleteOneDoc={deleteOneDoc}
          setData={setData}
        />
      )}
      {openEditModal && (
        <ModalEdit
          setOpenModal={setOpenEditModal}
          currentDocData={selectedDocData}
          getAllDoc={getAllDoc}
          index={selectedIndex}
        />
      )}
      <div className="container">
        <AuthProvider>
          {location.pathname !== "/login" ? <Navbar /> : <h1>Todos App</h1>}
          <Routes>
            <Route path="/" element={<PrivateOutlet />}>
              <Route path="/" exact element={<Main />} />
            </Route>
            <Route path="/todos" element={<PrivateOutlet />}>
              <Route
                path="/todos"
                element={
                  <TodoList
                    setOpenDeleteModal={setOpenDeleteModal}
                    data={data}
                    setSelectedIndex={setSelectedIndex}
                    setSelectedId={setSelectedId}
                    setSelectedDocData={setSelectedDocData}
                    setOpenEditModal={setOpenEditModal}
                    getAllDoc={getAllDoc}
                  />
                }
              />
            </Route>
            <Route path="/create" element={<PrivateOutlet />}>
              <Route path="/create" element={<Create />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;
