import React from "react";
import profilePic from "../assets/profile.jpg"; // Add a professional photo in assets

export default function About() {
  return (
    <section className="section bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16 fade-in">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          {/* Image */}
          <div className="flex justify-center fade-in fade-in-delay-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light rounded-3xl blur-2xl opacity-30"></div>
              <img
                src={profilePic}
                alt="Gita Banjade"
                className="w-full h-auto max-w-sm object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-white"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in fade-in-delay-2">
            <p className="text-xl text-gray-700 mb-7 leading-relaxed">
              I am a <span className="font-bold text-accent">Registered Nurse</span> with extensive clinical experience in acute care, patient assessment, and vital signs monitoring. My expertise spans IV therapy, NG tube management, catheterization, wound dressing, and infection control protocols.
            </p>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Licensed by the Dubai Health Authority (DHA) with a commitment to delivering compassionate, high-quality patient care. I thrive in dynamic healthcare environments, collaborating effectively with multidisciplinary teams. BLS certified and passionate about continuous improvement.
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="icon-box mr-5 flex-shrink-0">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-2">Phone</p>
                    <a href="tel:+971508267502" className="font-semibold text-primary hover:text-accent transition">+971 508267502</a>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="icon-box mr-5 flex-shrink-0">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-2">Email</p>
                    <a href="mailto:geetabanjade7@gmail.com" className="font-semibold text-primary hover:text-accent transition break-all">geetabanjade7@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="icon-box mr-5 flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-2">Location</p>
                    <p className="font-semibold text-primary">Al Rigga, Deira, UAE</p>
                  </div>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl">
                <div className="flex items-start">
                  <div className="icon-box mr-5 flex-shrink-0">
                    <i className="fas fa-language"></i>
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 mb-2">Languages</p>
                    <p className="font-semibold text-primary">Nepali, English, Hindi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
