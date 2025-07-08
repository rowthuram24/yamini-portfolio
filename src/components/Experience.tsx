import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Internship, Certification, Workshop, Activity } from '../types';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('internships');

  const internships: Internship[] = [
    {
      id: 1,
      title: 'Web Developer Intern',
      company: 'InnoByte Services',
      period: 'Sep–Oct 2024',
      description: 'Developed responsive web applications using modern frontend technologies and collaborated with cross-functional teams.',
      type: 'Web Development'
    },
    {
      id: 2,
      title: 'AI Internship',
      company: 'Purple Technologies',
      period: 'Dec 2024–Apr 2025',
      description: 'Working on AI-driven solutions and machine learning models for real-world applications.',
      type: 'AI/ML'
    },
    {
      id: 3,
      title: 'Foundations of AI',
      company: 'Microsoft + Edunet + AICTE',
      period: 'Apr–May 2025',
      description: 'Comprehensive program covering AI fundamentals, machine learning algorithms, and practical implementations.',
      type: 'AI/ML'
    },
    {
      id: 4,
      title: 'High-Resolution Image Reconstruction',
      company: 'Blackbuck Engineers',
      period: 'Feb–Apr 2024',
      description: 'Developed advanced image reconstruction algorithms using deep learning and computer vision techniques.',
      type: 'AI/ML'
    },
    {
      id: 5,
      title: 'AI-ML Internship',
      company: 'India Edu Program',
      period: 'Apr–Jun 2024',
      description: 'Worked on machine learning projects and gained hands-on experience with TensorFlow and data analysis.',
      type: 'AI/ML'
    },
    {
      id: 6,
      title: 'Android Internship',
      company: 'India Edu Program',
      period: 'Jan–Mar 2024',
      description: 'Developed Android applications using Java and Kotlin, focusing on user experience and performance optimization.',
      type: 'Mobile Development'
    },
    {
      id: 7,
      title: 'Cybersecurity Internship',
      company: 'Palo Alto Networks',
      period: 'Sep–Nov 2023',
      description: 'Gained expertise in network security, threat analysis, and penetration testing using industry-standard tools.',
      type: 'Cybersecurity'
    }
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'C for Everyone',
      provider: 'Coursera',
      date: '2023'
    },
    {
      id: 2,
      title: 'Programming in Java',
      provider: 'NPTEL',
      date: '2023'
    },
    {
      id: 3,
      title: 'Machine Learning with TensorFlow',
      provider: 'Infosys',
      date: '2024'
    },
    {
      id: 4,
      title: 'Angular Development',
      provider: 'Infosys',
      date: '2024'
    },
    {
      id: 5,
      title: 'Node.js Development',
      provider: 'Infosys',
      date: '2024'
    },
    {
      id: 6,
      title: 'HTML5 & JavaScript',
      provider: 'Infosys',
      date: '2024'
    },
    {
      id: 7,
      title: 'C++ Mastery',
      provider: 'Udemy',
      date: '2023'
    },
    {
      id: 8,
      title: 'Python (Basic)',
      provider: 'HackerRank',
      date: '2023'
    }
  ];

  const workshops: Workshop[] = [
    {
      id: 1,
      title: 'Web Development Workshop',
      duration: '4 Days',
      description: 'Intensive workshop covering modern web development practices, frameworks, and deployment strategies.'
    },
    {
      id: 2,
      title: 'DevOps Workshop',
      duration: '3 Days',
      description: 'Hands-on workshop on DevOps practices, CI/CD pipelines, and cloud deployment technologies.'
    }
  ];

  const activities: Activity[] = [
    {
      id: 1,
      title: 'Data Science using Python',
      organization: 'JNTU Kakinada + IIT Bombay',
      description: 'Comprehensive program on data science methodologies, Python libraries, and statistical analysis.'
    },
    {
      id: 2,
      title: 'Tech Postera & Tech Brainia',
      organization: 'Adikavi Nannaya University College of Engineering',
      description: 'Participated in technical poster presentations and brain storming sessions on emerging technologies.'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI/ML':
        return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Web Development':
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
      case 'Mobile Development':
        return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  const tabs = [
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'workshops', label: 'Workshops', icon: GraduationCap },
    { id: 'activities', label: 'Activities', icon: Users }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through internships, certifications, workshops, and technical activities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12 bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-lg transform scale-105'
                  : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Internships */}
          {activeTab === 'internships' && (
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <div
                  key={internship.id}
                  className="group relative pl-8 border-l-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-colors duration-300"
                >
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg group-hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {internship.title}
                      </h4>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(internship.type)} mt-2 sm:mt-0`}>
                        {internship.type}
                      </span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                      {internship.company}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <span>{internship.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {internship.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                        {cert.provider}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.date}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Workshops */}
          {activeTab === 'workshops' && (
            <div className="grid md:grid-cols-2 gap-8">
              {workshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {workshop.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                        Duration: {workshop.duration}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Activities */}
          {activeTab === 'activities' && (
            <div className="space-y-6">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-gray-50 dark:bg-gray-800 p-8 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {activity.title}
                      </h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium mb-3">
                        {activity.organization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;