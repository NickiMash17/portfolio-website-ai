import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import NeuralBackground from './components/NeuralBackground';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import FloatingActionMenu from './components/FloatingActionMenu';
import { ChevronUp, Menu, X, Home, User, Briefcase, FileText, Mail, Code, Mail as MailIcon, Heart, Zap, Sun, Moon, Github, Linkedin, Brain, Cloud, Database, Server, Terminal, Layers, Activity } from 'lucide-react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { usePerformance } from './hooks/usePerformance';

// Lazy load heavy components
const Chatbot = lazy(() => import('./components/Chatbot'));
const AIProjects = lazy(() => import('./components/AIProjects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for lazy-loaded components
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Navigation: React.FC<{ throttleScroll: Function }> = ({ throttleScroll }) => {
  const { toggleTheme, isLight } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const lockoutRef = React.useRef(false);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '#about', label: 'About', icon: <User className="w-4 h-4" /> },
    { href: '#projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { href: '#resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  // Track active section on scroll with performance optimization and lockout
  React.useEffect(() => {
    const handleScroll = throttleScroll(() => {
      if (lockoutRef.current) return;
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      let foundSection = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            foundSection = section;
            break;
          }
        }
      }
      setActiveSection(prev => prev !== foundSection ? foundSection : prev);
    }, 200);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, throttleScroll]);

  // Update active section on hash change, with lockout
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const sections = navItems.map(item => item.href.substring(1));
      if (sections.includes(hash)) {
        setActiveSection(prev => prev !== hash ? hash : prev);
        lockoutRef.current = true;
        setTimeout(() => { lockoutRef.current = false; }, 400);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [navItems]);

  // On initial mount, set active section based on hash
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const sections = navItems.map(item => item.href.substring(1));
    if (sections.includes(hash)) {
      setActiveSection(hash);
      lockoutRef.current = true;
      setTimeout(() => { lockoutRef.current = false; }, 400);
    } else {
      setActiveSection('home');
    }
  }, [navItems]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 glass-ai border-b border-cyan-500/20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-white font-orbitron tracking-wider">NICOLETTE</span>
              <p className="text-xs text-cyan-400 font-semibold">AI ENGINEER</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:flex items-center space-x-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.substring(1));
                  lockoutRef.current = true;
                  setTimeout(() => { lockoutRef.current = false; }, 400);
                }}
                className={`flex items-center space-x-2 px-6 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={toggleTheme}
              className="p-3 rounded-2xl glass-ai text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl glass-ai text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-cyan-500/20"
            >
              <div className="px-2 pt-4 pb-6 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href.substring(1));
                      setIsMenuOpen(false);
                      lockoutRef.current = true;
                      setTimeout(() => { lockoutRef.current = false; }, 400);
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl text-lg font-semibold transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 glass-ai border-t border-cyan-500/20 theme-transition">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-orbitron">NICOLETTE</span>
                <p className="text-sm text-cyan-400 font-semibold">AI ENGINEER</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 max-w-md leading-relaxed">
              Software Engineering student passionate about creating innovative solutions and pushing the boundaries of web technology. 
              Microsoft Azure certified and ready to build the future.
            </p>
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-sm font-semibold">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Quick Links
            </h3>
            <div className="space-y-4">
              <a href="#home" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#about" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center gap-2">
                <User className="w-4 h-4" />
                About
              </a>
              <a href="#projects" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Projects
              </a>
              <a href="#resume" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a href="#contact" className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <MailIcon className="w-4 h-4 text-white" />
              </div>
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <MailIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <a href="mailto:nene171408@gmail.com" className="text-lg hover:text-cyan-400 transition-colors duration-300">
                  nene171408@gmail.com
                </a>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Connect</h4>
                <div className="flex flex-col gap-4">
                  <a 
                    href="https://github.com/NickiMash17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 transform group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/nicolette-mashaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 transform group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-gray-400 text-lg">
              <span>© 2024 Nicolette Mashaba. Made with</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="flex items-center gap-8 text-lg">
              <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const AppContent: React.FC<{ optimizeElement: Function, debounceScroll: Function, throttleScroll: Function }> = ({ optimizeElement, debounceScroll, throttleScroll }) => {
  console.log('AppContent component rendered!');

  const scrollToTop = debounceScroll(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 font-inter transition-colors duration-300 relative overflow-hidden">
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Navigation */}
      <Navigation throttleScroll={throttleScroll} />

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home" className="relative">
          <AIHero />
        </section>
        <section id="about" className="relative">
          <AIAbout />
        </section>
        <section id="projects" className="relative">
          <AIProjects />
        </section>
        <PerformanceOptimizer>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="resume" className="relative">
              <Resume />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="contact" className="relative">
              <Contact />
            </section>
          </Suspense>
        </PerformanceOptimizer>
      </main>

      {/* Enhanced Footer */}
      <Footer />

      {/* AI Assistant */}
      <Suspense fallback={<LoadingSpinner />}>
        <Chatbot />
      </Suspense>

      {/* Floating Action Menu */}
      <FloatingActionMenu />

      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-40 w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 backdrop-blur-sm border border-white/20 performance-critical"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-8 h-8 mx-auto" />
      </motion.button>
    </div>
  );
};

const App: React.FC = () => {
  console.log('App component mounting...');
  const { optimizeElement, debounceScroll, throttleScroll } = usePerformance({
    enableMonitoring: true,
    enableScrollOptimization: true
  });
  return (
    <ThemeProvider>
      <AppContent optimizeElement={optimizeElement} debounceScroll={debounceScroll} throttleScroll={throttleScroll} />
    </ThemeProvider>
  );
};

export default App;
