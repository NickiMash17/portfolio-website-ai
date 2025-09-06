import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Github, Linkedin, ChevronDown, Brain, Cloud, Database, Server, Terminal, Layers, Activity, Zap, Cpu, Network } from 'lucide-react';

const AIHero: React.FC = () => {
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
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              className="mb-6"
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
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative"
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
              <span className="text-white relative">
                Mashaba
                <motion.div
                  className="absolute inset-0 bg-white blur-sm opacity-20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
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
              <div className="text-2xl md:text-3xl text-gray-300 mb-2">
                <motion.span 
                  className="inline-block"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    color: ['#e5e7eb', '#06b6d4', '#e5e7eb']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AI Engineer
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
              className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed relative"
            >
              <span className="relative z-10">
                Passionate about creating innovative AI solutions and building scalable applications. 
                Specializing in machine learning, cloud computing, and DevOps practices.
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
                <Github className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 relative z-10" />
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
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
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
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl"
              >
                <img
                  src="/images/nicolette-photo.jpg"
                  alt="Nicolette Mashaba"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400/0e7490/ffffff?text=Nicolette+Mashaba';
                    e.currentTarget.alt = 'Nicolette Mashaba - AI Engineer';
                  }}
                />
                {/* Holographic Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-blue-400/20"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Enhanced Orbiting Tech Icons */}
              {techIcons.map((tech, index) => {
                const angle = (index / techIcons.length) * Math.PI * 2;
                const radius = 200;
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
