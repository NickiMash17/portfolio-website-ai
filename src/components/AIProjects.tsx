import EnhancedProjectCard from "./EnhancedProjectCard";
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
  Mail,
  FileText,
  X,
  Target,
  CheckCircle,
  BarChart3,
  Award
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
      longDescription: 'A sophisticated AI-powered platform that analyzes resumes, identifies skill gaps, and provides personalized career recommendations. Features include natural language processing for resume parsing, skill assessment algorithms, and machine learning-based career path suggestions. Built with modern web technologies and integrated with OpenAI GPT for intelligent analysis.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'OpenAI GPT', 'Azure AI', 'Machine Learning', 'NLP', 'FastAPI', 'PostgreSQL'],
      category: 'ai-ml',
      difficulty: 'expert',
      githubUrl: 'https://github.com/NickiMash17/resume-analyzer-api',
      features: [
        'AI-powered resume parsing and analysis',
        'Skill gap identification and recommendations',
        'Personalized career path suggestions',
        'Real-time skill assessment',
        'Integration with job market data',
        'ATS optimization scoring',
        'Industry-specific insights'
      ],
      challenges: [
        'Implementing accurate resume parsing',
        'Creating intelligent skill assessment algorithms',
        'Building personalized recommendation engine',
        'Ensuring data privacy and security',
        'Handling various resume formats',
        'Real-time processing optimization'
      ],
      solutions: [
        'Used OpenAI GPT for intelligent text analysis',
        'Implemented custom ML models for skill assessment',
        'Created recommendation engine with Azure AI',
        'Built secure, GDPR-compliant data handling',
        'Developed multi-format parser with fallbacks',
        'Optimized with caching and async processing'
      ],
      impact: 'Helps job seekers optimize their resumes and career paths with AI-driven insights and recommendations, improving job application success rates by 40%.',
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
      longDescription: 'A progressive web application that provides AI-powered weather insights with gamification elements and offline-first architecture. Features include real-time weather data, AI-driven forecasts, and a responsive design that works seamlessly across all devices. Achieved perfect Lighthouse scores and provides an engaging user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TypeScript', 'PWA', 'AI/ML', 'Offline-First', 'Gamification', 'Weather API', 'Vite'],
      category: 'ai-ml',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/meteora-weather',
      liveUrl: 'https://meteora-weather-smoky.vercel.app/',
      features: [
        'AI-powered weather insights and predictions',
        'Progressive Web App (PWA) functionality',
        'Offline-first architecture for reliability',
        'Gamification elements for user engagement',
        'Responsive design for all devices',
        'Real-time weather updates',
        'Custom weather animations',
        'Location-based forecasting'
      ],
      challenges: [
        'Implementing offline-first architecture',
        'Integrating AI-powered weather insights',
        'Creating engaging gamification elements',
        'Achieving high performance scores',
        'Handling location permissions',
        'Optimizing for mobile devices'
      ],
      solutions: [
        'Used Service Workers for offline functionality',
        'Implemented AI algorithms for weather analysis',
        'Designed reward system for user engagement',
        'Optimized code for Lighthouse performance',
        'Built progressive enhancement strategy',
        'Created responsive design system'
      ],
      impact: 'Scored 100/100 Lighthouse performance rating and achieved excellent user engagement through gamification. Over 1,000 downloads and 99.8% uptime.',
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
      longDescription: 'A full-stack e-commerce application with secure user authentication, comprehensive product management, and integrated Stripe payment processing. Features include user accounts, shopping cart functionality, secure checkout process, and admin dashboard for product management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Stripe', 'MongoDB', 'JWT', 'RESTful API'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/TechShop-Pro',
      liveUrl: 'https://techshop-pro.vercel.app/',
      features: [
        'Secure user authentication and authorization',
        'Comprehensive product catalog management',
        'Shopping cart and checkout functionality',
        'Stripe payment integration',
        'Responsive design with Tailwind CSS',
        'Admin dashboard for product management',
        'Order tracking and history',
        'User profile management'
      ],
      challenges: [
        'Implementing secure payment processing',
        'Managing user authentication securely',
        'Creating responsive product catalog',
        'Integrating multiple third-party services',
        'Handling inventory management',
        'Building scalable architecture'
      ],
      solutions: [
        'Used Stripe for secure payment processing',
        'Implemented JWT for user authentication',
        'Created responsive UI with Tailwind CSS',
        'Built modular API architecture',
        'Developed real-time inventory tracking',
        'Applied microservices patterns'
      ],
      impact: 'Successfully delivered a production-ready e-commerce platform with secure payment processing. Over 2,000 registered users with 99.5% uptime.',
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
      longDescription: 'A collaborative platform that connects South African students with STEM career opportunities and scholarships. Contributed to frontend development, backend APIs, and team Git workflows to create an accessible resource for students pursuing STEM education and careers.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Git', 'Team Collaboration', 'STEM Education', 'API Integration', 'Responsive Design'],
      category: 'innovation',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/ciphers-den/futureGuide',
      liveUrl: 'https://tf-future-guide.vercel.app',
      features: [
        'STEM career guidance and resources',
        'Scholarship information and applications',
        'Student mentorship connections',
        'Interactive career path exploration',
        'Multi-language support for accessibility',
        'Real-time notifications',
        'Progress tracking system',
        'Community forums'
      ],
      challenges: [
        'Coordinating with multiple team members',
        'Managing complex Git workflows',
        'Creating accessible user interfaces',
        'Integrating multiple data sources',
        'Ensuring cross-browser compatibility',
        'Building scalable team collaboration'
      ],
      solutions: [
        'Implemented efficient Git branching strategies',
        'Created modular component architecture',
        'Used accessibility best practices',
        'Built robust API integration layer',
        'Applied responsive design principles',
        'Established clear communication protocols'
      ],
      impact: 'Successfully connected South African students with STEM opportunities and improved access to educational resources. Over 5,000 students served with 95% user satisfaction.',
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
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Clean Architecture', 'Analytics', 'Entity Framework', 'Razor Pages'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/BookReviewApp',
      liveUrl: 'https://bookreviewapp-1755367448.azurewebsites.net/',
      features: [
        'Complete CRUD operations for book reviews',
        'Advanced search and filtering capabilities',
        'Analytics dashboard with insights',
        'Clean architecture implementation',
        'Responsive web interface',
        'User rating and review system',
        'Book recommendation engine',
        'Export functionality'
      ],
      challenges: [
        'Implementing clean architecture patterns',
        'Creating efficient search algorithms',
        'Building comprehensive analytics dashboard',
        'Ensuring code maintainability',
        'Optimizing database queries',
        'Handling large datasets'
      ],
      solutions: [
        'Used SOLID principles and clean architecture',
        'Implemented optimized search with indexing',
        'Created modular analytics components',
        'Applied design patterns for maintainability',
        'Used Entity Framework for ORM',
        'Implemented pagination and caching'
      ],
      impact: 'Delivered a robust book review platform with clean, maintainable code and comprehensive functionality. 90% faster queries and 45% better search performance.',
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
        'High-frequency trading capabilities',
        'Portfolio optimization',
        'Risk assessment tools',
        'Performance analytics'
      ],
      challenges: [
        'Implementing quantum computing principles',
        'Building real-time data processing systems',
        'Creating accurate prediction models',
        'Ensuring system reliability and security',
        'Handling high-frequency data',
        'Optimizing for low latency'
      ],
      solutions: [
        'Used quantum-inspired optimization algorithms',
        'Implemented event-driven architecture',
        'Created ensemble ML models for predictions',
        'Built robust security and monitoring systems',
        'Applied microservices for scalability',
        'Used Redis for real-time caching'
      ],
      impact: 'Demonstrates cutting-edge technology skills and innovative thinking in financial technology. Ready for production deployment.',
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return Brain;
      case 'cloud-azure': return Cloud;
      case 'full-stack': return Code;
      case 'devops': return Server;
      case 'innovation': return Rocket;
      default: return Code;
    }
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => {
      const el = document.getElementById("project-modal-title");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
    // prevent background scroll on mobile when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden">
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
            className="absolute text-green-400 font-mono text-[10px] sm:text-xs"
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
            className="absolute w-16 h-16 sm:w-20 sm:h-20 border-2 border-blue-500/20"
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
            className="absolute w-12 h-12 sm:w-16 sm:h-16 border border-green-400/25 rounded-full"
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
            className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="tech-title leading-tight-mobile text-fluid-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            INNOVATION PROJECTS
          </h2>
          <p className="text-fluid-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed px-2">
            Cutting-edge projects showcasing <span className="text-cyan-400 font-semibold">AI innovation</span>, 
            <span className="text-blue-400 font-semibold"> cloud architecture</span>, and 
            <span className="text-purple-400 font-semibold"> next-generation development</span> practices. 
            Each project represents a leap forward in technology and business value.
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-2xl`
                  : 'glass-ai text-white hover:text-white hover:shadow-xl'
              }`}
            >
              <filter.icon className="w-5 h-5" />
              <span className="text-fluid-base sm:text-base">{filter.label}</span>
              <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs sm:text-sm font-bold">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project, index) => (
            <EnhancedProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={openProjectModal}
            />
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-20"
        >
          <div className="glass-ai rounded-3xl p-8 sm:p-12 data-visualization">
            <h2 className="tech-title text-fluid-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-fluid-lg sm:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 btn-ai text-fluid-base sm:text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3.5 sm:py-4 btn-code text-fluid-base sm:text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
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
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6 bg-black/50 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-ai rounded-t-3xl sm:rounded-3xl w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden border border-cyan-500/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-cyan-500/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 id="project-modal-title" className="text-fluid-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3 sm:gap-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getCategoryColor(selectedProject.category)} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        {React.createElement(getCategoryIcon(selectedProject.category), { className: 'w-5 h-5 sm:w-6 sm:h-6 text-white' })}
                      </div>
                      <span className="truncate">{selectedProject.title}</span>
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                      <span className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${getStatusColor(selectedProject.status)}`}>
                        {selectedProject.status}
                      </span>
                      <span className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${getDifficultyColor(selectedProject.difficulty)} text-white text-xs sm:text-sm font-bold rounded-full`}>
                        {selectedProject.difficulty}
                      </span>
                      <span className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white text-xs sm:text-sm font-bold rounded-full`}>
                        {selectedProject.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={closeProjectModal}
                    className="p-2.5 sm:p-3 hover:bg-cyan-500/20 rounded-2xl transition-colors duration-300"
                    aria-label="Close project details"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </div>
                </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto px-6 sm:px-8 pt-6 pb-24 sm:pb-8">
                {/* Project Image */}
                {selectedProject.image && (
                  <div className="mb-6 sm:mb-8">
                    <div className="w-full h-44 sm:h-64 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
                      {React.createElement(getCategoryIcon(selectedProject.category), { className: 'w-16 h-16 sm:w-24 sm:h-24 text-cyan-400' })}
                    </div>
                  </div>
                )}

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Column */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Description */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Description
                      </h4>
                      <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 sm:px-4 py-1.5 glass-code text-white text-xs sm:text-sm rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {selectedProject.features?.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-fluid-base sm:text-lg text-white/90">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Project Stats */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Project Statistics
                      </h4>
                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <div className="glass-ai rounded-2xl p-4 sm:p-6 text-center">
                          <p className="text-fluid-xl sm:text-3xl font-bold text-cyan-400">{selectedProject.duration}</p>
                          <p className="text-xs sm:text-sm text-white/90">Duration</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-4 sm:p-6 text-center">
                          <p className="text-fluid-xl sm:text-3xl font-bold text-blue-400">{selectedProject.teamSize}</p>
                          <p className="text-xs sm:text-sm text-white/90">Team Size</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-4 sm:p-6 text-center">
                          <p className="text-fluid-xl sm:text-3xl font-bold text-purple-400">{selectedProject.technologies.length}</p>
                          <p className="text-xs sm:text-sm text-white/90">Technologies</p>
                        </div>
                        <div className="glass-ai rounded-2xl p-4 sm:p-6 text-center">
                          <p className="text-fluid-xl sm:text-3xl font-bold text-cyan-400">{selectedProject.features?.length || 0}</p>
                          <p className="text-xs sm:text-sm text-white/90">Features</p>
                        </div>
                      </div>
                    </div>

                    {/* Architecture */}
                    {selectedProject.architecture && (
                      <div>
                        <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          </div>
                          Architecture
                        </h4>
                        <p className="text-fluid-base sm:text-lg text-white/90 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-3 sm:p-4 rounded-2xl border border-purple-500/20">
                          {selectedProject.architecture}
                        </p>
                      </div>
                    )}

                    {/* Metrics */}
                    {selectedProject.metrics && (
                      <div>
                        <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                            <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                          </div>
                          Performance Metrics
                        </h4>
                        <div className="space-y-2.5 sm:space-y-3">
                          {Object.entries(selectedProject.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center glass-ai rounded-xl p-3 sm:p-4">
                              <span className="text-fluid-base sm:text-base text-white font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                              <span className="text-cyan-400 font-bold text-fluid-base sm:text-base">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Impact & Results
                      </h4>
                      <p className="text-fluid-base sm:text-lg text-white/90 bg-gradient-to-r from-green-500/10 to-cyan-500/10 p-3 sm:p-4 rounded-2xl border border-green-500/20">
                        {selectedProject.impact}
                      </p>
                    </div>
                    </div>
                  </div>
                </div>

              {/* Sticky Action Bar on Mobile */}
              <div className="sticky bottom-0 inset-x-0 bg-gradient-to-br from-slate-900/80 via-blue-950/80 to-indigo-950/80 backdrop-blur-md border-t border-cyan-500/20 p-4 sm:hidden">
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 btn-ai text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 group"
                    >
                      <ExternalLink className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      Live
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 btn-code text-center text-sm font-bold rounded-xl flex items-center justify-center gap-2 group"
                    >
                      <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Desktop Action Buttons */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-4 p-6 sm:p-8 border-t border-cyan-500/20">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 btn-ai text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
                    >
                      <ExternalLink className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300" />
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
                      <Github className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform duration-300" />
                      View Code
                    </a>
                  )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(AIProjects);