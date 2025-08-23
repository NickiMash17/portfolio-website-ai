import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Lightbulb,
  TrendingUp,
  Award,
  Brain,
  Cloud,
  Zap,
  Rocket,
  Database,
  Shield
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
      icon: Code
    },
    {
      year: '2025',
      title: 'AI Model Trainer',
      company: 'Outlier, Remote',
      description: 'Created and refined 100+ AI prompts, improving model accuracy by 25%. Reduced debugging time for developers by 10 hours/week.',
      technologies: ['AI Prompt Engineering', 'Model Training', 'Data Analysis'],
      icon: Brain
    },
    {
      year: '2012-2021',
      title: 'Junior Navigation Officer',
      company: 'South African Navy, Simon\'s Town',
      description: 'Conducted pre-departure briefings and optimized voyage plans, reducing fuel consumption by up to 10% per voyage. Enhanced vessel safety and trained 5+ junior officers.',
      technologies: ['Navigation Systems', 'Safety Protocols', 'Team Leadership', 'Optimization'],
      icon: Shield
    }
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: [
        { name: 'JavaScript & TypeScript', level: 90, icon: Code, color: 'from-neon-500 to-purple-500' },
        { name: 'Python', level: 85, icon: Code, color: 'from-purple-500 to-azure-500' },
        { name: 'C# & .NET', level: 80, icon: Code, color: 'from-azure-500 to-neon-500' },
        { name: 'SQL', level: 85, icon: Database, color: 'from-neon-500 to-purple-500' }
      ]
    },
    {
      category: 'Frontend Development',
      items: [
        { name: 'React.js', level: 92, icon: Code, color: 'from-purple-500 to-neon-500' },
        { name: 'HTML5 & CSS3', level: 90, icon: Code, color: 'from-azure-500 to-purple-500' },
        { name: 'Tailwind CSS', level: 88, icon: Code, color: 'from-neon-500 to-azure-500' },
        { name: 'Vite & Bootstrap', level: 85, icon: Code, color: 'from-purple-500 to-neon-500' }
      ]
    },
    {
      category: 'Backend & Cloud',
      items: [
        { name: 'Node.js & Express', level: 88, icon: Code, color: 'from-azure-500 to-purple-500' },
        { name: 'ASP.NET Core', level: 85, icon: Code, color: 'from-neon-500 to-azure-500' },
        { name: 'Microsoft Azure', level: 90, icon: Cloud, color: 'from-purple-500 to-neon-500' },
        { name: 'Docker & CI/CD', level: 80, icon: Database, color: 'from-azure-500 to-purple-500' }
      ]
    },
    {
      category: 'Databases & Tools',
      items: [
        { name: 'MongoDB', level: 85, icon: Database, color: 'from-neon-500 to-purple-500' },
        { name: 'SQL Server', level: 80, icon: Database, color: 'from-purple-500 to-azure-500' },
        { name: 'Git & GitHub', level: 90, icon: Code, color: 'from-azure-500 to-neon-500' },
        { name: 'RESTful APIs', level: 88, icon: Code, color: 'from-neon-500 to-purple-500' }
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
      icon: Code,
      color: 'from-purple-500 to-azure-500',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-developer/'
    },
    {
      name: 'Microsoft Certified: Azure Data Fundamentals',
      issuer: 'Microsoft',
      date: '2024',
      badge: 'DP-900',
      description: 'Fundamental knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
      icon: Database,
      color: 'from-azure-500 to-blue-600',
      url: 'https://learn.microsoft.com/en-us/certifications/azure-data-fundamentals/'
    },
    {
      name: 'SheCodes: Responsive Web Development',
      issuer: 'SheCodes',
      date: '2024',
      badge: 'Advanced',
      description: 'Advanced web development certification covering responsive design and modern web technologies.',
      icon: Award,
      color: 'from-neon-500 to-purple-500',
      url: 'https://www.shecodes.io/'
    },
    {
      name: 'Techbridle Foundation: Software Development Bootcamp',
      issuer: 'Techbridle Foundation',
      date: '2024',
      badge: 'Bootcamp',
      description: 'Intensive software development bootcamp covering full-stack development and modern technologies.',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      url: '#'
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Lightbulb },
    { id: 'experience', label: 'Experience', icon: TrendingUp },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-section font-bold text-white mb-6 font-orbitron tracking-wider">
            ABOUT ME
          </h2>
          <p className="text-body text-light-300 max-w-3xl mx-auto">
            Motivated and results-driven Software Engineering student with experience in full-stack development, cloud computing, and AI-assisted coding. 
            Microsoft Azure certified and recognized as a top-performing student, dedicated to building scalable, user-friendly applications.
          </p>
        </motion.div>
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabId)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-azure-600 to-purple-600 text-white shadow-azure'
                  : 'bg-dark-800/50 text-light-400 hover:bg-dark-700/50 hover:text-white border border-dark-700 hover:border-azure-500/50'
              }`}
              aria-pressed={activeTab === tab.id}
              tabIndex={0}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div
          className={
            activeTab === 'overview' ? 'max-w-4xl mx-auto' :
            activeTab === 'experience' ? 'max-w-4xl mx-auto' :
            activeTab === 'skills' ? 'max-w-5xl mx-auto' :
            activeTab === 'certifications' ? 'max-w-6xl mx-auto' : ''
          }
        >
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education & Background */}
              <div className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education & Achievements</h3>
                </div>
                <p className="text-light-300 leading-relaxed mb-4">
                  Currently pursuing Occupational Certificate: Software Engineering (NQF Level 6) at CTU Training Solutions, 
                  graduating in 2026. Awarded Programming Foundation Top Performer in 2023.
                </p>
                <p className="text-light-300 leading-relaxed">
                  Completed J.P. Morgan Midas Core Software Engineering Simulation in 2024, demonstrating real-world 
                  software engineering skills and problem-solving abilities.
                </p>
              </div>
              {/* Professional Experience */}
              <div className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-azure-500 to-neon-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Professional Journey</h3>
                </div>
                <p className="text-light-300 leading-relaxed mb-4">
                  Transitioned from a successful 9-year career in the South African Navy as a Junior Navigation Officer, 
                  where I developed strong leadership, problem-solving, and optimization skills.
                </p>
                <p className="text-light-300 leading-relaxed">
                  Now focused on software development with recent experience as a Web Developer Intern at CodeCatalyst 
                  and AI Model Trainer at Outlier, building modern web applications and improving AI model accuracy.
                </p>
              </div>
            </div>
          )}
          {activeTab === 'experience' && (
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-azure-500 via-purple-500 to-neon-500" />
              {experience.map((exp) => (
                <div
                  key={exp.year}
                  className="relative flex items-start gap-6 mb-12"
                >
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-azure-500 to-purple-500 rounded-full flex items-center justify-center shadow-azure">
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 bg-dark-800/30 backdrop-blur-md rounded-2xl p-6 border border-dark-700/50">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-neon-400 font-bold text-lg">{exp.year}</span>
                      <span className="text-white font-semibold text-lg">{exp.title}</span>
                    </div>
                    <p className="text-azure-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-light-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-dark-700/50 text-light-300 rounded-full text-sm border border-dark-600">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'skills' && (
            <div>
              {skills.map((category) => (
                <div
                  key={category.category}
                  className="mb-12"
                >
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-azure-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-dark-800/30 backdrop-blur-md rounded-xl p-6 border border-dark-700/50"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-neon-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                            style={{ width: `${skill.level}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50 hover:border-azure-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-azure group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">{cert.name}</h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-azure-500 to-purple-500 text-white text-sm font-bold rounded-full">
                          {cert.badge}
                        </span>
                      </div>
                      <p className="text-azure-400 font-medium mb-2">{cert.issuer}</p>
                      <p className="text-light-300 mb-4 leading-relaxed">{cert.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-neon-400 font-semibold">{cert.date}</span>
                        <button 
                          className="px-4 py-2 bg-dark-700/50 text-light-300 rounded-lg hover:bg-azure-500/20 hover:text-azure-400 transition-all duration-300 border border-dark-600 hover:border-azure-500/50 cursor-pointer"
                          onClick={() => cert.url && window.open(cert.url, '_blank')}
                          disabled={!cert.url}
                        >
                          Verify
                        </button>
                      </div>
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

export default React.memo(AIAbout);