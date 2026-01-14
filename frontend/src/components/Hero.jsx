import React, { useEffect, useState } from "react";
import { ChevronDown, Download, ExternalLink } from "lucide-react";

export default function Hero({ data }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Full-Stack Developer",
    "MERN Stack Engineer",
    "AI Automation Specialist",
    "Software Engineer",
    "Web Application Developer",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      setDisplayText(currentTitle);
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2500);
      return () => clearTimeout(timeout);
    }

    if (displayText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const firstName = data?.profile?.name?.split(" ")[0] || "Muhammad";
  const restOfName =
    data?.profile?.name?.split(" ").slice(1).join(" ") || "Wahaj Asif";

  return (
    <section
      id="home"
      className="min-h-screen py-12 flex items-center justify-center relative overflow-hidden bg-gray-950"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
        <div className="hidden sm:block absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgo8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTExODI3IiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMiIvPgo8L3BhdHRlcm4+CjwvZGVmcz4KPHI+CjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiIC8+Cjwvc3ZnPgo=')] opacity-15"></div>
      </div>

      <div className="max-w-5xl w-full px-4 sm:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-emerald-400 text-sm sm:text-base font-medium mb-2">
              Hello, I'm
            </p>

            <h1 className="font-bold text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
              {firstName}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                {restOfName}
              </span>
            </h1>

            <div className="h-10 flex items-center justify-center lg:justify-start mb-4">
              <span className="text-base sm:text-xl text-gray-300 font-medium tracking-tight">
                {displayText}
                <span className="inline-block ml-1 motion-safe:animate-pulse">
                  |
                </span>
              </span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              {data?.profile?.summary ||
                "Software Engineer specializing in full-stack development with MERN stack, AI automation, and modern web technologies."}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                type="button"
                aria-label="View projects"
                className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                View My Work
                <ExternalLink size={16} />
              </button>

              <a
                href={data?.profile?.cvUrl || "/assets/Wahaj-Resume-MERN.pdf"}
                download="Muhammad_Wahaj_Asif_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download CV"
                className="w-full sm:w-auto border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-102 flex items-center justify-center gap-2"
                onClick={(e) => {
                  if (!data?.profile?.cvUrl) {
                    // ✅ FIXED - now checking data?.profile?.cvUrl
                    e.preventDefault();
                    console.log("CV URL not found");
                  }
                }}
              >
                Download CV
                <Download size={16} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full opacity-25 group-hover:opacity-40 blur-xl transition-opacity duration-500"></div>

              <div className="relative rounded-full overflow-hidden border-4 border-emerald-400/20 shadow-2xl w-44 h-44 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
                <img
                  src={
                    data?.profile?.profileImage ||
                    "https://avatars.githubusercontent.com/u/coderwahaj"
                  }
                  alt={data?.profile?.name || "Muhammad Wahaj Asif"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="hidden sm:block absolute top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full motion-safe:animate-pulse"></div>
              <div className="hidden md:block absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full motion-safe:animate-pulse" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("skills")}
            aria-label="Scroll to skills"
            className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 motion-safe:animate-bounce"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
