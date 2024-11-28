// src/components/PortfolioSection.js
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PortfolioSection = ({ projects, loading, error }) => {
  const navigate = useNavigate();

  const handleProjectClick = (id) => {
    navigate(`/projekti-kuce/${id}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-12">
          Naš Portfolio
        </h2>

        {loading ? (
          <p className="text-center text-gray-500">
            Učitavanje najnovijih projekata...
          </p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProjectClick(project.id)}
              >
                {project.imageURL ? (
                  <img
                    src={project.imageURL}
                    alt={project.title}
                    className="w-full h-64 sm:h-48 md:h-64 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-64 sm:h-48 md:h-64 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-600">Nema dostupne slike</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && !error && (
          <div className="text-center mt-12">
            <motion.a
              href="/projekti-kuce"
              className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Vidi Sve Projekte
            </motion.a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
