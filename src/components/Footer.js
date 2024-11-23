import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Add state for controlled input

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://subscribe-f52ied62eq-uc.a.run.app",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (response.ok) {
        alert("Subscription successful!");
        navigate("/subscription-success");
      } else {
        const errorData = await response.text();
        console.error("Subscription failed:", errorData);
        alert("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <section aria-labelledby="footer-about">
          <h3 id="footer-about" className="text-xl font-semibold mb-4">
            O Nama
          </h3>
          <p className="text-gray-400">
            Arhitektonski biro, specijalizovani smo za kreiranje inovativnih
            arhitektonskih dizajna, projekata kuća koji kombinuju estetiku sa
            funkcionalnošću. Naš iskusni tim arhitekata posvećen je pružanju
            održivih i modernih struktura prilagođenih vašoj jedinstvenoj
            viziji.
          </p>
        </section>

        {/* Quick Links Section */}
        <nav aria-labelledby="footer-navigation">
          <h3 id="footer-navigation" className="text-xl font-semibold mb-4">
            Brzi Linkovi
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Početna
              </Link>
            </li>
            <li>
              <Link
                to="/o-nama"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                O Nama
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/projekti-kuce"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Projekti Kuća
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Section */}
        <section aria-labelledby="footer-contact">
          <h3 id="footer-contact" className="text-xl font-semibold mb-4">
            Kontaktirajte Nas
          </h3>
          <address className="not-italic">
            <p className="flex items-center text-gray-400 mb-2">
              <FaPhoneAlt className="mr-2" aria-hidden="true" /> +381 62 277 686
            </p>
            <p className="flex items-center text-gray-400 mb-2">
              <FaEnvelope className="mr-2" aria-hidden="true" />{" "}
              <a
                href="mailto:jovanproart@gmail.com"
                className="hover:underline"
              >
                jovanproart@gmail.com
              </a>
            </p>
            <p className="flex items-center text-gray-400 mb-4">
              <FaMapMarkerAlt className="mr-2" aria-hidden="true" /> Ulica
              Vojvode Mišića 29b, Paraćin, 35250
            </p>
            <div
              className="flex space-x-4"
              aria-label="Linkovi za Društvene Mreže"
            >
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Twitter"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href=""
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

        {/* Newsletter Section */}
        <section aria-labelledby="footer-newsletter">
          <h3 id="footer-newsletter" className="text-xl font-semibold mb-4">
            Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Pretplatite se na naš newsletter kako biste primali najnovije
            informacije i ekskluzivne ponude.
          </p>
          <div className="flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email Adresa
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Vaš email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Controlled input
              className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="button" // Change type to "button"
              onClick={handleSubmit} // Attach event handler here
              className="px-4 py-2 bg-blue-600 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
            >
              Pretplati se
            </button>
          </div>
        </section>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Projekti Kuća Arhitekta. Sva prava
        zadržana.
      </div>
    </footer>
  );
};

export default Footer;
