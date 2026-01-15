// import React, { useState, useEffect } from 'react';
// import { Menu, X, Briefcase } from 'lucide-react';

// export default function Header({ data }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);

//       // Detect active section
//       const sections = ['home', 'about', 'projects', 'experience', 'contact'];
//       const scrollPosition = window.scrollY + 100;

//       for (const section of sections) {
//         const element = document. getElementById(section);
//         if (element) {
//           const offsetTop = element.offsetTop;
//           const offsetHeight = element.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window. addEventListener('scroll', handleScroll);
//     handleScroll(); // Check on mount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { id:  'home', label: 'Home' },
//     { id:  'about', label: 'About Me' },
//     { id: 'projects', label: 'Projects' },
//     { id: 'experience', label: 'Experience' },
//     { id: 'contact', label: 'Contact' },
//   ];

//   const firstName = data?.profile?. name?.split(' ')[1] || 'Wahaj';

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-slate-800'
//           : 'bg-transparent'
//       }`}
//     >
//       <nav className="max-w-7xl mx-auto px-6 sm:px-12 py-5">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <button
//             onClick={() => scrollToSection('home')}
//             className="text-3xl font-bold text-white hover:text-light-200 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
//             aria-label="Go to home"
//           >
//             <span className="relative">
//               {firstName}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
//             </span>
//             <span className="hidden sm:inline text-gray-500 text-base font-normal group-hover: text-light-400 transition-colors duration-300">
//               portfolio
//             </span>
//           </button>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-10">
//             {navItems.map((item) => (
//               <button
//                 key={item. id}
//                 onClick={() => scrollToSection(item.id)}
//                 className={`text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-base relative group ${
//                   activeSection === item.id ?  'text-white' : ''
//                 }`}
//               >
//                 {item.label}
                
//                 {/* Permanent underline when active */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
//                     activeSection === item.id ?  'w-full' : 'w-0'
//                   }`}
//                 ></span>
                
//                 {/* Hover underline (only shows when NOT active) */}
//                 <span
//                   className={`absolute bottom-0 left-0 h-0.5 bg-white/50 group-hover:w-full transition-all duration-300 ${
//                     activeSection === item.id ? 'w-0 opacity-0' : 'w-0'
//                   }`}
//                 ></span>
//               </button>
//             ))}
            
//             {/* Resume Button */}
//             <a
//               href={data?.profile?.cvUrl || '/assets/Wahaj-Resume-MERN.pdf'}
//               download="Muhammad_Wahaj_Asif_Resume.pdf"
//               className="bg-white hover: bg-light-200 text-dark-800 font-bold px-7 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/30 flex items-center gap-2 text-base"
//             >
//               <Briefcase size={18} />
//               Resume
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden text-white hover:text-light-400 transition-colors duration-300"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-6 pb-6 animate-fade-in">
//             <div className="flex flex-col gap-4">
//               {navItems. map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className={`text-gray-300 hover:text-white transition-colors duration-300 font-semibold text-left py-3 border-b text-base ${
//                     activeSection === item.id
//                       ? 'text-white border-white'
//                       : 'border-slate-800'
//                   }`}
//                 >
//                   {item.label}
//                 </button>
//               ))}
//               <a
//                 href={data?.profile?.cvUrl || '/assets/Wahaj-Resume-MERN. pdf'}
//                 download="Muhammad_Wahaj_Asif_Resume.pdf"
//                 className="bg-white hover:bg-light-200 text-dark-800 font-bold px-6 py-3 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 mt-2"
//               >
//                 <Briefcase size={18} />
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X, Briefcase } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id:  "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window. addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-dark-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="text-2xl sm:text-3xl font-bold text-white hover:text-light-200 transition-colors relative group z-50"
            >
              Wahaj
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-light-200 to-white group-hover:w-full transition-all duration-300"></span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item. id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item. id)}
                  className={`relative text-base font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-light-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-light-200 to-white transition-all duration-300 ${
                      activeSection === item. id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}

              {/* Desktop Resume Button */}
              <a
                href="/assets/Wahaj-Resume-MERN.pdf"
                download
                className="flex items-center gap-2 bg-white hover: bg-light-200 text-dark-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover: shadow-xl hover:shadow-white/20"
              >
                <Briefcase size={18} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-light-200 transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Click to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-700">
          <a
            href="#home"
            onClick={(e) => {
              handleNavClick(e, "home");
              setIsMenuOpen(false);
            }}
            className="text-2xl font-bold text-white"
          >
            Wahaj
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-light-200 transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-2 p-6">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                handleNavClick(e, item.id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-white/10 text-white border-l-4 border-white shadow-lg"
                  : "text-light-400 hover:bg-white/5 hover:text-white hover: border-l-4 hover: border-light-400"
              }`}
              style={{
                animation: isMenuOpen
                  ? `slideIn 0.3s ease-out ${index * 50}ms both`
                  : "none",
              }}
            >
              <span className="text-lg font-medium">{item. label}</span>
            </a>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/assets/Wahaj-Resume-MERN.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 flex items-center justify-center gap-2 bg-white hover:bg-light-200 text-dark-900 font-semibold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Briefcase size={20} />
            Download Resume
          </a>
        </nav>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}