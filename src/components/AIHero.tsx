import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  Sparkles,
  Zap,
  Cpu,
  Brain,
  Cloud,
  Database,
  Server,
  Terminal,
  Layers,
  Activity,
  TrendingUp,
  Shield,
  Rocket
} from 'lucide-react';

const AIHero: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const taglines = [
    "AI Engineering Specialist",
    "Microsoft Azure Certified",
    "Full-Stack Developer",
    "DevOps Engineer",
    "Machine Learning Practitioner",
    "Cloud Architecture Expert"
  ];

  // Rotating taglines effect with typing animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % taglines.length);
        setIsTyping(false);
      }, 500);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const techStack = [
    { icon: Brain, label: 'AI/ML', color: 'text-cyan-400', category: 'ai' },
    { icon: Cloud, label: 'Azure', color: 'text-blue-400', category: 'cloud' },
    { icon: Code, label: 'Full-Stack', color: 'text-purple-400', category: 'code' },
    { icon: Database, label: 'Data', color: 'text-emerald-400', category: 'data' },
    { icon: Server, label: 'DevOps', color: 'text-orange-400', category: 'devops' },
    { icon: Terminal, label: 'Git', color: 'text-red-400', category: 'tools' }
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Advanced Particle System Background */}
      <div className="particle-system absolute inset-0 z-0" />
      
      {/* Neural Network Overlay */}
      <div className="absolute inset-0 z-1">
        <div className="ai-neural-glow absolute top-1/4 left-1/4 w-96 h-96 rounded-full" />
        <div className="ai-neural-glow absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full" />
        <div className="ai-neural-glow absolute top-1/2 left-1/2 w-32 h-32 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Holographic Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron tracking-wider holographic"
            >
              NICOLETTE MASHABA
            </motion.h1>

            {/* Animated Tagline with Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-16 mb-8 flex items-center justify-center lg:justify-start"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    animate={{ rotate: isTyping ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="w-8 h-8 text-cyan-400" />
                  </motion.div>
                  <span className="text-2xl text-cyan-400 font-semibold">
                    {taglines[currentTagline]}
                  </span>
                  <motion.div
                    animate={{ rotate: isTyping ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Zap className="w-8 h-8 text-purple-400" />
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-12"
            >
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Passionate <span className="code-text font-semibold">Software Engineering</span> student specializing in 
                <span className="text-cyan-400 font-semibold"> AI/ML</span>, 
                <span className="text-blue-400 font-semibold"> Cloud Computing</span>, and 
                <span className="text-purple-400 font-semibold"> DevOps</span>.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Microsoft Azure certified professional building next-generation applications with cutting-edge technology. 
                Transforming ideas into scalable, intelligent solutions that drive innovation.
              </p>
            </motion.div>

            {/* Enhanced Call-to-Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 btn-ai text-lg font-bold rounded-2xl flex items-center gap-3 relative overflow-hidden"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Code className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Explore Innovation</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(147, 51, 234, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 btn-code text-lg font-bold rounded-2xl flex items-center gap-3 relative overflow-hidden"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Mail className="w-6 h-6" />
                <span>Connect With Me</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.button>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex justify-center lg:justify-start gap-8"
            >
              <motion.a
                href="https://github.com/NickiMash17"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-16 h-16 glass-ai rounded-2xl flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-all duration-300 group"
              >
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/nicolette-mashaba"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="w-16 h-16 glass-devops rounded-2xl flex items-center justify-center text-gray-300 hover:text-blue-400 transition-all duration-300 group"
              >
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Photo & Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center space-y-8"
          >
            {/* Professional Photo with AI/Tech Effects */}
            <motion.div
              initial={{ scale: 0.8, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.6, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Main Photo Container */}
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-2xl">
                {/* Professional Photo */}
                <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center relative">
                  {/* Try to load the actual photo, fallback to placeholder */}
                  <img
                    src="/images/nicolette-photo.jpg"
                    alt="Nicolette Mashaba - AI Engineer"
                    className={`w-full h-full object-cover rounded-3xl transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                  />
                  
                  {/* Placeholder when image not loaded */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg font-semibold">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <p>Professional Photo</p>
                        <p className="text-sm text-gray-400 mt-2">Add your photo to public/images/</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 animate-pulse" />
                
                {/* Floating Tech Icons around Photo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 neural-node flex items-center justify-center">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-4 transform translate-y-1/2 w-6 h-6 neural-node flex items-center justify-center">
                    <Cloud className="w-3 h-3 text-white" />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 neural-node flex items-center justify-center">
                    <Database className="w-3 h-3 text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-4 transform translate-y-1/2 w-8 h-8 neural-node flex items-center justify-center">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
                
                {/* Data Flow Lines */}
                <div className="absolute inset-0">
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                    animate={{
                      x: [0, 50, 0, -50, 0],
                      y: [0, -50, 0, 50, 0],
                      opacity: [0, 1, 0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                      x: [0, -50, 0, 50, 0],
                      y: [0, 50, 0, -50, 0],
                      opacity: [0, 1, 0, 1, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Advanced Tech Stack Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="w-full"
            >
              <p className="text-gray-400 mb-6 text-lg uppercase tracking-wider font-semibold text-center">Technology Ecosystem</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                    className="text-center group interactive-hover"
                  >
                    <div className={`w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${tech.color} relative`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-current to-transparent rounded-2xl opacity-20" />
                      <tech.icon className="w-full h-full p-4 relative z-10" />
                    </div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-medium">{tech.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 cursor-pointer"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AIHero;
