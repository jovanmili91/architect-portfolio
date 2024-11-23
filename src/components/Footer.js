// src/components/Footer.js

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt, // Added for address icon
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <section aria-labelledby="footer-about">
          <h3 id="footer-about" className="text-xl font-semibold mb-4">
            About Us
          </h3>
          <p className="text-gray-400">
            At Architect Portfolio, we specialize in creating innovative
            architectural designs that blend aesthetics with functionality. Our
            experienced team of architects is dedicated to delivering
            sustainable and modern structures tailored to your unique vision.
          </p>
        </section>

        {/* Quick Links Section */}
        <nav aria-labelledby="footer-navigation">
          <h3 id="footer-navigation" className="text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Information Section */}
        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="text-xl font-semibold mb-4">
            Contact Us
          </h3>
          <address className="not-italic">
            <p className="flex items-center text-gray-400 mb-2">
              <FaPhoneAlt className="mr-2" aria-hidden="true" /> +1 (234)
              567-890
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <FaEnvelope className="mr-2" aria-hidden="true" />{" "}
              <a
                href="mailto:info@architectportfolio.com"
                className="hover:underline"
              >
                info@architectportfolio.com
              </a>
            </p>
            <p className="flex items-center text-gray-400 mb-4">
              <FaMapMarkerAlt className="mr-2" aria-hidden="true" /> 1234
              Architecture Lane, Design City, DC 56789
            </p>
            <div className="flex space-x-4" aria-label="Social Media Links">
              <motion.a
                href="https://facebook.com/architectportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="https://twitter.com/architectportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com/architectportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/architectportfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </motion.a>
            </div>
          </address>
        </section>

        {/* Newsletter Subscription Section */}
        <section aria-labelledby="footer-newsletter">
          <h3 id="footer-newsletter" className="text-xl font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to receive the latest updates and
            exclusive offers.
          </p>
          <form className="flex" action="/subscribe" method="POST">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Your email"
              required
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>

      {/* Footer Bottom with Structured Data */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Architect Portfolio. All rights
        reserved.
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Architect Portfolio",
            "image": "https://www.architectportfolio.com/logo.png",
            "@id": "",
            "url": "https://www.architectportfolio.com",
            "telephone": "+1-234-567-890",
            "email": "info@architectportfolio.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Architecture Lane",
              "addressLocality": "Design City",
              "addressRegion": "DC",
              "postalCode": "56789",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.facebook.com/architectportfolio",
              "https://www.twitter.com/architectportfolio",
              "https://www.instagram.com/architectportfolio",
              "https://www.linkedin.com/company/architectportfolio"
            ]
          }
        `}
      </script>
    </footer>
  );
};

export default Footer;
