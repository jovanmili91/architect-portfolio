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
        console.log("Fetching projects from Firestore...");
        const querySnapshot = await getDocs(collection(db, "projects"));
        console.log("Raw QuerySnapshot:", querySnapshot);

        const projectList = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title:
              data.title && data.title.trim() ? data.title.trim() : "No Title",
            description: data.description || "No Description",
            imageURL: data.imageURL || "",
          };
        });

        console.log("Final Project List for Rendering:", projectList);
        setProjects(projectList);
        console.log("Updated Projects State:", projectList);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Projects - Architect Portfolio</title>
        <meta
          name="description"
          content="Discover our architectural projects, including detailed plans and high-quality images. Our portfolio showcases a variety of creative and innovative designs."
        />
        <meta
          name="keywords"
          content="architecture, projects, house designs, building plans, architect portfolio"
        />
      </Helmet>
      <div>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {project.imageURL ? (
                <img
                  src={project.imageURL}
                  alt={project.title}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : (
                <p>No image available.</p>
              )}
            </div>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
