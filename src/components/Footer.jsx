import React from "react";
import { socials } from "../data/social";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp, FaHeart } from "react-icons/fa";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 py-12 mt-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Gita Banjade</h3>
            <p className="text-gray-600 text-sm">Registered Nurse | Compassionate Caregiver | Healthcare Professional</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-primary transition">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-primary transition">About</a></li>
              <li><a href="/skills" className="text-gray-600 hover:text-primary transition">Skills</a></li>
              <li><a href="/blog" className="text-gray-600 hover:text-primary transition">Blog</a></li>
            </ul>
          </div>

          {/* Resume & Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Get In Touch</h4>
            <Button variant="primary" className="w-full mb-3 px-4 py-2 text-center">
              Download Resume
            </Button>
            <a 
              href={socials.whatsapp || "https://wa.me/"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-center text-primary hover:text-primary-700 transition font-medium text-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <p className="text-sm text-gray-600 mb-4 text-center">Follow on Social Media</p>
          <div className="flex justify-center space-x-6">
            {socials.instagram && (
              <a 
                href={socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-pink-500 transition text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            )}
            {socials.facebook && (
              <a 
                href={socials.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 transition text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            )}
            {socials.tiktok && (
              <a 
                href={socials.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-black transition text-2xl"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
            )}
            {socials.whatsapp && (
              <a 
                href={socials.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-500 transition text-2xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            )}
          </div>
        </div>

        {/* Credits */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Designed & Developed with <span className="text-primary animate-heartbeat">
              <FaHeart size={14} />
            </span> by 
            <span className="text-primary">
              Dinesh Nyaupane
            </span>
          </p>
          <p className="text-gray-500 text-xs mt-2">A Full Stack Developer</p>
          <p className="text-gray-400 text-xs mt-4">© {new Date().getFullYear()} Gita Banjade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
