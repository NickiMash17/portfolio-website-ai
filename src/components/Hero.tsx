import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Particles Background */}
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white font-inter"
            style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.8)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nicolette
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-xl md:text-2xl text-cyan-400 font-inter font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full-Stack Developer | AI Enthusiast | Azure Certified
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative solutions with cutting-edge technologies. 
            Specializing in C#, .NET, React, and Azure cloud services.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-cyan-400 text-gray-900 rounded-full font-semibold text-lg hover:bg-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <ChevronDown className="inline-block ml-2 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Chatbot Icon */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-cyan-400/50 cursor-pointer">
          <MessageCircle className="w-7 h-7 text-gray-900" />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 