import React, { useState, useEffect } from 'react';

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
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center z-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#00d4ff_0%,transparent_50%),radial-gradient(circle_at_75%_75%,#9333ea_0%,transparent_50%)]" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400/10 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {['AI', 'ML', 'React', 'Node', 'Cloud', 'DevOps', 'Code', 'Data', 'Azure', 'Python', 'TypeScript', 'API'][i]}
          </div>
        ))}
      </div>

      <div className="text-center px-6 relative z-10" role="status" aria-live="polite" aria-label={`Loading ${progress}%`}>
        {/* Professional Circular Loader */}
        <div className="mb-8 sm:mb-10">
          <div className="relative mx-auto mb-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
            {/* Outer Ring with Gradient */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900"></div>
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
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            {/* Inner Pulsing Ring */}
            <div className="absolute inset-4 rounded-full border-2 border-cyan-400/30 animate-ping" />
            
            {/* Central Core */}
            <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-2xl border border-slate-700">
              {/* AI Monogram with Professional Styling */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-1">
                  AI
                </div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
              </div>
            </div>
            
            {/* Orbiting Dots */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-cyan-400 rounded-full shadow-lg"></div>
            </div>
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }}>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Text with Professional Typography */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-3 tracking-tight">
          Nicolette Mashaba
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-cyan-300 mb-8 sm:mb-10 font-medium">
          Software Developer & AI Enthusiast
        </p>
        
        {/* Professional Progress Section */}
        <div className="w-[90vw] max-w-md sm:max-w-lg mx-auto mb-4 sm:mb-6">
          <div className="flex justify-between text-sm sm:text-base text-gray-300 mb-3">
            <span className="font-medium">{steps[currentStep]}</span>
            <span className="font-bold text-cyan-400">{progress}%</span>
          </div>
          <div className="w-full bg-slate-800/50 rounded-full h-3 overflow-hidden border border-slate-700/50">
            <div 
              className="h-3 rounded-full transition-all duration-300 ease-out relative"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00d4ff 0%, #3b82f6 50%, #9333ea 100%)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Professional Step Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3" aria-hidden="true">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index <= currentStep 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg scale-110' 
                  : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Professional Loading Text */}
        <div className="mt-6 text-sm text-slate-400 font-mono">
          <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
          Loading assets
        </div>
      </div>
    </div>
  );
};

export default AIPreloader;
