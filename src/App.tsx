import React, { Suspense, lazy } from 'react';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import { Menu, X, Home, User, Briefcase, FileText, Mail, Mail as MailIcon, Heart, Zap, Github, Linkedin, Brain, MessageCircle, Sparkles, ArrowUp } from 'lucide-react';
import AIPreloader from './components/AIPreloader';
import { Helmet } from 'react-helmet-async';
import { usePerformance } from './hooks/usePerformance';

// Custom Types
interface NavigationProps {}

interface AppContentProps {
  optimizeElement: (element: HTMLElement) => void;
  debounceScroll: (callback: () => void, delay?: number) => void;
}

// Lazy load heavy components
const Chatbot = lazy(() => import('./components/Chatbot'));
const AIProjects = lazy(() => import('./components/AIProjects'));
const Resume = lazy(() => import('./components/Resume'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component for lazy-loaded components
const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <div className="w-12 h-12 border-4 border-[var(--ai-primary)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Navigation: React.FC<NavigationProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('home');
  const lockoutRef = React.useRef(false);

  // Accurate active section using IntersectionObserver
  React.useEffect(() => {
    const sections = ['home','about','projects','resume','contact'];
    const elements = sections
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      if (lockoutRef.current) return;
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b) => (b.intersectionRatio - a.intersectionRatio));
      const target = (visible[0]?.target as HTMLElement | undefined);
      if (target?.id) setActiveSection(prev => prev !== target.id ? target.id : prev);
    }, { root: null, rootMargin: '-20% 0px -60% 0px', threshold: [0,0.25,0.5,0.75,1] });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { href: '#about', label: 'About', icon: <User className="w-4 h-4" /> },
    { href: '#projects', label: 'Projects', icon: <Briefcase className="w-4 h-4" /> },
    { href: '#resume', label: 'Resume', icon: <FileText className="w-4 h-4" /> },
    { href: '#contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-ai border-b border-[var(--ai-primary)]/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Updated sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg">
              <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
            <div>
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-white font-orbitron tracking-wider">NICOLETTE</span>
              <p className="text-[10px] sm:text-xs md:text-sm text-[var(--ai-primary)] font-semibold tracking-wide">SOFTWARE DEVELOPER</p>
            </div>
          </div>

          {/* Desktop Navigation - Updated padding and text size */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.href.substring(1));
                  lockoutRef.current = true;
                  setTimeout(() => { lockoutRef.current = false; }, 400);
                }}
                className={`flex items-center space-x-1 lg:space-x-2 px-4 lg:px-6 py-2.5 rounded-2xl text-base lg:text-lg font-semibold transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'bg-gradient-to-r from-[var(--ai-primary)] to-[var(--ai-secondary)] text-white shadow-lg'
                    : 'text-white hover:text-[var(--ai-primary)] hover:bg-[var(--ai-primary)]/10'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-2xl glass-ai text-white hover:text-[var(--ai-primary)] hover:bg-[var(--ai-primary)]/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Updated spacing */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[var(--ai-primary)]/20">
            <div className="px-2 pt-3 pb-4 space-y-1">
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
                  className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-base font-semibold transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-[var(--ai-primary)] to-[var(--ai-secondary)] text-white shadow-lg'
                      : 'text-white hover:text-[var(--ai-primary)] hover:bg-[var(--ai-primary)]/10'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-[var(--ai-primary)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-16">
        {/* Top Section - Updated grid and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-gradient rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-orbitron">NICOLETTE</span>
                <p className="text-xs sm:text-sm text-[var(--ai-primary)] font-semibold">SOFTWARE DEVELOPER</p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-md leading-relaxed mx-auto md:mx-0">
              Software Engineering student architecting innovative solutions and pushing the boundaries of web technology. 
              Microsoft Azure certified and ready to build the future.
            </p>
            {/* Status indicator */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-3 h-3 bg-[var(--ai-primary)] rounded-full" />
              <span className="text-[var(--ai-primary)] text-sm font-semibold">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links - Updated spacing and text sizes */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 flex items-center justify-center md:justify-start gap-2 sm:gap-3">
              <div className="w-8 h-8 bg-brand-gradient rounded-xl flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              Quick Links
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <a href="#home" className="text-sm sm:text-base md:text-lg text-white hover-brand transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <Home className="w-4 h-4" />
                Home
              </a>
              <a href="#about" className="text-sm sm:text-base md:text-lg text-white hover-brand transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <User className="w-4 h-4" />
                About
              </a>
              <a href="#projects" className="text-sm sm:text-base md:text-lg text-white hover-brand transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <Briefcase className="w-4 h-4" />
                Projects
              </a>
              <a href="#resume" className="text-sm sm:text-base md:text-lg text-white hover-brand transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <FileText className="w-4 h-4" />
                Resume
              </a>
              <a href="#contact" className="text-sm sm:text-base md:text-lg text-white hover-brand transition-colors duration-300 hover:translate-x-2 transform flex items-center justify-center md:justify-start gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info - Updated sizing */}
          <div className="space-y-4 sm:space-y-6 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-brand-gradient rounded-xl flex items-center justify-center">
                <MailIcon className="w-4 h-4" />
              </div>
              Get In Touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 text-white group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-gradient/20 rounded-2xl flex items-center justify-center">
                  <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--ai-primary)]" />
                </div>
                <a href="mailto:nene171408@gmail.com" className="text-sm sm:text-base md:text-lg hover-brand transition-colors duration-300">
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
                    className="flex items-center gap-3 text-white hover-brand transition-all duration-300 hover:translate-x-2 transform group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/nicolette-mashaba" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover-brand transition-all duration-300 hover:translate-x-2 transform group"
                  >
                    <div className="w-12 h-12 bg-brand-gradient rounded-2xl flex items-center justify-center transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <span className="text-lg font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Updated spacing */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[var(--ai-primary)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-4 gap-y-2 text-white text-sm sm:text-base">
              <span> 2025 Nicolette Mashaba. Made with</span>
              <Heart className="w-5 h-5 text-red-400" />
              <span>and lots of</span>
              <Zap className="w-5 h-5 text-[var(--ai-primary)]" />
            </div>
            
            <div className="flex items-center gap-3 sm:gap-6 text-sm sm:text-base">
              <a href="#privacy" className="text-white hover-brand transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white hover-brand transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const AppContent: React.FC<AppContentProps> = ({ optimizeElement, debounceScroll }) => {
  const scrollToTop = React.useCallback((e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    debounceScroll(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, [debounceScroll]);

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
    <div className="min-h-screen font-inter transition-colors duration-300 relative bg-app-gradient">
      {/* Navigation */}
      <Navigation />

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

      {/* Footer */}
      <Footer />

      {/* AI Assistant */}
      <Suspense fallback={<LoadingSpinner />}>
        <Chatbot />
      </Suspense>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-40 w-12 h-12 sm:w-16 sm:h-16 bg-brand-gradient text-white rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-[var(--ai-primary)]/40 transition-all duration-500 backdrop-blur-lg border-2 border-white/30 performance-critical"
        aria-label="Scroll to top"
      >
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <ArrowUp className="w-6 h-6 sm:w-8 sm:h-8 drop-shadow-lg" />
        </div>
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [showPreloader, setShowPreloader] = React.useState(true);
  const [currentSection, setCurrentSection] = React.useState<string>('');

  React.useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Track URL hash for per-section SEO
  React.useEffect(() => {
    const updateSectionFromHash = () => {
      const hash = (window.location.hash || '').replace('#', '');
      setCurrentSection(hash);
    };
    updateSectionFromHash();
    window.addEventListener('hashchange', updateSectionFromHash);
    return () => window.removeEventListener('hashchange', updateSectionFromHash);
  }, []);

  const { optimizeElement, debounceScroll } = usePerformance({
    enableMonitoring: true,
    enableScrollOptimization: true,
    enableMemoryCleanup: true
  });

  if (showPreloader) {
    return <AIPreloader onComplete={() => setShowPreloader(false)} />;
  }

  const sectionMeta: Record<string, { title: string; description: string }> = {
    home: {
      title: 'Home | Nicolette Mashaba',
      description: 'Explore my featured projects, skills, and how I build with Azure and AI.'
    },
    about: {
      title: 'About | Nicolette Mashaba',
      description: 'Software developer focused on full‑stack, Azure cloud, and AI-powered solutions.'
    },
    projects: {
      title: 'Projects | Nicolette Mashaba',
      description: 'Selected projects showcasing modern web, cloud, and AI implementations.'
    },
    resume: {
      title: 'Resume | Nicolette Mashaba',
      description: 'Experience, certifications, and education of a Microsoft Azure–certified developer.'
    },
    contact: {
      title: 'Contact | Nicolette Mashaba',
      description: 'Get in touch about software engineering roles, collaborations, or freelance work.'
    }
  };

  const meta = sectionMeta[currentSection || ''];

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Nicolette Mashaba | Software Developer & Microsoft Azure Certified</title>
        <meta name="description" content="Software developer specializing in full‑stack development, cloud (Azure), AI solutions, and high‑performance web apps. View projects, resume, and contact Nicolette." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://portfolio-ai-nicolette.surge.sh/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-ai-nicolette.surge.sh/" />
        <meta property="og:site_name" content="Nicolette Mashaba" />
        <meta property="og:title" content="Nicolette Mashaba | Software Developer" />
        <meta property="og:description" content="Full‑stack & cloud (Azure) developer building performant, modern web apps with AI." />
        <meta property="og:image" content="/images/nicolette-profile.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nicolette Mashaba | Software Developer" />
        <meta name="twitter:description" content="Full‑stack & cloud (Azure) developer building performant, modern web apps with AI." />
        <meta name="twitter:image" content="/images/nicolette-profile.jpg" />

        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Nicolette Mashaba',
          url: 'https://portfolio-ai-nicolette.surge.sh/',
          sameAs: [
            'https://github.com/NickiMash17'
          ],
          jobTitle: 'Software Developer',
          description: 'Full‑stack and Azure cloud developer building AI-powered, high‑performance web apps.'
        })}</script>
      </Helmet>
      {meta && (
        <Helmet prioritizeSeoTags>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
        </Helmet>
      )}
      <AppContent optimizeElement={optimizeElement} debounceScroll={debounceScroll} />
    </>
  );
};

export default App;
