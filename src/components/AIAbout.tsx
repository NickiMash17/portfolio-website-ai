import React, { useState } from 'react';
import {
  Code,
  Brain,
  Zap,
  Database,
  Cloud,
  Server,
  Award,
  Shield,
  Cpu,
  GitBranch,
  Layers,
  Activity,
  TrendingUp,
  Rocket,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';

type TabId = 'overview' | 'experience' | 'skills' | 'certifications';

const AIAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  const experience = [
    {
      year: '2025',
      title: 'Web Developer Intern',
      company: 'CodeCatalyst, Remote',
      description: 'Built full-stack applications using React, Node.js, and MongoDB. Implemented JWT authentication, reducing report generation time by 20%. Delivered responsive UIs with Tailwind CSS.',
      technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      icon: Code,
      category: 'development'
    },
    {
      year: '2025',
      title: 'AI Model Trainer',
      company: 'Outlier, Remote',
      description: 'Created and refined 100+ AI prompts, improving model accuracy by 25%. Reduced debugging time for developers by 10 hours/week.',
      technologies: ['AI Prompt Engineering', 'Model Training', 'Data Analysis'],
      icon: Brain,
      category: 'ai'
    },
    {
      year: '2012-2021',
      title: 'Junior Navigation Officer',
      company: 'South African Navy, Simon\'s Town',
      description: 'Conducted pre-departure briefings and optimized voyage plans, reducing fuel consumption by up to 10% per voyage. Enhanced vessel safety and trained 5+ junior officers.',
      technologies: ['Navigation Systems', 'Safety Protocols', 'Team Leadership', 'Optimization'],
      icon: Shield,
      category: 'leadership'
    }
  ];

  const skills = [
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'Python & TensorFlow', level: 90, icon: Brain, color: 'from-cyan-500 to-blue-500', category: 'ai' },
        { name: 'OpenAI GPT Integration', level: 85, icon: Cpu, color: 'from-blue-500 to-purple-500', category: 'ai' },
        { name: 'Azure AI Services', level: 88, icon: Cloud, color: 'from-purple-500 to-cyan-500', category: 'ai' },
        { name: 'Data Analysis & Visualization', level: 82, icon: Database, color: 'from-cyan-500 to-blue-500', category: 'ai' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'Microsoft Azure', level: 92, icon: Cloud, color: 'from-blue-500 to-cyan-500', category: 'cloud' },
        { name: 'Docker & Containerization', level: 85, icon: Server, color: 'from-cyan-500 to-blue-500', category: 'cloud' },
        { name: 'CI/CD Pipelines', level: 80, icon: GitBranch, color: 'from-blue-500 to-purple-500', category: 'cloud' },
        { name: 'Infrastructure as Code', level: 75, icon: Layers, color: 'from-purple-500 to-cyan-500', category: 'cloud' }
      ]
    },
    {
      category: 'Full-Stack Development',
      items: [
        { name: 'React.js & TypeScript', level: 95, icon: Code, color: 'from-cyan-500 to-purple-500', category: 'code' },
        { name: 'Node.js & Express', level: 88, icon: Server, color: 'from-purple-500 to-blue-500', category: 'code' },
        { name: 'ASP.NET Core', level: 85, icon: Code, color: 'from-blue-500 to-cyan-500', category: 'code' },
        { name: 'RESTful APIs', level: 90, icon: Activity, color: 'from-cyan-500 to-purple-500', category: 'code' }
      ]
    },
    {
      category: 'Data & Analytics',
      items: [
        { name: 'MongoDB & SQL Server', level: 88, icon: Database, color: 'from-purple-500 to-cyan-500', category: 'data' },
        { name: 'Data Visualization', level: 82, icon: Activity, color: 'from-cyan-500 to-blue-500', category: 'data' },
        { name: 'Analytics & Reporting', level: 85, icon: TrendingUp, color: 'from-blue-500 to-purple-500', category: 'data' },
        { name: 'Git & Version Control', level: 92, icon: GitBranch, color: 'from-purple-500 to-cyan-500', category: 'data' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2024',
      badge: 'AZ-204',
      description: 'Associate-level certification for developing applications and services on Azure.',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-developer/',
      category: 'cloud'
    },
    {
      name: 'Microsoft Certified: Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      badge: 'DP-900',
      description: 'Fundamental knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
      icon: Database,
      color: 'from-cyan-500 to-blue-500',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/',
      category: 'data'
    },
    {
      name: 'SheCodes: Responsive Web Development',
      issuer: 'SheCodes',
      date: '2024',
      badge: 'Advanced',
      description: 'Advanced web development certification covering responsive design and modern web technologies.',
      icon: Award,
      color: 'from-purple-500 to-cyan-500',
      url: 'https://www.shecodes.io/',
      category: 'development'
    },
    {
      name: 'Techbridle Foundation: Software Development Bootcamp',
      issuer: 'Techbridle Foundation',
      date: '2024',
      badge: 'Bootcamp',
      description: 'Intensive software development bootcamp covering full-stack development and modern technologies.',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      url: '#',
      category: 'development'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Lightbulb, color: 'from-cyan-500 to-blue-500' },
    { id: 'experience', label: 'Experience', icon: TrendingUp, color: 'from-blue-500 to-purple-500' },
    { id: 'skills', label: 'Skills', icon: Zap, color: 'from-purple-500 to-cyan-500' },
    { id: 'certifications', label: 'Certifications', icon: Award, color: 'from-cyan-500 to-purple-500' }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'cloud': return Cloud;
      case 'code': return Code;
      case 'data': return Database;
      case 'development': return Code;
      case 'leadership': return Shield;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai': return 'from-cyan-500 to-blue-500';
      case 'cloud': return 'from-blue-500 to-purple-500';
      case 'code': return 'from-purple-500 to-cyan-500';
      case 'data': return 'from-cyan-500 to-purple-500';
      case 'development': return 'from-blue-500 to-cyan-500';
      case 'leadership': return 'from-orange-500 to-red-500';
      default: return 'from-cyan-500 to-blue-500';
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-app-gradient -z-10" />
      
      {/* AI Neural Network Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {/* Neural Network Nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i % 4) * 20}%`}
              cy={`${25 + Math.floor(i / 4) * 25}%`}
              r="4"
              fill="var(--ai-primary)"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 3 + i * 0.2,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
          {/* Neural Connections */}
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={`connection-${i}`}
              x1={`${20 + (i % 3) * 20}%`}
              y1={`${25 + Math.floor(i / 3) * 25}%`}
              x2={`${40 + (i % 3) * 20}%`}
              y2={`${50 + Math.floor(i / 3) * 25}%`}
              stroke="var(--ai-accent)"
              strokeWidth="1"
              strokeDasharray="3,3"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Data Science Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenAI'].map((lib, i) => (
          <motion.div
            key={lib}
            className="absolute text-xs font-mono text-[var(--ai-accent)]/30 bg-[var(--ai-accent)]/5 px-2 py-1 rounded border border-[var(--ai-accent)]/20"
            style={{
              right: `${5 + (i * 12)}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-6, 6, -6],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {lib}
          </motion.div>
        ))}
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="tech-title leading-tight-mobile text-fluid-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            ABOUT ME
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-secondary">
            Software developer with a passion for AI and cloud technologies.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r ' + tab.color + ' text-white shadow-lg'
                  : 'text-white hover:text-[var(--ai-primary)] hover:bg-[var(--ai-primary)]/10'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Overview Content */}
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Career Focus</h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base break-words hyphens-auto">
                    Specializing in full-stack development with a focus on AI integration and cloud architecture. 
                    I blend technical expertise with creative problem-solving to build innovative solutions.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Technical Vision</h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base break-words hyphens-auto">
                    Leveraging Azure cloud services and AI technologies to create scalable, intelligent applications. 
                    Committed to writing clean, maintainable code and implementing best practices.
                  </p>
                </div>
              </div>

              {/* Stats & Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skills.map((category, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 backdrop-blur-sm border border-slate-700/50"
                  >
                    <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-primary mb-2 sm:mb-3 break-words hyphens-auto leading-tight">{category.category}</h4>
                    <div className="space-y-2 sm:space-y-3">
                      {category.items.slice(0, 2).map((skill, skillIdx) => (
                        <div key={skillIdx} className="flex items-start gap-2 sm:gap-3">
                          <div className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0`}>
                            <skill.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-white" />
                          </div>
                          <span className="text-secondary text-xs sm:text-sm lg:text-base break-words hyphens-auto leading-tight flex-1 min-w-0">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience */}
          {activeTab === 'experience' && (
            <div className="space-y-6 sm:space-y-8">
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(job.category)} flex items-center justify-center flex-shrink-0`}>
                      <job.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-primary break-words hyphens-auto">{job.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-secondary">
                        <span className="break-words hyphens-auto">{job.company}</span>
                        <span className="text-[var(--ai-primary)]">{job.year}</span>
                      </div>
                      <p className="text-secondary text-sm sm:text-base leading-relaxed break-words hyphens-auto">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
                        {job.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm bg-slate-700/50 text-secondary rounded-lg break-words hyphens-auto"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div className="space-y-8 sm:space-y-10">
              {skills.map((category, idx) => (
                <div key={idx} className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary break-words hyphens-auto">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                    {category.items.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50"
                      >
                        <div className="flex flex-col gap-3 sm:gap-4">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center flex-shrink-0`}>
                              <skill.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-primary text-sm sm:text-base break-words hyphens-auto leading-tight">{skill.name}</h4>
                            </div>
                          </div>
                          <div className="mt-2">
                            <div className="bg-slate-700/50 rounded-full h-2">
                              <div
                                className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/50 rounded-xl lg:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-slate-700/50"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="space-y-2 flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-primary break-words hyphens-auto leading-tight">{cert.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-4 text-sm text-secondary">
                        <span className="break-words hyphens-auto">{cert.issuer}</span>
                        <span className="text-[var(--ai-primary)]">{cert.date}</span>
                        <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs sm:text-sm break-words hyphens-auto">{cert.badge}</span>
                      </div>
                      <p className="text-secondary text-sm sm:text-base leading-relaxed break-words hyphens-auto">{cert.description}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[var(--ai-primary)] hover:text-[var(--ai-secondary)] transition-colors duration-300 text-sm sm:text-base break-words hyphens-auto"
                        >
                          Learn more →
                        </a>
                      )}
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

export default AIAbout;
