import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Auto-import images (Vite feature)
const imageModules = import.meta.glob("../assets/carousel/*.{jpg,jpeg,png}", {
  eager: true,
});

const images = Object.values(imageModules).map((mod) => mod.default);

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  if (!length) return null;

  const next = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  return (
    <>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            <span className="text-primary">Moments</span> &{" "}
            <span className="text-secondary">Memories</span>
          </h2>    
<div className="relative w-full max-w-7xl mx-auto my-10 
                h-[600px] md:h-[550px] lg:h-[650px] 
                overflow-hidden rounded-3xl shadow-2xl bg-gray-100">
                  

      {/* Left */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      {/* Right */}
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        <FaChevronRight />
      </button>

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`slide-${current}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-red-700 scale-125" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
    </>

  );
};

export default Carousel;
