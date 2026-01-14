import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag, CheckCircle, Clock, Zap } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'completed': return <CheckCircle className="text-emerald-400" size={16} />;
      case 'in development': return <Clock className="text-amber-400" size={16} />;
      case 'live': return <Zap className="text-blue-400" size={16} />;
      default: return <Clock className="text-gray-400" size={16} />;
    }
  };

  const getStatusColor = (status) => {
    switch ((status || '').toLowerCase()) {
      case 'completed': return 'text-emerald-400 bg-emerald-400/10';
      case 'in development': return 'text-amber-400 bg-amber-400/10';
      case 'live': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  const visibleFeatures = project.features
    ? project.features.slice(0, (isHovered || isExpanded) ? project.features.length : 3)
    : [];

  return (
    <article
      className={`group bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 transition-all duration-500 overflow-hidden transform
                  hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-bold text-white truncate group-hover:text-emerald-400 transition-colors duration-300">
                {project.title}
              </h3>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title} live`}
                  className="text-gray-400 hover:text-emerald-400 transition-colors ml-1 flex-shrink-0"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm">
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${getStatusColor(project.status)} text-xs font-medium`}>
                {getStatusIcon(project.status)}
                <span className="capitalize">{project.status}</span>
              </span>

              <span className="text-gray-500 text-xs">•</span>
              <span className="text-gray-400 text-xs capitalize">{project.type}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center gap-2">
            <Tag size={14} />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2.5 py-0.5 bg-gray-800 text-emerald-400 text-xs rounded-full border border-emerald-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features</h4>
            <ul className="space-y-2 mb-2">
              {visibleFeatures.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-gray-300 text-sm flex items-start gap-2">
                  <CheckCircle size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Show more toggle for small screens (visible) and helpful on touch) */}
            {project.features.length > 3 && (
              <div className="flex items-center justify-between">
                <p className="hidden sm:block text-emerald-400 text-sm">
                  {isHovered || isExpanded
                    ? `Showing all ${project.features.length} features`
                    : `Hover to see ${project.features.length - 3} more features...`}
                </p>

                {/* mobile toggle */}
                <button
                  type="button"
                  onClick={() => setIsExpanded(prev => !prev)}
                  className="sm:hidden text-emerald-400 text-sm font-medium"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Show less' : `Show ${project.features.length - 3} more`}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-800">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              aria-label={`View ${project.title} live`}
            >
              <ExternalLink size={16} />
              <span className="text-sm">View Live</span>
            </a>
          )}

          <a
            href={project.repoUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            aria-label={`View ${project.title} code`}
          >
            <Github size={16} />
            <span className="text-sm">View Code</span>
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ data }) => {
  const [filter, setFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  React.useEffect(() => {
    if (data?.projects) {
      if (filter === 'all') {
        setFilteredProjects(data.projects);
      } else {
        setFilteredProjects(
          data.projects.filter((project) =>
            project.type.toLowerCase().includes(filter.toLowerCase()) ||
            project.status.toLowerCase() === filter.toLowerCase()
          )
        );
      }
    }
  }, [data, filter]);

  if (!data?.projects) return null;

  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'ai application', label: 'AI Applications' },
    { value: 'web application', label: 'Web Apps' },
    { value: 'saas', label: 'SaaS' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'desktop application', label: 'Desktop Apps' },
    { value: 'completed', label: 'Completed' },
    { value: 'live', label: 'Live' }
  ];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl hidden sm:block" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-4">
            A showcase of my work spanning web applications, SaaS products, and e-commerce solutions
          </p>

          {/* Filter Buttons: horizontally scrollable on small screens */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === option.value
                    ? 'bg-emerald-500 text-black'
                    : 'bg-gray-900/50 text-gray-400 hover:text-emerald-400 hover:bg-gray-800/50 border border-gray-800'
                }`}
                type="button"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id || index} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-2xl font-bold text-white mb-3">
              Interested in working together?
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6">
              Let's discuss your next project and bring your ideas to life
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
