import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </Router>
  );
}

export default App;
