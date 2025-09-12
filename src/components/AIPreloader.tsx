import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AIPreloaderProps {
  onComplete: () => void;
}

const AIPreloader: React.FC<AIPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Initializing AI Systems...',
    'Loading Neural Networks...',
    'Optimizing Performance...',
    'Ready to Launch!'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 450);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-app-gradient flex items-center justify-center z-50 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 particle-system opacity-20 pointer-events-none" />
      
      {/* Neural Network Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`neural-${i}`}
              cx={`${20 + (i % 3) * 30}%`}
              cy={`${25 + Math.floor(i / 3) * 25}%`}
              r="3"
              fill="var(--ai-primary)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3 + i * 0.2,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`connection-${i}`}
              x1={`${20 + (i % 2) * 30}%`}
              y1={`${25 + i * 15}%`}
              x2={`${50 + (i % 2) * 30}%`}
              y2={`${40 + i * 12}%`}
              stroke="var(--ai-accent)"
              strokeWidth="1"
              strokeDasharray="3,3"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                delay: i * 0.5,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Enhanced Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-[var(--ai-primary)]/30 bg-[var(--ai-primary)]/5 px-2 py-1 rounded border border-[var(--ai-primary)]/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {['AI', 'ML', 'React', 'Node', 'Cloud', 'DevOps', 'Code', 'Data', 'Azure', 'Python', 'TypeScript', 'API'][i]}
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="text-center px-6 relative z-10 glass-premium rounded-3xl p-8 border border-[var(--ai-primary)]/20 shadow-2xl max-w-md mx-auto"
        role="status" 
        aria-live="polite" 
        aria-label={`Loading ${progress}%`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Professional Circular Loader */}
        <div className="mb-8 sm:mb-10">
          <motion.div 
            className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer Ring with Gradient */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-[var(--ai-primary)] via-[var(--ai-secondary)] to-[var(--ai-accent)] p-1">
              <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm"></div>
            </div>
            
            {/* Progress Ring */}
            <div className="absolute inset-0 rounded-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--ai-primary)" />
                    <stop offset="50%" stopColor="var(--ai-secondary)" />
                    <stop offset="100%" stopColor="var(--ai-accent)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Inner Pulsing Ring */}
            <motion.div 
              className="absolute inset-4 rounded-full border-2 border-[var(--ai-primary)]/30"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Central Core */}
            <div className="absolute inset-6 sm:inset-8 glass-premium rounded-full flex items-center justify-center shadow-2xl border border-[var(--ai-primary)]/30">
              {/* AI Monogram with Professional Styling */}
              <div className="text-center">
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--ai-primary)] via-[var(--ai-secondary)] to-[var(--ai-accent)] mb-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  AI
                </motion.div>
                <motion.div 
                  className="w-8 h-0.5 bg-gradient-to-r from-[var(--ai-primary)] to-[var(--ai-accent)] mx-auto rounded-full"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
            
            {/* Orbiting Dots */}
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[var(--ai-primary)] rounded-full shadow-lg"></div>
            </motion.div>
            <motion.div 
              className="absolute inset-0"
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-[var(--ai-accent)] rounded-full shadow-lg"></div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Enhanced Text with Professional Typography */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3 tracking-tight"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Nicolette Mashaba
        </motion.h2>
        <p className="text-base sm:text-lg text-secondary mb-8 sm:mb-10 font-medium">
          Software Developer & AI Enthusiast
        </p>
        
        {/* Professional Progress Section */}
        <div className="w-full max-w-sm mx-auto mb-4 sm:mb-6">
          <div className="flex justify-between text-sm sm:text-base text-secondary mb-3">
            <span className="font-medium">{steps[currentStep]}</span>
            <span className="font-bold text-[var(--ai-primary)]">{progress}%</span>
          </div>
          <div className="w-full glass-premium rounded-full h-3 overflow-hidden border border-[var(--ai-primary)]/20">
            <motion.div 
              className="h-3 rounded-full transition-all duration-300 ease-out relative"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--ai-primary) 0%, var(--ai-secondary) 50%, var(--ai-accent) 100%)'
              }}
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: [-20, 100] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
        
        {/* Professional Step Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3" aria-hidden="true">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-glow ${
                index <= currentStep 
                  ? 'bg-gradient-to-r from-[var(--ai-primary)] to-[var(--ai-secondary)] shadow-lg' 
                  : 'bg-gray-600'
              }`}
              animate={index <= currentStep ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>

        {/* Professional Loading Text */}
        <div className="mt-6 text-sm text-muted font-mono">
          <motion.span 
            className="inline-block w-2 h-2 bg-[var(--ai-primary)] rounded-full mr-2"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          Loading assets
        </div>
      </motion.div>
    </div>
  );
};

export default AIPreloader;
