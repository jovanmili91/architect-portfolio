// src/components/MissionVisionSection.js
import React from "react";
import { motion } from "framer-motion";

const MissionVisionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Misija */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Naša Misija
            </h3>
            <p className="text-gray-700">
              Naša misija je da pružimo izuzetna arhitektonska rešenja koja ne
              samo da ispunjavaju potrebe klijenata već i inspirišu i traju.
              Kreiramo prostore koji su funkcionalni i estetski privlačni, uz
              dugoročnu održivost.
            </p>
          </motion.div>
          {/* Vizija */}
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Naša Vizija
            </h3>
            <p className="text-gray-700">
              Naša vizija je da budemo vodeća arhitektonska kompanija prepoznata
              po inovativnom dizajnu, održivosti i izvrsnosti u radu sa
              klijentima. Oblikujemo horizonte budućnosti sa kreativnošću i
              integritetom.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
