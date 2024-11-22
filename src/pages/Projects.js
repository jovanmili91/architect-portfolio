// Projects.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { Helmet } from 'react-helmet';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched Project List:", projectList); // Log fetched data
      setProjects(projectList);
      console.log("Projects State After Set:", projectList); // Log state immediately
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
      <div>
      {projects.map((project, index) => {
  console.log(`Project ${index}:`, project);
  return (
    <div key={project.id}>
      <h2>{project.title || "Untitled Project"}</h2>
      <p>{project.description || "No description available"}</p>
      <img src={project.imageURL || "/placeholder-image.jpg"} alt={project.title || "Untitled"} />
    </div>
  );
})}

</div>

      <h1>Our Projects</h1>
    </div>
  );
};

export default Projects;
