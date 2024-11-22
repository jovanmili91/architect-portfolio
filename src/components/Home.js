// Home.js
import React, { useEffect, useState } from "react";
import { FaProjectDiagram, FaHandshake, FaLeaf } from "react-icons/fa"; // Added FaLeaf for sustainability
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Helmet } from "react-helmet-async";
import { db } from "../firebaseConfig"; // Import Firebase Firestore
import { collection, query, limit, getDocs } from "firebase/firestore";
import heroImage from "../assets/hero-image.jpg"; // Ensure you have this image in your assets
import parallaxImage from "../assets/parallax-image.jpg"; // Add a relevant image
import FeatureCard from "./FeatureCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [latestProjects, setLatestProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const projectsRef = collection(db, "projects");
        const q = query(projectsRef, limit(3)); // Remove the orderBy clause
        const querySnapshot = await getDocs(q);

        console.log("Query Snapshot:", querySnapshot.size); // Log the size of results

        const projectsList = querySnapshot.docs.map((doc) => {
          console.log("Project Data:", doc.data()); // Log each project's data
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title?.trim() || "No Title",
            description: data.description || "No Description",
            imageURL: data.imageURL || "",
          };
        });

        setLatestProjects(projectsList);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load latest projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProjects();
  }, []);

  const handleProjectClick = (id) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div>
      <Helmet>
        <title>Architect Portfolio</title>
        {/* Add other meta tags as needed */}
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Architectural design"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Architect Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Showcasing the finest architectural designs and innovative projects.
          </motion.p>
          <motion.a
            href="/projects"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Our Projects
          </motion.a>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Portfolio
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">
              Loading latest projects...
            </p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {latestProjects.map((project) => (
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
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                      <p className="text-gray-600">No image available</p>
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
                href="/projects"
                className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                View All Projects
              </motion.a>
            </div>
          )}
        </div>
      </section>

      {/* Parallax Section */}
      <Parallax bgImage={parallaxImage} strength={500}>
        <section className="h-96 flex items-center justify-center">
          <motion.h2
            className="text-4xl md:text-5xl text-white font-bold bg-black bg-opacity-50 px-4 py-2 rounded"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Crafting Spaces with Precision and Passion
          </motion.h2>
        </section>
      </Parallax>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={heroImage}
              alt="Our Work"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              About Our Work
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              With years of experience and a team of skilled architects, we
              bring visionary concepts to life. From residential spaces to
              commercial landmarks, we strive to deliver excellence in every
              project.
            </p>
            <motion.a
              href="/about"
              className="text-blue-500 font-semibold hover:underline"
              whileHover={{ color: "#2563EB" }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              Icon={FaProjectDiagram}
              title="Innovative Design"
              description="Creating cutting-edge designs that blend functionality with aesthetics."
            />
            <FeatureCard
              Icon={FaHandshake}
              title="Client Collaboration"
              description="Working closely with clients to ensure their vision is realized."
            />
            <FeatureCard
              Icon={FaLeaf}
              title="Sustainable Solutions"
              description="Implementing eco-friendly practices for a greener future."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="mb-6">
            Let us help you turn your architectural vision into reality.
          </p>
          <motion.a
            href="/contact"
            className="bg-white text-blue-500 py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us Today
          </motion.a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Their attention to detail and innovative designs transformed
                our workspace into something truly remarkable."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - Jane Doe
              </h4>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Professional and creative team! They brought our vision to life
                seamlessly."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - John Smith
              </h4>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
              whileHover={{
                y: -10,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-700 mb-4">
                "Exceptional service and outstanding results. Highly recommend
                their architectural expertise."
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                - Emily Johnson
              </h4>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
