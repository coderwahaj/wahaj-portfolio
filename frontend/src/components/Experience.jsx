
// import React from "react";
// import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

// export default function Experience({ data }) {
//   const experiences = data?.experience || [];
//   const education = data?.education || [];
//   const certifications = data?.certifications || [];

//   return (
//     <section
//       id="experience"
//       className="min-h-screen py-20 px-6 sm:px-12 bg-dark-bg dot-pattern relative"
//       aria-label="Experience section"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
//             My <span className="text-cyan-accent">Journey</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Experience, education, and achievements
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Left Column - Experience & Education */}
//           <div className="space-y-12">
//             {/* Work Experience */}
//             <div className="animate-slide-in-left">
//               <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
//                 <Briefcase className="text-cyan-accent" size={28} />
//                 Work Experience
//               </h3>
//               <div className="space-y-6">
//                 {experiences.map((exp, index) => (
//                   <div
//                     key={exp.id}
//                     className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 last:pb-0 group hover:border-cyan-accent transition-colors duration-300"
//                   >
//                     {/* Timeline dot */}
//                     <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-accent group-hover:scale-125 transition-transform duration-300"></div>

//                     <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 group-hover:border-cyan-accent transition-all duration-300">
//                       <div className="flex items-start justify-between mb-3">
//                         <div>
//                           <h4 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors">
//                             {exp.position}
//                           </h4>
//                           <p className="text-gray-400">{exp.company}</p>
//                         </div>
//                         <span className="px-3 py-1 bg-cyan-accent/20 text-cyan-accent text-xs font-semibold rounded-full border border-cyan-accent/30">
//                           {exp.type}
//                         </span>
//                       </div>

//                       <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
//                         <Calendar size={14} />
//                         {exp.duration}
//                       </p>

//                       <p className="text-gray-300 text-sm mb-4">
//                         {exp.description}
//                       </p>

//                       {/* Technologies */}
//                       <div className="flex flex-wrap gap-2">
//                         {exp.technologies.map((tech, idx) => (
//                           <span
//                             key={idx}
//                             className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Education */}
//             <div
//               className="animate-slide-in-left"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
//                 <GraduationCap className="text-cyan-accent" size={28} />
//                 Education
//               </h3>
//               <div className="space-y-6">
//                 {education.map((edu, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-accent transition-all duration-300 group"
//                   >
//                     <h4 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors mb-2">
//                       {edu.degree}
//                     </h4>
//                     <p className="text-gray-400 mb-2">{edu.institution}</p>
//                     <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
//                     {edu.cgpa && (
//                       <p className="text-cyan-accent font-semibold">
//                         CGPA: {edu.cgpa}
//                       </p>
//                     )}
//                     {edu.grade && (
//                       <p className="text-cyan-accent font-semibold">
//                         Grade: {edu.grade}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Certifications */}
//           <div className="animate-slide-in-right">
//             <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
//               <Award className="text-cyan-accent" size={28} />
//               Certifications
//             </h3>
//             <div className="grid gap-6">
//               {certifications.map((cert, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-accent transition-all duration-300 transform hover:scale-[1.02] group"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-12 h-12 rounded-full bg-cyan-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-accent/30 transition-colors">
//                       <Award className="text-cyan-accent" size={24} />
//                     </div>
//                     <div className="flex-1">
//                       <h4 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors mb-1">
//                         {cert.name}
//                       </h4>
//                       <p className="text-gray-400 text-sm mb-1">
//                         {cert.issuer}
//                       </p>
//                       <p className="text-gray-500 text-xs">{cert.date}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Experience({ data }) {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [experienceRef, experienceVisible] = useScrollAnimation(0.1);
  const [educationRef, educationVisible] = useScrollAnimation(0.1);
  const [certRef, certVisible] = useScrollAnimation(0.1);

  const experiences = data?.experience || [];
  const education = data?.education || [];
  const certifications = data?. certifications || [];

  return (
    <section
      id="experience"
      className="min-h-screen py-32 px-6 sm:px-12 bg-light-bg relative overflow-hidden"
      aria-label="Experience section"
    >
      {/* Wavy separator at top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L0,120 C150,20 350,120 600,70 C850,20 1050,120 1200,70 L1200,0 Z"
            fill="#171717"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              :  "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-dark-700 via-dark-600 to-dark-500 bg-clip-text text-transparent">
              My
            </span>{" "}
            <span className="bg-gradient-to-r from-dark-800 via-dark-700 to-dark-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience, education, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="space-y-12">
            {/* Work Experience */}
            <div ref={experienceRef}>
              <h3 className="text-3xl font-bold text-dark-800 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                  <Briefcase className="text-white" size={20} />
                </div>
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={`relative pl-8 pb-8 border-l-2 border-gray-300 last:border-l-0 last:pb-0 group hover:border-dark-800 transition-all duration-300 ${
                      experienceVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-dark-800 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>

                    <div className="bg-gradient-to-br from-light-50 to-light-100 rounded-2xl p-6 border-2 border-light-200 group-hover:border-dark-700 group-hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div>
                          <h4 className="text-xl font-bold text-dark-800 group-hover:text-dark-900 transition-colors">
                            {exp.position}
                          </h4>
                          <p className="text-gray-700 font-medium">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-dark-800 text-white text-xs font-semibold rounded-full shadow-md">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 flex items-center gap-2">
                        <Calendar size={14} />
                        {exp. duration}
                      </p>

                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies?. map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white text-dark-700 rounded-full text-xs border-2 border-dark-600 hover:bg-dark-700 hover:text-white transition-all duration-300 cursor-pointer"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div ref={educationRef}>
              <h3 className="text-3xl font-bold text-dark-800 mb-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center">
                  <GraduationCap className="text-white" size={20} />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-light-100 to-light-200 rounded-2xl p-6 border-2 border-light-200 hover:border-dark-700 hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1 ${
                      educationVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <h4 className="text-xl font-bold text-dark-800 group-hover:text-dark-900 transition-colors mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-2 flex items-center gap-2">
                      <Calendar size={14} />
                      {edu. duration}
                    </p>
                    {edu.cgpa && (
                      <p className="text-dark-800 font-semibold">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-dark-800 font-semibold">
                        Grade: {edu.grade}
                      </p>
                    )}
                    {edu.status && (
                      <span className="inline-block mt-2 px-3 py-1 bg-dark-800 text-white text-xs font-semibold rounded-full">
                        {edu.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div ref={certRef}>
            <h3 className="text-3xl font-bold text-dark-800 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-600 to-dark-500 flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-light-50 to-light-100 rounded-2xl p-6 border-2 border-light-200 hover:border-dark-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group ${
                    certVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-20"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Award className="text-white" size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-dark-800 group-hover:text-dark-900 transition-colors mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-700 text-mid mb-1 font-medium">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-600 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wavy separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm: h-32 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 L0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 Z"
            fill="#171717"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}