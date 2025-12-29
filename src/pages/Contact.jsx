import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { socials } from "../data/social";
import Button from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const phoneNumber = "971508267502"; // Remove spaces/+ for WhatsApp
  const message = "Hello! I came across your portfolio and would like to connect with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white text-gray-900 relative overflow-hidden">
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to discuss an opportunity? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>

            {/* Email */}
            <motion.div
              className="flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 bg-blue-200 rounded-lg mr-4">
                <FaEnvelope size={24} className="text-blue-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                <a 
                  href="mailto:geetabanjade7@gmail.com"
                  className="text-gray-700 hover:text-primary transition"
                >
                  geetabanjade7@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="flex items-start p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-shadow"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 bg-green-200 rounded-lg mr-4">
                <FaPhone size={24} className="text-green-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                <a 
                  href="tel:+971-508267502"
                  className="text-gray-700 hover:text-primary transition"
                >
                  +971 508 267 502
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="flex items-start p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200 hover:shadow-lg transition-shadow"
              whileHover={{ x: 10 }}
            >
              <div className="p-3 bg-teal-200 rounded-lg mr-4">
                <FaWhatsapp size={24} className="text-teal-700" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">WhatsApp</h4>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary transition"
                >
                  Chat with me
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socials.instagram && (
                  <motion.a 
                    href={socials.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-pink-100 rounded-xl text-pink-600 hover:bg-pink-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaInstagram size={24} />
                  </motion.a>
                )}
                {socials.facebook && (
                  <motion.a 
                    href={socials.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-blue-100 rounded-xl text-blue-600 hover:bg-blue-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaFacebook size={24} />
                  </motion.a>
                )}
                {socials.tiktok && (
                  <motion.a 
                    href={socials.tiktok} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-900 rounded-xl text-white hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaTiktok size={24} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-2xl shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all"
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                placeholder="Your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white transition-all resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                disabled={submitted}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-primary hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                {submitted ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={18} />
                    Send Message
                  </>
                )}
              </button>
            </motion.div>

            {submitted && (
              <motion.div
                className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! I'll get back to you as soon as possible.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
