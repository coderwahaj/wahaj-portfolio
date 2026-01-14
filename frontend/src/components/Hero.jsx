import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Hero({ data }) {
  const [showCursor, setShowCursor] = useState(true);
  const [terminalText, setTerminalText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const commands = "npm run build-future";
    let index = 0;
    
    const timer = setInterval(() => {
      if (index <= commands.length) {
        setTerminalText(commands. slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-20 flex items-center justify-center relative overflow-hidden bg-dark-bg"
      aria-label="Hero section"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-700 to-dark-bg"></div>
        
        {/* Radial Gradient Spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="max-w-7xl w-full px-6 sm:px-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Big Greeting */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Hi!  Welcome to My{' '}
            <span className="text-light-400">Portfolio</span>
          </h1>

          {/* Role */}
          <h2 className="font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight animate-fade-in-up text-white">
            I'm a{' '}
            <span className="text-light-400">Software Engineer</span>
          </h2>

          {/* Tagline */}
          <p className="text-light-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in font-medium" style={{ animationDelay: '0.2s' }}>
            Building scalable web applications with modern technologies and clean architecture.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="group bg-white hover:bg-light-200 text-dark-800 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3 mx-auto text-base animate-scale-in"
            style={{ animationDelay: '0.4s' }}
          >
            Learn a little about ME! 
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
          </button>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a
              href={data?. profile?.github || 'https://github.com/coderwahaj'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={data?.profile?.linkedin || 'https://linkedin.com/in/muhammad-wahaj-asif-7a9118254'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${data?.profile?.email || 'wahajasif488@gmail.com'}`}
              className="text-light-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* VS Code Screenshot Section - ELEGANT BORDERED DESIGN */}
        <div className="max-w-6xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-3 bg-gradient-to-r from-white/20 via-light-300/30 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-glow-pulse"></div>
            
            {/* Middle Border - Gradient */}
            <div className="absolute -inset-2 bg-gradient-to-br from-white via-light-200 to-light-100 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            {/* Inner Border */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-light-50 to-white rounded-2xl"></div>
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl transform group-hover:scale-[1.01] transition-all duration-500">
              {/* Place your VS Code screenshot here */}
              <img
                src="/assets/vscode.png"  // ← ADD YOUR IMAGE HERE
                alt="VS Code Editor - Portfolio Project"
                className="w-full h-auto"
              />
              
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-2 -left-2 w-16 h-16 border-t-4 border-l-4 border-white rounded-tl-2xl opacity-50"></div>
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-2xl opacity-50"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-4 border-l-4 border-white rounded-bl-2xl opacity-50"></div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-4 border-r-4 border-white rounded-br-2xl opacity-50"></div>

            {/* Badge/Label */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Terminal size={16} className="text-dark-800" />
                <span className="text-dark-800 font-semibold text-sm">Live Coding Environment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
            className="text-light-600 hover:text-white transition-colors duration-300"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}