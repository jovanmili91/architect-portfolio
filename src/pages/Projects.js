// Projects.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Helmet } from 'react-helmet';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => doc.data());
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  return (
    <div>
        {/* React Helmet for SEO Optimization */}
      <Helmet>
        <title>Projects - Architect Portfolio</title>
        <meta name="description" content="Discover our architectural projects, including detailed plans and high-quality images. Our portfolio showcases a variety of creative and innovative designs." />
        <meta name="keywords" content="architecture, projects, house designs, building plans, architect portfolio" />
      </Helmet>
      {projects.map(project => (
        <div key={project.id}>
          <img src={project.imageURL} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {/* Link to detailed plans if available */}
        </div>
      ))}
      <h1>Our Projects</h1>
    </div>
  );
};

export default Projects;
