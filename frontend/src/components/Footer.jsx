import React from 'react';
import { Heart, Code, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: data?. profile?.github || '#',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: data?.profile?.linkedin || '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${data?.profile?.email || ''}`,
      color: 'hover:text-emerald-400'
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-emerald-400">{data?.profile?.name?. charAt(0) || 'W'}</span>
              <span className="text-gray-100">{data?.profile?.name?. split(' ')[1] || 'ahaj'}</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              {data?. profile?.title || 'Software Engineer'} passionate about creating scalable web applications 
              and delivering exceptional user experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link. toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              {data?.profile?.email && (
                <p>
                  <a 
                    href={`mailto:${data. profile.email}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {data.profile.email}
                  </a>
                </p>
              )}
              {data?.profile?.phone && (
                <p>
                  <a 
                    href={`tel:${data.profile.phone}`}
                    className="hover: text-emerald-400 transition-colors"
                  >
                    {data.profile.phone}
                  </a>
                </p>
              )}
              {data?.profile?.location && (
                <p>{data.profile.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>Made by {data?.profile?.name || 'Muhammad Wahaj Asif'}</span>
            </div>
            
            <div className="flex items-center text-gray-400">
              <span>© {currentYear} {data?.profile?.name || 'Muhammad Wahaj Asif'}. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;