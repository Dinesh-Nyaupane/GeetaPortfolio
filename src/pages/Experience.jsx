import React from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Medical Assistant",
      company: "Alleanza Innovative Healthcare Solutions",
      duration: "Nov 2024 – Present",
      description: "Providing patient care, vital signs monitoring, medication administration, and procedural support across day and night shifts. Maintaining 100% accurate patient documentation, ensuring compliance with facility and DHA standards."
    },
    {
      role: "Staff Nurse",
      company: "Crimson Hospital, Rupandehi, Nepal",
      duration: "Sep 2023 – Apr 2024",
      description: "Monitored vital signs, managed NG tubes, catheters, IV therapy, medications, and fluid balance for acute patients across day and night shifts. Ensured infection control, accurate documentation, and supported physicians in procedures and multidisciplinary care."
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title text-center fade-in">Professional Journey</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`fade-in fade-in-delay-${(index + 1) % 3}`}>
              <div className="glass card rounded-3xl p-8 md:p-10 hover:shadow-3xl">
                <div className="flex items-start gap-6">
                  <div className="icon-box flex-shrink-0">
                    <i className="fas fa-stethoscope"></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold text-[var(--color-navy)]">
                        {exp.role}
                      </h3>
                      <span className="badge mt-3 md:mt-0 text-xs">
                        <i className="fas fa-calendar mr-2"></i>{exp.duration}
                      </span>
                    </div>
                    <p className="text-lg font-semibold gradient-text mb-2">
                      <i className="fas fa-building mr-2"></i>{exp.company}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
