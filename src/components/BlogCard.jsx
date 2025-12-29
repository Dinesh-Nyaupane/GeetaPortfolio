import React, { useState } from "react";
import { FaCalendar, FaArrowRight } from "react-icons/fa";
import BlogModal from "./BlogModal";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <>
      <motion.div
        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col h-full border border-gray-100"
        onClick={() => setIsOpen(true)}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Card Header with Icon */}
        <div className="relative bg-gradient-to-r from-primary-50 to-secondary-50 h-24 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
            <div className="text-primary text-6xl opacity-50">📖</div>
          </div>
          <div className="relative z-10 text-center">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 px-4">
              {blog.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Date */}
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <FaCalendar size={14} className="text-primary mr-2" />
            <span>{formatDate(blog.date)}</span>
          </div>

          {/* Excerpt */}
          <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Read More Button */}
          <motion.button
            className="inline-flex items-center text-primary font-semibold hover:text-primary-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            Read More
            <FaArrowRight size={14} className="ml-2" />
          </motion.button>
        </div>

        {/* Bottom Border Accent */}
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </motion.div>

      {isOpen && <BlogModal blog={blog} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default BlogCard;
