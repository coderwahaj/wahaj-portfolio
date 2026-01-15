import React, { useState } from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp, Code, Coffee, Zap } from "lucide-react";

export default function Footer({ data }) {
  const [hoveredStat, setHoveredStat] = useState(null);
  const currentYear = new Date().getFullYear();
  const firstName = data?.profile?.name?. split(" ")[1] || "Wahaj";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const stats = [
    { icon: Code, label: "Projects Completed", value: "6+", color: "from-dark-800 to-dark-700" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞", color: "from-dark-700 to-dark-600" },
    { icon:  Zap, label: "Lines of Code", value: "10K+", color: "from-dark-600 to-dark-500" },
  ];

  return (
    <footer className="bg-light-bg relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #171717 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 relative z-10">
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`group bg-gradient-to-br from-light-50 to-light-100 rounded-2xl p-6 border-2 border-light-200 hover:border-dark-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                  hoveredStat === index ? 'scale-105' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-dark-800 group-hover:text-dark-900 transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-dark-700 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-3xl font-bold text-dark-800 mb-2">
                <span className="bg-gradient-to-r from-dark-800 to-dark-600 bg-clip-text text-transparent">
                  {firstName}
                </span>{" "}
                <span className="text-dark-700">Portfolio</span>
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-dark-800 to-dark-600 rounded-full"></div>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed max-w-md">
              Building digital experiences that make a difference. Specializing in full-stack development, 
              AI-powered solutions, and modern web technologies. 
            </p>
            
            {/* Email Subscription - Optional */}
            <div className="flex gap-2 max-w-md">
              <input
                type="email"
                placeholder="your. email@example.com"
                className="flex-1 px-4 py-2 rounded-xl border-2 border-light-200 focus:border-dark-700 focus:outline-none text-sm transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-dark-800 to-dark-700 hover:from-dark-700 hover:to-dark-600 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-800 font-bold mb-6 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-dark-800 rounded-full"></div>
              Quick Links
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item. toLowerCase());
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-gray-600 hover:text-dark-800 transition-colors duration-300 text-sm font-medium group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-0 group-hover:w-4 h-0.5 bg-dark-800 transition-all duration-300"></span>
                      {item}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-dark-800 font-bold mb-6 text-lg flex items-center gap-2">
              <div className="w-2 h-2 bg-dark-800 rounded-full"></div>
              Connect
            </h4>
            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${data?.profile?.email || "wahajasif488@gmail.com"}`}
                className="flex items-center gap-3 text-gray-600 hover:text-dark-800 transition-colors text-sm group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">Email Me</span>
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Github,
                  href: data?.profile?.github || "https://github.com/coderwahaj",
                  label: "GitHub",
                  gradient: "from-dark-800 to-dark-700"
                },
                {
                  icon: Linkedin,
                  href: data?.profile?.linkedin || "https://linkedin.com/in/muhammad-wahaj-asif-7a9118254",
                  label: "LinkedIn",
                  gradient: "from-dark-700 to-dark-600"
                },
                {
                  icon: Mail,
                  href: `mailto:${data?.profile?.email || "wahajasif488@gmail.com"}`,
                  label: "Email",
                  gradient: "from-dark-600 to-dark-500"
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social. href}
                    target={social.label !== "Email" ? "_blank" :  undefined}
                    rel={social. label !== "Email" ? "noopener noreferrer" : undefined}
                    className={`w-11 h-11 rounded-full bg-gradient-to-br ${social.gradient} hover:scale-110 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden`}
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <Icon size={18} className="relative z-10" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-light-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm flex items-center gap-2 flex-wrap justify-center">
            <span>© {currentYear}</span>
            <span className="font-semibold text-dark-800">
              {data?.profile?.name || "Muhammad Wahaj Asif"}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with
              <Heart className="text-red-500 animate-pulse" size={14} fill="currentColor" />
              and lots of
              <Coffee className="text-dark-700" size={14} />
            </span>
          </p>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-dark-800 to-dark-700 hover:from-dark-700 hover:to-dark-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-2 bg-gradient-to-r from-dark-800 via-dark-600 to-dark-800"></div>
    </footer>
  );
}