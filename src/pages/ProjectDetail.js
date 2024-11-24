// ProjectDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa"; // Za bolji ikonu za povratak
import parse from "html-react-parser"; // Import funkcije parse

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = doc(db, "projects", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProject({
            id: docSnap.id,
            title: data.title?.trim() || "Bez Naslova",
            description: data.description || "Bez Opisa",
            imageURL: data.imageURL || "",
            location: data.location || "Nepoznato",
            architect: data.architect || "Nije navedeno",
            yearBuilt: data.yearBuilt || "Nije navedeno",
            category: data.category || "Opšte",
            // Dodajte više polja po potrebi
          });
        } else {
          setError("Projekat nije pronađen.");
        }
      } catch (err) {
        console.error(err);
        setError("Nije moguće učitati projekat. Molimo pokušajte kasnije.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Učitavanje projekta...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{project.title} | Portfolio Arhitekta</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        <meta
          property="og:image"
          content={project.imageURL || "/default-image.jpg"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          name="keywords"
          content={`arhitektura, ${project.title}, ${project.category}, ${project.location}`}
        />
        <meta name="author" content="Portfolio Arhitekta" />
        {/* Dodajte više meta tagova po potrebi */}
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        {/* Dugme za povratak */}
        <button
          onClick={() => navigate("/projekti-kuce")}
          className="mb-6 text-blue-500 hover:text-blue-600 hover:underline flex items-center transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Povratak na Projekte
        </button>

        {/* Sadržaj Kontejnera */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Slika Projekta */}
          {project.imageURL ? (
            <div className="w-full">
              <img
                src={project.imageURL}
                alt={project.title}
                className="w-full h-64 sm:h-80 md:h-96 object-contain bg-gray-200"
              />
            </div>
          ) : (
            <div className="w-full h-64 sm:h-80 md:h-96 flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Slika nije dostupna</span>
            </div>
          )}

          {/* Detalji Projekta */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>

            {/* Parsirani Opis */}
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              {parse(project.description)}
            </div>

            {/* Dodatne Informacije */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Detalji</h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Lokacija:</strong> {project.location}
                </li>
                <li>
                  <strong>Arhitekta:</strong> {project.architect}
                </li>
                <li>
                  <strong>Godina Izgradnje:</strong> {project.yearBuilt}
                </li>
                <li>
                  <strong>Kategorija:</strong> {project.category}
                </li>
              </ul>
            </div>

            {/* Poziv na Akciju */}
            <div className="mt-8">
              <button
                onClick={() =>
                  alert("Kontaktirajte nas za više informacija! 062 277 686")
                }
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Kontaktirajte Nas
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
