import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  FileText, 
  Eye, 
  Sparkles, 
  FileText as FileTextIcon, 
  FileCode, 
  File, 
  Mail,
  Brain,
  Cloud,
  Code,
  Database,
  Server,
  Terminal,
  Layers,
  Activity,
  Zap,
  Rocket,
  Shield,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Github,
  Linkedin
} from 'lucide-react';

const Resume: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Nicolette_Mashaba_Resume.pdf';
      link.click();
      setIsDownloading(false);
    }, 1000);
  };

  const resumeData = {
    personalInfo: {
      name: 'Nicolette Mashaba',
      title: 'Software Engineering Student',
      email: 'nene171408@gmail.com',
      phone: '+27 152 6795',
      location: 'Remote / Worldwide',
      github: 'https://github.com/NickiMash17',
      linkedin: 'https://linkedin.com/in/nicolette-mashaba'
    },
    summary: 'Passionate Software Engineering student specializing in AI/ML, Cloud Computing, and DevOps. Microsoft Azure certified professional building next-generation applications with cutting-edge technology.',
    skills: {
      'AI & Machine Learning': ['Python', 'TensorFlow', 'OpenAI GPT', 'Azure AI', 'Data Analysis'],
      'Cloud & DevOps': ['Microsoft Azure', 'Docker', 'CI/CD', 'Infrastructure as Code'],
      'Full-Stack Development': ['React.js', 'TypeScript', 'Node.js', 'ASP.NET Core', 'RESTful APIs'],
      'Databases & Tools': ['MongoDB', 'SQL Server', 'Git', 'Analytics']
    },
    experience: [
      {
        title: 'Web Developer Intern',
        company: 'CodeCatalyst',
        period: '2025',
        description: 'Built full-stack applications using React, Node.js, and MongoDB. Implemented JWT authentication, reducing report generation time by 20%.',
        technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS']
      },
      {
        title: 'AI Model Trainer',
        company: 'Outlier',
        period: '2025',
        description: 'Created and refined 100+ AI prompts, improving model accuracy by 25%. Reduced debugging time for developers by 10 hours/week.',
        technologies: ['AI Prompt Engineering', 'Model Training', 'Data Analysis']
      }
    ],
    education: [
      {
        degree: 'Occupational Certificate: Software Engineering',
        institution: 'CTU Training Solutions',
        period: '2023 - 2026',
        achievements: ['Programming Foundation Top Performer 2023', 'J.P. Morgan Midas Core Software Engineering Simulation 2024']
      }
    ],
    certifications: [
      {
        name: 'Microsoft Certified: Azure Developer Associate',
        issuer: 'Microsoft',
        date: '2024',
        badge: 'AZ-204'
      },
      {
        name: 'Microsoft Certified: Azure Data Fundamentals',
        issuer: 'Microsoft',
        date: '2024',
        badge: 'DP-900'
      },
      {
        name: 'SheCodes: Responsive Web Development',
        issuer: 'SheCodes',
        date: '2024',
        badge: 'Advanced'
      }
    ]
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="ai-data-flow absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10" />
        <div className="devops-pipeline absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10" />
        <div className="particle-system absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 font-orbitron tracking-wider tech-title">
            RESUME & EXPERIENCE
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Download my professional resume or explore my experience, skills, and achievements in detail. 
            <span className="text-cyan-400 font-semibold"> Microsoft Azure certified</span> and 
            <span className="text-blue-400 font-semibold"> top-performing student</span> ready to make an impact.
          </p>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-ai rounded-3xl p-12 data-visualization mb-16"
        >
          <div className="text-center space-y-8">
            {/* Resume Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-40 h-52 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  <FileText className="w-20 h-20 text-white relative z-10" />
                </div>
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                {/* Floating elements around preview */}
                <div className="absolute -top-6 -left-6 w-4 h-4 bg-cyan-400 rounded-full animate-bounce" />
                <div className="absolute -bottom-6 -right-6 w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-1/2 -left-8 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
            </div>

            {/* Resume Info */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white holographic">Nicolette Mashaba</h3>
              <p className="text-xl text-gray-300 font-semibold">
                Software Engineering Student & AI Engineer
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-4 py-2 glass-ai text-cyan-400 rounded-full border border-cyan-500/30 font-semibold">Microsoft Azure Certified</span>
                <span className="px-4 py-2 glass-devops text-blue-400 rounded-full border border-blue-500/30 font-semibold">Full-Stack Development</span>
                <span className="px-4 py-2 glass-code text-purple-400 rounded-full border border-purple-500/30 font-semibold">AI/ML Integration</span>
                <span className="px-4 py-2 glass-ai text-cyan-400 rounded-full border border-cyan-500/30 font-semibold">Top Performer Student</span>
              </div>
            </div>

            {/* Format Selection */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">Choose Download Format</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['pdf', 'doc'].map((format) => (
                  <motion.button
                    key={format}
                    onClick={() => setSelectedFormat(format)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer ${
                      selectedFormat === format
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl'
                        : 'glass-ai text-gray-300 hover:text-white hover:shadow-xl'
                    }`}
                  >
                    {format === 'pdf' ? <FileTextIcon className="w-6 h-6" /> : <FileCode className="w-6 h-6" />}
                    {format.toUpperCase()}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-12 py-4 text-xl font-bold rounded-2xl flex items-center gap-3 mx-auto relative overflow-hidden group ${
                isDownloading 
                  ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                  : 'btn-ai'
              }`}
            >
              {isDownloading ? (
                <>
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download Resume</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Resume Content Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-ai rounded-3xl p-8 data-visualization"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">{resumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{resumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">{resumeData.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-gray-400" />
                <a href={resumeData.personalInfo.github} className="text-gray-300 hover:text-cyan-400 transition-colors">
                  {resumeData.personalInfo.github.split('//')[1]}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <a href={resumeData.personalInfo.linkedin} className="text-gray-300 hover:text-blue-400 transition-colors">
                  {resumeData.personalInfo.linkedin.split('//')[1]}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-devops rounded-3xl p-8 data-visualization"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              Technical Skills
            </h3>
            <div className="space-y-4">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-cyan-400 mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 glass-code text-gray-300 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-code rounded-3xl p-8 data-visualization"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                  <h4 className="text-lg font-bold text-white">{exp.title}</h4>
                  <p className="text-blue-400 font-semibold">{exp.company} • {exp.period}</p>
                  <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 glass-ai text-gray-300 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-ai rounded-3xl p-8 data-visualization"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              Education & Certifications
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                  <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                  <p className="text-cyan-400 font-semibold">{edu.institution} • {edu.period}</p>
                  <ul className="mt-2 space-y-1">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              <div className="mt-6">
                <h4 className="text-lg font-bold text-white mb-4">Certifications</h4>
                <div className="space-y-3">
                  {resumeData.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between glass-devops rounded-xl p-3">
                      <div>
                        <p className="text-white font-semibold">{cert.name}</p>
                        <p className="text-blue-400 text-sm">{cert.issuer}</p>
                      </div>
                      <span className="px-3 py-1 glass-ai text-cyan-400 text-sm rounded-full font-semibold">
                        {cert.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-ai rounded-3xl p-12 data-visualization">
            <h2 className="text-3xl font-bold text-white mb-4 tech-title">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how I can contribute to your team and bring your projects to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-ai text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-code text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
