import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, MessageCircle, Sun, Moon } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

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
    <section id="home" className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <NeuralBackground />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/40 z-5" />
      
      {/* Premium Mesh Gradient */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent" style={{ transform: 'translate(70%, 30%)' }} />
        <div className="absolute inset-0 bg-gradient-radial from-emerald-500/25 via-transparent to-transparent" style={{ transform: 'translate(-30%, 70%)' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-gray-800/20 rounded-3xl border border-gray-700/50 p-12 shadow-2xl"
        >
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-6"
          >
            Nicolette
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
          >
            Full-Stack Developer | AI Enthusiast | Azure Certified
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with cutting-edge technologies. 
            Specializing in C#, .NET, React, and Azure cloud services.
          </motion.p>

          {/* Technology Tags */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { name: 'React', color: 'from-blue-400 to-purple-500' },
              { name: 'C#', color: 'from-purple-500 to-emerald-400' },
              { name: 'Azure', color: 'from-emerald-400 to-blue-400' },
              { name: '.NET', color: 'from-blue-400 to-purple-500' }
            ].map((tech, index) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className={`px-4 py-2 bg-gradient-to-r ${tech.color} backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 shadow-lg`}
              >
                {tech.name}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseDown={handleRipple}
            className="px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 text-white rounded-full font-semibold text-lg backdrop-blur-sm border border-white/20 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Explore My Work
            <ChevronDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Sparkles */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 text-blue-400 opacity-60"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 right-20 text-purple-400 opacity-60"
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 30, 0],
            rotate: [0, 180]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-10 text-emerald-400 opacity-60"
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </div>

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="absolute top-8 right-8 z-30 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-gray-700/50 flex items-center justify-center text-blue-400 shadow-lg hover:shadow-blue-400/25 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </motion.button>

      {/* Chatbot Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-8 right-8 z-30 w-14 h-14 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-400/25 transition-all duration-300 cursor-pointer"
        aria-label="Open AI chatbot"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 