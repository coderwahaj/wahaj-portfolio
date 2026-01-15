import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Projects({ data }) {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  // Image mapping based on project titles from mock data
  const projectImageMap = {
    "DIGITAL Legal Advisor - AI Legal Assistant": "/assets/digital-legal-advisor.jfif",
    "SkillSwap – Peer-to-Peer Skill Exchange Platform": "/assets/skillswap.jpg",
    "PitchPro – AI Automation & Content Generation Platform": "/assets/PitchPro.png",
    "Blog Summarizer & Quote Generator": "/assets/blog-summarizer.png",
    "UML Diagram Editor - Java Desktop Application":  "/assets/uml.png",
    "Sustainable Life Assistance": "/assets/sustainable lifestyle.jpeg",
  };

  // Process projects from data and add images
  const processProjects = () => {
    if (!data?.projects || data.projects.length === 0) {
      return [];
    }

    return data.projects.map((project) => ({
      ...project,
      image: projectImageMap[project.title] || "/assets/sustainable lifestyle.jpeg",
      github: project.github || `https://github.com/coderwahaj/${project.title.toLowerCase().split(' ')[0]}`,
      live: project.live || null,
    }));
  };

  const projects = processProjects();

  console.log("Final projects with images:", projects);

  const getStatusColor = (status) => {
    return status === "Completed"
      ? "bg-green-500/10 text-green-400 border-green-500/30"
      :  status === "In Development"
      ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/30"
      : "bg-blue-500/10 text-blue-400 border-blue-500/30";
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-6 sm:px-12 bg-dark-bg relative overflow-hidden"
      aria-label="Projects section"
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
              ?  "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-light-200 to-white bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="bg-gradient-to-r from-light-300 via-light-100 to-light-300 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-light-400 text-lg max-w-2xl mx-auto">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef}
          className="grid md: grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects. map((project, index) => (
            <div
              key={project.id || index}
              className={`group bg-gradient-to-br from-dark-700/50 to-dark-600/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-white/10 transition-all duration-500 border-2 border-dark-500/50 transform hover:-translate-y-3 hover:scale-105 ${
                projectsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-dark-800">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onLoad={() => console.log(`✅ Image loaded: ${project. image}`)}
                    onError={(e) => {
                      console.error(`❌ Failed to load: ${project.image}`);
                      e.target. onerror = null;
                      e. target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23262626' width='400' height='300'/%3E%3Ctext fill='%23666' font-family='sans-serif' font-size='60' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E🚀%3C/text%3E%3C/svg%3E";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    🚀
                  </div>
                )}
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-light-200 transition-colors">
                  {project. title}
                </h3>
                <p className="text-light-400 text-sm mb-4 line-clamp-3">
                  {project. description}
                </p>

                {/* Tech Stack - Show all that fit, then count remaining */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/5 text-light-300 rounded-md text-xs border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {/* View Code Button */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-dark-800 text-white rounded-lg font-semibold transition-all duration-300 border-2 border-white/20 hover:border-white group/btn"
                  >
                    <Github
                      size={18}
                      className="group-hover/btn: rotate-12 transition-transform"
                    />
                    <span>View Code</span>
                  </a>

                  {/* Live Demo Button - only show if live URL exists */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-dark-700 to-dark-600 hover:from-white hover:to-light-200 hover:text-dark-800 text-white rounded-lg font-semibold transition-all duration-300 border-2 border-dark-500 hover:border-white"
                    >
                      <ExternalLink size={18} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wavy separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
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