// src/components/About.js

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLightbulb, FaAward } from "react-icons/fa";
import { Parallax } from "react-parallax"; // Import Parallax
import aboutImage from "../assets/about-image.jpg"; // Ensure you have an appropriate image
import parallaxImage from "../assets/parallax-image.jpg"; // Ensure you have a parallax image
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="bg-gray-50 py-16">
      <Helmet>
        <title>About Us | Architect Portfolio</title>
        <meta
          name="description"
          content="Learn more about [Your Company Name], our mission, vision, and the dedicated team behind our innovative architectural designs."
        />
        <meta property="og:title" content="About Us | Architect Portfolio" />
        <meta
          property="og:description"
          content="Discover our journey, mission, and the talented team that makes our architectural projects exceptional."
        />
        <meta property="og:image" content={parallaxImage} />
        <meta property="og:type" content="website" />
        {/* Add more meta tags as needed */}
      </Helmet>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          At [Your Company Name], we are dedicated to transforming spaces
          through innovative design and sustainable practices. Our team of
          experienced architects and designers work collaboratively to bring
          your vision to life.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-64 sm:h-80 md:h-96 lg:h-auto object-cover rounded-lg shadow-lg"
            loading="lazy" // Lazy load the image for better performance
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To deliver exceptional architectural solutions that not only meet
            our clients' needs but also inspire and endure. We believe in
            creating spaces that are both functional and aesthetically pleasing,
            ensuring longevity and sustainability.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            To be a leading architecture firm recognized for innovative designs,
            sustainability, and excellence in client service. We aim to shape
            the skylines of tomorrow with creativity and integrity.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaLightbulb className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Innovative Design
              </h4>
              <p className="text-gray-600">
                Pioneering creative solutions that blend functionality with
                aesthetics.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaUsers className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Collaborative Team
              </h4>
              <p className="text-gray-600">
                A diverse team working together to achieve exceptional results.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaAward className="text-blue-500 text-4xl mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Award-Winning
              </h4>
              <p className="text-gray-600">
                Recognized for excellence in design and sustainability
                practices.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Parallax Section */}
      <Parallax bgImage={parallaxImage} strength={500}>
        <div style={{ height: 400 }}>
          <div className="flex items-center justify-center h-full">
            <h2 className="text-5xl font-bold text-white text-center px-4">
              Our Commitment to Excellence
            </h2>
          </div>
        </div>
      </Parallax>

      {/* Video Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h3
            className="text-3xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Our Journey
          </motion.h3>
          <motion.video
            className="w-full rounded-lg shadow-lg"
            controls
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </motion.video>
        </div>
      </section>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <motion.h3
          className="text-3xl font-bold text-gray-800 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Alice Johnson"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Alice Johnson
              </h4>
              <p className="text-gray-600">Chief Architect</p>
              <p className="mt-4 text-gray-600">
                Alice leads our design team with over 15 years of experience in
                creating sustainable and innovative architectural solutions.
              </p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Michael Smith"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Michael Smith
              </h4>
              <p className="text-gray-600">Senior Designer</p>
              <p className="mt-4 text-gray-600">
                Michael specializes in modern design aesthetics, ensuring each
                project is both functional and visually stunning.
              </p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/400x300"
              alt="Sophia Lee"
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800">
                Sophia Lee
              </h4>
              <p className="text-gray-600">Project Manager</p>
              <p className="mt-4 text-gray-600">
                Sophia ensures that all projects are delivered on time and
                within budget, maintaining the highest standards of quality.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
