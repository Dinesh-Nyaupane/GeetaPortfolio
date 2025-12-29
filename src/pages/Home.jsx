import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="section min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto fade-in relative z-10 px-4">
        {/* Badge */}
        <div className="badge fade-in fade-in-delay-1 mb-8 inline-block">
          <i className="fas fa-star text-yellow-500 mr-2"></i>Healthcare Professional
        </div>

        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary mb-4 fade-in fade-in-delay-2 leading-tight">
          Hi, I'm <span className="gradient-text">Gita</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-accent mb-8 fade-in fade-in-delay-3">
          Registered Nurse & Healthcare Professional
        </p>

        {/* Description */}
        <p className="max-w-3xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed fade-in fade-in-delay-3 mx-auto">
          Dedicated healthcare professional with proven expertise in clinical care, patient assessment, and vital monitoring. Committed to delivering compassionate, high-quality care in dynamic healthcare environments.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in fade-in-delay-3">
          <Link
            to="/contact"
            className="btn-primary flex items-center justify-center"
          >
            <i className="fas fa-envelope mr-3"></i>Get In Touch
          </Link>
          <Link
            to="/about"
            className="btn-secondary flex items-center justify-center"
          >
            <i className="fas fa-arrow-right mr-3"></i>Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}
