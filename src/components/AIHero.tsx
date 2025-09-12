import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Github, Linkedin, ChevronDown, Brain, Cloud, Database, Server, Terminal, Layers, Zap, Cpu, Network } from 'lucide-react';

const AIHero: React.FC = () => {
  const [radius, setRadius] = useState(200);

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(150);
      } else {
        setRadius(200);
      }
    };

    window.addEventListener('resize', updateRadius);
    updateRadius();

    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const techIcons = [
    { icon: Brain, label: 'AI/ML', color: 'from-[var(--ai-primary)] to-[var(--ai-secondary)]' },
    { icon: Cloud, label: 'Cloud', color: 'from-[var(--ai-secondary)] to-[var(--ai-accent)]' },
    { icon: Database, label: 'Database', color: 'from-[var(--ai-accent)] to-[var(--ai-secondary)]' },
    { icon: Server, label: 'DevOps', color: 'from-[var(--ai-secondary)] to-[var(--ai-primary)]' },
    { icon: Terminal, label: 'Tools', color: 'from-[var(--ai-primary)] to-[var(--ai-accent)]' },
    { icon: Layers, label: 'Architecture', color: 'from-[var(--ai-accent)] to-[var(--ai-secondary)]' },
    { icon: Cpu, label: 'Processing', color: 'from-[var(--ai-primary)] to-[var(--ai-secondary)]' },
    { icon: Network, label: 'Networking', color: 'from-[var(--ai-secondary)] to-[var(--ai-accent)]' }
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 bg-app-gradient" />
      
      {/* Azure Cloud Services Floating Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {['Azure Functions', 'Kubernetes', 'Docker', 'CI/CD', 'ML Studio', 'DevOps'].map((service, i) => (
          <motion.div
            key={service}
            className="absolute text-xs font-mono text-[var(--ai-primary)]/30 bg-[var(--ai-primary)]/5 px-2 py-1 rounded border border-[var(--ai-primary)]/20"
            style={{
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {service}
          </motion.div>
        ))}
      </div>

      {/* Neural Network Connections */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + i * 10}%`}
              y1="30%"
              x2={`${30 + i * 8}%`}
              y2="70%"
              stroke="var(--ai-primary)"
              strokeWidth="1"
              strokeDasharray="4,4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={`${25 + i * 12}%`}
              cy={`${40 + (i % 2) * 20}%`}
              r="3"
              fill="var(--ai-primary)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>

      {/* DevOps Pipeline Visualization */}
      <div className="absolute top-1/4 right-10 w-64 h-32 pointer-events-none opacity-25">
        <div className="relative">
          {['Build', 'Test', 'Deploy'].map((stage, i) => (
            <motion.div
              key={stage}
              className="absolute flex items-center gap-2"
              style={{ top: `${i * 35}px` }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.5, duration: 1 }}
            >
              <motion.div
                className="w-3 h-3 bg-[var(--ai-primary)] rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
              />
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-[var(--ai-primary)] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
              />
              <span className="text-xs font-mono text-[var(--ai-primary)]">{stage}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none">
        {['const ai = new ML()', 'kubectl apply -f', 'az webapp deploy', 'docker build -t'].map((code, i) => (
          <motion.div
            key={code}
            className="absolute text-xs font-mono text-[var(--ai-accent)]/40 bg-black/20 px-2 py-1 rounded border border-[var(--ai-accent)]/20"
            style={{
              right: `${10 + (i * 15)}%`,
              bottom: `${20 + (i % 2) * 30}%`,
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 5 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 mt-12"
            >
              <span className="text-lg text-[var(--ai-primary)] font-semibold relative">
                <span className="inline-block animate-pulse">Hello, I'm</span>
                <motion.span
                  className="absolute -right-2 top-0 w-1 h-6 bg-[var(--ai-primary)]"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            {/* Glowing Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
            >
              <span className="bg-brand-gradient bg-clip-text text-transparent font-orbitron relative">
                Nicolette
                <motion.div
                  className="absolute inset-0 bg-brand-gradient blur-xl opacity-30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent font-orbitron relative">
                Mashaba
                <motion.div
                  className="absolute inset-0 bg-brand-gradient blur-xl opacity-30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Animated Taglines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <div className="text-2xl md:text-3xl text-white mb-2">
                <motion.span 
                  className="inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    color: ['[var(--ai-primary)]', '[var(--ai-secondary)]', '[var(--ai-primary)]']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Software Developer
                </motion.span>
              </div>
              <div className="text-lg text-[var(--ai-primary)] flex items-center justify-center lg:justify-start gap-2">
                <Zap className="w-5 h-5 animate-pulse" />
                Software Engineering Student & Microsoft Azure Certified
              </div>
            </motion.div>

            {/* Description with Holographic Effect */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white mb-8 max-w-2xl leading-relaxed relative"
            >
              <span className="relative z-10">
                Architecting cutting-edge software solutions with precision and innovation. 
                Specializing in full-stack development, cloud computing, and intelligent system design.
              </span>
              <motion.div
                className="absolute inset-0 bg-brand-gradient/10 rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-4 bg-brand-gradient text-white font-bold rounded-2xl shadow-2xl hover:shadow-[var(--ai-glow)] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <Code className="w-5 h-5 relative z-10" />
                <span className="relative z-10">View My Work</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border-2 border-[var(--ai-primary)] text-[var(--ai-primary)] font-bold rounded-2xl hover:bg-[var(--ai-glow)] transition-all duration-300 flex items-center justify-center gap-3 relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-[var(--ai-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Social Media Links - Updated spacing */}
            <div className="absolute left-4 sm:left-6 md:left-8 bottom-32 sm:bottom-40 flex flex-col space-y-6 sm:space-y-8">
              <a 
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm 
                  flex items-center justify-center border border-white/20 hover:scale-110 
                  hover:bg-[var(--ai-primary)] transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm 
                  flex items-center justify-center border border-white/20 hover:scale-110 
                  hover:bg-[var(--ai-primary)] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Enhanced Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10">
              {/* Main Photo Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[var(--ai-primary)]/30 shadow-2xl relative">
                {/* Profile Image */}
                <img 
                  src="/images/nicolette-profile.jpg"
                  alt="Nicolette Mashaba - Software Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-brand-gradient/20" />
                
                {/* Name Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-3 text-center">
                  <h3 className="text-white font-bold text-lg font-orbitron">Nicolette</h3>
                  <p className="text-[var(--ai-primary)]/80 text-sm">Software Developer</p>
                </div>
                
                {/* Floating Tech Icons */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center z-30"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity }}
                >
                  <Cloud className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div
                  className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center z-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Terminal className="w-5 h-5 text-white" />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 left-4 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center z-30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Database className="w-5 h-5 text-white" />
                </motion.div>
                {/* Holographic Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-brand-gradient/20"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Enhanced Orbiting Tech Icons */}
              {techIcons.map((tech, index) => {
                const angle = (index / techIcons.length) * Math.PI * 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tech.label}
                    className="absolute w-14 h-14 rounded-full bg-brand-gradient/20 backdrop-blur-sm border border-[var(--ai-primary)]/30 flex items-center justify-center shadow-lg"
                    style={{
                      left: `calc(50% + ${x}px - 28px)`,
                      top: `calc(50% + ${y}px - 28px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.8, 1, 0.8],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ 
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      delay: 0.8 + index * 0.1
                    }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <tech.icon className="w-7 h-7 text-[var(--ai-primary)]" />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[var(--ai-primary)] hover:text-[var(--ai-secondary)] transition-colors duration-300 group"
          >
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-[var(--ai-primary)]/30 flex items-center justify-center group-hover:border-[var(--ai-primary)]/60 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIHero;
