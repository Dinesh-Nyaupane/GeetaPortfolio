import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "971508267502"; // Remove spaces/+ for WhatsApp
  const message = "Hello! I came across your portfolio and would like to connect with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Chat Bubble Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-2xl p-4 w-80 border border-green-100"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-900">Let's Chat!</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-900 transition"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-700 text-sm mb-4">
              Have questions or want to discuss something? I'm usually available on WhatsApp.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-semibold transition-colors"
            >
              Open WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-400 rounded-full opacity-20"
          />
          <FaWhatsapp size={28} className="relative z-10" />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Chat on WhatsApp
        </motion.div>
      </motion.div>
    </>
  );
};

export default WhatsAppButton;
