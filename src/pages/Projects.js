import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const projectList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title?.trim() || "No Title",
            description: data.description || "No Description",
            imageURL: data.imageURL || "",
          };
        });
        setProjects(projectList);
      } catch (err) {
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-500 mt-10">Loading projects...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Projects - Architect Portfolio</title>
      </Helmet>
      <div className="max-w-7xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Architectural Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {project.imageURL ? (
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">No image available</p>
                </div>
              )}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
