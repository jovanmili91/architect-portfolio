// src/components/IntroductionSection.js
import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/optimized/hero-image.webp";

const IntroductionSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={heroImage}
            alt="Naš Rad"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 md:pl-12"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            O Našem Radu
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sa godinama iskustva i timom veštih arhitekata, pretvaramo
            vizionarske koncepte u stvarnost. Od stambenih prostora do
            komercijalnih objekata, težimo ka praktičnim rešenjima za Vaš
            životni i radni prostor.
          </p>
          <motion.a
            href="/o-nama"
            className="text-blue-500 font-semibold hover:underline"
            whileHover={{ color: "#2563EB" }}
          >
            Saznajte Više o Nama
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroductionSection;
