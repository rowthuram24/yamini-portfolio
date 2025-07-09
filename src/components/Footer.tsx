import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/yamini12345678',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'linkedin.com/in/yamini-bathula-743a2b251',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Gmail',
      icon: Mail,
      url: 'mailto:yaminibattula4@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Description */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Bathula Yamini</h3>
            <p className="text-gray-400 max-w-md">
             Computer Science Engineer passionate about creating AI/ML solutions and innovative technology projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <button
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 text-gray-400 ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Designed with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Bathula Yamini</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Bathula Yamini. All rights reserved.
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
