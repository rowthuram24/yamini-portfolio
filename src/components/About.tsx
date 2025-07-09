import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette, Brain, FileText, Download } from 'lucide-react';

const About: React.FC = () => {
  const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', proficiency: 90, color: 'text-purple-500' },
      { name: 'Java', proficiency: 85, color: 'text-purple-500' },
      { name: 'C++', proficiency: 80, color: 'text-purple-500' },
      { name: 'C', proficiency: 75, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', proficiency: 95, color: 'text-purple-500' },
      { name: 'CSS', proficiency: 90, color: 'text-purple-500' },
      { name: 'JavaScript', proficiency: 85, color: 'text-purple-500' },
      { name: 'Tailwind CSS', proficiency: 80, color: 'text-purple-500' },
      { name: 'React.js', proficiency: 75, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Backend/Database',
    skills: [
      { name: 'Node.js', proficiency: 75, color: 'text-purple-500' },
      { name: 'Flask', proficiency: 70, color: 'text-purple-500' },
      { name: 'Firebase', proficiency: 80, color: 'text-purple-500' },
      { name: 'SQL', proficiency: 85, color: 'text-purple-500' },
    ],
  },
  {
    title: 'AI/ML Tools',
    skills: [
      { name: 'TensorFlow', proficiency: 80, color: 'text-purple-500' },
      { name: 'OpenCV', proficiency: 75, color: 'text-purple-500' },
      { name: 'Streamlit', proficiency: 85, color: 'text-purple-500' },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'GitHub', proficiency: 90, color: 'text-purple-500' },
      { name: 'Figma', proficiency: 75, color: 'text-purple-500' },
      { name: 'VS Code', proficiency: 95, color: 'text-purple-500' },
      { name: 'AWS', proficiency: 70, color: 'text-purple-500' },
    ],
  },
];


  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf'; // Adjust the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile & Bio */}
          <div className="space-y-6">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="image - Copy.png"
                    alt="Bathula Yamini - Software Developer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🚀</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Bathula Yamini
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
               I'm Bathula Yamini, a Computer Science Engineering graduate passionate about applying  
               AI/ML, Data Analytics, and Engineering skills through real-time virtual internships.  
               I’ve worked on NLP-based keyword extraction tools and awareness-related tech solutions.  
               I'm skilled in Python, Java, C++, HTML/CSS and certified in ML, Cloud, and MongoDB.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm passionate about applying technology to solve real-world problems and always eager  
                to keep learning. I'm currently seeking an entry-level opportunity where I can grow,  
                contribute effectively, and collaborate with innovative teams in tech development.
              </p>
              
              <button
                onClick={handleDownloadResume}
                className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mx-auto lg:mx-0"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Internships</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Certifications</div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">4+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Projects</div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Workshops</div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                  {category.title}
                </h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-purple-500 group-hover:to-blue-500"
                          style={{ width: `${skill.proficiency}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
