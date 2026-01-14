// import React from 'react';
// import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';

// const Footer = ({ data }) => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     {
//       name: 'GitHub',
//       icon: Github,
//       href: data?. profile?.github || '#',
//       color: 'hover:text-gray-300'
//     },
//     {
//       name: 'LinkedIn',
//       icon: Linkedin,
//       href: data?.profile?.linkedin || '#',
//       color: 'hover:text-blue-400'
//     },
//     {
//       name: 'Email',
//       icon: Mail,
//       href: `mailto:${data?.profile?.email || ''}`,
//       color: 'hover:text-emerald-400'
//     }
//   ];

//   return (
//     <footer className="bg-gray-900 border-t border-gray-800 py-12">
//       <div className="container mx-auto px-6">
//         <div className="grid md:grid-cols-3 gap-8 mb-8">
//           {/* Brand Section */}
//           <div>
//             <div className="text-2xl font-bold mb-4">
//               <span className="text-emerald-400">{data?.profile?.name?. charAt(0) || 'W'}</span>
//               <span className="text-gray-100">{data?.profile?.name?. split(' ')[1] || 'ahaj'}</span>
//             </div>
//             <p className="text-gray-400 leading-relaxed mb-4">
//               {data?. profile?.title || 'Software Engineer'} passionate about creating scalable web applications
//               and delivering exceptional user experiences.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.href}
//                   target={social.href.startsWith('http') ? '_blank' : '_self'}
//                   rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
//                   className={`text-gray-400 transition-colors duration-300 ${social.color}`}
//                   aria-label={social.name}
//                 >
//                   <social.icon size={20} />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
//                 <li key={link}>
//                   <button
//                     onClick={() => {
//                       const element = document.getElementById(link. toLowerCase());
//                       if (element) {
//                         element.scrollIntoView({ behavior: 'smooth' });
//                       }
//                     }}
//                     className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
//                   >
//                     {link}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
//             <div className="space-y-2 text-gray-400">
//               {data?.profile?.email && (
//                 <p>
//                   <a
//                     href={`mailto:${data. profile.email}`}
//                     className="hover:text-emerald-400 transition-colors"
//                   >
//                     {data.profile.email}
//                   </a>
//                 </p>
//               )}
//               {data?.profile?.phone && (
//                 <p>
//                   <a
//                     href={`tel:${data.profile.phone}`}
//                     className="hover: text-emerald-400 transition-colors"
//                   >
//                     {data.profile.phone}
//                   </a>
//                 </p>
//               )}
//               {data?.profile?.location && (
//                 <p>{data.profile.location}</p>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="border-t border-gray-800 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center text-gray-400 mb-4 md:mb-0">
//               <span>Made by {data?.profile?.name || 'Muhammad Wahaj Asif'}</span>
//             </div>

//             <div className="flex items-center text-gray-400">
//               <span>© {currentYear} {data?.profile?.name || 'Muhammad Wahaj Asif'}. All rights reserved.</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ data }) {
  const currentYear = new Date().getFullYear();
  const firstName = data?.profile?.name?.split(" ")[1] || "Wahaj";

  return (
    <footer className="bg-dark-bg border-t border-gray-800 py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="text-cyan-accent">{firstName}</span> Portfolio
            </h3>
            <p className="text-gray-400 text-sm">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block text-gray-400 hover:text-cyan-accent transition-colors duration-300 text-sm"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              <a
                href={data?.profile?.github || "https://github.com/coderwahaj"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-accent text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={
                  data?.profile?.linkedin ||
                  "https://linkedin.com/in/muhammad-wahaj-asif-7a9118254"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-accent text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${
                  data?.profile?.email || "wahajasif488@gmail.com"
                }`}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-cyan-accent text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} {data?.profile?.name || "Muhammad Wahaj Asif"}. Made
            with
            <Heart className="text-cyan-accent" size={16} fill="currentColor" />
            and lots of coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
