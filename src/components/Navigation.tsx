import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Github,
  Linkedin,
  Brain,
  Download,
  Sun,
  Moon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme, isLight } = useTheme();

  // Handle scroll effect safely
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'projects', 'resume', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const scrollToSection = (sectionId: string) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };



  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white">Nicolette</h1>
                <p className="text-xs text-cyan-400 -mt-1">Software Engineer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Scroll to ${item.label} section`}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Social Links & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
                className="p-2 text-slate-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-slate-700/50"
              >
                {isLight ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>

              <button
                onClick={() => scrollToSection('resume')}
                aria-label="Scroll to resume section"
                className="ml-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-slate-300 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Scroll to ${item.label} section`}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/NickiMash17"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 text-slate-400 hover:text-white rounded-lg transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/nicolette-mashaba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-800/50 text-slate-400 hover:text-white rounded-lg transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <button
                    onClick={() => scrollToSection('resume')}
                    aria-label="Scroll to resume section"
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-300"
          style={{ 
            width: `${typeof window !== 'undefined' ? Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) : 0}%` 
          }}
        />
      </div>
    </>
  );
};

export default Navigation;