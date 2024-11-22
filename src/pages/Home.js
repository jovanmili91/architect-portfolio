// Home.js
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Architect Portfolio
          </h1>
          <p className="text-lg mb-8">
            Showcasing the finest architectural designs and innovative projects.
          </p>
          <a
            href="/projects"
            className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Explore Our Projects
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            About Our Work
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With years of experience and a team of skilled architects, we bring
            visionary concepts to life. From residential spaces to commercial
            landmarks, we strive to deliver excellence in every project.
          </p>
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
          <a
            href="/contact"
            className="bg-white text-blue-500 py-3 px-6 rounded font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
