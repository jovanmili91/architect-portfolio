// src/pages/Blog.js

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useWindowWidth } from "@react-hook/window-size";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const windowWidth = useWindowWidth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "blogPosts");
        const q = query(postsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const postsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postsList);
      } catch (err) {
        console.error("Greška pri učitavanju blog postova:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Blog | Projekti Kuća i Projekat Kuće</title>
        <meta
          name="description"
          content="Pročitajte najnovije članke i uvide našeg tima o projektima kuća i arhitektonskim rešenjima."
        />
      </Helmet>

      {/* Sekcija Naslova */}
      <section className="relative bg-gray-800 text-white py-20">
        {windowWidth >= 640 && (
          <div className="absolute inset-0">
            <img
              src="/assets/blog-header.jpg" // Uverite se da imate ovu sliku u public/assets folderu
              alt="Naslov Bloga"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Naš Blog
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Uvidi, priče i novosti iz sveta projekata kuća i arhitekture
          </motion.p>
        </div>
      </section>

      {/* Sekcija Blog Postova */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <p className="text-center text-gray-500">
              Učitavanje blog postova...
            </p>
          ) : error ? (
            <p className="text-center text-red-500">
              Neuspešno učitavanje blog postova. Molimo pokušajte ponovo
              kasnije.
            </p>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <motion.div
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      {post.imageURL ? (
                        <img
                          src={post.imageURL}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                          <p className="text-gray-600">Slika nije dostupna</p>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <span className="text-blue-500 font-semibold">
                          Pročitajte više →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Opcionalno: Paginacija ili Dugme za Učitavanje Više */}
              {/* Dodajte paginaciju ako imate mnogo postova */}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
