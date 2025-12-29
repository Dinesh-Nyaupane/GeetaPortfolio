import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-lg text-black fixed w-full z-50 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        <div className="text-3xl md:text-4xl font-bold gradient-text font-serif">
          Gita
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-accent transition-colors duration-300 font-medium text-sm md:text-base relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700 hover:text-accent transition-colors duration-300">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white/98 backdrop-blur-lg px-6 pb-6 space-y-4 border-t border-gray-200">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 hover:text-accent transition-colors duration-300 font-medium text-gray-700 text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
