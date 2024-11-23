// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Zatvoriti meni kada se prozor promeni veličinu na desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          Projekti Kuća - Portfolio Projekata kuća
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg text-gray-700 hover:text-blue-500">
            Početna
          </Link>
          <Link
            to="/projekti-kuce"
            className="text-lg text-gray-700 hover:text-blue-500"
          >
            Projekti Kuća
          </Link>
          <Link
            to="/blog"
            className="text-lg text-gray-700 hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            to="/o-nama"
            className="text-lg text-gray-700 hover:text-blue-500"
          >
            O Nama
          </Link>
          <Link
            to="/kontakt"
            className="text-lg text-gray-700 hover:text-blue-500"
          >
            Kontakt
          </Link>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none z-60" // Sada je z-60 definisano
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Zatvori meni" : "Otvori meni"} // Labela za pristupačnost
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[rgba(255,255,255,0.6)] backdrop-blur-md shadow-lg animate-fade-in z-40 flex flex-col items-center justify-center space-y-4"
          >
            <Link
              to="/"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Početna
            </Link>
            <Link
              to="/projekti-kuce"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Projekti Kuća
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/o-nama"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              O Nama
            </Link>
            <Link
              to="/kontakt"
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Kontakt
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
