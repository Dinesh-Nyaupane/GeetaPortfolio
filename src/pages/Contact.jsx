import React from "react";

export default function Contact() {
  return (
    <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-10 right-5 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-xl text-gray-700 mt-4">Reach out and let's discuss how I can help you achieve your healthcare goals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 fade-in fade-in-delay-1">
          <div className="glass card rounded-2xl p-8 text-center hover-glow">
            <div className="icon-box mx-auto mb-6">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Email</h3>
            <a href="mailto:geetabanjade7@gmail.com" className="text-[var(--color-accent-red)] hover:text-pink-600 font-semibold break-all">
              geetabanjade7@gmail.com
            </a>
          </div>
          <div className="glass card rounded-2xl p-8 text-center hover-glow">
            <div className="icon-box mx-auto mb-6">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Phone</h3>
            <a href="tel:+971508267502" className="text-[var(--color-accent-red)] hover:text-pink-600 font-semibold">
              +971 508267502
            </a>
          </div>
          <div className="glass card rounded-2xl p-8 text-center hover-glow">
            <div className="icon-box mx-auto mb-6">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Location</h3>
            <p className="text-gray-700 font-semibold">Al Rigga, Deira, UAE</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="glass card rounded-3xl p-8 md:p-12 hover:shadow-2xl fade-in fade-in-delay-2 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[var(--color-navy)] mb-3">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 text-[var(--color-navy)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--color-navy)] mb-3">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 text-[var(--color-navy)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all duration-300"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[var(--color-navy)] mb-3">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="6"
              className="w-full px-6 py-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/60 text-[var(--color-navy)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all duration-300 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center text-lg font-semibold py-4"
          >
            <i className="fas fa-paper-plane mr-2"></i>Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
