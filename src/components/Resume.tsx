import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Eye, 
  FileText, 
  User,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Award,
  Star,
  ArrowRight,
  ExternalLink,
  CheckCircle
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
      name: 'Nicolette Mashaba',
      title: 'Software Engineering Student & AI Engineer',
      email: 'nene171408@gmail.com',
      phone: '+27 82 123 4567',
      location: 'Johannesburg, South Africa',
      github: 'github.com/NickiMash17',
      linkedin: 'linkedin.com/in/nicolette-mashaba'
    },
    summary: 'Passionate Software Engineering student specializing in AI/ML, Cloud Computing, and DevOps. Microsoft Azure certified professional with expertise in building scalable, intelligent solutions.',
    experience: [
      {
        title: 'Software Engineering Student',
        company: 'University of Johannesburg',
        period: '2022 - Present',
        description: 'Pursuing Bachelor of Science in Software Engineering with focus on AI/ML and cloud technologies.'
      },
      {
        title: 'AI/ML Research Assistant',
        company: 'University Research Lab',
        period: '2023 - Present',
        description: 'Conducting research on machine learning algorithms and developing AI-powered applications.'
      }
    ],
    education: [
      {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'University of Johannesburg',
        period: '2022 - 2025',
        gpa: '3.8/4.0'
      }
    ],
    skills: {
      programming: ['Python', 'JavaScript', 'TypeScript', 'C#', 'Java', 'SQL'],
      frameworks: ['React', 'Node.js', '.NET', 'TensorFlow', 'PyTorch', 'Azure'],
      tools: ['Git', 'Docker', 'Kubernetes', 'Azure DevOps', 'VS Code', 'Jupyter'],
      certifications: ['Microsoft Azure Fundamentals', 'Microsoft Azure AI Engineer Associate']
    },
    projects: [
      {
        name: 'AI-Powered Portfolio Website',
        description: 'Built a responsive portfolio with AI chatbot integration and neural network animations.',
        technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS']
      },
      {
        name: 'Machine Learning Model Deployment',
        description: 'Deployed ML models on Azure with automated CI/CD pipeline.',
        technologies: ['Python', 'Azure ML', 'Docker', 'Azure DevOps']
      }
    ]
  };

  return (
    <section id="resume" className={`py-20 relative ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      
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
                      <h3 className="font-semibold text-gray-900 mb-2">Frameworks & Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {resumeData.skills.frameworks.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
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
                    <p className="text-gray-400 text-sm">Professional cloud computing expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">AI/ML Specialization</p>
                    <p className="text-gray-400 text-sm">Machine learning and artificial intelligence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Full-Stack Development</p>
                    <p className="text-gray-400 text-sm">End-to-end application development</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">DevOps Expertise</p>
                    <p className="text-gray-400 text-sm">CI/CD and cloud deployment</p>
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
