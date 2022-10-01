import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./Components/Main/Main";
import TodoList from "./Components/todoList/todoList";
import Navbar from "./Components/Navbar/Navbar";
import Create from "./Components/Create/Create";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route  path="/todos" element={<TodoList />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;
