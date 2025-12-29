import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeartbeat,
  FaStethoscope,
  FaQuoteLeft,
} from "react-icons/fa";

const QuoteCarousel = () => {
  const quotes = [
    {
      text: "Compassion is at the heart of nursing. Every interaction matters.",

      icon: FaHeartbeat,
      color: "primary",
    },
    {
      text: "Every patient deserves dignity, respect, and individualized care.",

      icon: FaStethoscope,
      color: "secondary",
    },
    {
      text: "Small acts of kindness in healthcare make the biggest differences in patients' lives.",

      icon: FaHeartbeat,
      color: "primary",
    },
    {
      text: "Nursing is not just a profession; it is a calling to serve and heal.",

      icon: FaStethoscope,
      color: "secondary",
    },
    {
      text: "In healthcare, empathy transforms the patient experience and builds trust.",
      icon: FaHeartbeat,
      color: "primary",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % quotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, quotes.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + quotes.length) % quotes.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % quotes.length);
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrent(index);
    setAutoPlay(false);
  };

  const currentQuote = quotes[current];
  const IconComponent = currentQuote.icon;

  return (
    <section className="py-20 mt-20 max-w-6xl text-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-primary">Thoughts</span> &{" "}
            <span className="text-secondary">Reflections</span>
          </h2>
          <p className="text-gray-600">
            Quotes and wisdom from my nursing journey
          </p>
        </motion.div>

        {/* Quote Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Quote Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-primary-100 text-center">
              {/* Quote Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaQuoteLeft className="text-primary text-4xl opacity-30" />
              </motion.div>

              {/* Main Icon */}
              <motion.div
                className="flex justify-center mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="p-4 bg-primary-100 rounded-full">
                  <IconComponent className="text-primary text-4xl" />
                </div>
              </motion.div>

              {/* Quote Text */}
              <motion.blockquote
                className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                "{currentQuote.text}"
              </motion.blockquote>

              {/* Author */}
              <motion.div
                className="text-primary font-semibold text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                — {currentQuote.author}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <motion.button
            className="p-3 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg"
            onClick={goToPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronLeft size={20} />
          </motion.button>

          <div className="flex gap-3">
            {quotes.map((_, index) => (
              <motion.button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-primary"
                    : "w-3 bg-gray-400 hover:bg-gray-600"
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.button
            className="p-3 bg-primary text-white rounded-full hover:bg-primary-700 transition-colors shadow-lg"
            onClick={goToNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaChevronRight size={20} />
          </motion.button>
        </div>

        {/* Auto-play Indicator */}
        <motion.p
          className="text-center text-gray-600 text-sm mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {autoPlay ? "Auto-playing..." : "Click navigation to continue"}
        </motion.p>
      </div>
    </section>
  );
};

export default QuoteCarousel;
