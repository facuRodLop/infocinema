import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-this-project" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
