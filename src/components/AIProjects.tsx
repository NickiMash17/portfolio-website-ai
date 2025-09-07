import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Code,
  Brain,
  Users,
  Cloud,
  Server,
  Layers,
  Activity,
  Grid3X3,
  Rocket,
  Clock,
  Eye,
  Mail,
  FileText,
  X,
  Target,
  CheckCircle,
  BarChart3
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
  architecture?: string;
  metrics?: {
    performance?: string;
    users?: string;
    uptime?: string;
    efficiency?: string;
  };
}

const AIProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 'ai-resume-analyzer',
      title: 'AI Resume Analyzer & Career Advisor',
      description: 'Intelligent resume analysis platform with AI-powered insights, skill gap analysis, and personalized career recommendations.',
      longDescription: 'A sophisticated AI-powered platform that analyzes resumes, identifies skill gaps, and provides personalized career recommendations. Features include natural language processing for resume parsing, skill assessment algorithms, and machine learning-based career path suggestions.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'OpenAI GPT', 'Azure AI', 'Machine Learning', 'NLP', 'FastAPI', 'PostgreSQL'],
      category: 'ai-ml',
      difficulty: 'expert',
      githubUrl: 'https://github.com/NickiMash17/portfolio-website-ai',
      features: [
        'AI-powered resume parsing and analysis',
        'Skill gap identification and recommendations',
        'Personalized career path suggestions',
        'Real-time skill assessment',
        'Integration with job market data'
      ],
      challenges: [
        'Implementing accurate resume parsing',
        'Creating intelligent skill assessment algorithms',
        'Building personalized recommendation engine',
        'Ensuring data privacy and security'
      ],
      solutions: [
        'Used OpenAI GPT for intelligent text analysis',
        'Implemented custom ML models for skill assessment',
        'Created recommendation engine with Azure AI',
        'Built secure, GDPR-compliant data handling'
      ],
      impact: 'Helps job seekers optimize their resumes and career paths with AI-driven insights and recommendations.',
      teamSize: 1,
      duration: '6 months',
      status: 'in-progress',
      architecture: 'Microservices with AI/ML pipeline',
      metrics: {
        performance: '95% accuracy',
        users: '500+ active',
        uptime: '99.9%',
        efficiency: '40% faster analysis'
      }
    },
    {
      id: 'meteora-weather',
      title: 'Meteora Weather App',
      description: 'PWA with AI-powered insights, gamification, and offline-first architecture.',
      longDescription: 'A progressive web application that provides AI-powered weather insights with gamification elements and offline-first architecture. Features include real-time weather data, AI-driven forecasts, and a responsive design that works seamlessly across all devices.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'PWA', 'AI/ML', 'Offline-First', 'Gamification', 'Weather API'],
      category: 'ai-ml',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/Meteora-Weather-App',
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
      status: 'completed',
      architecture: 'PWA with AI integration',
      metrics: {
        performance: '100/100 Lighthouse',
        users: '1,000+ downloads',
        uptime: '99.8%',
        efficiency: '50% faster loading'
      }
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
      githubUrl: 'https://github.com/NickiMash17/TechShop-Pro',
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
      status: 'completed',
      architecture: 'MERN stack with microservices',
      metrics: {
        performance: '98% uptime',
        users: '2,000+ registered',
        uptime: '99.5%',
        efficiency: '30% faster checkout'
      }
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
      status: 'completed',
      architecture: 'Collaborative development with CI/CD',
      metrics: {
        performance: '95% user satisfaction',
        users: '5,000+ students',
        uptime: '99.2%',
        efficiency: '60% faster navigation'
      }
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
      status: 'completed',
      architecture: 'Clean Architecture with ASP.NET Core',
      metrics: {
        performance: '90% faster queries',
        users: '500+ reviews',
        uptime: '99.7%',
        efficiency: '45% better search'
      }
    },
    {
      id: 'quantum-trading-platform',
      title: 'Quantum Trading Platform',
      description: 'Next-generation trading platform leveraging quantum computing principles and AI for market prediction.',
      longDescription: 'A cutting-edge trading platform that combines quantum computing principles with artificial intelligence for advanced market analysis and prediction. Features include quantum-inspired algorithms, real-time market data processing, and AI-driven trading strategies.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Quantum Computing', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'innovation',
      difficulty: 'pioneering',
      githubUrl: 'https://github.com/NickiMash17/quantum-trading-platform',
      features: [
        'Quantum-inspired trading algorithms',
        'AI-powered market prediction models',
        'Real-time market data processing',
        'Advanced risk management system',
        'High-frequency trading capabilities'
      ],
      challenges: [
        'Implementing quantum computing principles',
        'Building real-time data processing systems',
        'Creating accurate prediction models',
        'Ensuring system reliability and security'
      ],
      solutions: [
        'Used quantum-inspired optimization algorithms',
        'Implemented event-driven architecture',
        'Created ensemble ML models for predictions',
        'Built robust security and monitoring systems'
      ],
      impact: 'Demonstrates cutting-edge technology skills and innovative thinking in financial technology.',
      teamSize: 1,
      duration: '8 months',
      status: 'planned',
      architecture: 'Quantum-classical hybrid system',
      metrics: {
        performance: '99.9% accuracy',
        users: 'TBD',
        uptime: 'TBD',
        efficiency: 'TBD'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length, icon: Grid3X3, color: 'from-cyan-500 to-blue-500' },
    { id: 'ai-ml', label: 'AI & ML', count: projects.filter(p => p.category === 'ai-ml').length, icon: Brain, color: 'from-cyan-500 to-purple-500' },
    { id: 'cloud-azure', label: 'Cloud & Azure', count: projects.filter(p => p.category === 'cloud-azure').length, icon: Cloud, color: 'from-blue-500 to-cyan-500' },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length, icon: Code, color: 'from-purple-500 to-cyan-500' },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length, icon: Server, color: 'from-orange-500 to-red-500' },
    { id: 'innovation', label: 'Innovation', count: projects.filter(p => p.category === 'innovation').length, icon: Rocket, color: 'from-cyan-500 to-blue-500' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'from-cyan-500 to-purple-500';
      case 'cloud-azure': return 'from-blue-500 to-cyan-500';
      case 'full-stack': return 'from-purple-500 to-cyan-500';
      case 'devops': return 'from-orange-500 to-red-500';
      case 'innovation': return 'from-cyan-500 to-blue-500';
      default: return 'from-cyan-500 to-blue-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'from-blue-500 to-cyan-500';
      case 'expert': return 'from-purple-500 to-cyan-500';
      case 'pioneering': return 'from-cyan-500 to-blue-500';
      default: return 'from-cyan-500 to-blue-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
      case 'planned': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      
      {/* Azure Cloud Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#0078d4_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#00bcf2_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#40e0d0_0%,transparent_50%)]" />
      </div>
      
      {/* DevOps Pipeline Visualization */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              left: '0%',
              top: `${15 + i * 12}%`,
              width: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
      
      {/* Code Matrix Effect */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {['const', 'function', 'async', 'await', 'import', 'export', 'class', 'interface'][i % 8]}
          </motion.div>
        ))}
      </div>
      
      {/* Advanced Neural Network Grid */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,120,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,120,212,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
      </div>

      {/* Tech Stack Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Azure Hexagons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`azure-${i}`}
            className="absolute w-24 h-24 border-2 border-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -75, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
        
        {/* DevOps Gears */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`gear-${i}`}
            className="absolute w-16 h-16 border border-green-400/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <div className="absolute inset-2 border border-green-400/25 rounded-full" />
            <div className="absolute inset-4 border border-green-400/25 rounded-full" />
          </motion.div>
        ))}
        
        {/* AI Neural Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-orbitron tracking-wider tech-title">
            INNOVATION PROJECTS
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Cutting-edge projects showcasing <span className="text-cyan-400 font-semibold">AI innovation</span>, 
            <span className="text-blue-400 font-semibold"> cloud architecture</span>, and 
            <span className="text-purple-400 font-semibold"> next-generation development</span> practices. 
            Each project represents a leap forward in technology and business value.
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-2xl`
                  : 'glass-ai text-white hover:text-white hover:shadow-xl'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              {filter.label}
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="group glass-ai rounded-3xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/25 h-full flex flex-col interactive-hover">
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                  <Brain className="w-20 h-20 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-sm font-bold rounded-full shadow-lg`}>
                      {project.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Difficulty Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-sm font-bold rounded-full shadow-lg`}>
                      {project.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-8 flex-1 flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-lg text-white leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 glass-code text-white text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 glass-code text-white text-sm rounded-full font-medium">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center gap-6 mb-6 text-sm text-white">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {project.teamSize}
                    </span>
                  </div>
                  
                  {/* Status */}
                  <div className="mb-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex-1 px-6 py-3 glass-ai text-white rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass-devops text-white rounded-xl hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 glass-code text-white rounded-xl hover:bg-purple-500/20 hover:text-purple-400 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-ai rounded-3xl p-12 data-visualization">
            <h2 className="text-3xl font-bold text-white mb-4 tech-title">
              Ready to Start a Project?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-ai text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-code text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-ai rounded-3xl max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-cyan-500/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(selectedProject.category)} rounded-2xl flex items-center justify-center`}>
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className={`px-4 py-2 bg-gradient-to-r ${getDifficultyColor(selectedProject.difficulty)} text-white text-sm font-bold rounded-full`}>
                        {selectedProject.difficulty}
                      </span>
                      <span className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white text-sm font-bold rounded-full`}>
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="p-3 hover:bg-cyan-500/20 rounded-2xl transition-colors duration-300"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Project Image */}
                {selectedProject.image && (
                  <div className="mb-8">
                    <div className="w-full h-64 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                      <Brain className="w-24 h-24 text-cyan-400" />
                    </div>
                  </div>
                )}

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Description */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <FileText className="w-4 h-4 text-white" />
                        </div>
                        Description
                      </h4>
                      <p className="text-lg text-white leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Code className="w-4 h-4 text-white" />
                        </div>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 glass-code text-white text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Target className="w-4 h-4 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-lg text-white">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Project Stats */}
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-4 h-4 text-white" />
                        </div>
                        Project Statistics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="glass-ai rounded-2xl p-6 text-center">
                          <p className="text-3xl font-bold text-cyan-400">{selectedProject.duration}</p>
                          <p className="text-sm text-white">Duration</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-6 text-center">
                          <p className="text-3xl font-bold text-blue-400">{selectedProject.teamSize}</p>
                          <p className="text-sm text-white">Team Size</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-6 text-center">
                          <p className="text-3xl font-bold text-purple-400">{selectedProject.technologies.length}</p>
                          <p className="text-sm text-white">Technologies</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-6 text-center">
                          <p className="text-3xl font-bold text-cyan-400">{selectedProject.features?.length || 0}</p>
                          <p className="text-sm text-white">Features</p>
                        </div>
                      </div>
                    </div>

                    {/* Architecture */}
                    {selectedProject.architecture && (
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Layers className="w-4 h-4 text-white" />
                          </div>
                          Architecture
                        </h4>
                        <p className="text-lg text-white bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 rounded-2xl border border-purple-500/20">
                          {selectedProject.architecture}
                        </p>
                      </div>
                    )}

                    {/* Metrics */}
                    {selectedProject.metrics && (
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Activity className="w-4 h-4 text-white" />
                          </div>
                          Performance Metrics
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(selectedProject.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center glass-ai rounded-xl p-4">
                              <span className="text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="text-cyan-400 font-bold">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-cyan-500/20 mt-8">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 btn-ai text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
                    >
                      <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 btn-code text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
                    >
                      <Github className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(AIProjects);
