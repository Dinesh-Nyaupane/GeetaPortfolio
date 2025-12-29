import React, { useEffect, useState } from "react";
import { FaTimes, FaHeartbeat, FaCalendar, FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const BlogModal = ({ blog, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!blog) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl max-w-3xl w-full overflow-y-auto max-h-[90vh] shadow-2xl relative"
          initial={{ scale: 0.8, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Background */}
          <div className="bg-gradient-to-r from-primary via-secondary to-primary h-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 right-10 text-6xl">💗</div>
              <div className="absolute bottom-4 left-10 text-5xl">📝</div>
            </div>
          </div>

          {/* Close Button */}
          <motion.button
            className="absolute top-6 right-6 z-10 p-2 bg-white rounded-full shadow-lg text-gray-700 hover:text-primary hover:bg-primary-50 transition-all"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTimes size={20} />
          </motion.button>

          {/* Content */}
          <div className="p-8 md:p-12">
            {loading ? (
              <motion.div
                className="flex justify-center items-center h-64"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="relative">
                  <FaHeartbeat className="text-primary text-5xl animate-heartbeat" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h2>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center text-gray-700">
                    <FaCalendar className="text-primary mr-3" size={18} />
                    <span>{formatDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaUser className="text-primary mr-3" size={18} />
                    <span>Gita Banjade</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FaHeartbeat className="text-primary mr-3" size={18} />
                    <span>Healthcare Experience</span>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-800 leading-relaxed whitespace-pre-line font-sans text-base md:text-lg">
                    {blog.content}
                  </div>
                </div>

                {/* Footer */}
                <motion.div
                  className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-sm text-gray-600">
                    ✨ Thank you for reading my story
                  </div>
                  <motion.button
                    className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                    onClick={onClose}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BlogModal;
