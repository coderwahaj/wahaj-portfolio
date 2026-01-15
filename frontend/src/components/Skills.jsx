import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Skills({ data }) {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [skillsRef, skillsVisible] = useScrollAnimation(0.1);

  const skillCategories = [
    {
      name: "Frontend",
      skills: data?.skills?.frontend || [],
      gradient: "from-slate-800 to-slate-700",
      borderColor: "border-slate-600/50",
      glowColor: "hover:shadow-slate-500/20",
    },
    {
      name: "Backend",
      skills: data?.skills?.backend || [],
      gradient: "from-zinc-800 to-zinc-700",
      borderColor: "border-zinc-600/50",
      glowColor: "hover: shadow-zinc-500/20",
    },
    {
      name: "AI/ML",
      skills: data?.skills?.ai_ml || [],
      gradient: "from-neutral-800 to-neutral-700",
      borderColor: "border-neutral-600/50",
      glowColor: "hover: shadow-neutral-500/20",
    },
    {
      name: "Tools",
      skills: data?.skills?.tools || [],
      gradient: "from-gray-800 to-gray-700",
      borderColor: "border-gray-600/50",
      glowColor: "hover: shadow-gray-500/20",
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-8 px-6 sm:px-12 bg-dark-bg relative"
      aria-label="Skills section"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with scroll animation */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-light-200 to-white bg-clip-text text-transparent">
              Technical
            </span>{" "}
            <span className="bg-gradient-to-r from-light-300 via-light-100 to-light-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-light-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid with scroll animation */}
        <div
          ref={skillsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`bg-gradient-to-br ${
                category.gradient
              } backdrop-blur-sm rounded-2xl p-6 shadow-2xl ${
                category.glowColor
              } transition-all duration-500 border-2 ${
                category.borderColor
              } transform hover:-translate-y-3 hover:scale-105 ${
                skillsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`group px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 hover:bg-white hover:border-white transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      skillsVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{
                      transitionDelay: `${catIndex * 150 + index * 50}ms`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm text-white group-hover:text-dark-800 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs text-light-300 group-hover:text-dark-600 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-2 h-1. 5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white group-hover:bg-dark-800 transition-all duration-1000 ease-out rounded-full"
                        style={{
                          width: skillsVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            catIndex * 150 + index * 50 + 200
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  
}
