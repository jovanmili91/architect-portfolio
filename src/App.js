// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // Import ProjectDetail
import Contact from "./pages/Contact";
import About from "./components/About"; // Import About
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        {/* To prevent content being hidden behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> {/* Add About Route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
