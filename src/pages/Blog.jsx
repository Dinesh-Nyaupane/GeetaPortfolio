import React from "react";
import BlogCard from "../components/BlogCard";
import { blogs } from "../data/blog";
import { motion } from "framer-motion";
import { FaBookOpen } from "react-icons/fa";

const Blog = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="blog" className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <FaBookOpen className="text-primary text-4xl mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold">
              My <span className="text-primary">Stories</span> & Experiences
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring my journey as a nurse, my experiences in Nepal and UAE, personal growth, and the lessons learned along the way
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog, index) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-lg">
            More stories coming soon... 📚
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
