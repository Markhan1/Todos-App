import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Components/Main/Main";
import TodoList from "./Components/todoList/todoList";
import Navbar from "./Components/Navbar/Navbar";
import Create from "./Components/Create/Create";

import AuthProvider from "./Context/AuthContext";
import PrivateOutlet from "./Components/PrivateOutlet/PrivateOutlet";
import Login from "./Components/Login/Login";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<PrivateOutlet />}>
            <Route path="/" exact element={<Main />} />
          </Route>
          <Route path="/todos" element={<PrivateOutlet />}>
            <Route path="/todos" element={<TodoList />} />
          </Route>
          <Route path="/create" element={<PrivateOutlet />}>
            <Route path="/create" element={<Create />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
