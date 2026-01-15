import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document. getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window. addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id:  'home', label: 'Home' },
    { id:  'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const firstName = data?.profile?. name?.split(' ')[1] || 'Wahaj';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-3xl font-bold text-white hover:text-light-200 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            aria-label="Go to home"
          >
            <span className="relative">
              {firstName}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </span>
            <span className="hidden sm:inline text-gray-500 text-base font-normal group-hover: text-light-400 transition-colors duration-300">
              portfolio
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item. id}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-base relative group ${
                  activeSection === item.id ?  'text-white' : ''
                }`}
              >
                {item.label}
                
                {/* Permanent underline when active */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeSection === item.id ?  'w-full' : 'w-0'
                  }`}
                ></span>
                
                {/* Hover underline (only shows when NOT active) */}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-0 opacity-0' : 'w-0'
                  }`}
                ></span>
              </button>
            ))}
            
            {/* Resume Button */}
            <a
              href={data?.profile?.cvUrl || '/assets/Wahaj-Resume-MERN.pdf'}
              download="Muhammad_Wahaj_Asif_Resume.pdf"
              className="bg-white hover: bg-light-200 text-dark-800 font-bold px-7 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/30 flex items-center gap-2 text-base"
            >
              <Briefcase size={18} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-light-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems. map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-left py-3 border-b text-base ${
                    activeSection === item.id
                      ? 'text-white border-white'
                      : 'border-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={data?.profile?.cvUrl || '/assets/Wahaj-Resume-MERN. pdf'}
                download="Muhammad_Wahaj_Asif_Resume.pdf"
                className="bg-white hover:bg-light-200 text-dark-800 font-bold px-6 py-3 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 mt-2"
              >
                <Briefcase size={18} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}