import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-orbitron">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Download my resume to learn more about my experience, skills, and achievements in software engineering and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-ai rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  Resume Preview
                </h3>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-semibold">Interactive Preview</span>
                </div>
              </div>

              {/* Resume Content Preview */}
              <div className="bg-white rounded-2xl p-8 text-gray-800 space-y-6">
                {/* Header */}
                <div className="text-center border-b border-gray-200 pb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{resumeData.personalInfo.name}</h1>
                  <p className="text-xl text-blue-600 font-semibold mb-4">{resumeData.personalInfo.title}</p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {resumeData.personalInfo.email}
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {resumeData.personalInfo.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {resumeData.personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Professional Summary
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Experience
                  </h2>
                  <div className="space-y-4">
                    {resumeData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-4">
                        <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company} • {exp.period}</p>
                        <p className="text-gray-700 text-sm mt-1">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.programming.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Frameworks & Frontend</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.frameworks.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Databases</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.databases.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cloud & DevOps</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.cloud.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Certifications */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.certifications.map((cert, index) => (
                        <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Projects */}
                  <div className="mt-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Key Projects</h3>
                    <div className="space-y-2">
                      {resumeData.projects.map((project, index) => (
                        <div key={index} className="border-l-2 border-green-200 pl-3">
                          <h4 className="font-medium text-gray-900">{project.name}</h4>
                          <p className="text-gray-700 text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
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
            className="space-y-6"
          >
            {/* Format Selection */}
            <div className="glass-ai rounded-3xl p-6 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Download className="w-3 h-3 text-white" />
                </div>
                Download Format
              </h3>
              
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedFormat('pdf')}
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                    selectedFormat === 'pdf'
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-cyan-500/50'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">PDF Format</span>
                  <span className="text-xs opacity-75">(Recommended)</span>
                </button>
                
                <button
                  onClick={() => setSelectedFormat('docx')}
                  className={`w-full p-3 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                    selectedFormat === 'docx'
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-cyan-500/50'
                  }`}
                >
                  <FileText className="w-5 h-5" />
                  <span className="font-semibold">Word Document</span>
                  <span className="text-xs opacity-75">(Editable)</span>
                </button>
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download Resume
                </>
              )}
            </motion.button>

            {/* Resume Info */}
            <div className="glass-ai rounded-3xl p-6 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                Resume Highlights
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Microsoft Azure Certified</p>
                    <p className="text-gray-400 text-sm">Azure Developer Associate & Data Fundamentals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Top Academic Performer</p>
                    <p className="text-gray-400 text-sm">Programming Foundation Top Performer 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Full-Stack Development</p>
                    <p className="text-gray-400 text-sm">React.js, Node.js, .NET, MongoDB expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Industry Experience</p>
                    <p className="text-gray-400 text-sm">Web development & AI model training roles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="glass-ai rounded-3xl p-6 border border-cyan-500/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
                Additional Information
              </h3>
              
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>Last updated: December 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>2 pages • Professional format</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
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
