import React from "react";
import { FaCertificate, FaAward, FaCheckCircle, FaHeartbeat } from "react-icons/fa";
import { certificationsData } from "../data/certifications";
import { motion } from "framer-motion";

const Certifications = () => {
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

  const getCertificationIcon = (certName) => {
    const name = certName.toLowerCase();
    if (name.includes('dha')) return FaHeartbeat;
    if (name.includes('bls')) return FaCheckCircle;
    if (name.includes('pcl')) return FaAward;
    return FaCertificate;
  };

  return (
    <section id="certifications" className="py-20 bg-white text-gray-900 relative overflow-hidden">
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
            <span className="text-primary">Certifications</span> & Licenses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional credentials and achievements validating my expertise in healthcare and nursing
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificationsData.map((cert) => {
            const Icon = cert.icon || getCertificationIcon(cert.name || cert.title);
            const title = cert.name || cert.title;
            const desc = cert.provider || cert.description || "";
            const date = cert.expiry || cert.date || "";

            return (
              <motion.div
                key={cert.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full p-8 border border-gray-100 cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>

                {/* Icon Container */}
                <motion.div
                  className="p-4 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl inline-block mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={40} className="text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {title}
                </h3>
                
                {desc && (
                  <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                    {desc}
                  </p>
                )}

                {date && (
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <FaCheckCircle className="text-primary mr-2" />
                    <span>Expiry: {date}</span>
                  </div>
                )}

                {/* Badge */}
                <motion.div
                  className="inline-block px-3 py-1 bg-primary-100 text-primary text-xs font-semibold rounded-full mt-auto"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  ✓ Verified
                </motion.div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary transition-colors pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics Section */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 text-center border border-primary-200">
            <div className="text-4xl font-bold text-primary mb-2">
              {certificationsData.length}+
            </div>
            <div className="text-gray-700 font-semibold">Certifications</div>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-8 text-center border border-secondary-200">
            <div className="text-4xl font-bold text-secondary mb-2">2024-25</div>
            <div className="text-gray-700 font-semibold">Current Year</div>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 text-center border border-accent-200">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-gray-700 font-semibold">Valid & Active</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
