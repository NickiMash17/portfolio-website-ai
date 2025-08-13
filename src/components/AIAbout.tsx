import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Users, 
  Target, 
  Heart,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Award,
  Brain,
  Cloud,
  Zap,
  Rocket,
  Globe,
  Database,
  Shield
} from 'lucide-react';

const AIAbout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'experience' | 'skills' | 'certifications'>('overview');

  const experience = [
    {
      year: '2024',
      title: 'AI Innovation Lead',
      company: 'Tech Solutions Inc.',
      description: 'Leading AI/ML initiatives, implementing Azure Cognitive Services, and architecting cloud-native solutions.',
      technologies: ['Azure AI', 'Machine Learning', 'Python', 'React', 'Node.js'],
      icon: Brain
    },
    {
      year: '2023',
      title: 'Full-Stack Developer',
      company: 'Digital Dynamics',
      description: 'Built scalable web applications using modern technologies and cloud infrastructure.',
      technologies: ['React', 'TypeScript', 'Azure', 'PostgreSQL', 'Docker'],
      icon: Code
    },
    {
      year: '2022',
      title: 'Cloud Engineer',
      company: 'CloudFirst Solutions',
      description: 'Specialized in Azure cloud architecture, DevOps practices, and infrastructure automation.',
      technologies: ['Azure', 'Terraform', 'Kubernetes', 'Python', 'PowerShell'],
      icon: Cloud
    }
  ];

  const skills = [
    {
      category: 'AI & Machine Learning',
      items: [
        { name: 'Azure Cognitive Services', level: 90, icon: Brain, color: 'from-neon-500 to-purple-500' },
        { name: 'TensorFlow & PyTorch', level: 85, icon: Brain, color: 'from-purple-500 to-azure-500' },
        { name: 'Natural Language Processing', level: 80, icon: Brain, color: 'from-azure-500 to-neon-500' },
        { name: 'Computer Vision', level: 75, icon: Brain, color: 'from-neon-500 to-purple-500' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'Microsoft Azure', level: 95, icon: Cloud, color: 'from-azure-500 to-neon-500' },
        { name: 'Kubernetes & Docker', level: 88, icon: Database, color: 'from-purple-500 to-azure-500' },
        { name: 'Terraform & ARM Templates', level: 85, icon: Shield, color: 'from-azure-500 to-purple-500' },
        { name: 'CI/CD Pipelines', level: 90, icon: Zap, color: 'from-neon-500 to-azure-500' }
      ]
    },
    {
      category: 'Full-Stack Development',
      items: [
        { name: 'React & TypeScript', level: 92, icon: Code, color: 'from-purple-500 to-neon-500' },
        { name: 'Node.js & Express', level: 88, icon: Code, color: 'from-azure-500 to-purple-500' },
        { name: 'Python & FastAPI', level: 85, icon: Code, color: 'from-neon-500 to-azure-500' },
        { name: 'PostgreSQL & MongoDB', level: 82, icon: Database, color: 'from-purple-500 to-neon-500' }
      ]
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      date: '2024',
      badge: 'AZ-305',
      description: 'Expert-level certification for designing and implementing solutions on Microsoft Azure.',
      icon: Award,
      color: 'from-azure-500 to-blue-600'
    },
    {
      name: 'Microsoft Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      badge: 'AZ-204',
      description: 'Associate-level certification for developing applications and services on Azure.',
      icon: Code,
      color: 'from-purple-500 to-azure-500'
    },
    {
      name: 'Microsoft Azure AI Engineer Associate',
      issuer: 'Microsoft',
      date: '2024',
      badge: 'AI-102',
      description: 'Specialized certification for implementing AI solutions on Azure.',
      icon: Brain,
      color: 'from-neon-500 to-purple-500'
    },
    {
      name: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      badge: 'SAA-C03',
      description: 'Cloud architecture certification for designing distributed systems.',
      icon: Cloud,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const tabs: Array<{id: 'overview' | 'experience' | 'skills' | 'certifications', label: string, icon: React.ComponentType<{className?: string}>}> = [
    { id: 'overview', label: 'Overview', icon: Lightbulb },
    { id: 'experience', label: 'Experience', icon: TrendingUp },
    { id: 'skills', label: 'Skills', icon: Zap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-azure-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-pattern opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-section font-bold text-white mb-6 font-orbitron tracking-wider">
            ABOUT ME
          </h2>
          <p className="text-body text-light-300 max-w-3xl mx-auto">
            AI-driven developer with a passion for innovation, cloud architecture, and cutting-edge technologies. 
            Transforming ideas into intelligent solutions that drive business value.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                console.log('Tab clicked:', tab.id);
                setActiveTab(tab.id);
                console.log('Active tab set to:', tab.id);
              }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-azure-600 to-purple-600 text-white shadow-azure'
                  : 'bg-dark-800/50 text-light-400 hover:bg-dark-700/50 hover:text-white border border-dark-700 hover:border-azure-500/50'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">AI Innovation</h3>
                  </div>
                  <p className="text-light-300 leading-relaxed">
                    Pioneering AI solutions that transform business processes. Specializing in machine learning, 
                    natural language processing, and computer vision applications.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-azure-500 to-neon-500 rounded-xl flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Cloud Architecture</h3>
                  </div>
                  <p className="text-light-300 leading-relaxed">
                    Expert in Microsoft Azure cloud solutions, designing scalable architectures, 
                    and implementing DevOps best practices for enterprise applications.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-azure-500 rounded-xl flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Full-Stack Excellence</h3>
                  </div>
                  <p className="text-light-300 leading-relaxed">
                    Building modern, responsive web applications with cutting-edge technologies. 
                    From frontend frameworks to backend services and database design.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-dark-800/30 backdrop-blur-md rounded-2xl p-8 border border-dark-700/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-500 to-azure-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Innovation Leadership</h3>
                  </div>
                  <p className="text-light-300 leading-relaxed">
                    Leading technical teams, mentoring developers, and driving innovation initiatives. 
                    Passionate about sharing knowledge and building the next generation of tech leaders.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-azure-500 via-purple-500 to-neon-500" />
                
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.year}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6 mb-12"
                  >
                    {/* Timeline Dot */}
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-azure-500 to-purple-500 rounded-full flex items-center justify-center shadow-azure">
                      <exp.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-dark-800/30 backdrop-blur-md rounded-2xl p-6 border border-dark-700/50">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-neon-400 font-bold text-lg">{exp.year}</span>
                        <span className="text-white font-semibold text-lg">{exp.title}</span>
                      </div>
                      <p className="text-azure-400 font-medium mb-3">{exp.company}</p>
                      <p className="text-light-300 mb-4 leading-relaxed">{exp.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-dark-700/50 text-light-300 rounded-full text-sm border border-dark-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              {skills.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-azure-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      {category.category}
                    </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-dark-800/30 backdrop-blur-md rounded-xl p-6 border border-dark-700/50"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-neon-400 font-bold">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'certifications' && (
            <motion.div
              key="certifications"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
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
                          <button className="px-4 py-2 bg-dark-700/50 text-light-300 rounded-lg hover:bg-azure-500/20 hover:text-azure-400 transition-all duration-300 border border-dark-600 hover:border-azure-500/50">
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AIAbout; 