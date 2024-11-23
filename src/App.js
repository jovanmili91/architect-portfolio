// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Uvezi Footer
import BackToTop from "./components/BackToTop"; // Uvezi BackToTop
import ScrollToTop from "./components/ScrollToTop"; // Uvezi ScrollToTop
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail"; // Uvezi ProjectDetail
import Contact from "./pages/Contact";
import About from "./components/About"; // Uvezi About
import Blog from "./pages/Blog"; // Uvezi Blog
import BlogDetail from "./pages/BlogDetail"; // Uvezi BlogDetail
import NotFound from "./components/NotFound";
import SubscriptionSuccess from "./components/SubscriptionSuccess";

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Dodaj ScrollToTop ovde */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          {/* Da se spreči sakrivanje sadržaja iza navigacije */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-nama" element={<About />} />{" "}
            {/* Dodaj About rutu */}
            <Route path="/projekti-kuce" element={<Projects />} />
            <Route path="/projekti-kuce/:id" element={<ProjectDetail />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> {/* Dodaj Blog rutu */}
            <Route path="/blog/:id" element={<BlogDetail />} />{" "}
            {/* Dodaj BlogDetail rutu */}
            <Route path="*" element={<NotFound />} />
            {/* Dodaj ostale rute po potrebi */}
            <Route
              path="/subscription-success"
              component={SubscriptionSuccess}
            />
          </Routes>
        </div>
        <Footer /> {/* Dodaj Footer ovde */}
        <BackToTop /> {/* Dodaj BackToTop ovde */}
      </div>
    </Router>
  );
};

export default App;
