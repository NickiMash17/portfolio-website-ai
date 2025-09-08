import React, { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { Menu, X, Home, User, Briefcase, FileText, Mail, Mail as MailIcon, Heart, Zap, Github, Linkedin, Brain, MessageCircle, Sparkles, ArrowUp } from 'lucide-react';
import { usePerformance } from './hooks/usePerformance';
import AIPreloader from './components/AIPreloader';

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
              <p className="text-xs text-cyan-400 font-semibold">SOFTWARE DEVELOPER</p>
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
                    : 'text-white hover:text-cyan-400 hover:bg-cyan-500/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl glass-ai text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
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
                        : 'text-white hover:text-cyan-400 hover:bg-cyan-500/10'
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
    <footer className="relative z-10 border-t border-cyan-500/20 theme-transition overflow-hidden">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      
      {/* Azure Cloud Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#0078d4_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#00bcf2_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#40e0d0_0%,transparent_50%)]" />
      </div>
      
      {/* DevOps Pipeline Visualization */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              left: '0%',
              top: `${20 + i * 20}%`,
              width: '100%',
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
      
      {/* Code Matrix Effect */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${(i * 8) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {['const', 'function', 'async', 'await', 'import', 'export'][i % 6]}
          </motion.div>
        ))}
      </div>
      
      {/* Advanced Neural Network Grid */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,120,212,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,120,212,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse" />
      </div>

      {/* Tech Stack Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Azure Hexagons */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`azure-${i}`}
            className="absolute w-16 h-16 border-2 border-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* AI Neural Nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-6 h-6 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-orbitron">NICOLETTE</span>
                <p className="text-sm text-cyan-400 font-semibold">SOFTWARE DEVELOPER</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-white max-w-md leading-relaxed mx-auto md:mx-0">
              Software Engineering student architecting innovative solutions and pushing the boundaries of web technology. 
              Microsoft Azure certified and ready to build the future.
            </p>
            {/* Status indicator */}
            <div className="flex items-center justify-center md:justify-start gap-3">
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
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Quick Links
            </h3>
            <div className="space-y-4">
              <a href="#home" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#about" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <User className="w-4 h-4" />
                About
              </a>
              <a href="#projects" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <Briefcase className="w-4 h-4" />
                Projects
              </a>
              <a href="#resume" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a href="#contact" className="text-base sm:text-lg text-white hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
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
            className="space-y-6 text-center md:text-left"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <MailIcon className="w-4 h-4" />
              </div>
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-4 text-white group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                  <MailIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <a href="mailto:nene171408@gmail.com" className="text-base sm:text-lg hover:text-cyan-400 transition-colors duration-300">
                  nene171408@gmail.com
                </a>
              </div>
              
              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white">Connect</h4>
                <div className="flex flex-col items-center md:items-start gap-4">
                  <a 
                    href="https://github.com/NickiMash17" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 transform group"
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
                    className="flex items-center gap-3 text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 transform group"
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
          className="mt-12 sm:mt-16 pt-8 border-t border-cyan-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white text-base sm:text-lg">
              <span>© 2025 Nicolette Mashaba. Made with</span>
              <Heart className="w-5 h-5 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Zap className="w-5 h-5 text-cyan-400" />
            </div>
            
            <div className="flex items-center gap-4 sm:gap-8 text-base sm:text-lg">
              <a href="#privacy" className="text-white hover:text-cyan-400 transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white hover:text-cyan-400 transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

// Types for particle animation
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  shape: number;
  t: number;
  connections: number[];
}

const AppContent: React.FC<{ optimizeElement: Function, debounceScroll: Function, throttleScroll: Function }> = ({ optimizeElement, debounceScroll, throttleScroll }) => {
  console.log('AppContent component rendered!');

  const scrollToTop = debounceScroll(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100);

  // Enhanced particle background with AI/tech themes
  React.useEffect(() => {
    const canvas = document.getElementById('global-particle-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Mouse position for clustering
    let mouse = { x: canvas.width / 2, y: canvas.height / 2, active: false };
    canvas.onmousemove = (e) => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
      mouse.active = true;
    };
    canvas.onmouseleave = () => { mouse.active = false; };

    // Enhanced particle shapes with tech themes
    function drawShape(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, type: number, color: string) {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = 15;
      if (type === 0) {
        // Circle (AI/ML node)
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
      } else if (type === 1) {
        // Hexagon (Cloud/DevOps)
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 * i) / 6;
          ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
        }
        ctx.closePath();
        ctx.fill();
      } else if (type === 2) {
        // Star (Innovation)
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          let angle = (Math.PI * 2 * i) / 5;
          ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
          angle += Math.PI / 5;
          ctx.lineTo(Math.cos(angle) * size * 0.5, Math.sin(angle) * size * 0.5);
        }
        ctx.closePath();
        ctx.fill();
      } else if (type === 3) {
        // Square (Code/Development)
        ctx.fillRect(-size, -size, size * 2, size * 2);
      }
      ctx.restore();
    }

    // Enhanced gradient color generator with tech themes
    function getGradientColor(t: number): string {
      const r = Math.floor(0 + 255 * Math.sin(2 * Math.PI * t));
      const g = Math.floor(120 + 135 * Math.sin(2 * Math.PI * t + 2));
      const b = Math.floor(200 + 55 * Math.sin(2 * Math.PI * t + 4));
      return `rgba(${r},${g},${b},0.6)`;
    }

    const particles: Particle[] = [];
    const particleCount = 80;
    const connectionDistance = 250;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 3 + 2,
        shape: Math.floor(Math.random() * 4),
        t: Math.random(),
        connections: []
      });
    }

    // Find connections between particles
    function findConnections() {
      particles.forEach((particle, i) => {
        particle.connections = [];
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) +
              Math.pow(particle.y - otherParticle.y, 2)
            );
            if (distance < connectionDistance) {
              particle.connections.push(j);
            }
          }
        });
      });
    }

    let animationId: number;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particle positions and color
      particles.forEach((particle) => {
        // Mouse clustering effect
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            particle.vx += dx * 0.0008;
            particle.vy += dy * 0.0008;
          }
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.t += 0.008;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw connections
        particle.connections.forEach((connectedIndex) => {
          const connectedParticle = particles[connectedIndex];
          const distance = Math.sqrt(
            Math.pow(particle.x - connectedParticle.x, 2) +
            Math.pow(particle.y - connectedParticle.y, 2)
          );
          if (distance < connectionDistance) {
            const opacity = 1 - (distance / connectionDistance);
            if (ctx) {
              ctx.save();
              ctx.globalAlpha = opacity * 0.8;
              ctx.strokeStyle = getGradientColor((particle.t + connectedParticle.t) / 2);
              ctx.lineWidth = 1.5;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(connectedParticle.x, connectedParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });
      
      // Draw particles with enhanced shapes and animated color
      particles.forEach((particle) => {
        if (ctx) {
          drawShape(ctx, particle.x, particle.y, particle.size, particle.shape, getGradientColor(particle.t));
        }
      });
      findConnections();
      animationId = requestAnimationFrame(animate);
    }
    animate();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div className="min-h-screen font-inter transition-colors duration-300 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      
      
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


      {/* Enhanced Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ 
          scale: 1.15, 
          rotate: [0, -10, 10, 0],
          boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)"
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-40 w-16 h-16 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-white rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 backdrop-blur-lg border-2 border-white/30 performance-critical group relative overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* Animated Background Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-300/30 via-blue-400/30 to-purple-500/30"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        {/* Pulsing Ring */}
        <motion.div
          className="absolute inset-2 border-2 border-white/40 rounded-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
        />
        
        {/* Icon with Animation */}
        <motion.div
          className="relative z-10 flex items-center justify-center w-full h-full"
          whileHover={{ y: -2 }}
        >
          <ArrowUp className="w-8 h-8 drop-shadow-lg" />
        </motion.div>
        
        {/* Floating Particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${15 + i * 10}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.button>
      
      {/* Ultra-Enhanced AI Assistant Interface */}
      <div className="fixed bottom-6 right-20 z-50">
        {/* Quantum Field Background */}
        <motion.div
          className="absolute -inset-20 rounded-full"
          animate={{
            background: [
              'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        
        {/* Holographic AI Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.8, type: "spring", stiffness: 80 }}
          className="relative group cursor-pointer"
          onClick={() => {
            const chatbotButton = document.querySelector('[aria-label="Open AI chatbot"]') as HTMLButtonElement;
            if (chatbotButton) {
              chatbotButton.click();
            }
          }}
        >
          {/* Outer Holographic Ring */}
          <motion.div
            className="absolute -inset-8 rounded-full border-2 border-emerald-400/30"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Middle Energy Ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-cyan-400/40"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Main AI Orb */}
          <motion.div
            whileHover={{
              scale: 1.15,
              boxShadow: [
                "0 0 40px rgba(16, 185, 129, 0.6)",
                "0 0 80px rgba(6, 182, 212, 0.8)",
                "0 0 120px rgba(139, 92, 246, 0.4)",
                "0 0 40px rgba(16, 185, 129, 0.6)"
              ],
              rotate: [0, 5, -5, 0]
            }}
            whileTap={{ scale: 0.9 }}
            className="w-28 h-28 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-full shadow-2xl relative overflow-hidden border-3 border-white/30 backdrop-blur-xl"
          >
            {/* Liquid Metal Effect */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, rgba(16,185,129,0.8), rgba(6,182,212,0.8), rgba(139,92,246,0.8), rgba(16,185,129,0.8))'
              }}
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Neural Network Pattern */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-900/80 via-blue-900/80 to-purple-900/80 backdrop-blur-sm">
              {/* Central AI Brain */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <Brain className="w-12 h-12 text-emerald-300 drop-shadow-lg" />
              </motion.div>
              
              {/* Orbiting Data Points */}
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                const radius = 25;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-300 rounded-full shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px - 4px)`,
                      top: `calc(50% + ${y}px - 4px)`
                    }}
                    animate={{
                      scale: [0.5, 1.5, 0.5],
                      opacity: [0.4, 1, 0.4],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                );
              })}
            </div>
            
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-400/20"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
          
          {/* Floating AI Particles */}
          {[...Array(8)].map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 60 + Math.sin(i) * 20;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow-lg"
                style={{
                  left: `calc(50% + ${x}px - 6px)`,
                  top: `calc(50% + ${y}px - 6px)`
                }}
                animate={{
                  x: [0, Math.cos(angle + Math.PI/4) * 20, 0],
                  y: [0, Math.sin(angle + Math.PI/4) * 20, 0],
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            );
          })}
          
          {/* Enhanced Holographic Label */}
          <motion.div
            className="absolute -left-56 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700"
            initial={{ x: 40, opacity: 0, scale: 0.8 }}
            whileHover={{ x: 0, opacity: 1, scale: 1 }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="relative bg-gradient-to-r from-emerald-600/95 via-teal-600/95 to-cyan-600/95 backdrop-blur-2xl text-white px-8 py-4 rounded-3xl shadow-2xl border-2 border-white/30">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-emerald-200" />
                  </motion.div>
                  <div>
                    <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">AI NEXUS</span>
                    <div className="text-sm text-emerald-200/80 font-medium">Neural Intelligence Interface</div>
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <MessageCircle className="w-6 h-6 text-cyan-200" />
                  </motion.div>
                </div>
                
                {/* Status Indicator */}
                <div className="flex items-center gap-2 mt-2">
                  <motion.div
                    className="w-2 h-2 bg-emerald-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-xs text-emerald-300 font-semibold">ONLINE & READY</span>
                </div>
                
                {/* Enhanced Arrow */}
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rotate-45 border-r-2 border-b-2 border-white/40"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [45, 65, 45]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Energy Streams */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-16 bg-gradient-to-t from-transparent via-emerald-400 to-transparent"
              style={{
                left: `${30 + i * 20}%`,
                top: '-20px',
                transformOrigin: 'bottom'
              }}
              animate={{
                scaleY: [0, 1, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.7
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  console.log('App component mounting...');
  const [showPreloader, setShowPreloader] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  const { optimizeElement, debounceScroll, throttleScroll } = usePerformance({
    enableMonitoring: true,
    enableScrollOptimization: true
  });
  if (showPreloader) {
    return <AIPreloader onComplete={() => setShowPreloader(false)} />;
  }
  return (
    <AppContent optimizeElement={optimizeElement} debounceScroll={debounceScroll} throttleScroll={throttleScroll} />
  );
};

export default App;
