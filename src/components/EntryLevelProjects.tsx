import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Globe,
  Code,
  Lightbulb,
  Target,
  Calendar,
  Users,
  Mail
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'personal' | 'bootcamp' | 'tutorial' | 'open-source';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const EntryLevelProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'todo-app',
      title: 'Smart Todo Application',
      description: 'A full-stack todo app with user authentication, CRUD operations, and real-time updates. Features include task categorization, due dates, and progress tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      challenges: [
        'Implementing user authentication and authorization',
        'Creating a responsive design that works on all devices',
        'Managing state between frontend and backend'
      ],
      learnings: [
        'Full-stack development workflow',
        'Database design and relationships',
        'State management with React hooks'
      ],
      githubUrl: 'https://github.com/your-username/todo-app',
      liveUrl: 'https://your-todo-app.netlify.app',
      category: 'personal',
      difficulty: 'intermediate'
    },
    {
      id: 'weather-app',
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts using OpenWeatherMap API. Features include location search, hourly forecasts, and weather alerts.',
      image: '/api/placeholder/600/400',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API', 'Local Storage'],
      challenges: [
        'Working with external APIs and handling errors',
        'Implementing responsive design for mobile devices',
        'Managing local storage for user preferences'
      ],
      learnings: [
        'API integration and error handling',
        'Responsive web design principles',
        'Local storage and session management'
      ],
      githubUrl: 'https://github.com/your-username/weather-app',
      liveUrl: 'https://your-weather-app.netlify.app',
      category: 'personal',
      difficulty: 'beginner'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform',
      description: 'A complete e-commerce solution built during bootcamp. Features include product catalog, shopping cart, user authentication, and admin dashboard.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe API'],
      challenges: [
        'Building a complex state management system',
        'Integrating payment processing with Stripe',
        'Creating an intuitive admin interface'
      ],
      learnings: [
        'Advanced React patterns and hooks',
        'Payment gateway integration',
        'Database design for e-commerce'
      ],
      githubUrl: 'https://github.com/your-username/ecommerce-platform',
      category: 'bootcamp',
      difficulty: 'advanced'
    },
    {
      id: 'portfolio-website',
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies. Features smooth animations, contact form, and project showcase.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      challenges: [
        'Creating smooth animations and transitions',
        'Implementing responsive design across all devices',
        'Optimizing performance and loading times'
      ],
      learnings: [
        'TypeScript fundamentals and best practices',
        'Animation libraries and performance optimization',
        'Modern build tools and deployment'
      ],
      githubUrl: 'https://github.com/your-username/portfolio-website',
      liveUrl: 'https://your-portfolio.netlify.app',
      category: 'personal',
      difficulty: 'intermediate'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'personal': return 'bg-fresh-100 text-fresh-700 border-fresh-200';
      case 'bootcamp': return 'bg-professional-100 text-professional-700 border-professional-200';
      case 'tutorial': return 'bg-highlight-100 text-highlight-700 border-highlight-200';
      case 'open-source': return 'bg-success-100 text-success-700 border-success-200';
      default: return 'bg-clean-100 text-clean-700 border-clean-200';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success-100 text-success-700 border-success-200';
      case 'intermediate': return 'bg-highlight-100 text-highlight-700 border-highlight-200';
      case 'advanced': return 'bg-professional-100 text-professional-700 border-professional-200';
      default: return 'bg-clean-100 text-clean-700 border-clean-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-clean-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-bold text-clean-800 mb-4">
            My Projects
          </h2>
          <p className="text-body text-clean-600 max-w-2xl mx-auto">
            A collection of projects that demonstrate my skills and growth as a developer. 
            Each project represents a learning milestone and showcases different technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-xl shadow-clean hover:shadow-elevated transition-all duration-300 border border-clean-200 overflow-hidden">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-professional-100 to-fresh-100 flex items-center justify-center">
                  <Code className="w-16 h-16 text-professional-600" />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-clean-800">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(project.difficulty)}`}>
                        {project.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-clean-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-clean-700 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-clean-100 text-clean-700 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-professional-600 text-white text-sm font-medium rounded-lg hover:bg-professional-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Lightbulb className="w-4 h-4" />
                      View Details
                    </button>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-clean-100 text-clean-700 text-sm font-medium rounded-lg hover:bg-clean-200 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-fresh-100 text-fresh-700 text-sm font-medium rounded-lg hover:bg-fresh-200 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Globe className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedProject.category)}`}>
                          {selectedProject.category}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(selectedProject.difficulty)}`}>
                          {selectedProject.difficulty}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-clean-800">
                        {selectedProject.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-clean-100 rounded-lg transition-colors"
                    >
                      <span className="text-2xl text-clean-400">&times;</span>
                    </button>
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-clean-700 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-clean-800 mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-clean-100 text-clean-700 rounded text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Challenges */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-clean-800 mb-3">Challenges I Solved</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-clean-700">
                          <Target className="w-4 h-4 text-professional-500 mt-0.5 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Learnings */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-clean-800 mb-3">What I Learned</h3>
                    <ul className="space-y-2">
                      {selectedProject.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-clean-700">
                          <Lightbulb className="w-4 h-4 text-fresh-500 mt-0.5 flex-shrink-0" />
                          {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-clean-200">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-clean-800 text-white text-center font-medium rounded-lg hover:bg-clean-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </a>
                    
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-professional-600 text-white text-center font-medium rounded-lg hover:bg-professional-700 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Globe className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-professional-600 to-fresh-600 rounded-2xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to See More?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Check out my GitHub for more projects and contributions, or let's discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-professional-600 font-semibold rounded-lg hover:bg-clean-50 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-professional-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EntryLevelProjects; 