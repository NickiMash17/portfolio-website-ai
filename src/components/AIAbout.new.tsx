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
    <section id="about" className="py-20 relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-300">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overview Content */}
              <div className="space-y-6">
                <div className="glass-ai rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Career Focus</h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base break-words hyphens-auto">
                    Specializing in full-stack development with a focus on AI integration and cloud architecture. 
                    I blend technical expertise with creative problem-solving to build innovative solutions.
                  </p>
                </div>
                
                <div className="glass-ai rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Technical Vision</h3>
                  <p className="text-secondary leading-relaxed text-sm sm:text-base break-words hyphens-auto">
                    Leveraging Azure cloud services and AI technologies to create scalable, intelligent applications. 
                    Committed to writing clean, maintainable code and implementing best practices.
                  </p>
                </div>
              </div>

              {/* Stats & Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {skills.map((category, idx) => (
                  <div
                    key={idx}
                    className="glass-ai rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 border border-[var(--ai-primary)]/20 shadow-2xl"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3">{category.category}</h4>
                    <div className="space-y-3">
                      {category.items.slice(0, 2).map((skill, skillIdx) => (
                        <div key={skillIdx} className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                            <skill.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-300">{skill.name}</span>
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
            <div className="space-y-8">
              {experience.map((job, idx) => (
                <div
                  key={idx}
                  className="glass-ai rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(job.category)} flex items-center justify-center flex-shrink-0`}>
                      <job.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
                        <span>{job.company}</span>
                        <span className="text-[var(--ai-primary)]">{job.year}</span>
                      </div>
                      <p className="text-slate-300">{job.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {job.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 text-sm bg-slate-700/50 text-slate-300 rounded-lg"
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
            <div className="space-y-10">
              {skills.map((category, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.items.map((skill, skillIdx) => (
                      <div
                        key={skillIdx}
                        className="glass-ai rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                            <skill.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{skill.name}</h4>
                            <div className="mt-1 bg-slate-700/50 rounded-full h-2">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-ai rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-300">
                        <span>{cert.issuer}</span>
                        <span className="text-[var(--ai-primary)]">{cert.date}</span>
                        <span className="px-2 py-1 bg-slate-700/50 rounded-lg">{cert.badge}</span>
                      </div>
                      <p className="text-slate-300">{cert.description}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block text-[var(--ai-primary)] hover:text-[var(--ai-secondary)] transition-colors duration-300"
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
