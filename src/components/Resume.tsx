import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  Briefcase,
  Award,
  ExternalLink,
  FileText,
  CheckCircle,
  Star,
  Eye
} from 'lucide-react';

interface ResumeProps {
  className?: string;
}

const Resume: React.FC<ResumeProps> = ({ className = '' }) => {
  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'docx'>('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, you would trigger the actual download here
      console.log(`Downloading resume in ${selectedFormat} format`);
    }, 1000);
  };

  const resumeData = {
    personalInfo: {
      name: 'NICOLETTE MASHABA',
      title: 'Software Engineering Student | Full-Stack Development | Cloud & AI Technologies',
      email: 'nene171408@email.com',
      phone: '+2763 152 6795',
      location: 'South Africa',
      github: 'github.com/NickiMash17',
      linkedin: 'linkedin.com/in/nicolette-mashaba'
    },
    summary: 'Motivated and results-driven Software Engineering student with experience in full-stack development, cloud computing, and AI-assisted coding. Skilled in building dynamic React.js frontends, scalable Node.js and .NET backends, and managing MongoDB and SQL databases. Microsoft Azure certified and recognized as a top-performing student. Dedicated to writing clean, maintainable code and building scalable, user-friendly applications that solve real-world problems.',
    experience: [
      {
        title: 'Web Developer Intern',
        company: 'CodeCatalyst, Remote',
        period: 'June 2025 – July 2025',
        description: 'Built full-stack applications using React, Node.js, and MongoDB. Implemented JWT authentication, reducing report generation time by 20%. Delivered responsive UIs with Tailwind CSS.'
      },
      {
        title: 'AI Model Trainer',
        company: 'Outlier, Remote',
        period: 'October 2024 – December 2024',
        description: 'Created and refined 100+ AI prompts, improving model accuracy by 25%. Reduced debugging time for developers by 10 hours/week.'
      },
      {
        title: 'Junior Navigation Officer',
        company: 'South African Navy, Simon\'s Town',
        period: 'January 2012 – July 2021',
        description: 'Conducted pre-departure briefings and optimized voyage plans, reducing fuel consumption by up to 10% per voyage. Enhanced vessel safety and trained 5+ junior officers.'
      }
    ],
    education: [
      {
        degree: 'Occupational Certificate: Software Engineering (NQF Level 6)',
        institution: 'CTU Training Solutions, Polokwane',
        period: 'Graduation: 2026',
        gpa: 'Top Performer'
      },
      {
        degree: 'IT Programming Foundation (NQF Level 4)',
        institution: 'CTU Training Solutions, Polokwane',
        period: 'Jul 2024',
        gpa: 'Programming Foundation Top Performer (2023)'
      }
    ],
    skills: {
      programming: ['JavaScript', 'TypeScript', 'Python', 'C#', 'C', 'SQL'],
      frameworks: ['React.js', 'Node.js', 'Express.js', 'ASP.NET Core', '.NET', 'Tailwind CSS', 'Bootstrap'],
      databases: ['MongoDB', 'SQL Server'],
      cloud: ['Microsoft Azure', 'Azure Functions', 'Azure DevOps', 'AKS', 'Docker', 'Terraform'],
      tools: ['Git', 'CI/CD', 'RESTful APIs', 'Google Maps API', 'Stripe', 'Vite'],
      certifications: ['Microsoft Certified: Azure Developer Associate', 'Microsoft Certified: Azure Data Fundamentals', 'SheCodes: Responsive Web Development', 'Techbridle Foundation: Software Development Bootcamp']
    },
    projects: [
      {
        name: 'Meteora Weather App',
        description: 'PWA with AI-powered insights, gamification, and offline-first architecture. Scored 100/100 Lighthouse performance rating.',
        technologies: ['React', 'PWA', 'AI Integration', 'Performance Optimization']
      },
      {
        name: 'TechShop Pro (E-Commerce App)',
        description: 'Built secure login, product catalog, and Stripe payment integration.',
        technologies: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Stripe']
      },
      {
        name: 'TF Future Guide (STEM Career Platform)',
        description: 'Connected South African students with STEM careers & scholarships. Contributed to frontend, backend APIs, and team Git workflows.',
        technologies: ['Full-Stack Development', 'API Development', 'Git Collaboration']
      },
      {
        name: 'Book Review App',
        description: 'CRUD app with search and analytics dashboard. Implemented clean architecture patterns in ASP.NET Core.',
        technologies: ['ASP.NET Core', 'Clean Architecture', 'Analytics Dashboard']
      }
    ]
  };

  return (
    <section id="resume" className={`py-20 relative overflow-hidden ${className}`}>
      {/* Background Layers */}
      <div className="absolute inset-0 bg-app-gradient -z-10" />
      
      {/* Azure Cloud Architecture Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <svg className="w-full h-full">
          {/* Cloud Service Connections */}
          {[...Array(6)].map((_, i) => (
            <motion.rect
              key={`service-${i}`}
              x={`${15 + i * 12}%`}
              y={`${30 + (i % 2) * 30}%`}
              width="60"
              height="20"
              rx="4"
              fill="none"
              stroke="var(--ai-primary)"
              strokeWidth="1"
              strokeDasharray="4,4"
              animate={{
                strokeDashoffset: [0, -8, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 4,
                delay: i * 0.6,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Certifications */}
      <div className="absolute inset-0 pointer-events-none">
        {['AZ-204', 'DP-900', 'Azure DevOps', 'Kubernetes', 'Docker Certified', 'AWS'].map((cert, i) => (
          <motion.div
            key={cert}
            className="absolute text-xs font-mono text-[var(--ai-primary)]/60 bg-[var(--ai-primary)]/100 px-2 py-1 rounded border border-[var(--ai-primary)]440"
            style={{
              left: `${8 + (i * 14)}%`,
              bottom: `${15 + (i % 2) * 25}%`,
            }}
            animate={{
              y: [-4, 4, -4],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {cert}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
        >
          <h2 className="tech-title leading-tight-mobile text-fluid-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            RESUME
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Download my resume to learn more about my experience, skills, and achievements in software engineering and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-ai rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-[var(--ai-primary)]/20 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-gradient rounded-xl flex items-center justify-center">
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  Resume Preview
                </h3>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)]" />
                  <span className="text-[var(--ai-primary)] text-xs sm:text-sm font-semibold">Interactive Preview</span>
                </div>
              </div>

              {/* Resume Content Preview */}
              <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 text-gray-800 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="text-center border-b border-gray-200 pb-4 sm:pb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">{resumeData.personalInfo.name}</h1>
                  <p className="text-lg sm:text-xl text-blue-600 font-semibold mb-3 sm:mb-4 leading-tight">{resumeData.personalInfo.title}</p>
                  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4 text-sm text-gray-600">
                    <span className="flex items-center justify-center gap-1">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="break-all">{resumeData.personalInfo.email}</span>
                    </span>
                    <span className="flex items-center justify-center gap-1">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      {resumeData.personalInfo.phone}
                    </span>
                    <span className="flex items-center justify-center gap-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      {resumeData.personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{resumeData.summary}</p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    Experience
                  </h2>
                  <div className="space-y-3 sm:space-y-4">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-3 sm:pl-4">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base break-words">{exp.title}</h3>
                        <p className="text-blue-600 font-medium text-sm break-words">{exp.company} • {exp.period}</p>
                        <p className="text-gray-700 text-xs sm:text-sm mt-1 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Technical Skills</h2>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Programming Languages</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.programming.map((skill, index) => (
                          <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm break-words">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Frameworks & Frontend</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.frameworks.map((skill, index) => (
                          <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-purple-100 text-purple-800 rounded-full text-xs sm:text-sm break-words">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Databases</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.databases.map((skill, index) => (
                          <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm break-words">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Cloud & DevOps</h3>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {resumeData.skills.cloud.map((skill, index) => (
                          <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs sm:text-sm break-words">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Certifications</h3>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {resumeData.skills.certifications.map((cert, index) => (
                        <span key={index} className="px-2 py-1 sm:px-3 sm:py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm break-words">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Projects */}
                  <div className="mt-3 sm:mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Projects</h3>
                    <div className="space-y-2">
                      {resumeData.projects.map((project, index) => (
                        <div key={index} className="border-l-2 border-green-200 pl-2 sm:pl-3">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base break-words">{project.name}</h4>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs break-words">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Format Selection */}
            <div className="glass-ai rounded-2xl lg:rounded-3xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                Download Format
              </h3>
              
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={() => setSelectedFormat('pdf')}
                  className={`w-full p-2.5 sm:p-3 rounded-xl border-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 touch-manipulation ${
                    selectedFormat === 'pdf'
                      ? 'border-[var(--ai-primary)] bg-[var(--ai-primary)]/15 text-[var(--ai-primary)]'
                      : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-[var(--ai-primary)]/50'
                  }`}
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <span className="font-semibold text-sm sm:text-base block">PDF Format</span>
                    <span className="text-xs opacity-75">(Recommended)</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setSelectedFormat('docx')}
                  className={`w-full p-2.5 sm:p-3 rounded-xl border-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 touch-manipulation ${
                    selectedFormat === 'docx'
                      ? 'border-[var(--ai-primary)] bg-[var(--ai-primary)]/15 text-[var(--ai-primary)]'
                      : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-[var(--ai-primary)]/50'
                  }`}
                >
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="flex-1 text-left">
                    <span className="font-semibold text-sm sm:text-base block">Word Document</span>
                    <span className="text-xs opacity-75">(Editable)</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 bg-brand-gradient text-white font-bold rounded-xl hover:bg-brand-gradient transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 touch-manipulation text-sm sm:text-base"
            >
              {isDownloading ? (
                <>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download Resume
                </>
              )}
            </motion.button>

            {/* Resume Info */}
            <div className="glass-ai rounded-2xl lg:rounded-3xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                Resume Highlights
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Microsoft Azure Certified</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Azure Developer Associate & Data Fundamentals</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Top Academic Performer</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Programming Foundation Top Performer 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Full-Stack Development</p>
                    <p className="text-gray-400 text-xs sm:text-sm">React.js, Node.js, .NET, MongoDB expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-0.5 sm:mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-sm sm:text-base">Industry Experience</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Web development & AI model training roles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="glass-ai rounded-2xl lg:rounded-3xl p-4 sm:p-6 border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                Additional Information
              </h3>
              
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--ai-primary)] flex-shrink-0" />
                  <span>Last updated: December 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--ai-primary)] flex-shrink-0" />
                  <span>2 pages • Professional format</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--ai-primary)] flex-shrink-0" />
                  <span>Optimized for ATS systems</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
