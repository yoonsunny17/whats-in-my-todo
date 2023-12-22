import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { List } from "./pages/List";

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
}

export default App;
