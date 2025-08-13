import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import NeuralBackground from './components/NeuralBackground';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { ChevronUp, Menu, X, Home, User, Briefcase, FileText, Mail, Code, Github, Linkedin, Twitter, Mail as MailIcon, Heart, Zap } from 'lucide-react';
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
    <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Navigation: React.FC = () => {
  const { isDark } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const { throttleScroll } = usePerformance({ enableScrollOptimization: true });

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '#about', label: 'About', icon: <User className="w-4 h-4" /> },
    { href: '#projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { href: '#resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  // Track active section on scroll with performance optimization
  React.useEffect(() => {
    const handleScroll = throttleScroll(() => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, throttleScroll]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-xl border-b border-dark-700/50 shadow-azure"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-professional-600 to-fresh-500 rounded-xl flex items-center justify-center shadow-clean">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-fresh-500 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="text-xl font-bold bg-gradient-to-r from-professional-600 to-fresh-500 bg-clip-text text-transparent">
              Nicolette
            </div>
            <div className="text-xs text-clean-600 font-medium">
              Aspiring Full-Stack Developer
            </div>
          </div>
          </motion.div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((link, index) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-azure-600 to-purple-600 shadow-azure'
                      : 'text-light-300 hover:text-neon-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-light-400 group-hover:text-neon-400'
                    }`}>
                      {link.icon}
                    </span>
                    {link.label}
                  </div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-azure-600 to-purple-600 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-azure-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden w-12 h-12 bg-gradient-to-r from-azure-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-dark-700/50 flex items-center justify-center text-white shadow-azure"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 pb-4"
          >
            <div className="bg-dark-800/50 backdrop-blur-md rounded-xl border border-dark-700/50 p-4">
              <div className="flex flex-col gap-2">
                {navItems.map((link, index) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-azure-600 to-purple-600 shadow-azure'
                          : 'text-light-300 hover:text-neon-400 hover:bg-dark-700/50'
                      }`}
                    >
                      <span className={`transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-light-400'
                      }`}>
                        {link.icon}
                      </span>
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

const Footer: React.FC = () => {
  const { isDark } = useTheme();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/nicolettemashaba' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/nicolettemashaba' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/nicolettemashaba' },
    { name: 'Email', icon: <MailIcon className="w-5 h-5" />, url: 'mailto:hello@nicolettemashaba.dev' }
  ];

  return (
    <footer className="relative bg-dark-900 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <NeuralBackground />
      </div>
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/40 via-transparent to-dark-900/40 z-5" />
      
      {/* Premium Mesh Gradient */}
      <div className="absolute inset-0 z-5 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-azure-500/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent" style={{ transform: 'translate(70%, 30%)' }} />
        <div className="absolute inset-0 bg-gradient-radial from-neon-500/25 via-transparent to-transparent" style={{ transform: 'translate(-30%, 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-azure-600 to-purple-600 rounded-xl flex items-center justify-center shadow-azure">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">
                    Nicolette
                  </div>
                  <div className="text-sm text-light-400 font-medium">
                    Full-Stack Developer
                  </div>
                </div>
              </div>
              
              <p className="text-light-300 text-lg leading-relaxed max-w-md">
                Passionate about creating innovative solutions with cutting-edge technologies. 
                Specializing in AI, cloud computing, and full-stack development.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-azure-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl border border-dark-700/50 flex items-center justify-center text-light-300 hover:text-neon-400 transition-all duration-300 shadow-lg hover:shadow-neon/25"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-6"
            >
              Quick Links
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {['About', 'Projects', 'Resume', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="block text-light-300 hover:text-neon-400 transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg font-semibold text-white mb-6"
            >
              Get In Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
                              <div className="flex items-center gap-3 text-light-300">
                  <MailIcon className="w-5 h-5 text-azure-400" />
                <span>hello@nicolettemashaba.dev</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-purple-400" />
                <span>Available for new opportunities</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>© 2024 Nicolette Mashaba. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-light-400 hover:text-neon-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-light-400 hover:text-neon-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const AppContent: React.FC = () => {
  const { optimizeElement, debounceScroll } = usePerformance({ 
    enableMonitoring: true, 
    enableScrollOptimization: true 
  });

  console.log('AppContent component rendered!');

  const scrollToTop = debounceScroll(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  // Optimize elements for performance
  React.useEffect(() => {
    const elements = document.querySelectorAll('.performance-critical');
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        optimizeElement(element);
      }
    });
  }, [optimizeElement]);

  return (
    <div className="min-h-screen bg-dark-950 font-inter transition-colors duration-300">
      <Navigation />

      {/* Main Content */}
      <PerformanceOptimizer>
        <main>
          <AIHero />
          <AIAbout />
          <Suspense fallback={<LoadingSpinner />}>
          <AIProjects />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
          <Resume />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
          <Contact />
          </Suspense>
        </main>
      </PerformanceOptimizer>

      {/* Magical Footer */}
      <Footer />

      {/* AI Assistant */}
      <Suspense fallback={<LoadingSpinner />}>
      <Chatbot />
      </Suspense>



      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 bg-gradient-to-r from-azure-600 to-purple-600 text-white rounded-full shadow-azure hover:shadow-neon transition-all duration-300 backdrop-blur-sm border border-white/20 performance-critical"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 mx-auto" />
      </motion.button>
    </div>
  );
};

const App: React.FC = () => {
  console.log('App component mounting...');
  
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App; 