import React from "react";

export default function Skills({ data }) {
  const skillCategories = [
    { name: "Frontend", skills: data?.skills?.frontend || [], color: "dark" },
    { name: "Backend", skills: data?.skills?.backend || [], color: "medium" },
    { name: "AI/ML", skills: data?. skills?.ai_ml || [], color: "light" },
    { name: "Tools", skills: data?.skills?.tools || [], color: "darker" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      dark: "bg-dark-800/10 text-dark-800 border-dark-700/30 hover:bg-dark-800 hover:text-white hover:border-dark-800",
      medium: "bg-dark-700/10 text-dark-700 border-dark-600/30 hover:bg-dark-700 hover:text-white hover:border-dark-700",
      light: "bg-dark-600/10 text-dark-600 border-dark-500/30 hover:bg-dark-600 hover:text-white hover:border-dark-600",
      darker: "bg-dark-900/10 text-dark-900 border-dark-800/30 hover:bg-dark-900 hover:text-white hover: border-dark-900",
    };
    return colors[color] || colors.dark;
  };

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 sm:px-12 bg-dark-bg relative overflow-hidden"
      aria-label="Skills section"
    >
      {/* Curved Wave at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-24 sm:h-32 md:h-40" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z" 
            fill="#ffffff"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
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

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className="bg-gradient-to-br from-dark-700 to-dark-600 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-dark-500 animate-fade-in-up"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-light-200 bg-clip-text text-transparent">
                {category.name}
              </h3>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills. map((skill, index) => (
                  <div
                    key={index}
                    className={`group px-4 py-3 rounded-xl border transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${getColorClasses(
                      category.color
                    )}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs opacity-75 group-hover:opacity-100">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="mt-2 h-1 bg-dark-500/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-current transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curved Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg 
          className="relative block w-full h-24 sm:h-32 md:h-40" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z" 
            fill="#ffffff"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}