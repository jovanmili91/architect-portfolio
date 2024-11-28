// src/components/HeroSection.js
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/optimized/hero-image.webp";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-800 text-white py-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Arhitektonski dizajn"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Dobrodošli na naš portfolio Projekata Kuća
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Prikazujemo elegantne arhitektonske dizajne i inovativne projekte
          kuća.
        </motion.p>
        <motion.a
          href="/projekti-kuce"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Istražite Naše Projekte
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
