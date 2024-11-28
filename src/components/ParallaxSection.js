// src/components/ParallaxSection.js
import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import parallaxImage from "../assets/optimized/parallax-image.webp";
import { useWindowWidth } from "@react-hook/window-size";

const ParallaxSection = () => {
  const windowWidth = useWindowWidth();

  return windowWidth >= 640 ? (
    <div className="relative z-0">
      <Parallax bgImage={parallaxImage} strength={500}>
        <section className="h-96 flex items-center justify-center">
          <motion.h2
            className="text-4xl md:text-5xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Kreiramo Prostore sa Preciznošću i Strašću
          </motion.h2>
        </section>
      </Parallax>
    </div>
  ) : (
    <section
      className="h-64 flex items-center justify-center bg-gray-800 bg-cover bg-center"
      style={{ backgroundImage: `url(${parallaxImage})` }} // Statična pozadinska slika
    >
      <motion.h2
        className="text-1xl sm:text-1xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Kreiramo Prostore sa Preciznošću i Strašću
      </motion.h2>
    </section>
  );
};

export default ParallaxSection;
