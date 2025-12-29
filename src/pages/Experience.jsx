import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { experienceData } from "../data/experience";
import { motion } from "framer-motion";

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My career journey showcasing diverse healthcare environments and continuous growth
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 p-8 hover:border-primary-200"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>

              {/* Icon */}
              <motion.div
                className="p-4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl inline-block mb-6 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FaBriefcase size={28} className="text-primary" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                
                {/* Company & Location */}
                <div className="flex items-center text-gray-700 mb-3">
                  <span className="font-semibold">{exp.company}</span>
                  {exp.location && (
                    <>
                      <span className="mx-2 text-gray-400">•</span>
                      <div className="flex items-center text-gray-600">
                        <FaMapMarkerAlt size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </>
                  )}
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-600 mb-5 text-sm">
                  <FaClock size={14} className="text-primary mr-2" />
                  {exp.duration}
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Key Responsibilities</p>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start">
                      <FaCheckCircle size={16} className="text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline Connector */}
              {index < experienceData.length - 1 && (
                <div className="hidden md:block absolute left-8 bottom-0 transform translate-y-full w-1 h-8 bg-gradient-to-b from-primary to-transparent"></div>
              )}
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
          <p className="text-gray-600 text-lg mb-6">
            Continuously growing and learning in the healthcare field
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Full Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
