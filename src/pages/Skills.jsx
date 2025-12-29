import React from "react";

export default function Skills() {
  const clinicalSkills = [
    "Patient Assessment",
    "Vital Signs Monitoring",
    "Triage Support",
    "Early Warning Scoring",
    "IV Therapy & Fluid Management",
    "NG Tube Feeding",
    "Catheter Care",
    "Wound Dressing",
    "Medication Administration",
    "Dose Calculation",
    "Infection Prevention",
    "Aseptic Technique",
    "Monitoring Renal, Cardiac, Gastroenteric Cases",
    "BLS Certified"
  ];

  const professionalSkills = [
    "Teamwork & Collaboration",
    "Effective Communication",
    "Multitasking",
    "Time Management",
    "Prioritization & Adaptability",
    "Problem-Solving",
    "Critical Thinking",
    "Quick Decision-Making",
    "Stress Management",
    "Patient & Family Support",
    "Responsibility"
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title text-center fade-in">Professional Skills</h2>

        {/* Clinical Skills */}
        <div className="mb-16 fade-in fade-in-delay-1">
          <div className="flex items-center mb-10">
            <div className="icon-box mr-4">
              <i className="fas fa-heartbeat"></i>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-navy)]">Clinical Skills</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clinicalSkills.map((skill, index) => (
              <div key={index} className="glass card rounded-2xl p-5 text-center text-white font-semibold text-sm md:text-base hover-glow">
                <i className="fas fa-check text-pink-400 mr-2"></i>{skill}
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div className="fade-in fade-in-delay-2">
          <div className="flex items-center mb-10">
            <div className="icon-box mr-4">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-navy)]">Professional Competencies</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {professionalSkills.map((skill, index) => (
              <div key={index} className="glass-light card rounded-2xl p-5 text-center text-[var(--color-navy)] font-semibold text-sm md:text-base hover-glow">
                <i className="fas fa-star text-amber-500 mr-2"></i>{skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
