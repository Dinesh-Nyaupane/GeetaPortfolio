import React from "react";
import { FaGraduationCap, FaCertificate, FaIdCard, FaHeartbeat, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

// Import data
import { educationData } from "../data/education";
import { certificationsData } from "../data/certifications";
import { licensesData } from "../data/liscenses";

const About = () => {
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
    <section id="about" className="py-20 bg-white text-gray-900 relative overflow-hidden">
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
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding my journey, qualifications, and commitment to healthcare excellence
          </p>
        </motion.div>

        {/* Profile Summary */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                <span className="text-primary">Gita Banjade</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A passionate and dedicated <span className="font-semibold">Registered Nurse</span> and Assistant Nurse licensed by DHA. With proven clinical experience in acute care, patient assessment, and vital signs monitoring, I am committed to delivering high-quality, compassionate patient care.
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                <FaHeartbeat className="text-primary mr-2" /> Clinical Expertise
              </h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ IV therapy & venipuncture</li>
                <li>✓ NG tube management & care</li>
                <li>✓ Catheter care & wound dressing</li>
                <li>✓ Medication administration & compliance</li>
                <li>✓ Vital signs monitoring & assessment</li>
                <li>✓ Infection control & safety protocols</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              BLS certified and licensed in Nepal and UAE, I am dedicated to providing safe, responsible, and empathetic healthcare services with continuous professional development and learning.
            </p>
          </motion.div>

          {/* Info Cards */}
          <motion.div
            className="grid gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education Cards */}
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                className="flex items-start p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-200 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-blue-200 rounded-lg mr-4 group-hover:bg-blue-300 transition-colors">
                  <FaGraduationCap size={24} className="text-blue-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-sm text-gray-700">{edu.institute}</p>
                  <p className="text-xs text-gray-600 mt-1">Year: {edu.year}</p>
                </div>
              </motion.div>
            ))}

            {/* Certification Cards */}
            {certificationsData.slice(0, 2).map((cert) => (
              <motion.div
                key={cert.id}
                className="flex items-start p-5 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-md hover:shadow-lg transition-all border border-amber-200 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-amber-200 rounded-lg mr-4 group-hover:bg-amber-300 transition-colors">
                  <FaCertificate size={24} className="text-amber-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{cert.name}</h4>
                  <p className="text-sm text-gray-700">{cert.provider}</p>
                  <p className="text-xs text-gray-600 mt-1">Expires: {cert.expiry}</p>
                </div>
              </motion.div>
            ))}

            {/* Licenses Cards */}
            {licensesData.slice(0, 1).map((lic) => (
              <motion.div
                key={lic.id}
                className="flex items-start p-5 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-md hover:shadow-lg transition-all border border-green-200 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="p-3 bg-green-200 rounded-lg mr-4 group-hover:bg-green-300 transition-colors">
                  <FaIdCard size={24} className="text-green-700" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{lic.type}</h4>
                  <p className="text-sm text-gray-700">{lic.licenseNumber}</p>
                  <p className="text-xs text-gray-600 mt-1">Valid: {lic.validity}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Strengths Section */}
        <motion.div
          className="mt-20 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 text-center border border-primary-200">
            <FaHeartbeat className="text-primary text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Compassionate Care</h4>
            <p className="text-sm text-gray-700">Patient-centered approach with empathy</p>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 text-center border border-secondary-200">
            <FaAward className="text-secondary text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Professional</h4>
            <p className="text-sm text-gray-700">Certified and licensed credentials</p>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 text-center border border-accent-200">
            <FaCertificate className="text-accent text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Experienced</h4>
            <p className="text-sm text-gray-700">Diverse clinical exposure & skills</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center border border-orange-200">
            <FaGraduationCap className="text-orange-600 text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-2">Lifelong Learner</h4>
            <p className="text-sm text-gray-700">Continuous professional development</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
