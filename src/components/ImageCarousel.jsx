import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageCarousel = ({ images = [], interval = 3500, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className={"relative overflow-hidden " + className}>
      <AnimatePresence>
        {images && images.length > 0 && (
          <motion.img
            key={index}
            src={images[index]}
            alt={`slide-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6 }}
            className="w-56 md:w-72 rounded-full shadow-lg border-4 border-primary dark:border-primary-200 object-cover"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
