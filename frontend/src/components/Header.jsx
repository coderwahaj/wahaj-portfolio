// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Header = ({ data }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setIsMenuOpen(false);
//   };

//   // Extract first letter and second word from name
//   const displayName = data?.profile?.name?.split(" ")[1] || "Wahaj";
//   const firstLetter = displayName.charAt(0);
//   const restOfName = displayName.slice(1);
//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-6 py-4">
//         <nav className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-2xl font-bold">
//             <span className="text-emerald-400">{firstLetter}</span>
//             <span className="text-gray-100">{restOfName}</span>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden md:flex space-x-8">
//             <li>
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
//               >
//                 Home
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("skills")}
//                 className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
//               >
//                 Skills
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("projects")}
//                 className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
//               >
//                 Projects
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("experience")}
//                 className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
//               >
//                 Experience
//               </button>
//             </li>
//             <li>
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
//               >
//                 Contact
//               </button>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </nav>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
//             <ul className="flex flex-col space-y-4 px-6 py-6">
//               <li>
//                 <button
//                   onClick={() => scrollToSection("home")}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("skills")}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
//                 >
//                   Skills
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("projects")}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
//                 >
//                   Projects
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("experience")}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
//                 >
//                   Experience
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => scrollToSection("contact")}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
//                 >
//                   Contact
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';

export default function Header({ data }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window. addEventListener('scroll', handleScroll);
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
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const firstName = data?. profile?.name?.split(' ')[1] || 'Wahaj';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - WHITE, not cyan */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-white hover:text-cyan-accent transition-colors duration-300 flex items-center gap-2"
          >
            <span>{firstName}</span>
            <span className="hidden sm:inline text-gray-500 text-sm font-normal">portfolio</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-accent transition-colors duration-300 font-medium text-sm relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-accent group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Resume Button - KEEP cyan */}
            <a
              href={data?.profile?.cvUrl || '/assets/Wahaj-Resume-MERN.pdf'}
              download="Muhammad_Wahaj_Asif_Resume.pdf"
              className="bg-cyan-accent hover:bg-cyan-dark text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-accent/30 flex items-center gap-2 text-sm"
            >
              <Briefcase size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cyan-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item. id)}
                  className="text-gray-300 hover:text-cyan-accent transition-colors duration-300 font-medium text-left py-2 border-b border-slate-800"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={data?.profile?. cvUrl || '/assets/Wahaj-Resume-MERN. pdf'}
                download="Muhammad_Wahaj_Asif_Resume.pdf"
                className="bg-cyan-accent hover:bg-cyan-dark text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 mt-2"
              >
                <Briefcase size={16} />
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
