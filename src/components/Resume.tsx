import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  const [resumeType, setResumeType] = useState<'technical' | 'general'>('technical');

  const handleDownload = () => {
    // Simulate download - in real implementation, this would trigger actual file download
    const fileName = `Nicolette_Mashaba_${resumeType}_Resume.pdf`;
    console.log(`Downloading ${fileName}...`);
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = `#${fileName}`; // Placeholder - replace with actual file URL
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #00D4FF 1px, transparent 1px),
            linear-gradient(0deg, #00D4FF 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400 rounded-full mb-6">
              <FileText className="w-8 h-8 text-gray-900" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-4">
              Download My Resume
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the resume format that best suits your needs. Both versions highlight my technical expertise 
              and professional achievements in software development and cloud technologies.
            </p>
          </motion.div>

          {/* Resume Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            {/* Technical Resume */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                resumeType === 'technical'
                  ? 'border-cyan-400 bg-gray-800 shadow-lg shadow-cyan-400/25'
                  : 'border-gray-700 bg-gray-800 hover:border-cyan-400'
              }`}
              onClick={() => setResumeType('technical')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white">Technical Resume</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Detailed technical skills, project descriptions, and development experience. 
                Perfect for technical roles and engineering positions.
              </p>
              <ul className="mt-4 text-gray-400 text-sm space-y-1">
                <li>• Comprehensive technical skills</li>
                <li>• Detailed project descriptions</li>
                <li>• Development methodologies</li>
                <li>• Technology stack details</li>
              </ul>
            </motion.div>

            {/* General Resume */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                resumeType === 'general'
                  ? 'border-pink-500 bg-gray-800 shadow-lg shadow-pink-500/25'
                  : 'border-gray-700 bg-gray-800 hover:border-pink-500'
              }`}
              onClick={() => setResumeType('general')}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">General Resume</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Concise overview of experience, achievements, and professional background. 
                Ideal for general applications and non-technical roles.
              </p>
              <ul className="mt-4 text-gray-400 text-sm space-y-1">
                <li>• Professional summary</li>
                <li>• Key achievements</li>
                <li>• Leadership experience</li>
                <li>• Soft skills focus</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-500 text-gray-900 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            >
              <Download className="w-6 h-6" />
              Download {resumeType === 'technical' ? 'Technical' : 'General'} Resume
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold text-white mb-3">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Technical Skills</h4>
                <ul className="space-y-1">
                  <li>• C#, .NET, ASP.NET Core</li>
                  <li>• React, TypeScript, JavaScript</li>
                  <li>• SQL Server, MongoDB</li>
                  <li>• Azure Cloud Services</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-500 mb-2">Certifications</h4>
                <ul className="space-y-1">
                  <li>• Azure Developer Associate</li>
                  <li>• Azure Data Fundamentals</li>
                  <li>• Azure DevOps Engineer (In Progress)</li>
                  <li>• Azure Database Administrator (In Progress)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg border border-cyan-400/20"
          >
            <p className="text-gray-300 mb-4">
              Need a custom resume format or have questions about my experience?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 