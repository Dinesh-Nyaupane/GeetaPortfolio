import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-3xl font-bold font-serif mb-3">Gita</h3>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Healthcare professional dedicated to excellence and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope text-accent mr-3"></i>
                <a href="mailto:geetabanjade7@gmail.com" className="hover:text-white transition-colors">Email</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone text-accent mr-3"></i>
                <a href="tel:+971508267502" className="hover:text-white transition-colors">+971 508267502</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-map-marker-alt text-accent mr-3"></i>
                <span>Al Rigga, Deira</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-white mb-5">Certifications</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-check-circle text-green-400 mr-2"></i>
                <span>DHA Licensed</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-check-circle text-green-400 mr-2"></i>
                <span>RN Registered</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <i className="fas fa-check-circle text-green-400 mr-2"></i>
                <span>BLS Certified</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Gita Banjade. All rights reserved.</p>
            <p>Designed by <span className="text-accent font-semibold">Dinesh Nyaupane</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
