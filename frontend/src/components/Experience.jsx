// import React, { useState } from 'react';
// import { Briefcase, Calendar, Award, ChevronRight } from 'lucide-react';

// /* ---------- ExperienceCard (controlled accordion) ---------- */
// const ExperienceCard = ({ experience, index, isActive, onToggle, expanded }) => {
//   const [showFullDesc, setShowFullDesc] = useState(false);

//   const shortLimit = 140;
//   const fullDesc = experience.description || '';
//   const isLong = fullDesc.length > shortLimit;
//   const shortDesc = isLong ? fullDesc.slice(0, shortLimit).trim() + '...' : fullDesc;

//   return (
//     <div
//       className={`w-full border rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-shadow duration-300
//         ${isActive ? 'bg-gradient-to-r from-emerald-500/8 to-blue-500/8 border-emerald-500/30 shadow-lg' : 'bg-gray-900/30 border-gray-800 hover:border-gray-700'}
//       `}
//     >
//       <button
//         type="button"
//         onClick={() => onToggle(index)}
//         className="w-full text-left flex items-start justify-between gap-4"
//         aria-expanded={!!expanded}
//       >
//         <div className="flex items-start gap-4 min-w-0">
//           <div className={`p-2 rounded-lg flex items-center justify-center ${isActive ? 'bg-emerald-500/20' : 'bg-gray-800'}`}>
//             <Briefcase className={`${isActive ? 'text-emerald-400' : 'text-gray-400'}`} size={20} />
//           </div>

//           <div className="min-w-0">
//             <h3 className={`font-semibold text-sm sm:text-base ${isActive ? 'text-emerald-400' : 'text-white'} truncate`}>
//               {experience.position}
//             </h3>
//             <p className="text-gray-300 text-xs sm:text-sm truncate">{experience.company}</p>

//             <div className="flex items-center text-gray-400 text-xs sm:text-sm mt-1 gap-2">
//               <span className="flex items-center gap-1">
//                 <Calendar size={14} />
//                 <span className="truncate">{experience.duration}</span>
//               </span>
//               {experience.type && (
//                 <>
//                   <span className="mx-1 hidden sm:inline">•</span>
//                   <span className="px-2 py-0.5 bg-gray-800 rounded-full text-xs">{experience.type}</span>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         <ChevronRight
//           className={`transition-transform duration-300 shrink-0 ${isActive ? 'rotate-90 text-emerald-400' : 'text-gray-400'}`}
//           size={18}
//         />
//       </button>

//       {/* Controlled expandable area — hidden on lg+ so desktop/sticky panel is the only details view there */}
//       <div
//         className={`overflow-hidden transition-[max-height] duration-300 mt-3 lg:hidden ${expanded ? 'max-h-[1000px]' : 'max-h-0'}`}
//         style={{ willChange: 'max-height' }}
//       >
//         <div className="pt-2">
//           <p className="text-gray-300 text-sm leading-relaxed">
//             {expanded ? (showFullDesc ? fullDesc : (isLong ? shortDesc : fullDesc)) : shortDesc}
//           </p>

//           {isLong && (
//             <button
//               type="button"
//               onClick={(e) => { e.stopPropagation(); setShowFullDesc((s) => !s); }}
//               className="mt-2 inline-block text-sm font-medium text-emerald-400"
//             >
//               {showFullDesc ? 'Show less' : 'Read more'}
//             </button>
//           )}

//           {expanded && (
//             <>
//               {experience.achievements && (
//                 <div className="mt-4">
//                   <h4 className="text-sm font-semibold text-white mb-2">Key Achievements</h4>
//                   <ul className="space-y-2">
//                     {experience.achievements.map((a, i) => (
//                       <li key={i} className="text-gray-300 text-sm">• {a}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//               {experience.technologies && (
//                 <div className="mt-4">
//                   <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {experience.technologies.map((t, i) => (
//                       <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ---------- Desktop details panel ---------- */
// const ExperienceDetails = ({ experience }) => {
//   if (!experience) return null;
//   return (
//     <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
//       <div className="mb-4">
//         <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{experience.position}</h3>
//         <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
//           <span className="flex items-center gap-2"><Briefcase size={16} />{experience.company}</span>
//           <span className="flex items-center gap-2"><Calendar size={16} />{experience.duration}</span>
//         </div>
//       </div>

//       <div className="mb-4">
//         <p className="text-gray-300 leading-relaxed text-sm">{experience.description}</p>
//       </div>

//       {experience.achievements && (
//         <div className="mb-4">
//           <h4 className="text-base font-semibold text-white mb-3">Key Achievements</h4>
//           <ul className="space-y-2">
//             {experience.achievements.map((achievement, index) => (
//               <li key={index} className="flex items-start gap-3">
//                 <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0" />
//                 <span className="text-gray-300 text-sm">{achievement}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {experience.technologies && (
//         <div>
//           <h4 className="text-base font-semibold text-white mb-3">Technologies Used</h4>
//           <div className="flex flex-wrap gap-2">
//             {experience.technologies.map((tech, index) => (
//               <span key={index} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20">
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// /* ---------- Education Card ---------- */
// const EducationCard = ({ education }) => (
//   <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
//     <div className="flex justify-between items-start mb-3">
//       <h3 className="text-lg sm:text-xl font-bold text-white">{education.degree}</h3>
//       {education.gpa && <span className="text-emerald-400 font-semibold text-sm">GPA: {education.gpa}</span>}
//     </div>
//     <p className="text-gray-300 text-sm mb-2">{education.institution}</p>
//     <div className="flex items-center text-gray-400 text-xs sm:text-sm">
//       <Calendar size={14} className="mr-1" />
//       <span>{education.duration}</span>
//       {education.status && (
//         <>
//           <span className="mx-2">•</span>
//           <span className={`px-2 py-0.5 rounded-full text-xs ${education.status === 'In Progress' ? 'bg-amber-500/10 text-amber-400' : 'bg-emerald-500/10 text-emerald-400'}`}>
//             {education.status}
//           </span>
//         </>
//       )}
//     </div>
//   </div>
// );

// /* ---------- Main Experience component ---------- */
// const Experience = ({ data }) => {
//   const [selectedExperience, setSelectedExperience] = useState(null);
//   if (!data?.experience && !data?.education) return null;

//   const experiences = data.experience || [];
//   const hasMultiple = experiences.length > 1;

//   const toggle = (i) => {
//     setSelectedExperience((prev) => (prev === i ? null : i));
//   };

//   // decide whether to show the desktop right-panel details:
//   const shouldShowDetails = selectedExperience !== null || !hasMultiple;
//   const detailsExperience = experiences[selectedExperience ?? 0];

//   return (
//     <section id="experience" className="py-12 sm:py-20 bg-gray-950 relative overflow-hidden">
//       <div className="mx-auto px-4 max-w-6xl relative z-10">
//         <div className="text-center mb-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
//             Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Education</span>
//           </h2>
//           <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">My professional journey and academic background</p>
//         </div>

//         {experiences.length > 0 && (
//           <div className="mb-12">
//             <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
//               <Briefcase className="text-emerald-400" size={20} /> Professional Experience
//             </h3>

//             <div className={`grid gap-8 items-start ${hasMultiple ? 'lg:grid-cols-2' : 'lg:grid-cols-1'}`}>
//               {/* Left list */}
//               <div className="space-y-4">
//                 {experiences.map((exp, i) => {
//                   // skip rendering the selected experience in the left list when there are multiple experiences AND a selection exists
//                   if (hasMultiple && selectedExperience !== null && i === selectedExperience) return null;
//                   return (
//                     <ExperienceCard
//                       key={exp.id || i}
//                       index={i}
//                       experience={exp}
//                       isActive={selectedExperience === i}
//                       onToggle={toggle}
//                       expanded={selectedExperience === i}
//                     />
//                   );
//                 })}
//               </div>

//               {/* Right details (desktop) */}
//               <div className="hidden lg:block sticky top-8">
//                 {shouldShowDetails ? (
//                   <ExperienceDetails experience={detailsExperience} />
//                 ) : (
//                   <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-gray-400">
//                     <p className="font-medium">Select an experience to view details</p>
//                     <p className="text-sm mt-2">Click one of the items on the left to see full description, achievements and tech used.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}

//         {data?.education && (
//           <div className="mb-10">
//             <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
//               <Award className="text-emerald-400" size={20} /> Education
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {data.education.map((edu, idx) => (
//                 <EducationCard key={idx} education={edu} />
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="mt-8 bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
//           <h3 className="text-lg sm:text-2xl font-bold text-white mb-6 text-center">Professional Highlights</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">2+</div>
//               <div className="text-gray-400 text-sm">Years Experience</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">6+</div>
//               <div className="text-gray-400 text-sm">Projects Delivered</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">99%</div>
//               <div className="text-gray-400 text-sm">Client Satisfaction</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-1">24/7</div>
//               <div className="text-gray-400 text-sm">Dedication</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
import React from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function Experience({ data }) {
  const experiences = data?.experience || [];
  const education = data?.education || [];
  const certifications = data?.certifications || [];

  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-6 sm:px-12 bg-dark-bg dot-pattern relative"
      aria-label="Experience section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            My <span className="text-cyan-accent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience, education, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="space-y-12">
            {/* Work Experience */}
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-cyan-accent" size={28} />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative pl-8 pb-8 border-l-2 border-gray-800 last:border-l-0 last:pb-0 group hover:border-cyan-accent transition-colors duration-300"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-accent group-hover:scale-125 transition-transform duration-300"></div>

                    <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 group-hover:border-cyan-accent transition-all duration-300">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors">
                            {exp.position}
                          </h4>
                          <p className="text-gray-400">{exp.company}</p>
                        </div>
                        <span className="px-3 py-1 bg-cyan-accent/20 text-cyan-accent text-xs font-semibold rounded-full border border-cyan-accent/30">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.duration}
                      </p>

                      <p className="text-gray-300 text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded"
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
            <div
              className="animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap className="text-cyan-accent" size={28} />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-accent transition-all duration-300 group"
                  >
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-2">{edu.duration}</p>
                    {edu.cgpa && (
                      <p className="text-cyan-accent font-semibold">
                        CGPA: {edu.cgpa}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-cyan-accent font-semibold">
                        Grade: {edu.grade}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-cyan-accent" size={28} />
              Certifications
            </h3>
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-cyan-accent transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-accent/30 transition-colors">
                      <Award className="text-cyan-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-gray-400 text-sm mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-gray-500 text-xs">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
