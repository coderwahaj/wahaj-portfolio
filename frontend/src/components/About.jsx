import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 sm:px-12 bg-light-bg relative overflow-hidden"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="animate-slide-in-left">
            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wider mb-3">
              {data?.profile?.name || "Muhammad Wahaj Asif"}
            </p>

            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Know more <br />
              <span className="text-cyan-accent">About me</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {data?.profile?.summary ||
                "Full Stack Developer specializing in modern web development with expertise in React and Next.js.  Passionate about building responsive, high-performance applications that merge sleek design with seamless functionality.  Dedicated to delivering scalable, user-centric solutions that drive business success."}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="text-cyan-accent" size={20} />
                <span>{data?.profile?.location || "Lahore, Pakistan"}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="text-cyan-accent" size={20} />
                <a
                  href={`mailto:${
                    data?.profile?.email || "wahajasif488@gmail.com"
                  }`}
                  className="hover:text-cyan-accent transition-colors"
                >
                  {data?.profile?.email || "wahajasif488@gmail.com"}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="text-cyan-accent" size={20} />
                <span>{data?.profile?.phone || "+92-313-7263488"}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={data?.profile?.github || "https://github.com/coderwahaj"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-cyan-accent text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
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
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-cyan-accent text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${
                  data?.profile?.email || "wahajasif488@gmail.com"
                }`}
                className="w-12 h-12 rounded-full bg-gray-200 hover:bg-cyan-accent text-gray-700 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={
                    data?.profile?.profileImage ||
                    "https://avatars.githubusercontent.com/coderwahaj"
                  }
                  alt={data?.profile?.name || "Muhammad Wahaj Asif"}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Geometric shapes overlay */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white rounded-3xl shadow-xl z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white rounded-2xl shadow-xl z-20"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-cyan-accent rounded-xl shadow-xl z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
