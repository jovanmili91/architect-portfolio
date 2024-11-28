// src/components/TestimonialsSection.js
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Njihova pažnja prema detaljima i inovativni dizajni transformisali su naš radni prostor u nešto zaista izvanredno.",
    author: "Jovana Petrović",
  },
  {
    text: "Profesionalan i kreativan tim! Bez problema su ostvarili našu viziju.",
    author: "Ivan Petrović",
  },
  {
    text: "Izuzetna usluga i odlični rezultati. Toplo preporučujem njihovu arhitektonsku stručnost.",
    author: "Lazar Marković",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
          Šta Naši Klijenti Kažu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <h4 className="text-lg font-semibold text-gray-800">
                - {testimonial.author}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
