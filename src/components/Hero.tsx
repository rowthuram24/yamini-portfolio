import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Rocket, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
  'AI/ML Developer',
  'Data Analytics Enthusiast',
];

  useEffect(() => {
    let currentText = texts[currentTextIndex];
    let currentIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      if (!isDeleting && currentIndex <= currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex++;
      } else if (isDeleting && currentIndex >= 0) {
        setDisplayText(currentText.slice(0, currentIndex));
        currentIndex--;
      }

      if (currentIndex > currentText.length) {
        setTimeout(() => {
          isDeleting = true;
        }, 2000);
      }

      if (isDeleting && currentIndex < 0) {
        isDeleting = false;
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        currentText = texts[(currentTextIndex + 1) % texts.length];
        currentIndex = 0;
      }
    };

    const interval = setInterval(typeText, isDeleting ? 50 : 100);
    return () => clearInterval(interval);
  }, [currentTextIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf'; // Adjust the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-300/20 to-blue-300/20 dark:from-purple-600/10 dark:to-blue-600/10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-teal-300/20 to-purple-300/20 dark:from-teal-600/10 dark:to-purple-600/10 rounded-full animate-pulse animation-delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-full animate-bounce animation-delay-500"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-teal-400 rounded-full animate-bounce animation-delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-1500"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 p-1 animate-pulse group-hover:animate-spin transition-all duration-300">
                <div className="w-full h-full rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="image - Copy.png"
                    alt="Bathula Yamini"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>

          {/* Greeting */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Bathula Yamini
              </span>{' '}
              💻
            </h1>
            
            {/* Typing Animation */}
            <div className="h-16 sm:h-20">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-blink text-purple-600">|</span>
              </h2>
            </div>

            {/* Introduction */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I love building{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">real-world</span>,{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">creative</span>, and{' '}
              <span className="font-semibold text-teal-600 dark:text-teal-400">useful</span>{' '}
              tech experiences with clean design and smart logic.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base">Eluru, Andhra Pradesh, India</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yamini12345678"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="http://linkedin.com/in/yamini-bathula-743a2b251"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:yaminibattula4@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Rocket className="h-5 w-5 group-hover:animate-bounce" />
              <span>View Projects</span>
            </button>
            <button
              onClick={handleDownloadResume}
              className="group flex items-center space-x-3 px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-full hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              <FileText className="h-5 w-5 group-hover:animate-pulse" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
