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
        console.error("Error fetching blog posts:", err);
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
        <title>Blog | Architect Portfolio</title>
        <meta
          name="description"
          content="Read the latest articles and insights from our architecture team."
        />
      </Helmet>

      {/* Header Section */}
      <section className="relative bg-gray-800 text-white py-20">
        {windowWidth >= 640 && (
          <div className="absolute inset-0">
            <img
              src="/assets/blog-header.jpg" // Ensure you have this image in your public/assets folder
              alt="Blog Header"
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
            Our Blog
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Insights, Stories, and Updates from Our Architectural Team
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading blog posts...</p>
          ) : error ? (
            <p className="text-center text-red-500">
              Failed to load blog posts. Please try again later.
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
                          <p className="text-gray-600">No image available</p>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <span className="text-blue-500 font-semibold">
                          Read More →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Optional: Pagination or Load More Button */}
              {/* Add pagination here if you have many posts */}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
