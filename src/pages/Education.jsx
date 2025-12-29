import React from "react";

export default function Education() {
  const education = [
    {
      degree: "PCL Nursing",
      school: "Tansen School of Health Science, Palpa, Nepal",
      year: "2020 – 2023",
      percentage: "84.16%"
    },
    {
      degree: "Secondary Education Examination (SEE)",
      school: "Shree Bhusaldanda Secondary School, Palpa",
      year: "2019",
      gpa: "3.15"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title text-center fade-in">Educational Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className={`fade-in fade-in-delay-${(index + 1) % 3}`}>
              <div className="glass card rounded-3xl p-8 hover:shadow-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-box flex-shrink-0">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-navy)]">{edu.degree}</h3>
                </div>
                <p className="text-lg font-semibold gradient-text mb-4">
                  {edu.school}
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center text-base">
                    <i className="fas fa-calendar text-[var(--color-accent-red)] w-6 mr-3"></i>
                    <span><strong>Year:</strong> {edu.year}</span>
                  </p>
                  {edu.percentage && <p className="flex items-center text-base">
                    <i className="fas fa-medal text-amber-500 w-6 mr-3"></i>
                    <span><strong>Score:</strong> {edu.percentage}</span>
                  </p>}
                  {edu.gpa && <p className="flex items-center text-base">
                    <i className="fas fa-star text-amber-500 w-6 mr-3"></i>
                    <span><strong>GPA:</strong> {edu.gpa}</span>
                  </p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
