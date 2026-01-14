import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, DiscAlbum } from "lucide-react";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 sm:px-12 bg-light-bg relative overflow-hidden"
      aria-label="About section"
    >
      {/* Curved Wave at Top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
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

      <div className="max-w-7xl mx-auto relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-slide-in-left">
            {/* Name with same size as heading and sliding line */}
            <div className="mb-6">
              <p className="text-4xl sm:text-5xl font-bold text-dark-800 mb-2">
                {data?.profile?.name || "Wahaj Asif"}
              </p>
              {/* Sliding line animation - monochrome gradient */}
              <div className="relative h-1 w-full bg-light-200 rounded-full overflow-hidden">
                <div className="absolute h-full w-32 bg-gradient-to-r from-red-800 via-red-400 to-red-500 rounded-full animate-slide"></div>
              </div>
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-dark-700 via-dark-600 to-dark-500 bg-clip-text text-transparent">
                Know more
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-red-800 via-red-400 to-red-500 bg-clip-text text-transparent">
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
                . Passionate about building{" "}
              </span>
              <span className="font-semibold text-dark-600">responsive</span>
              <span className="text-gray-700">, </span>
              <span className="font-semibold text-dark-600">
                high-performance
              </span>
              <span className="text-gray-700">
                {" "}
                applications that merge sleek design with seamless
                functionality. Dedicated to delivering{" "}
              </span>
              <span className="font-semibold text-dark-700">scalable</span>
              <span className="text-gray-700">, </span>
              <span className="font-semibold text-dark-700">user-centric</span>
              <span className="text-gray-700">
                {" "}
                solutions that drive business success.{" "}
              </span>
            </p>

            {/* Contact Info with monochrome icons */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <span>{data?.profile?.location || "Lahore, Pakistan"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-600 to-dark-500 flex items-center justify-center text-white shadow-lg group-hover: scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <a
                  href={`mailto:${
                    data?.profile?.email || "wahajasif488@gmail.com"
                  }`}
                  className="hover:text-dark-800 transition-colors"
                >
                  {data?.profile?.email || "wahajasif488@gmail. com"}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-dark-700 to-dark-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <span>{data?.profile?.phone || "+92-313-7263488"}</span>
              </div>
            </div>

            {/* Social Links with monochrome gradients */}
            <div className="flex items-center gap-4">
              <a
                href={data?.profile?.github || "https://github.com/coderwahaj"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-800 to-dark-700 hover:from-dark-700 hover:to-dark-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/30"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={
                  data?.profile?.linkedin ||
                  "https://linkedin.com/in/muhammad-wahaj-asif-7a9118254"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-700 to-dark-600 hover:from-dark-600 hover:to-dark-500 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/30"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${
                  data?.profile?.email || "wahajasif488@gmail.com"
                }`}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-dark-600 to-dark-500 hover:from-dark-700 hover:to-dark-600 text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-gray-500/30"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

                    {/* Right side - Image with elegant monochrome border design */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Outer frame with gradient */}
              <div className="relative p-1 bg-gradient-to-br from-dark-800 via-dark-600 to-dark-800 rounded-3xl">
                {/* Inner white padding */}
                <div className="bg-white p-3 rounded-3xl">
                  {/* Image container with border */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-dark-800 shadow-2xl">
                    {/* Main image */}
                    <img
                      src={data?. profile?.profileImage || 'https://avatars.githubusercontent.com/coderwahaj'}
                      alt={data?.profile?.name || 'Muhammad Wahaj Asif'}
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

      {/* Curved Wave at Bottom (mirrored from top) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-24 sm:h-32 md:h-40"
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
    </section>
  );
}
