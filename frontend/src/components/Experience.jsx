
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
