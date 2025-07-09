import React from 'react';
import { ExternalLink, Github, Calendar, Tag, Brain, Globe, Shield, Camera } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
  {
    id: 1,
    title: 'NLP Keyword Extraction',
    description: 'Extracted keywords from articles using Machine Learning techniques and natural language processing.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'TensorFlow'],
    category: 'AI/ML'
  },
  {
    id: 2,
    title: 'Environmental Education Awareness',
    description: 'Outreach & automation tools for environmental education and awareness campaigns.',
    techStack: ['Python', 'Automation', 'Web Scraping', 'Data Analysis'],
    category: 'AI/ML'
  },
  {
    id: 3,
    title: 'RCEE College Website Clone',
    description: 'Responsive college website with modern design and full functionality.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'Web Development'
  },
  {
    id: 4,
    title: 'AI-powered Customer Query Assistant',
    description: 'Intelligent chatbot system providing instant customer support and query resolution using AI/ML technologies.',
    techStack: ['Python', 'AI/ML', 'NLP', 'Chatbot', 'Flask'],
    category: 'AI/ML'
  }
];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return <Brain className="h-5 w-5" />;
      case 'Web Development':
        return <Globe className="h-5 w-5" />;
      case 'Cybersecurity':
        return <Shield className="h-5 w-5" />;
      default:
        return <Camera className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
      case 'Web Development':
        return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Cybersecurity':
        return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills across different domains including AI/ML, Web Development, and Cybersecurity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
