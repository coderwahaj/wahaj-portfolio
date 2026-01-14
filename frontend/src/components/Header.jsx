import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ data }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Extract first letter and second word from name
  const displayName = data?.profile?.name?.split(" ")[1] || "Wahaj";
  const firstLetter = displayName.charAt(0);
  const restOfName = displayName.slice(1);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-emerald-400">{firstLetter}</span>
            <span className="text-gray-100">{restOfName}</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
            <ul className="flex flex-col space-y-4 px-6 py-6">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 cursor-pointer block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
