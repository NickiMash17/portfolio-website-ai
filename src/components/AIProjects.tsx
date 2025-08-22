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
      id: 'ai-chatbot-platform',
      title: 'AI-Powered Chatbot Platform',
      description: 'Enterprise-grade conversational AI platform with natural language processing and machine learning capabilities.',
      longDescription: 'A comprehensive chatbot platform that leverages Azure Cognitive Services, OpenAI GPT models, and custom ML algorithms to provide intelligent customer service solutions. Features include sentiment analysis, multi-language support, and seamless integration with existing business systems.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure AI', 'OpenAI GPT', 'Python', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes'],
      category: 'ai-ml',
      difficulty: 'expert',
      githubUrl: 'https://github.com/your-username/ai-chatbot-platform',
      liveUrl: 'https://ai-chatbot-demo.azurewebsites.net',
      demoUrl: 'https://demo.ai-chatbot.com',
      features: [
        'Natural Language Processing with 95% accuracy',
        'Multi-language support (EN, ES, FR, DE)',
        'Sentiment analysis and emotion detection',
        'Seamless Azure integration',
        'Real-time learning and adaptation'
      ],
      challenges: [
        'Achieving high accuracy in natural language understanding',
        'Scaling ML models for real-time processing',
        'Integrating multiple AI services seamlessly',
        'Ensuring data privacy and security compliance'
      ],
      solutions: [
        'Implemented ensemble ML models with Azure Cognitive Services',
        'Used Redis caching and Azure Functions for scalability',
        'Created unified API layer for service integration',
        'Implemented end-to-end encryption and GDPR compliance'
      ],
      impact: 'Reduced customer service response time by 80% and improved customer satisfaction scores by 35%.',
      teamSize: 6,
      duration: '8 months',
      status: 'completed'
    },
    {
      id: 'azure-cloud-architecture',
      title: 'Enterprise Cloud Architecture',
      description: 'Scalable cloud infrastructure design with Azure services, implementing microservices and DevOps best practices.',
      longDescription: 'Designed and implemented a comprehensive cloud architecture for a Fortune 500 company, featuring microservices architecture, automated CI/CD pipelines, and advanced monitoring solutions. The system handles millions of requests daily with 99.99% uptime.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure', 'Terraform', 'Kubernetes', 'Docker', 'Azure DevOps', 'Application Insights', 'Azure SQL', 'Redis'],
      category: 'cloud-azure',
      difficulty: 'expert',
      githubUrl: 'https://github.com/your-username/azure-architecture',
      liveUrl: 'https://enterprise-cloud.azurewebsites.net',
      features: [
        'Microservices architecture with 50+ services',
        'Automated CI/CD with Azure DevOps',
        'Advanced monitoring and alerting',
        'Auto-scaling and load balancing',
        'Multi-region deployment'
      ],
      challenges: [
        'Managing complex microservices interactions',
        'Ensuring high availability across regions',
        'Implementing comprehensive monitoring',
        'Automating deployment processes'
      ],
      solutions: [
        'Used Azure Service Mesh for service communication',
        'Implemented Azure Traffic Manager for global routing',
        'Created custom dashboards with Application Insights',
        'Built automated deployment pipelines with Terraform'
      ],
      impact: 'Achieved 99.99% uptime and reduced deployment time from 4 hours to 15 minutes.',
      teamSize: 8,
      duration: '12 months',
      status: 'completed'
    },
    {
      id: 'ml-pipeline-automation',
      title: 'ML Pipeline Automation',
      description: 'Automated machine learning pipeline for data processing, model training, and deployment using Azure ML.',
      longDescription: 'Built an end-to-end machine learning pipeline that automates data preprocessing, feature engineering, model training, and deployment. The system includes automated hyperparameter tuning, model versioning, and A/B testing capabilities.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure ML', 'Python', 'TensorFlow', 'PyTorch', 'MLflow', 'Kubeflow', 'Azure Functions', 'Cosmos DB'],
      category: 'ai-ml',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/your-username/ml-pipeline',
      features: [
        'Automated data preprocessing and feature engineering',
        'Hyperparameter optimization with Azure ML',
        'Model versioning and experiment tracking',
        'Automated model deployment and monitoring',
        'A/B testing framework'
      ],
      challenges: [
        'Automating complex ML workflows',
        'Managing model versions and experiments',
        'Ensuring reproducibility across environments',
        'Optimizing training performance'
      ],
      solutions: [
        'Used Azure ML pipelines for workflow orchestration',
        'Implemented MLflow for experiment tracking',
        'Created containerized training environments',
        'Used distributed training with multiple GPUs'
      ],
      impact: 'Reduced model development time by 60% and improved model accuracy by 15%.',
      teamSize: 4,
      duration: '6 months',
      status: 'completed'
    },
    {
      id: 'real-time-analytics-dashboard',
      title: 'Real-Time Analytics Dashboard',
      description: 'Interactive dashboard for real-time data visualization and business intelligence using Azure Stream Analytics.',
      longDescription: 'Developed a real-time analytics platform that processes streaming data from multiple sources, providing instant insights and predictive analytics. Features include interactive charts, custom alerts, and automated reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure Stream Analytics', 'Power BI', 'React', 'TypeScript', 'Azure Event Hubs', 'Azure Data Lake', 'Azure Functions'],
      category: 'full-stack',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/your-username/analytics-dashboard',
      liveUrl: 'https://analytics-dashboard.azurewebsites.net',
      features: [
        'Real-time data streaming and processing',
        'Interactive data visualization',
        'Custom alerting and notifications',
        'Automated report generation',
        'Predictive analytics models'
      ],
      challenges: [
        'Processing high-volume streaming data',
        'Creating responsive real-time visualizations',
        'Implementing complex business logic',
        'Ensuring data accuracy and consistency'
      ],
      solutions: [
        'Used Azure Stream Analytics for data processing',
        'Implemented WebSocket connections for real-time updates',
        'Created modular business logic components',
        'Used Azure Data Lake for data validation'
      ],
      impact: 'Enabled real-time decision making and reduced reporting time from daily to instant.',
      teamSize: 5,
      duration: '7 months',
      status: 'completed'
    },
    {
      id: 'devops-automation-suite',
      title: 'DevOps Automation Suite',
      description: 'Comprehensive DevOps toolchain with automated testing, deployment, and monitoring using Azure DevOps.',
      longDescription: 'Built a complete DevOps automation suite that streamlines the software development lifecycle. Includes automated testing, security scanning, deployment pipelines, and comprehensive monitoring solutions.',
      image: '/api/placeholder/600/400',
      technologies: ['Azure DevOps', 'Terraform', 'Docker', 'Kubernetes', 'Helm', 'Prometheus', 'Grafana', 'SonarQube'],
      category: 'devops',
      difficulty: 'advanced',
      githubUrl: 'https://github.com/your-username/devops-suite',
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as Code with Terraform',
        'Container orchestration with Kubernetes',
        'Comprehensive monitoring and alerting',
        'Security scanning and compliance checks'
      ],
      challenges: [
        'Integrating multiple DevOps tools',
        'Ensuring security compliance',
        'Managing complex deployment scenarios',
        'Providing comprehensive monitoring'
      ],
      solutions: [
        'Created unified API for tool integration',
        'Implemented automated security scanning',
        'Built deployment templates for common scenarios',
        'Used Prometheus and Grafana for monitoring'
      ],
      impact: 'Reduced deployment failures by 90% and improved development velocity by 40%.',
      teamSize: 6,
      duration: '9 months',
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