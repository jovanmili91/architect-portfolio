// src/pages/BlogDetail.js

import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const docRef = doc(db, "blogPosts", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="py-20">
        <p className="text-center text-gray-500">Loading blog post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="py-20">
        <p className="text-center text-red-500">
          Failed to load the blog post. Please try again later.
        </p>
        <div className="text-center mt-4">
          <Link
            to="/blog"
            className="text-blue-500 hover:underline font-semibold"
          >
            Nazad na Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{post.title} | Architect Portfolio</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      {/* Blog Header */}
      <section className="relative bg-gray-800 text-white py-20">
        {post.imageURL && (
          <div className="absolute inset-0">
            <img
              src={post.imageURL}
              alt={post.title}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent"></div>
          </div>
        )}

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {post.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="text-blue-500 hover:underline font-semibold"
          >
            ← Nazad na Blog
          </Link>

          <div className="mb-6 my-4">
            <span className="text-gray-500 text-sm">
              By {post.author || "Unknown Author"} on{" "}
              {post.createdAt
                ? new Date(post.createdAt.seconds * 1000).toLocaleDateString()
                : "Unknown Date"}
            </span>
          </div>
          <motion.div
            className="prose max-w-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Assuming 'content' is HTML or markdown */}
            {/* If using markdown, consider using a library like react-markdown */}
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-gray-700 leading-relaxed"
            />
          </motion.div>
          <div className="mt-8">
            <Link
              to="/blog"
              className="text-blue-500 hover:underline font-semibold"
            >
              ← Nazad na Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
