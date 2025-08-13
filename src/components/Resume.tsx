import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Eye, Sparkles } from 'lucide-react';

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
    <section id="resume" className="relative py-16 bg-dark-900 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/40 via-transparent to-dark-900/40 z-5" />
        <div className="absolute inset-0 z-5 opacity-20">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download My Resume
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Get a detailed overview of my experience, skills, and achievements in your preferred format.
          </p>
        </motion.div>

        {/* Resume Download Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="backdrop-blur-sm bg-dark-800/20 rounded-3xl border border-dark-700/50 p-12 shadow-2xl"
        >
          <div className="text-center space-y-8">
            {/* Resume Preview */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-40 bg-gradient-to-r from-azure-600 to-purple-600 rounded-lg flex items-center justify-center shadow-2xl">
                  <FileText className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Resume Info */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Nicolette Mashaba - Resume</h3>
              <p className="text-light-300 text-lg">
                Full-Stack Developer with expertise in C#, .NET, React, and Azure Cloud
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-light-400">
                <span>• 3+ Years Experience</span>
                <span>• Azure Certified</span>
                <span>• Full-Stack Development</span>
                <span>• AI/ML Integration</span>
              </div>
            </div>

            {/* Format Selection */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Choose Format</h4>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { id: 'pdf', label: 'PDF', icon: '📄' },
                  { id: 'docx', label: 'Word', icon: '📝' },
                  { id: 'txt', label: 'Text', icon: '📃' }
                ].map((format) => (
                  <motion.button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border ${
                      selectedFormat === format.id
                        ? 'bg-gradient-to-r from-azure-600 to-purple-600 text-white border-white/20 shadow-azure'
                        : 'bg-dark-800/50 text-light-300 border-dark-700/50 hover:text-neon-400 hover:border-neon-400/50'
                    }`}
                  >
                    <span className="mr-2">{format.icon}</span>
                    {format.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={handleRipple}
              className="px-8 py-4 bg-gradient-to-r from-azure-600 to-purple-600 text-white rounded-full font-semibold text-lg backdrop-blur-sm border border-white/20 hover:shadow-azure hover:shadow-neon/25 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              Download Resume ({selectedFormat.toUpperCase()})
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
          <div className="backdrop-blur-sm bg-dark-800/20 rounded-2xl border border-dark-700/50 p-8">
            <h4 className="text-xl font-bold text-white mb-4">Need More Information?</h4>
            <p className="text-light-300 mb-6">
              My resume includes detailed project descriptions, technical skills, and professional achievements. 
              For specific questions about my experience, feel free to reach out!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-neon-500 text-white rounded-lg font-medium backdrop-blur-sm border border-white/20 hover:shadow-azure transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Eye className="w-4 h-4" />
              View Online Version
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 