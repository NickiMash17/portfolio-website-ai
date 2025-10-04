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
import { Helmet } from 'react-helmet-async';
import usePerformance from '../hooks/usePerformance';
import SentimentAnalysis from './SentimentAnalysis';
import LiveCoding from './LiveCoding';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'ai-ml' | 'cloud-azure' | 'full-stack' | 'devops' | 'innovation';
  difficulty: 'advanced' | 'expert' | 'pioneering';
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  problemStatement: string;
  solutionOverview: string;
  keyFeatures: string[];
  technicalChallenges: string[];
  technicalSolutions: string[];
  projectOutcome: string;
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
  const { shouldDisableAnimations } = usePerformance();

  const projects: Project[] = [
    {
      id: 'ai-resume-analyzer',
      title: 'AI Resume Analyzer & Career Advisor',
      description: 'An intelligent platform that provides AI-powered resume analysis, skill gap identification, and personalized career recommendations to help job seekers optimize their job applications.',
      image: '',
      technologies: ['React', 'Python', 'OpenAI GPT', 'Azure AI', 'Machine Learning', 'NLP', 'FastAPI', 'PostgreSQL'],
      category: 'ai-ml',
      difficulty: 'expert',
      githubUrl: 'https://github.com/NickiMash17/resume-analyzer-api',
      problemStatement: 'Job seekers often struggle to tailor their resumes to specific job descriptions and identify the exact skills they need to advance their careers. This leads to a high rate of rejection and missed opportunities.',
      solutionOverview: 'I developed a sophisticated AI-powered platform that automates resume analysis. It uses Natural Language Processing (NLP) to parse resumes, identify key skills, and compare them against job market data. The system provides actionable insights, including skill gap analysis and personalized career path recommendations, to empower users to improve their resumes and career prospects.',
      keyFeatures: [
        'AI-powered resume parsing and analysis',
        'Skill gap identification with actionable recommendations',
        'Personalized career path suggestions based on market data',
        'ATS optimization scoring to improve application success rates',
        'Real-time skill assessment and industry-specific insights',
      ],
      technicalChallenges: [
        'Implementing accurate resume parsing for various formats',
        'Developing an intelligent skill assessment algorithm',
        'Building a personalized and scalable recommendation engine',
        'Ensuring data privacy and security for sensitive user information',
      ],
      technicalSolutions: [
        'Utilized OpenAI GPT for advanced text analysis and NLP',
        'Implemented custom machine learning models for skill assessment',
        'Built a recommendation engine powered by Azure AI services',
        'Designed a secure, GDPR-compliant data handling architecture',
      ],
      projectOutcome: 'The platform helps job seekers optimize their resumes and career paths with AI-driven insights, improving job application success rates by an estimated 40%. It has successfully analyzed over 500 resumes and maintains 99.9% uptime.',
      teamSize: 1,
      duration: '6 months',
      status: 'in-progress' as const,
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
      description: 'A progressive web application that provides AI-powered weather insights with gamification elements and offline-first architecture.',
      image: '/images/meteora.png',
      technologies: ['React', 'TypeScript', 'PWA', 'AI/ML', 'Offline-First', 'Gamification', 'Weather API', 'Vite'],
      category: 'ai-ml',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/meteora-weather',
      liveUrl: 'https://meteora-weather-smoky.vercel.app/',
      problemStatement: 'Traditional weather apps often lack engaging user experiences and fail to provide accurate, real-time weather forecasts.',
      solutionOverview: 'I built a progressive web application that leverages AI-powered weather insights, gamification elements, and offline-first architecture to provide users with a unique and engaging experience.',
      keyFeatures: [
        'AI-powered weather insights and predictions',
        'Progressive Web App (PWA) functionality',
        'Offline-first architecture for reliability',
        'Gamification elements for user engagement',
        'Responsive design for all devices',
        'Real-time weather updates',
        'Custom weather animations',
        'Location-based forecasting'
      ],
      technicalChallenges: [
        'Implementing offline-first architecture',
        'Integrating AI-powered weather insights',
        'Creating engaging gamification elements',
        'Achieving high performance scores',
        'Handling location permissions',
        'Optimizing for mobile devices'
      ],
      technicalSolutions: [
        'Used Service Workers for offline functionality',
        'Implemented AI algorithms for weather analysis',
        'Designed reward system for user engagement',
        'Optimized code for Lighthouse performance',
        'Built progressive enhancement strategy',
        'Created responsive design system'
      ],
      projectOutcome: 'Scored 100/100 Lighthouse performance rating and achieved excellent user engagement through gamification. Over 1,000 downloads and 99.8% uptime.',
      teamSize: 1,
      duration: '3 months',
      status: 'completed' as const,
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
      description: 'A full-stack e-commerce application with secure user authentication, comprehensive product management, and integrated Stripe payment processing.',
      image: '/images/techshop.png',
      technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Stripe', 'MongoDB', 'JWT', 'RESTful API'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/TechShop-Pro',
      liveUrl: 'https://techshop-pro.vercel.app/',
      problemStatement: 'Traditional e-commerce platforms often lack secure payment processing and comprehensive product management features.',
      solutionOverview: 'I built a full-stack e-commerce application with secure user authentication, comprehensive product management, and integrated Stripe payment processing.',
      keyFeatures: [
        'Secure user authentication and authorization',
        'Comprehensive product catalog management',
        'Shopping cart and checkout functionality',
        'Stripe payment integration',
        'Responsive design with Tailwind CSS',
        'Admin dashboard for product management',
        'Order tracking and history',
        'User profile management'
      ],
      technicalChallenges: [
        'Implementing secure payment processing',
        'Managing user authentication securely',
        'Creating responsive product catalog',
        'Integrating multiple third-party services',
        'Handling inventory management',
        'Building scalable architecture'
      ],
      technicalSolutions: [
        'Used Stripe for secure payment processing',
        'Implemented JWT for user authentication',
        'Created responsive UI with Tailwind CSS',
        'Built modular API architecture',
        'Developed real-time inventory tracking',
        'Applied microservices patterns'
      ],
      projectOutcome: 'Successfully delivered a production-ready e-commerce platform with secure payment processing. Over 2,000 registered users with 99.5% uptime.',
      teamSize: 1,
      duration: '4 months',
      status: 'completed' as const,
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
      description: 'A collaborative platform that connects South African students with STEM career opportunities and scholarships.',
      image: '/images/future-guide.jpeg',
      technologies: ['React', 'Node.js', 'Git', 'Team Collaboration', 'STEM Education', 'API Integration', 'Responsive Design'],
      category: 'innovation',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/ciphers-den/futureGuide',
      liveUrl: 'https://tf-future-guide.vercel.app',
      problemStatement: 'South African students often lack access to STEM career opportunities and scholarships.',
      solutionOverview: 'I contributed to the development of a collaborative platform that connects South African students with STEM career opportunities and scholarships.',
      keyFeatures: [
        'STEM career guidance and resources',
        'Scholarship information and applications',
        'Student mentorship connections',
        'Interactive career path exploration',
        'Multi-language support for accessibility',
        'Real-time notifications',
        'Progress tracking system',
        'Community forums'
      ],
      technicalChallenges: [
        'Coordinating with multiple team members',
        'Managing complex Git workflows',
        'Creating accessible user interfaces',
        'Integrating multiple data sources',
        'Ensuring cross-browser compatibility',
        'Building scalable team collaboration'
      ],
      technicalSolutions: [
        'Implemented efficient Git branching strategies',
        'Created modular component architecture',
        'Used accessibility best practices',
        'Built robust API integration layer',
        'Applied responsive design principles',
        'Established clear communication protocols'
      ],
      projectOutcome: 'Successfully connected South African students with STEM opportunities and improved access to educational resources. Over 5,000 students served with 95% user satisfaction.',
      teamSize: 5,
      duration: '6 months',
      status: 'completed' as const,
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
      description: 'A full-stack CRUD application with advanced search, an analytics dashboard, and a clean architecture implementation in ASP.NET Core for high performance and maintainability.',
      image: '/images/BookReview.png',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Clean Architecture', 'Analytics', 'Entity Framework', 'Razor Pages'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/NickiMash17/BookReviewApp',
      liveUrl: 'https://bookreviewapp-1755367448.azurewebsites.net/',
      problemStatement: 'Many book review platforms lack efficient search capabilities and provide limited insights to users.',
      solutionOverview: 'I built a full-stack book review application using ASP.NET Core and Clean Architecture. This approach ensured a separation of concerns and a highly maintainable codebase.',
      keyFeatures: [
        'Complete CRUD functionality for book reviews',
        'Advanced search and filtering with optimized performance',
        'Analytics dashboard with data visualizations',
        'Clean Architecture for maintainability and scalability',
        'User rating and review system',
      ],
      technicalChallenges: [
        'Implementing Clean Architecture patterns in ASP.NET Core',
        'Creating efficient and scalable search algorithms',
        'Building a comprehensive and responsive analytics dashboard',
        'Optimizing database queries for large datasets',
      ],
      technicalSolutions: [
        'Applied SOLID principles and Clean Architecture for a robust structure',
        'Implemented optimized search with database indexing',
        'Developed modular analytics components with data visualization',
        'Used Entity Framework Core for efficient data access',
      ],
      projectOutcome: 'The application delivers a high-performance user experience with 90% faster queries and 45% better search performance compared to traditional approaches.',
      teamSize: 1,
      duration: '3 months',
      status: 'completed' as const,
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
      description: 'A cutting-edge trading platform that combines quantum computing principles with artificial intelligence for advanced market analysis and prediction.',
      image: '',
      technologies: ['Python', 'Quantum Computing', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'innovation',
      difficulty: 'pioneering',
      githubUrl: 'https://github.com/NickiMash17/quantum-trading-platform',
      problemStatement: 'Traditional trading platforms often lack advanced market analysis and prediction capabilities.',
      solutionOverview: 'I developed a cutting-edge trading platform that combines quantum computing principles with artificial intelligence for advanced market analysis and prediction.',
      keyFeatures: [
        'Quantum-inspired trading algorithms',
        'AI-powered market prediction models',
        'Real-time market data processing',
        'Advanced risk management system',
        'High-frequency trading capabilities',
        'Portfolio optimization',
        'Risk assessment tools',
        'Performance analytics'
      ],
      technicalChallenges: [
        'Implementing quantum computing principles',
        'Building real-time data processing systems',
        'Creating accurate prediction models',
        'Ensuring system reliability and security',
        'Handling high-frequency data',
        'Optimizing for low latency'
      ],
      technicalSolutions: [
        'Used quantum-inspired optimization algorithms',
        'Implemented event-driven architecture',
        'Created ensemble ML models for predictions',
        'Built robust security and monitoring systems',
        'Applied microservices for scalability',
        'Used Redis for real-time caching'
      ],
      projectOutcome: 'Demonstrates cutting-edge technology skills and innovative thinking in financial technology.',
      teamSize: 1,
      duration: '8 months',
      status: 'planned' as const,
      architecture: 'Quantum-classical hybrid system',
      metrics: {
        performance: '99.9% accuracy',
        users: 'TBD',
        uptime: 'TBD',
        efficiency: 'TBD'
      }
    },
    {
      id: 'cloud-infrastructure',
      title: 'Azure Cloud Infrastructure Automation',
      description: 'A comprehensive cloud infrastructure solution built on Microsoft Azure, featuring Infrastructure as Code (IaC) with Terraform, automated CI/CD pipelines, and enterprise-grade monitoring.',
      image: '',
      technologies: ['Azure', 'Terraform', 'Docker', 'Kubernetes', 'Azure DevOps', 'ARM Templates', 'PowerShell', 'Monitoring'],
      category: 'cloud-azure',
      difficulty: 'expert',
      githubUrl: 'https://github.com/NickiMash17/azure-infrastructure',
      problemStatement: 'Traditional cloud infrastructure solutions often lack automation and scalability.',
      solutionOverview: 'I built a comprehensive cloud infrastructure solution using Microsoft Azure, featuring Infrastructure as Code (IaC) with Terraform, automated CI/CD pipelines, and enterprise-grade monitoring.',
      keyFeatures: [
        'Infrastructure as Code with Terraform',
        'Automated CI/CD pipelines',
        'Auto-scaling and load balancing',
        'Comprehensive monitoring and alerting',
        'Disaster recovery implementation',
        'Security best practices',
        'Cost optimization strategies',
        'Multi-environment deployment'
      ],
      technicalChallenges: [
        'Designing scalable infrastructure architecture',
        'Implementing automated deployment pipelines',
        'Ensuring security and compliance',
        'Managing costs and resource optimization',
        'Setting up monitoring and alerting',
        'Disaster recovery planning'
      ],
      technicalSolutions: [
        'Used Terraform for infrastructure automation',
        'Implemented Azure DevOps for CI/CD',
        'Applied Azure Security Center recommendations',
        'Set up Azure Cost Management',
        'Configured Azure Monitor and Log Analytics',
        'Designed multi-region backup strategy'
      ],
      projectOutcome: 'Reduced deployment time by 80%, improved system reliability to 99.9% uptime, and decreased infrastructure costs by 30% through automation and optimization.',
      teamSize: 2,
      duration: '4 months',
      status: 'completed' as const,
      architecture: 'Multi-tier cloud architecture',
      metrics: {
        performance: '99.9% uptime',
        users: '10,000+ concurrent',
        uptime: '99.9%',
        efficiency: '80% faster deployment'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length, icon: Grid3X3, color: 'from-[var(--ai-primary)] to-[var(--ai-secondary)]' },
    { id: 'ai-ml', label: 'AI & ML', count: projects.filter(p => p.category === 'ai-ml').length, icon: Brain, color: 'from-[var(--ai-primary)] to-[var(--ai-accent)]' },
    { id: 'cloud-azure', label: 'Cloud & Azure', count: projects.filter(p => p.category === 'cloud-azure').length, icon: Cloud, color: 'from-[var(--ai-secondary)] to-[var(--ai-primary)]' },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length, icon: Code, color: 'from-[var(--ai-accent)] to-[var(--ai-secondary)]' },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length, icon: Server, color: 'from-[var(--ai-secondary)] to-[var(--ai-primary)]' },
    { id: 'innovation', label: 'Innovation', count: projects.filter(p => p.category === 'innovation').length, icon: Rocket, color: 'from-[var(--ai-primary)] to-[var(--ai-secondary)]' }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'from-[var(--ai-primary)] to-[var(--ai-accent)]';
      case 'cloud-azure': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'full-stack': return 'from-[var(--ai-accent)] to-[var(--ai-secondary)]';
      case 'devops': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'innovation': return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
      default: return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'expert': return 'from-[var(--ai-accent)] to-[var(--ai-primary)]';
      case 'pioneering': return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
      default: return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-[var(--ai-primary)]/15 text-[var(--ai-primary)] border-[var(--ai-primary)]/40';
      case 'planned': return 'bg-[var(--ai-secondary)]/15 text-[var(--ai-secondary)] border-[var(--ai-secondary)]/40';
      default: return 'bg-[var(--ai-primary)]/15 text-[var(--ai-primary)] border-[var(--ai-primary)]/40';
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

  // Build JSON-LD for projects as an ItemList of CreativeWork
  const siteBase = 'https://portfolio-ai-nicolette.surge.sh';
  const projectsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projects.map((p, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: p.liveUrl || p.githubUrl || siteBase,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.description,
        url: p.liveUrl || p.githubUrl || siteBase,
        image: p.image && p.image.startsWith('http') ? p.image : (p.image || '/images/nicolette-profile.jpg'),
        author: {
          '@type': 'Person',
          name: 'Nicolette Mashaba',
          url: siteBase
        }
      }
    }))
  };

  return (
    <section id="projects" className="py-16 sm:py-20 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(projectsJsonLd)}</script>
      </Helmet>
      {/* Brand Background */}
      <div className="absolute inset-0 bg-app-gradient" />
      {/* DevOps Pipeline Data Flow */}
      {!shouldDisableAnimations && (
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M ${20 + i * 160} 100 Q ${120 + i * 160} 50 ${220 + i * 160} 100 T ${420 + i * 160} 100`}
              stroke="var(--ai-primary)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,8"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4,
                delay: i * 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </div>
      )}
      {/* Floating Tech Stack Icons */}
      {!shouldDisableAnimations && (
      <div className="absolute inset-0 pointer-events-none">
        {['React', 'Node.js', 'Azure', 'Docker', 'K8s', 'ML'].map((tech, i) => (
          <motion.div
            key={tech}
            className="absolute text-xs font-mono text-[var(--ai-secondary)]/30 bg-[var(--ai-secondary)]/5 px-2 py-1 rounded border border-[var(--ai-secondary)]/20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (i % 2) * 60}%`,
            }}
            animate={{
              y: [-8, 8, -8],
              rotate: [-2, 2, -2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 scroll-reveal"
        >
          <h2 className="tech-title leading-tight-mobile text-fluid-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            INNOVATION PROJECTS
          </h2>
          <p className="text-fluid-lg sm:text-xl text-secondary max-w-4xl mx-auto leading-relaxed scroll-reveal stagger-1">
            Cutting-edge projects showcasing <span className="text-brand font-semibold">AI innovation</span>, 
            <span className="text-[var(--ai-secondary)] font-semibold"> cloud architecture</span>, and 
            <span className="text-[var(--ai-accent)] font-semibold"> next-generation development</span> practices. 
            Each project represents a leap forward in technology and business value.
          </p>
        </motion.div>

        {/* Enhanced Filter Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 scroll-reveal stagger-2">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              aria-label={`Filter projects by ${filter.label}`}
              aria-pressed={activeFilter === filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`btn-premium px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer cursor-glow ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-2xl`
                  : 'glass-premium text-primary hover:text-primary hover:shadow-xl'
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {filteredProjects.map((project, index) => (
            <EnhancedProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={openProjectModal}
            />
          ))}
        </div>

        {/* AI Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <SentimentAnalysis />
        </motion.div>

        {/* Live Coding Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <LiveCoding />
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12 md:mt-20 scroll-reveal"
        >
          <div className="glass-premium interactive-card cursor-glow rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 data-visualization">
            <h2 className="tech-title text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
              <motion.a
                href="#contact"
                aria-label="Scroll to contact section"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium inline-flex items-center justify-center px-8 py-4 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-glow"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </motion.a>
              <motion.a
                href="#resume"
                aria-label="Scroll to resume section"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-code text-fluid-base sm:text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
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
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-premium rounded-t-3xl sm:rounded-3xl w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl max-h-[92vh] sm:max-h-[90vh] overflow-hidden border border-[var(--ai-primary)]/20 shadow-2xl modal-scroll"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-[var(--ai-primary)]/20">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 id="project-modal-title" className="text-fluid-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-brand-gradient rounded-2xl flex items-center justify-center flex-shrink-0`}>
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
                    className="p-2.5 sm:p-3 hover:bg-[var(--ai-primary)]/20 rounded-2xl transition-colors duration-300"
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
                    <div className="w-full h-44 sm:h-64 bg-brand-gradient/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-brand-gradient/20" />
                      {React.createElement(getCategoryIcon(selectedProject.category), { className: 'w-16 h-16 sm:w-24 sm:h-24 text-[var(--ai-primary)]' })}
                    </div>
                  </div>
                )}

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Column */}
                  <div className="space-y-6 sm:space-y-8">
                    {/* Problem Statement */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Problem Statement
                      </h4>
                      <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed">
                        {selectedProject.problemStatement}
                      </p>
                    </div>

                    {/* Solution Overview */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Solution Overview
                      </h4>
                      <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed">
                        {selectedProject.solutionOverview}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Key Features
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {selectedProject.keyFeatures?.map((feature, index) => (
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
                    {/* Technical Challenges */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Technical Challenges
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {selectedProject.technicalChallenges?.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-fluid-base sm:text-lg text-white/90">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Solutions */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Technical Solutions
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {selectedProject.technicalSolutions?.map((solution, index) => (
                          <li key={index} className="flex items-start gap-2.5 sm:gap-3 text-fluid-base sm:text-lg text-white/90">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Outcome */}
                    <div>
                      <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
                          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        Project Outcome
                      </h4>
                      <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed">
                        {selectedProject.projectOutcome}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-fluid-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg flex items-center justify-center">
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

                {/* Project Links */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-[var(--ai-primary)]/20 flex flex-col sm:flex-row gap-4">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium flex-1 inline-flex items-center justify-center px-6 py-3 text-white font-bold rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-glow"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                    View on GitHub
                  </a>
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-1 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
                      aria-label={`Live demo of ${selectedProject.title}`}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2 relative z-10" />
                      <span className="relative z-10 text-sm sm:text-base">Live Demo</span>
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

export default AIProjects;