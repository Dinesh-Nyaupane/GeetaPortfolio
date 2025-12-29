import React from "react";
import { FaGraduationCap, FaBook, FaAward, FaCalendarAlt } from "react-icons/fa";
import { educationData } from "../data/education";
import { motion } from "framer-motion";

const Education = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="education" className="py-20 bg-white text-gray-900 relative overflow-hidden">
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
            <FaBook className="text-primary text-4xl mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold">
              My <span className="text-primary">Education</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic achievements and professional qualifications in healthcare and nursing
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 hover:border-primary-200"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary-100 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform opacity-20"></div>

              {/* Icon */}
              <motion.div
                className="p-4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl inline-block mb-6 relative z-10"
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FaGraduationCap size={32} className="text-primary" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {edu.degree}
                </h3>

                {/* Institute */}
                <div className="flex items-center text-gray-700 mb-2">
                  <FaBook size={16} className="text-primary mr-2" />
                  <span className="font-semibold">{edu.institute}</span>
                </div>

                {/* Year */}
                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt size={16} className="text-primary mr-2" />
                  <span>{edu.year}</span>
                </div>

                {/* Grade/Additional Info */}
                {edu.grade && (
                  <div className="bg-primary-50 rounded-lg p-3 border border-primary-100 mb-4">
                    <div className="flex items-center">
                      <FaAward size={16} className="text-primary mr-2" />
                      <span className="text-gray-700 font-medium">{edu.grade}</span>
                    </div>
                  </div>
                )}

                {/* Description */}
                {edu.description && (
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {edu.description}
                  </p>
                )}
              </div>

              {/* Border Animation on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Info */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border border-primary-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <FaGraduationCap className="text-primary text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Formal Education</h4>
              <p className="text-gray-700 text-sm">Comprehensive nursing program with clinical exposure</p>
            </div>
            <div className="text-center">
              <FaAward className="text-secondary text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Certified</h4>
              <p className="text-gray-700 text-sm">Licensed by DHA and healthcare authorities</p>
            </div>
            <div className="text-center">
              <FaBook className="text-accent text-4xl mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Continuous Learning</h4>
              <p className="text-gray-700 text-sm">Committed to professional development and training</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
