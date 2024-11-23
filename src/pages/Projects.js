// Projects.js
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title?.trim() || "Bez Naslova",
            description: data.description || "Bez Opisa",
            imageURL: data.imageURL || "",
          };
        });
        setProjects(projectList);
      } catch (err) {
        console.error(err);
        setError("Nije moguće učitati projekte. Molimo pokušajte kasnije.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/projekti-kuce/${id}`);
  };

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Učitavanje projekata...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Projekti Kuća</title>
        <meta
          name="description"
          content="Pregledajte naše projekte kuća. Inovativni dizajni i održiva rešenja za vaš dom."
        />
        {/* Dodajte druge meta tagove po potrebi */}
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8">
          Naši Projekti Kuća
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden bg-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              {project.imageURL ? (
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-56 sm:h-48 object-cover cursor-pointer"
                  loading="lazy"
                  onClick={() => handleProjectClick(project.id)}
                />
              ) : (
                <div
                  className="w-full h-56 sm:h-48 bg-gray-300 flex items-center justify-center cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <p className="text-gray-600">Slika nije dostupna</p>
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => handleProjectClick(project.id)}
                >
                  Saznajte Više
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
