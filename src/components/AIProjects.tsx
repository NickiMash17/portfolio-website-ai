import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Globe, 
  Brain, 
  Code, 
  Users,
  Calendar,
  Lightbulb,
  X,
  Star,
  CheckCircle,
  Target,
  TrendingUp,
  Play,
  ArrowRight
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'ai-ml' | 'cloud-azure' | 'full-stack' | 'devops' | 'innovation';
  difficulty: 'advanced' | 'expert' | 'pioneering';
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  teamSize: number;
  duration: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const AIProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'meteora-weather',
      title: 'Meteora Weather App',
      description: 'PWA with AI-powered insights, gamification, and offline-first architecture.',
      longDescription: 'A progressive web application that provides AI-powered weather insights with gamification elements and offline-first architecture. Features include real-time weather data, AI-driven forecasts, and a responsive design that works seamlessly across all devices.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'PWA', 'AI/ML', 'Offline-First', 'Gamification', 'Weather API'],
      category: 'ai-ml',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/meteora-weather',
      features: [
        'AI-powered weather insights and predictions',
        'Progressive Web App (PWA) functionality',
        'Offline-first architecture for reliability',
        'Gamification elements for user engagement',
        'Responsive design for all devices'
      ],
      challenges: [
        'Implementing offline-first architecture',
        'Integrating AI-powered weather insights',
        'Creating engaging gamification elements',
        'Achieving high performance scores'
      ],
      solutions: [
        'Used Service Workers for offline functionality',
        'Implemented AI algorithms for weather analysis',
        'Designed reward system for user engagement',
        'Optimized code for Lighthouse performance'
      ],
      impact: 'Scored 100/100 Lighthouse performance rating and achieved excellent user engagement through gamification.',
      teamSize: 1,
      duration: '3 months',
      status: 'completed'
    },
    {
      id: 'techshop-pro',
      title: 'TechShop Pro (E-Commerce App)',
      description: 'Built secure login, product catalog, and Stripe payment integration.',
      longDescription: 'A full-stack e-commerce application with secure user authentication, comprehensive product management, and integrated Stripe payment processing. Features include user accounts, shopping cart functionality, and secure checkout process.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Stripe', 'MongoDB'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/techshop-pro',
      features: [
        'Secure user authentication and authorization',
        'Comprehensive product catalog management',
        'Shopping cart and checkout functionality',
        'Stripe payment integration',
        'Responsive design with Tailwind CSS'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing user authentication securely',
        'Creating responsive product catalog',
        'Integrating multiple third-party services'
      ],
      solutions: [
        'Used Stripe for secure payment processing',
        'Implemented JWT for user authentication',
        'Created responsive UI with Tailwind CSS',
        'Built modular API architecture'
      ],
      impact: 'Successfully delivered a production-ready e-commerce platform with secure payment processing.',
      teamSize: 1,
      duration: '4 months',
      status: 'completed'
    },
    {
      id: 'tf-future-guide',
      title: 'TF Future Guide (STEM Career Platform)',
      description: 'Connected South African students with STEM careers & scholarships.',
      longDescription: 'A collaborative platform that connects South African students with STEM career opportunities and scholarships. Contributed to frontend development, backend APIs, and team Git workflows to create an accessible resource for students.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Git', 'Team Collaboration', 'STEM Education'],
      category: 'innovation',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/ciphers-den/futureGuide',
      features: [
        'STEM career guidance and resources',
        'Scholarship information and applications',
        'Student mentorship connections',
        'Interactive career path exploration',
        'Multi-language support for accessibility'
      ],
      challenges: [
        'Coordinating with multiple team members',
        'Managing complex Git workflows',
        'Creating accessible user interfaces',
        'Integrating multiple data sources'
      ],
      solutions: [
        'Implemented efficient Git branching strategies',
        'Created modular component architecture',
        'Used accessibility best practices',
        'Built robust API integration layer'
      ],
      impact: 'Successfully connected South African students with STEM opportunities and improved access to educational resources.',
      teamSize: 5,
      duration: '6 months',
      status: 'completed'
    },
    {
      id: 'book-review-app',
      title: 'Book Review App',
      description: 'CRUD app with search and analytics dashboard.',
      longDescription: 'A full-stack book review application with comprehensive CRUD operations, advanced search functionality, and analytics dashboard. Implemented clean architecture patterns in ASP.NET Core for maintainability and scalability.',
      image: '/api/placeholder/600/400',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Clean Architecture', 'Analytics'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/BookReviewApp',
      features: [
        'Complete CRUD operations for book reviews',
        'Advanced search and filtering capabilities',
        'Analytics dashboard with insights',
        'Clean architecture implementation',
        'Responsive web interface'
      ],
      challenges: [
        'Implementing clean architecture patterns',
        'Creating efficient search algorithms',
        'Building comprehensive analytics dashboard',
        'Ensuring code maintainability'
      ],
      solutions: [
        'Used SOLID principles and clean architecture',
        'Implemented optimized search with indexing',
        'Created modular analytics components',
        'Applied design patterns for maintainability'
      ],
      impact: 'Delivered a robust book review platform with clean, maintainable code and comprehensive functionality.',
      teamSize: 1,
      duration: '3 months',
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI & ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'cloud-azure', label: 'Cloud & Azure', count: projects.filter(p => p.category === 'cloud-azure').length },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'from-neon-500 to-purple-500';
      case 'cloud-azure': return 'from-azure-500 to-blue-600';
      case 'full-stack': return 'from-purple-500 to-neon-500';
      case 'devops': return 'from-orange-500 to-red-600';
      case 'innovation': return 'from-green-500 to-emerald-600';
      default: return 'from-azure-500 to-purple-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'from-purple-500 to-azure-500';
      case 'expert': return 'from-neon-500 to-purple-500';
      case 'pioneering': return 'from-red-500 to-orange-500';
      default: return 'from-azure-500 to-purple-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-azure-500/20 text-azure-400 border-azure-500/50';
      case 'planned': return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      default: return 'bg-dark-700/50 text-light-400 border-dark-600';
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-section font-bold text-white mb-6 font-orbitron tracking-wider">
            INNOVATION PROJECTS
          </h2>
          <p className="text-body text-light-300 max-w-3xl mx-auto">
            Cutting-edge projects showcasing AI innovation, cloud architecture, and next-generation development practices. 
            Each project represents a leap forward in technology and business value.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-azure-600 to-purple-600 text-white shadow-azure'
                  : 'bg-dark-800/50 text-light-400 hover:bg-dark-700/50 hover:text-white border border-dark-700 hover:border-azure-500/50'
              }`}
            >
              {filter.label}
              <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="group bg-dark-800/30 backdrop-blur-md rounded-2xl border border-dark-700/50 hover:border-azure-500/50 transition-all duration-300 overflow-hidden hover:shadow-azure">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-azure-500/20 to-purple-500/20" />
                  <Brain className="w-20 h-20 text-azure-400 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {project.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {project.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-azure-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-light-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-dark-700/50 text-light-300 rounded text-xs border border-dark-600">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-dark-700/50 text-light-400 rounded text-xs border border-dark-600">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-light-400">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {project.teamSize} people
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-azure-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-azure transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <Lightbulb className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                      View Details
                    </button>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-dark-700/50 text-light-300 text-sm font-medium rounded-lg hover:bg-dark-600/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                      onClick={() => console.log('GitHub link clicked for:', project.title)}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-dark-700/50 text-light-300 text-sm font-medium rounded-lg hover:bg-dark-600/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() => console.log('Live link clicked for:', project.title)}
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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-dark-800/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-700/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  {/* Modal Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white text-sm font-bold rounded-full`}>
                          {selectedProject.category.replace('-', ' ').toUpperCase()}
                        </span>
                        <span className={`px-4 py-2 bg-gradient-to-r ${getDifficultyColor(selectedProject.difficulty)} text-white text-sm font-bold rounded-full`}>
                          {selectedProject.difficulty.toUpperCase()}
                        </span>
                        <span className={`px-4 py-2 rounded-full text-sm font-medium border ${getStatusColor(selectedProject.status)}`}>
                          {selectedProject.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <p className="text-light-300 text-lg leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-dark-700/50 rounded-lg transition-colors text-light-400 hover:text-white"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-azure-400" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-light-300">
                            <CheckCircle className="w-4 h-4 text-neon-400 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Technologies */}
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Code className="w-5 h-5 text-purple-400" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-2 bg-dark-700/50 text-light-300 rounded-lg text-sm border border-dark-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Challenges & Solutions */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-red-400" />
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2 text-light-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-neon-400" />
                        Solutions
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2 text-light-300">
                            <div className="w-2 h-2 bg-neon-400 rounded-full mt-2 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Impact & Stats */}
                  <div className="bg-dark-700/30 rounded-2xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Impact & Results
                    </h3>
                    <p className="text-light-300 mb-4 leading-relaxed">
                      {selectedProject.impact}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-light-400">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Team: {selectedProject.teamSize} people
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Duration: {selectedProject.duration}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-6 border-t border-dark-700/50">
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-dark-700/50 text-white text-center font-medium rounded-xl hover:bg-dark-600/50 transition-colors duration-300 flex items-center justify-center gap-2 border border-dark-600 hover:border-azure-500/50 cursor-pointer"
                      onClick={() => console.log('GitHub link clicked for:', selectedProject.title)}
                    >
                      <Github className="w-5 h-5" />
                      View Source Code
                    </a>
                    
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-azure-600 to-purple-600 text-white text-center font-medium rounded-xl hover:shadow-azure transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() => console.log('Live demo link clicked for:', selectedProject.title)}
                      >
                        <Globe className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-neon-500 to-purple-500 text-white text-center font-medium rounded-xl hover:shadow-neon transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() => console.log('Demo link clicked for:', selectedProject.title)}
                      >
                        <Play className="w-5 h-5" />
                        Watch Demo
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
          className="text-center bg-gradient-to-r from-azure-600/20 to-purple-600/20 rounded-3xl p-12 border border-azure-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Build the Future?
          </h3>
          <p className="text-lg mb-8 text-light-300">
            Let's collaborate on cutting-edge AI projects, cloud architecture, and innovative solutions that drive business transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-azure-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-azure transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => console.log('GitHub CTA button clicked')}
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
            <button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-transparent text-white font-bold rounded-xl border-2 border-azure-500 hover:bg-azure-500/10 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(AIProjects);