import React, { useEffect, useState } from 'react';
import { Code, Database, Wrench, Brain, Coffee } from 'lucide-react';

const SkillBar = ({ skill, index }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, index * 100 + 500);

    return () => clearTimeout(timer);
  }, [skill.level, index]);

  return (
    <div className="mb-4 group">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-200 font-medium text-sm sm:text-base">{skill.name}</span>
        <span className="text-emerald-400 font-semibold text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        >
          <div className="h-full bg-gradient-to-r from-white/20 to-transparent rounded-full" />
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon: Icon, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-emerald-500/30 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 sm:p-3 bg-emerald-500/10 rounded-lg mr-3 sm:mr-4 flex items-center justify-center">
          <Icon className="text-emerald-400" size={20} />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
};

const Skills = ({ data }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState([]);

  useEffect(() => {
    if (data?.skills) {
      const allSkills = [
        ...data.skills.frontend,
        ...data.skills.backend,
        ...data.skills.ai_ml,
        ...data.skills.java,
        ...data.skills.tools,
      ];

      if (activeTab === 'all') {
        setFilteredSkills(allSkills);
      } else {
        setFilteredSkills(
          allSkills.filter((skill) =>
            skill.category.toLowerCase().replace(/[^a-z]/g, '') ===
            activeTab.toLowerCase().replace(/[^a-z]/g, '')
          )
        );
      }
    }
  }, [data, activeTab]);

  if (!data?.skills) return null;

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'aiml', label: 'AI/ML' },
    { id: 'java', label: 'Java' },
    { id: 'tools', label: 'Tools' },
  ];

  return (
    <section id="skills" className="py-12 sm:py-20 bg-gray-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJoZXgiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxwYXRoIGQ9Ik0zMCAwTDUyIDEyTDUyIDM2TDMwIDQ4TDggMzZMOCAxMkwzMCAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHA+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGV4KSIgLz4KPC9zdmc+Cg==')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Technical
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 ml-2 sm:ml-4">
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Expertise across modern web technologies and frameworks
          </p>
        </div>

        {/* Skill Filter Tabs (responsive: horizontal scroll on small screens) */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-2 border border-gray-800 w-full max-w-3xl overflow-x-auto -mx-2 sm:mx-0">
            <div className="flex space-x-2 px-2 sm:px-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-pressed={activeTab === tab.id}
                  role="tab"
                  className={`whitespace-nowrap px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-emerald-500 text-black shadow-lg'
                      : 'text-gray-400 hover:text-emerald-400 hover:bg-gray-800/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Display */}
        {activeTab === 'all' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <SkillCategory title="Frontend Development" skills={data.skills.frontend} icon={Code} delay={200} />
            <SkillCategory title="Backend Development" skills={data.skills.backend} icon={Database} delay={400} />
            <SkillCategory title="AI & Machine Learning" skills={data.skills.ai_ml} icon={Brain} delay={600} />
            <SkillCategory title="Java Development" skills={data.skills.java} icon={Coffee} delay={800} />
            <SkillCategory title="Tools & Technologies" skills={data.skills.tools} icon={Wrench} delay={1000} />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Stats Section (compact on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 sm:mt-16">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-1">6+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-1">25+</div>
            <div className="text-gray-400 text-sm">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-1">2+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-emerald-400 mb-1">Development</div>
            <div className="text-gray-400 text-sm">Specialization</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
