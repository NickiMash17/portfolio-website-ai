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

  const techIcons = [
    { icon: Brain, label: 'AI/ML', color: 'from-cyan-500 to-blue-500' },
    { icon: Cloud, label: 'Cloud', color: 'from-blue-500 to-purple-500' },
    { icon: Database, label: 'Database', color: 'from-purple-500 to-pink-500' },
    { icon: Server, label: 'DevOps', color: 'from-green-500 to-teal-500' },
    { icon: Terminal, label: 'Tools', color: 'from-orange-500 to-red-500' },
    { icon: Layers, label: 'Architecture', color: 'from-indigo-500 to-purple-500' },
    { icon: Cpu, label: 'Processing', color: 'from-cyan-400 to-emerald-400' },
    { icon: Network, label: 'Networking', color: 'from-violet-500 to-purple-500' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950" />
      
      {/* Azure Cloud Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#0078d4_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#00bcf2_0%,transparent_50%),radial-gradient(circle_at_50%_50%,#40e0d0_0%,transparent_50%)]" />
      </div>
      
      {/* DevOps Pipeline Visualization */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              left: '0%',
              top: `${15 + i * 12}%`,
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
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            {['const', 'function', 'async', 'await', 'import', 'export', 'class', 'interface'][i % 8]}
          </motion.div>
        ))}
      </div>
      

      {/* Tech Stack Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Azure Hexagons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`azure-${i}`}
            className="absolute w-24 h-24 border-2 border-blue-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, -75, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 0.7,
            }}
          />
        ))}
        
        {/* DevOps Gears */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`gear-${i}`}
            className="absolute w-16 h-16 border border-green-400/25 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            <div className="absolute inset-2 border border-green-400/25 rounded-full" />
            <div className="absolute inset-4 border border-green-400/25 rounded-full" />
          </motion.div>
        ))}
        
        {/* AI Neural Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-8 h-8 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{
              left: `${i * 12.5}%`,
              top: `${20 + i * 10}%`,
              width: '200px',
            }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 100, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
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
              <span className="text-lg text-cyan-400 font-semibold relative">
                <span className="inline-block animate-pulse">Hello, I'm</span>
                <motion.span
                  className="absolute -right-2 top-0 w-1 h-6 bg-cyan-400"
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
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-orbitron relative">
                Nicolette
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-xl opacity-30"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-orbitron relative">
                Mashaba
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 blur-xl opacity-30"
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
                    color: ['#e5e7eb', '#06b6d4', '#e5e7eb']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Software Developer
                </motion.span>
              </div>
              <div className="text-lg text-cyan-400 flex items-center justify-center lg:justify-start gap-2">
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
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-lg"
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
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center gap-3 relative group"
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Mail className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Get In Touch</span>
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Github className="w-6 h-6 text-white group-hover:text-cyan-400 relative z-10" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <Linkedin className="w-6 h-6 text-white group-hover:text-cyan-400 relative z-10" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Enhanced Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10">
              {/* Glowing Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Main Photo Container */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl relative">
                {/* Profile Image */}
                <img 
                  src="/images/nicolette-profile.jpg"
                  alt="Nicolette Mashaba - Software Developer"
                  className="w-full h-full object-cover"
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20" />
                
                {/* Name Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-xl p-3 text-center">
                  <h3 className="text-white font-bold text-lg font-orbitron">Nicolette</h3>
                  <p className="text-cyan-200 text-sm">Software Developer</p>
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
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20"
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
                    className="absolute w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center shadow-lg"
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
                    <tech.icon className="w-7 h-7 text-cyan-400" />
                  </motion.div>
                );
              })}

              {/* Enhanced Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60"
                  style={{
                    left: `${15 + (i * 7)}%`,
                    top: `${10 + (i * 6)}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Data Flow Lines */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-40"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${5 + i * 8}%`,
                  }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    scaleY: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
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
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
          >
            <motion.div
              className="w-12 h-12 rounded-full border-2 border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400/60 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AIHero;
