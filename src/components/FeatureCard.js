// src/components/FeatureCard.js
import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ Icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="text-blue-500 text-4xl mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
