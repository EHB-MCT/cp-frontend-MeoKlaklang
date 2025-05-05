import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portal from "./pages/Portal"; // moet je nog aanmaken
import Duimelijntje from "./pages/Duimelijntje"; // jouw huidige verhaal

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/duimelijntje" element={<Duimelijntje />} />
      </Routes>
    </Router>
  );
}
