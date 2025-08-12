import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, MessageCircle, Sun, Moon, ArrowRight, Play, Pause } from 'lucide-react';
import NeuralBackground from './NeuralBackground';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [currentTechIndex, setCurrentTechIndex] = React.useState(0);

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'from-blue-400 to-purple-500' },
    { name: 'C#', icon: '💎', color: 'from-purple-500 to-emerald-400' },
    { name: 'Azure', icon: '☁️', color: 'from-emerald-400 to-blue-400' },
    { name: '.NET', icon: '🟣', color: 'from-blue-400 to-purple-500' },
    { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-cyan-400' },
    { name: 'AI/ML', icon: '🤖', color: 'from-purple-400 to-pink-400' }
  ];

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  // Auto-rotate through technologies
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, technologies.length]);

  return (
    <section id="home" className="relative min-h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden">
      {/* Enhanced Neural Network Background */}
      <NeuralBackground />
      
      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-transparent to-gray-900/30 z-5" />
      
      {/* Premium Mesh Gradient with Animation */}
      <div className="absolute inset-0 z-5 opacity-25">
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-blue-500/40 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-purple-500/35 via-transparent to-transparent" 
          style={{ transform: 'translate(70%, 30%)' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.35, 0.55, 0.35]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-emerald-500/30 via-transparent to-transparent" 
          style={{ transform: 'translate(-30%, 70%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{
              left: `${10 + (i * 10) % 80}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}

        {/* Floating Tech Icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`tech-${i}`}
            className="absolute text-blue-400/60"
            style={{
              left: `${15 + (i * 12) % 70}%`,
              top: `${25 + (i * 18) % 50}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.1, 0.8]
            }}
            transition={{
              duration: 4 + i * 0.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
              {technologies[i % technologies.length].icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-gray-800/30 rounded-3xl border border-gray-700/50 p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent text-9xl font-black leading-none">
              AI
            </div>
          </div>

          {/* Name with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent mb-6 relative"
          >
            <span className="relative">
              Nicolette
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          {/* Enhanced Tagline */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Full-Stack Developer
            </span>
            <span className="mx-4 text-gray-400">|</span>
            <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
              AI Enthusiast
            </span>
            <span className="mx-4 text-gray-400">|</span>
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Azure Certified
            </span>
          </motion.p>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with cutting-edge technologies. 
            Specializing in <span className="text-blue-400 font-medium">C#</span>, <span className="text-purple-400 font-medium">.NET</span>, <span className="text-emerald-400 font-medium">React</span>, and <span className="text-cyan-400 font-medium">Azure</span> cloud services.
          </motion.p>

          {/* Enhanced Technology Tags with Auto-rotation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: index === currentTechIndex ? 1 : 0.6,
                  scale: index === currentTechIndex ? 1.1 : 1
                }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className={`relative px-6 py-3 bg-gradient-to-r ${tech.color} backdrop-blur-sm rounded-full text-sm font-semibold text-white border border-white/20 shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 hover:shadow-xl`}
                onClick={() => setCurrentTechIndex(index)}
              >
                <span className="mr-2">{tech.icon}</span>
                {tech.name}
                {index === currentTechIndex && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={handleRipple}
              className="px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 text-white rounded-full font-semibold text-lg backdrop-blur-sm border border-white/20 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 flex items-center gap-3 group"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-6 py-4 bg-gray-800/50 text-gray-300 rounded-full font-medium backdrop-blur-sm border border-gray-600/50 hover:bg-gray-700/50 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'} Animation
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Theme Toggle */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className="absolute top-8 right-8 z-30 p-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-600/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>
    </section>
  );
};

export default Hero; 