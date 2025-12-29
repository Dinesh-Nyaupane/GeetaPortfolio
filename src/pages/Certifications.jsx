import React from "react";

export default function Certifications() {
  const certifications = [
    {
      title: "Basic Life Support (BLS)",
      provider: "National Health Care Provider Solutions",
      validUntil: "5 May, 2026"
    },
    {
      title: "Nepal Nursing Council – Registered Nurse",
      licenseNo: "76732",
      validUntil: "06 Aug 2029"
    },
    {
      title: "Dubai Health Authority (DHA) – Assistant Nurse",
      licenseNo: "91841456-001",
      validUntil: "4 June 2026"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-title text-center fade-in">Certifications & Licenses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className={`fade-in fade-in-delay-${(index + 1) % 3}`}>
              <div className="glass card rounded-3xl p-8 hover:shadow-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-box flex-shrink-0">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-navy)]">{cert.title}</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  {cert.provider && <p className="text-base">
                    <span className="font-semibold gradient-text">Provider:</span> {cert.provider}
                  </p>}
                  {cert.licenseNo && <p className="text-base">
                    <span className="font-semibold gradient-text">License No.:</span> {cert.licenseNo}
                  </p>}
                  <div className="pt-3 border-t border-white/40">
                    <p className="flex items-center text-base font-semibold">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>Valid Until: {cert.validUntil}
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
