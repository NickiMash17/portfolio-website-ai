import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Brain,
  Cloud
} from 'lucide-react';

const AIHero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Full-Stack Engineer",
    "Microsoft Certified",
    "AI Innovator",
    "Cloud Architect",
    "Azure Expert"
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/your-username', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile', icon: Linkedin },
    { name: 'Email', url: 'mailto:your-email@example.com', icon: Mail }
  ];

  // Rotating taglines effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          {/* AI Avatar/Icon */}
          <motion.div
            initial={{ scale: 0.8, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            className="inline-flex items-center justify-center w-40 h-40 bg-gradient-to-br from-azure-600 via-purple-500 to-neon-500 rounded-full shadow-neon mb-12 relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-azure-600 via-purple-500 to-neon-500 animate-gradient-shift bg-200%"></div>
            <Brain className="w-20 h-20 text-white relative z-10" />
            
            {/* Orbiting elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-500 rounded-full shadow-neon"></div>
              <div className="absolute top-1/2 -right-2 transform translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-purple"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-azure-500 rounded-full shadow-azure"></div>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-neon-500 rounded-full shadow-neon"></div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-hero font-bold text-white mb-6 font-orbitron tracking-wider"
            style={{ textShadow: '0 0 30px rgba(56, 232, 248, 0.8)' }}
          >
            NICOLLETTE MASHABA
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-12 mb-8 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="text-subtitle text-neon-400 font-semibold flex items-center gap-3"
              >
                <Sparkles className="w-6 h-6 text-purple-400" />
                {taglines[currentTagline]}
                <Zap className="w-6 h-6 text-azure-400" />
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="text-body text-light-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Next-generation developer specializing in AI innovation, cloud solutions, and cutting-edge web technologies. 
            Building the future with Microsoft Azure, machine learning, and full-stack excellence.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(56, 232, 248, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-gradient-to-r from-azure-600 to-purple-600 text-white font-bold rounded-xl shadow-azure hover:shadow-neon transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-azure-600 to-purple-600 animate-gradient-shift bg-200%"></div>
              <Code className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Explore Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(56, 232, 248, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-transparent border-2 border-neon-400 text-neon-400 font-bold rounded-xl hover:bg-neon-400 hover:text-dark-900 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Mail className="w-6 h-6" />
              <span>Get In Touch</span>
              <motion.div
                className="absolute inset-0 bg-neon-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mb-12"
          >
            <p className="text-light-400 mb-6 text-sm uppercase tracking-wider">Powered by</p>
            <div className="flex justify-center gap-8">
              {[
                { icon: Cpu, label: 'AI/ML', color: 'text-neon-400' },
                { icon: Cloud, label: 'Azure', color: 'text-azure-400' },
                { icon: Code, label: 'Full-Stack', color: 'text-purple-400' },
                { icon: Brain, label: 'Innovation', color: 'text-neon-400' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                    <tech.icon className="w-full h-full" />
                  </div>
                  <p className="text-xs text-light-500 uppercase tracking-wider">{tech.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex justify-center gap-8"
          >
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-14 h-14 bg-dark-800/50 backdrop-blur-md rounded-full flex items-center justify-center text-light-300 hover:text-neon-400 hover:bg-dark-700/50 transition-all duration-300 border border-dark-700 hover:border-neon-500/50"
            >
              <Github className="w-7 h-7" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-14 h-14 bg-dark-800/50 backdrop-blur-md rounded-full flex items-center justify-center text-light-300 hover:text-azure-400 hover:bg-dark-700/50 transition-all duration-300 border border-dark-700 hover:border-azure-500/50"
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-neon-400"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHero; 