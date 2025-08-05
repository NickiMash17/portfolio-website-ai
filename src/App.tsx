import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              Nicolette
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#resume', label: 'Resume' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-gray-900 rounded-full font-semibold hover:from-pink-500 hover:to-cyan-400 transition-all duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/75 transition-all duration-300"
      >
        <ChevronUp className="w-6 h-6 text-gray-900" />
      </motion.button>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Nicolette Mashaba. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App; 