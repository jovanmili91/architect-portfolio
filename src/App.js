// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import BackToTop from "./components/BackToTop"; // Import BackToTop
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // Import ProjectDetail
import Contact from "./pages/Contact";
import About from "./components/About"; // Import About
import Blog from "./pages/Blog"; // Import Blog
import BlogDetail from "./pages/BlogDetail"; // Import BlogDetail
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          {/* To prevent content being hidden behind navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* Add About Route */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> {/* Add Blog Route */}
            <Route path="/blog/:id" element={<BlogDetail />} />{" "}
            {/* Add BlogDetail Route */}
            <Route path="*" element={<NotFound />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
        <Footer /> {/* Add Footer here */}
        <BackToTop /> {/* Add BackToTop here */}
      </div>
    </Router>
  );
};

export default App;
