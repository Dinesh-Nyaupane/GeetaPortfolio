/* eslint-disable no-unused-vars */
import React from "react";
import { skills } from "../data/skills";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserNurse, FaBriefcaseMedical, FaStethoscope, FaSyringe, FaTrophy } from "react-icons/fa";

const Skills = () => {

  const skillLevelMap = {
    "Advanced": 95,
    "Proficient": 85,
    "Intermediate": 70,
    "Beginner": 50
  };

  const getSkillLevel = (skillName) => {
    // Default to proficient level (85%)
    return skillLevelMap["Proficient"] || 85;
  };

  const getRandomColor = (index) => {
    const colors = [
      "from-primary to-primary-600",
      "from-secondary to-secondary-600",
      "from-accent to-accent-600",
    ];
    return colors[index % colors.length];
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const renderSkill = (skill, index) => {
    const skillLevel = getSkillLevel(skill);
    const gradientColor = getRandomColor(index);

    return (
      <motion.div
        key={skill}
        className="mb-6"
        custom={index}
        variants={skillVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-primary-50 rounded-lg">
            <FaHeartbeat className="text-primary text-lg" />
          </div>
          <span className="font-medium text-gray-800 flex-1">{skill}</span>
          <span className="text-sm font-semibold text-primary">{skillLevel}%</span>
        </div>
        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-sm">
          <motion.div
            className={`bg-gradient-to-r ${gradientColor} h-3 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: `${skillLevel}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white text-gray-900 relative overflow-hidden">
      {/* Background Decoration */}
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
            My <span className="text-primary">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive nursing expertise with a blend of clinical proficiency and professional excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Clinical Skills */}
          <motion.div
            className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 shadow-lg border border-primary-100"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-primary-100 rounded-lg mr-4">
                <FaBriefcaseMedical className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Clinical Skills</h3>
                <p className="text-sm text-gray-600">Specialized healthcare expertise</p>
              </div>
            </div>
            <div className="space-y-1">
              {skills.clinical.map((skill, idx) => renderSkill(skill, idx))}
            </div>
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg border border-secondary-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="p-3 bg-secondary-100 rounded-lg mr-4">
                <FaTrophy className="text-secondary text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Professional Skills</h3>
                <p className="text-sm text-gray-600">Soft skills & competencies</p>
              </div>
            </div>
            <div className="space-y-1">
              {skills.professional.map((skill, idx) => renderSkill(skill, skills.clinical.length + idx))}
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200 text-center">
            <FaStethoscope className="text-primary text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">Patient Care</h4>
            <p className="text-sm text-gray-700">DHA & Nepal licensed</p>
          </div>
          <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl p-6 border border-secondary-200 text-center">
            <FaSyringe className="text-secondary text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">Clinical Excellence</h4>
            <p className="text-sm text-gray-700">High-quality standards</p>
          </div>
          <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-6 border border-accent-200 text-center">
            <FaHeartbeat className="text-accent text-4xl mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 mb-1">Compassion</h4>
            <p className="text-sm text-gray-700">Patient-centered approach</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
