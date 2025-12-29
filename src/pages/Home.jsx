import React from "react";
import profile from "../assets/profile.jpg";
import ImageCarousel from "../components/ImageCarousel";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { socials } from "../data/social";
import { FaDownload, FaPhone } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import QuoteCarousel from "../components/QuoteCarousel";
import Carousel from "../components/Carousel";

const handleDownload = () => {
  fetch("/resume.pdf")
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Gita_Banjade_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
};

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative bg-gradient-to-b from-white via-primary-50 to-white min-h-screen pt-24 flex flex-col items-center overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="containe mx-auto px-4 max-w-6xl flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
          {/* Left Side - Intro */}
          <motion.div
            className="flex-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary font-semibold text-sm">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I'm <span className="text-primary">Gita</span>
            </motion.h1>

            {/* Dynamic Text */}
            <motion.div
              className="text-2xl md:text-3xl font-semibold text-secondary mb-6 h-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Typewriter
                words={[
                  "A Compassionate Nurse",
                  "A Healthcare Professional",
                  "A Patient Advocate",
                  "A Caring Provider",
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              A dedicated{" "}
              <span className="font-semibold text-primary">
                Registered Nurse
              </span>{" "}
              licensed in UAE (DHA) and Nepal with expertise in homecare
              nursing, clinical skills, and patient-centered care. Committed to
              delivering compassionate healthcare with professionalism and
              empathy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
  variant="primary"
  className="px-8 py-3 text-lg flex items-center gap-2"
  onClick={handleDownload}
>
  <FaDownload size={18} /> Download Resume
</Button>



              <Button
                variant="outline"
                className="px-8 py-3 text-lg flex items-center gap-2"
                onClick={() => {
                  window.location.href = socials.whatsapp || "#contact";
                }}
              >
                <FaPhone size={18} /> Contact Me
              </Button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex space-x-6 pt-6 border-t border-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <p className="text-gray-600 text-sm font-semibold flex items-center">
                Connect:
              </p>
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-pink-500 transition text-2xl"
                >
                  <i className="fab fa-linkedin"></i>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Instagram
                  </span>
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-pink-500 transition text-2xl"
                >
                  <i className="fab fa-instagram"></i>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Instagram
                  </span>
                </a>
              )}
              {socials.tiktok && (
                <a
                  href={socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-black transition text-2xl"
                >
                  <i className="fab fa-tiktok"></i>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    TikTok
                  </span>
                </a>
              )}
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-gray-600 hover:text-blue-600 transition text-2xl"
                >
                  <i className="fab fa-facebook"></i>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap">
                    Facebook
                  </span>
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Photo */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ x: 50, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-100 max-w-md w-full">
                <ImageCarousel images={[profile]} />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-gray-600 text-sm mb-2">Scroll to explore</p>
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </section>
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center relative z-10">
        {/* Quotes Carousel Section */}
        <QuoteCarousel />
      </div>
      <div className="container mx-auto px-4 max-w-6xl flex flex-col items-center relative z-10">
        {/* Quotes Carousel Section */}
        <Carousel />
      </div>
    </>
  );
};

export default Home;
