import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Sparkles, FileText as FileTextIcon, FileCode, File } from 'lucide-react';

const Resume: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const handleDownload = () => {
    // Simulate download
    console.log(`Downloading resume in ${selectedFormat.toUpperCase()} format`);
    // In real implementation, this would trigger actual download
  };

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="resume" className="relative py-16 overflow-hidden theme-transition">
      {/* Enhanced background with better gradients and effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-azure-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-azure-500/15 via-transparent to-purple-500/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent" />
        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-azure-500/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent" style={{ transform: 'translate(70%, 30%)' }} />
          <div className="absolute inset-0 bg-gradient-radial from-neon-500/25 via-transparent to-transparent" style={{ transform: 'translate(-30%, 70%)' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
            <span className="bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">
              Download My Resume
            </span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Download my professional resume in your preferred format. 
            Available in PDF and DOC formats for your convenience.
          </p>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-dark-800/30 rounded-3xl border border-dark-700/50 p-12 shadow-2xl relative overflow-hidden theme-transition"
        >
          {/* Enhanced card background - using consistent dark theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 via-dark-700/30 to-dark-800/50 rounded-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-azure-500/5 via-purple-500/5 to-neon-500/5 rounded-3xl" />
          
          <div className="relative z-10 text-center space-y-8">
            {/* Resume Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-40 bg-gradient-to-r from-azure-600 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
                  <FileText className="w-16 h-16 text-white relative z-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                {/* Floating elements around preview - using consistent colors */}
                <div className="absolute -top-4 -left-4 w-3 h-3 bg-azure-400 rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Resume Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Nicolette Mashaba - Resume</h3>
              <p className="text-light-300 text-lg">
                Software Engineering Student with expertise in React, .NET, and Azure Cloud
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-light-400">
                <span className="px-3 py-1 bg-azure-500/20 rounded-full border border-azure-500/30">• Microsoft Azure Certified</span>
                <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">• Full-Stack Development</span>
                <span className="px-3 py-1 bg-neon-500/20 rounded-full border border-neon-500/30">• AI/ML Integration</span>
                <span className="px-3 py-1 bg-azure-500/20 rounded-full border border-azure-500/30">• Top Performer Student</span>
              </div>
            </div>

            {/* Format Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Choose Format</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { id: 'pdf', label: 'PDF', icon: FileTextIcon, color: 'from-red-500 to-red-600' },
                  { id: 'docx', label: 'Word', icon: FileCode, color: 'from-blue-500 to-blue-600' },
                  { id: 'txt', label: 'Text', icon: File, color: 'from-gray-500 to-gray-600' }
                ].map((format) => (
                  <motion.button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border relative overflow-hidden theme-transition flex items-center gap-2 ${
                      selectedFormat === format.id
                        ? 'bg-gradient-to-r from-azure-600 to-purple-600 text-white border-white/20 shadow-azure'
                        : 'bg-dark-800/50 text-light-300 border-dark-700/50 hover:text-neon-400 hover:border-neon-400/50'
                    }`}
                  >
                    <format.icon className="w-4 h-4" />
                    {format.label}
                    {/* Hover glow effect - using consistent colors */}
                    <div className="absolute inset-0 bg-gradient-to-r from-azure-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={handleRipple}
              className="px-8 py-4 bg-gradient-to-r from-azure-600 to-purple-600 text-white rounded-full font-semibold text-lg backdrop-blur-sm border border-white/20 hover:shadow-azure hover:shadow-neon/25 transition-all duration-300 flex items-center gap-2 mx-auto relative overflow-hidden group theme-transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-azure-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Resume ({selectedFormat.toUpperCase()})</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="backdrop-blur-md bg-dark-800/30 rounded-2xl border border-dark-700/50 p-8 relative overflow-hidden theme-transition">
            {/* Enhanced card background - using consistent dark theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 via-dark-700/30 to-dark-800/50 rounded-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-neon-500/5 to-azure-500/5 rounded-2xl" />
            
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-4">Need More Information?</h4>
              <p className="text-light-300 mb-6">
                My resume includes detailed project descriptions, technical skills, and professional achievements. 
                For specific questions about my experience, feel free to reach out!
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-neon-500 text-white rounded-lg font-medium backdrop-blur-sm border border-white/20 hover:shadow-azure transition-all duration-300 flex items-center gap-2 mx-auto relative overflow-hidden group theme-transition"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-neon-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                <Eye className="w-4 h-4 relative z-10" />
                <span className="relative z-10">View Online Version</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 