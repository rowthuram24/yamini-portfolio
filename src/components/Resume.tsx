import React from 'react';
import { Download, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would trigger the download of an actual PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual path to your resume PDF
    link.download = 'resume.pdf'; // Adjust the filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Innovation Labs',
      period: '2022 - 2023',
      description: 'Worked on mobile application development using React Native and contributed to backend APIs.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'University of Technology',
      period: '2020 - 2024',
      grade: 'CGPA: 8.5/10'
    }
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Cloud Professional Cloud Architect',
    'Microsoft Azure Fundamentals',
    'Oracle Java SE Programmer'
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Download my resume to learn more about my experience, education, and skills.
          </p>
          
          <button
            onClick={handleDownload}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
          >
            <Download className="h-6 w-6" />
            <span>Download Resume</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.grade}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>
              
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <FileText className="h-5 w-5 text-teal-600 dark:text-teal-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;