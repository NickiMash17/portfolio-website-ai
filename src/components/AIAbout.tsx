import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="about" className="py-20 relative overflow-hidden">
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
            ABOUT ME
          </h2>
          <p className="text-xl text-white max-w-4xl mx-auto leading-relaxed">
            Passionate <span className="code-text font-semibold">Software Engineering</span> student specializing in 
            <span className="text-cyan-400 font-semibold"> AI/ML</span>, 
            <span className="text-blue-400 font-semibold"> Cloud Computing</span>, and 
            <span className="text-purple-400 font-semibold"> DevOps</span>. 
            Microsoft Azure certified and recognized as a top-performing student, dedicated to building scalable, intelligent solutions.
          </p>
        </motion.div>

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as TabId)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.color} text-white shadow-2xl`
                  : 'glass-ai text-white hover:text-white hover:shadow-xl'
              }`}
              aria-pressed={activeTab === tab.id}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Enhanced Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Education & Background */}
              <div className="glass-ai rounded-3xl p-8 data-visualization">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education & Achievements</h3>
                </div>
                <p className="text-lg text-white leading-relaxed mb-4">
                  Currently pursuing <span className="code-text font-semibold">Occupational Certificate: Software Engineering (NQF Level 6)</span> at CTU Training Solutions, 
                  graduating in 2026. Awarded <span className="text-cyan-400 font-semibold">Programming Foundation Top Performer</span> in 2023.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Completed <span className="text-blue-400 font-semibold">J.P. Morgan Midas Core Software Engineering Simulation</span> in 2024, demonstrating real-world 
                  software engineering skills and problem-solving abilities.
                </p>
              </div>

              {/* Professional Experience */}
              <div className="glass-devops rounded-3xl p-8 data-visualization">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Journey</h3>
                </div>
                <p className="text-lg text-white leading-relaxed mb-4">
                  Transitioned from a successful <span className="text-orange-400 font-semibold">9-year career in the South African Navy</span> as a Junior Navigation Officer, 
                  where I developed strong leadership, problem-solving, and optimization skills.
                </p>
                <p className="text-lg text-white leading-relaxed">
                  Now focused on software development with recent experience as a <span className="text-cyan-400 font-semibold">Web Developer Intern</span> at CodeCatalyst 
                  and <span className="text-purple-400 font-semibold">AI Model Trainer</span> at Outlier, building modern web applications and improving AI model accuracy.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 rounded-full" />
              {experience.map((exp, index) => {
                const CategoryIcon = getCategoryIcon(exp.category);
                const categoryColor = getCategoryColor(exp.category);
                return (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative flex items-start gap-8 mb-12"
                  >
                    <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${categoryColor} rounded-2xl flex items-center justify-center shadow-2xl`}>
                      <CategoryIcon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1 glass-ai rounded-3xl p-8 data-visualization">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-cyan-400 font-bold text-xl">{exp.year}</span>
                        <span className="text-white font-bold text-xl">{exp.title}</span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${categoryColor} text-white text-sm font-semibold rounded-full`}>
                          {exp.category.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-blue-400 font-semibold text-lg mb-4">{exp.company}</p>
                      <p className="text-lg text-white mb-6 leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 glass-code text-white rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  Technical Expertise
                </h3>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  A comprehensive overview of my technical expertise and proficiency levels across different technology domains.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {skills.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    className="glass-ai rounded-3xl p-8 data-visualization"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-white">{category.category}</h4>
                    </div>
                    <div className="space-y-4">
                      {category.items.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <skill.icon className={`w-5 h-5 ${skill.color.split(' ')[0].replace('from-', 'text-')}`} />
                            <span className="text-lg text-white font-medium">{skill.name}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-3 bg-gray-700 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              />
                            </div>
                            <span className="text-sm text-white w-12 text-right font-semibold">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'certifications' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  Certifications & Achievements
                </h3>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Professional certifications and recognition that validate my expertise and commitment to continuous learning.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {certifications.map((cert, index) => {
                  const CategoryIcon = getCategoryIcon(cert.category);
                  return (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-ai rounded-3xl p-8 data-visualization group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center`}>
                          <cert.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                          <p className="text-blue-400 font-semibold text-lg">{cert.issuer}</p>
                        </div>
                        <div className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-sm font-bold rounded-full`}>
                          {cert.badge}
                        </div>
                      </div>
                      <p className="text-lg text-white mb-6 leading-relaxed">{cert.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-white font-semibold">{cert.date}</span>
                        <div className="flex items-center gap-2">
                          <CategoryIcon className="w-4 h-4 text-white" />
                          <span className="text-sm text-white font-medium">{cert.category.toUpperCase()}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default React.memo(AIAbout);
