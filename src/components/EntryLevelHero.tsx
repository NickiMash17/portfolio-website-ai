import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown
} from 'lucide-react';

const EntryLevelHero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-clean-50 to-professional-50 relative overflow-hidden">
      {/* Simple Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-fresh-200 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-professional-200 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-highlight-200 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Avatar/Photo Placeholder */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-professional-500 to-fresh-500 rounded-full shadow-clean mb-8"
          >
            <Code className="w-16 h-16 text-white" />
          </motion.div>
          
          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-hero font-bold text-clean-800 mb-4"
          >
            Nicolette Mashaba
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-subtitle text-professional-600 mb-6 font-medium"
          >
            Aspiring Full-Stack Developer
          </motion.p>
          
          {/* Brief Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-body text-clean-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Recent bootcamp graduate passionate about web development. I love solving problems 
            and building things that make people's lives easier. Currently expanding my skills 
            in React and Node.js while contributing to open source projects.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-professional-600 text-white font-semibold rounded-lg shadow-professional hover:bg-professional-700 transition-all duration-200 flex items-center gap-2"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Code className="w-5 h-5" />
              View My Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-professional-600 font-semibold rounded-lg border-2 border-professional-200 hover:border-professional-300 hover:bg-professional-50 transition-all duration-200 flex items-center gap-2"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-clean-100 rounded-full flex items-center justify-center text-clean-600 hover:bg-professional-100 hover:text-professional-600 transition-all duration-200"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-12 h-12 bg-clean-100 rounded-full flex items-center justify-center text-clean-600 hover:bg-professional-100 hover:text-professional-600 transition-all duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-clean-400"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EntryLevelHero; 