import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About({ data }) {
  const [leftRef, leftVisible] = useScrollAnimation(0.2);
  const [rightRef, rightVisible] = useScrollAnimation(0.2);
  const [toolsRef, toolsVisible] = useScrollAnimation(0.3);

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 sm:px-12 bg-light-bg relative pb-32"
      aria-label="About section"
    >
      {/* Curved Wave at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md: h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
            fill="#171717"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-18">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content with scroll animation */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            {/* Name with same size as heading and sliding line */}
            <div className="mb-6">
              <p className="text-4xl sm:text-5xl font-bold text-dark-800 mb-2">
                {data?.profile?.name || "Wahaj Asif"}
              </p>
              {/* Sliding line animation - monochrome gradient */}
              <div className="relative h-1 w-full bg-light-200 rounded-full overflow-hidden">
                <div className="absolute h-full w-32 bg-gradient-to-r from-dark-800 via-dark-600 to-dark-700 rounded-full animate-slide"></div>
              </div>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-700 via-dark-600 to-dark-500 bg-clip-text text-transparent">
                Know more
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-dark-800 via-dark-700 to-dark-600 bg-clip-text text-transparent">
                About me
              </span>
            </h2>

            {/* Enhanced bio with monochrome emphasis */}
            <p className="text-lg leading-relaxed mb-6">
              <span className="font-semibold text-dark-800">
                Full Stack Developer
              </span>{" "}
              <span className="text-gray-700">
                specializing in modern web development with expertise in{" "}
              </span>
              <span className="font-semibold text-dark-700">React</span>
              <span className="text-gray-700"> and </span>
              <span className="font-semibold text-dark-700">Next.js</span>
              <span className="text-gray-700">
                .  Passionate about building{" "}
              </span>
              <span className="font-semibold text-dark-600">responsive</span>
              <span className="text-gray-700">, </span>
              <span className="font-semibold text-dark-600">
                high-performance
              </span>
              <span className="text-gray-700">
                {" "}
                applications that merge sleek design with seamless
                functionality.  Dedicated to delivering{" "}
              </span>
              <span className="font-semibold text-dark-700">scalable</span>
              <span className="text-gray-700">, </span>
              <span className="font-semibold text-dark-700">user-centric</span>
              <span className="text-gray-700">
                {" "}
                solutions that drive business success. {" "}
              </span>
            </p>

            {/* Contact Info with monochrome icons */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: MapPin,
                  text: data?.profile?.location || "Lahore, Pakistan",
                  gradient: "from-dark-700 to-dark-600",
                },
                {
                  icon:  Mail,
                  text: data?.profile?.email || "wahajasif488@gmail.com",
                  gradient: "from-dark-600 to-dark-500",
                  href: `mailto:${data?.profile?.email || "wahajasif488@gmail.com"}`,
                },
                {
                  icon: Phone,
                  text: data?.profile?.phone || "+92-313-7263488",
                  gradient: "from-dark-700 to-dark-500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 text-gray-700 group transition-all duration-300 ${
                    leftVisible
                      ?  "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${(idx + 3) * 100}ms` }}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <item.icon size={20} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-dark-800 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links with monochrome gradients */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: Github,
                  href: data?.profile?.github || "https://github.com/coderwahaj",
                  gradient: "from-dark-800 to-dark-700",
                  hoverGradient:  "hover:from-dark-700 hover:to-dark-600",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: 
                    data?.profile?.linkedin ||
                    "https://linkedin.com/in/muhammad-wahaj-asif-7a9118254",
                  gradient:  "from-dark-700 to-dark-600",
                  hoverGradient: "hover:from-dark-600 hover:to-dark-500",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: `mailto:${data?.profile?.email || "wahajasif488@gmail.com"}`,
                  gradient: "from-dark-600 to-dark-500",
                  hoverGradient:  "hover:from-dark-700 hover:to-dark-600",
                  label: "Email",
                },
              ]. map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" :  undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" :  undefined}
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} ${social.hoverGradient} text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/30 ${
                    leftVisible
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-75"
                  }`}
                  style={{ transitionDelay: `${(idx + 6) * 100}ms` }}
                  aria-label={social.label}
                >
                  <social. icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Image with scroll animation */}
          <div
            ref={rightRef}
            className={`relative transition-all duration-1000 ${
              rightVisible
                ?  "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              {/* Outer frame with gradient */}
              <div className="relative p-1 bg-gradient-to-br from-dark-800 via-dark-600 to-dark-800 rounded-3xl">
                {/* Inner white padding */}
                <div className="bg-white p-3 rounded-3xl">
                  {/* Image container with border */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-dark-800 shadow-2xl">
                    {/* Main image */}
                    <img
                      src={
                        data?.profile?. profileImage ||
                        "https://avatars.githubusercontent.com/coderwahaj"
                      }
                      alt={data?. profile?.name || "Muhammad Wahaj Asif"}
                      className="w-full h-auto object-cover"
                    />

                    {/* Subtle corner accents (inside image) */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-white/20"></div>
                    <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-white/20"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-white/20"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-white/20"></div>
                  </div>
                </div>
              </div>

              {/* Animated outer glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-dark-700 via-light-400 to-dark-700 rounded-3xl blur-lg opacity-30 -z-10 animate-pulse"></div>

              {/* Decorative corner brackets (outside) */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-4 border-t-4 border-dark-800 rounded-tl-lg"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-r-4 border-t-4 border-dark-800 rounded-tr-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-l-4 border-b-4 border-dark-800 rounded-bl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-4 border-b-4 border-dark-800 rounded-br-lg"></div>
            </div>
          </div>
        </div>

        
        </div>
      

      {/* Curved Wave at Bottom - Mirrored from top */}
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