import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const AIHero: React.FC = () => {
  console.log('AIHero rendering...');

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron tracking-wider text-white"
        >
          NICOLETTE MASHABA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <span className="text-2xl text-cyan-400 font-semibold">
            AI Engineering Specialist
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Passionate <span className="font-semibold text-cyan-400">Software Engineering</span> student specializing in 
            <span className="text-cyan-400 font-semibold"> AI/ML</span>, 
            <span className="text-blue-400 font-semibold"> Cloud Computing</span>, and 
            <span className="text-purple-400 font-semibold"> DevOps</span>.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Microsoft Azure certified professional building next-generation applications with cutting-edge technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-bold rounded-2xl flex items-center gap-3"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Code className="w-6 h-6" />
            <span>Explore Innovation</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg font-bold rounded-2xl flex items-center gap-3"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Mail className="w-6 h-6" />
            <span>Connect With Me</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center gap-8"
        >
          <motion.a
            href="https://github.com/NickiMash17"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300"
          >
            <Github className="w-8 h-8" />
          </motion.a>
          
          <motion.a
            href="https://linkedin.com/in/nicolette-mashaba"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-300"
          >
            <Linkedin className="w-8 h-8" />
          </motion.a>
        </motion.div>
      </div>

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
          className="text-cyan-400 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AIHero;
