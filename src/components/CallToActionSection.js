// src/components/CallToActionSection.js
import React from "react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="bg-blue-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Spremni da Počnete Vaš Projekat?
        </h2>
        <p className="mb-6">
          Dozvolite nam da vam pomognemo da vašu arhitektonsku viziju pretvorite
          u stvarnost.
        </p>
        <motion.a
          href="/kontakt"
          className="bg-white text-blue-500 py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
          whileHover={{ scale: 1.05 }}
        >
          Kontaktirajte Nas Danas
        </motion.a>
      </div>
    </section>
  );
};

export default CallToActionSection;
