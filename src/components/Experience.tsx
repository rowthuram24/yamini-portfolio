import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Users, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Internship, Certification, Workshop, Activity } from '../types';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('internships');

  const internships: Internship[] = [
    {
      id: 1,
      title: 'Data Analytics Intern',
      company: 'Alteryx, EduSkills',
      period: '2024',
      description: 'Worked on data analysis and visualization projects using Alteryx platform.',
      type: 'Data Analytics',
    },
    { 
      id: 2,
      title: 'AI/ML Intern',
      company: 'AWS Academy',
      period: '2024',
      description: 'Developed machine learning models and worked with AWS cloud services.',
      type: 'AI/ML',
    },
    {
      id: 3,
      title: 'Data Engineering Intern',
      company: 'AWS Academy',
      period: '2024',
      description: 'Built data pipelines and worked with big data technologies.',
      type: 'Data Engineering',
    },
    {
      id: 4,
      title: 'Android Development Intern',
      company: 'EduSkills/Google',
      period: '2023',
      description: 'Developed Android applications using Java and Android Studio.',
      type: 'Android Development',
    },
    {
      id: 5,
      title: 'NLP Intern',
      company: 'Blackbuck Engineers',
      period: '2023',
      description: 'Worked on natural language processing projects and text analysis.',
      type: 'NLP',
    },
    {
      id: 6,
      title: 'Software Intern',
      company: 'Purple Technologies',
      period: '2023',
      description: 'Contributed to software development projects and learned industry practices.',
      type: 'Software',
    },
    {
      id: 7,
      title: 'Propel5000 Intern',
      company: 'Propel5000',
      period: '2023',
      description: 'Participated in technology acceleration program.',
      type: 'Innovation',
    },
    {
      id: 8,
      title: 'NPTEL Data Analytics Intern',
      company: 'NPTEL',
      period: '2023',
      description: 'Completed comprehensive data analytics training and projects.',
      type: 'Data Analytics',
    },
  ];

  const certifications: Certification[] = [
    {
      id: 1,
      title: 'Machine Learning with TensorFlow',
      provider: 'Infosys Springboard',
      date: '2024',
    },
    {
      id: 2,
      title: 'MongoDB Certification',
      provider: 'Simplilearn',
      date: '2024',
    },
    {
      id: 3,
      title: 'Node.js, JavaScript, TypeScript',
      provider: 'Infosys',
      date: '2024',
    },
    {
      id: 4,
      title: 'HTML5 Certification',
      provider: 'Infosys',
      date: '2024',
    },
    {
      id: 5,
      title: 'Java Programming',
      provider: 'Udemy + NPTEL',
      date: '2023',
    },
    {
      id: 6,
      title: 'C & C++ Programming',
      provider: 'Coursera + Infosys',
      date: '2023',
    },
    {
      id: 7,
      title: 'DevOps, Agile, CI/CD',
      provider: 'Infosys',
      date: '2023',
    },
    {
      id: 8,
      title: 'Master Data Management',
      provider: 'TCS iON',
      date: '2023',
    },
    {
      id: 9,
      title: 'Sorting Algorithms',
      provider: 'Simplilearn',
      date: '2023',
    },
  ];

  const workshops: Workshop[] = [
    {
      id: 1,
      title: '4-day Web Development Workshop',
      duration: '4 Days',
      description: 'Intensive hands-on web development training covering modern frameworks and best practices.',
    },
    {
      id: 2,
      title: '3-day DevOps Workshop',
      duration: '3 Days',
      description: 'Container technologies, CI/CD pipelines, and cloud deployment strategies.',
    },
  ];

  const activities: Activity[] = [
    {
      id: 1,
      title: 'Logical Reasoning Test',
      organization: 'Lara Technologies',
      description: 'Participated in aptitude and logical reasoning assessments.',
    },
    {
      id: 2,
      title: 'Community Service',
      organization: 'Environmental Project',
      description: 'Led environmental awareness campaigns and community outreach programs.',
    },
    {
      id: 3,
      title: 'Tech Events',
      organization: 'College Activities',
      description: 'Organized poster presentations and participated in brainstorming sessions.',
    },
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
                     <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 mt-2 sm:mt-0">
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
