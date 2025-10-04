import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Heart,
  Code,
  Coffee,
  ArrowUp,
  Brain,
  Cloud,
  Server,
  Database,
  Globe,
  Award,
  BookOpen,
  MessageSquare
} from 'lucide-react';

const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Full-Stack Development', icon: Code },
    { label: 'AI/ML Solutions', icon: Brain },
    { label: 'Cloud Architecture', icon: Cloud },
    { label: 'DevOps & CI/CD', icon: Server }
  ];

  const achievements = [
    { label: 'Azure Certified', icon: Award },
    { label: 'Top Academic Performer', icon: BookOpen },
    { label: 'AI Model Trainer', icon: Brain },
    { label: 'Full-Stack Developer', icon: Code }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, purple 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Neural Network Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full">
          {/* Neural connections */}
          {[...Array(8)].map((_, i) => (
            <g key={i}>
              <line
                x1={`${(i * 12.5)}%`}
                y1="20%"
                x2={`${(i * 12.5) + 10}%`}
                y2="80%"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="4,4"
                opacity="0.3"
              />
              <circle
                cx={`${(i * 12.5)}%`}
                cy="20%"
                r="2"
                fill="cyan"
                opacity="0.4"
              />
            </g>
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nicolette Mashaba</h3>
                  <p className="text-sm text-cyan-400">Software Engineer</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Passionate software engineer specializing in AI-powered solutions, 
                cloud architecture, and full-stack development. Building the future 
                with code, one innovation at a time.
              </p>

              {/* Availability Status */}
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-slate-500 rounded-full group-hover:bg-cyan-400 transition-colors duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <service.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-300">{service.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Achievements */}
            <div>
              <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                Get In Touch
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <a 
                    href="mailto:nene171408@gmail.com" 
                    className="text-slate-300 hover:text-white transition-colors duration-300"
                  >
                    nene171408@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300">South Africa</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/NickiMash17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-700/50 hover:bg-slate-600 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/nicolette-mashaba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-slate-700/50 hover:bg-slate-600 text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-8 border-t border-slate-700/50">
          <h4 className="text-center text-white font-semibold mb-6 flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-cyan-400" />
            Key Achievements
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-cyan-500/30 transition-colors duration-300"
              >
                <achievement.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">{achievement.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>&copy; {currentYear} Nicolette Mashaba.</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="w-4 h-4 text-red-400 fill-current" /> and 
                <Coffee className="w-4 h-4 text-amber-400" />
              </span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Powered by:</span>
              <div className="flex items-center gap-1">
                <span className="px-2 py-1 bg-slate-700/50 rounded text-cyan-400">React</span>
                <span className="px-2 py-1 bg-slate-700/50 rounded text-purple-400">TypeScript</span>
                <span className="px-2 py-1 bg-slate-700/50 rounded text-blue-400">Tailwind</span>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 transition-all duration-300 text-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Back to top</span>
            </button>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;