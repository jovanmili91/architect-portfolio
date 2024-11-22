import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa"; // For a better back icon

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
            title: data.title?.trim() || "No Title",
            description: data.description || "No Description",
            imageURL: data.imageURL || "",
            location: data.location || "Unknown",
            architect: data.architect || "Not Specified",
            yearBuilt: data.yearBuilt || "Not Provided",
            category: data.category || "General",
            // Add more fields as needed
          });
        } else {
          setError("Project not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load project. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Loading project...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>{project.title} | Your Portfolio</title>
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
          content={`architecture, ${project.title}, ${project.category}, ${project.location}`}
        />
        <meta name="author" content="Your Portfolio" />
        {/* Add more meta tags as necessary */}
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-blue-500 hover:text-blue-600 hover:underline flex items-center transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </button>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Project Image */}
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
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}

          {/* Project Details */}
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Additional Information */}
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Location:</strong> {project.location}
                </li>
                <li>
                  <strong>Architect:</strong> {project.architect}
                </li>
                <li>
                  <strong>Year Built:</strong> {project.yearBuilt}
                </li>
                <li>
                  <strong>Category:</strong> {project.category}
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-8">
              <button
                onClick={() => alert("Contact Us for More Info! 062 277 686")}
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Contact Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
