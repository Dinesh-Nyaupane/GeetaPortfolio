import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Education", to: "/education" },
    { name: "Certifications", to: "/certifications" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white bg-opacity-95 shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <NavLink 
          to="/" 
          className="text-2xl font-bold text-primary hover:text-primary-700 transition"
        >
          Gita Banjade
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'text-primary font-semibold bg-primary-50' 
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {/* Download Resume Button */}
          {/* <li className="ml-4">
            <Button 
              as="a" 
              variant="primary" 
              className="px-6 py-2"
              onClick={() => {
                // TODO: Add actual resume download functionality
              }}
            >
              Resume
            </Button>
          </li> */}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-primary transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 py-4 px-6">
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg transition-colors ${
                      isActive 
                        ? 'text-primary font-semibold bg-primary-50' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200">
              <Button 
                as="a" 
                variant="primary" 
                className="w-full px-4 py-2 text-center"
              >
                Download Resume
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
