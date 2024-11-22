import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Helmet } from "react-helmet";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectList);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  return (
    <div>
      {/* React Helmet for SEO Optimization */}
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
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={project.imageURL} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
