import React, { useState, useEffect } from 'react';

interface AIPreloaderProps {
  onComplete: () => void;
}

const AIPreloader: React.FC<AIPreloaderProps> = ({ onComplete }) => {
  // Progress bar logic (ensure it reaches 100%)
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const steps = [
    'Initializing Neural Networks...',
    'Loading AI Consciousness...',
    'Calibrating Quantum Processors...',
    'Synchronizing Data Streams...',
    'Optimizing Performance Matrix...',
    'Neural Interface Ready!'
  ];

  useEffect(() => {
    // Fast preloader that definitely reaches 100%
    const totalDuration = 2000; // 2 seconds total duration (fast)
    const updateInterval = 20; // Update every 20ms for smooth animation
    let elapsed = 0;

    const progressInterval = setInterval(() => {
      elapsed += updateInterval;
      // Simple percentage calculation that definitely reaches 100%
      const progress = Math.min(100, Math.floor((elapsed / totalDuration) * 100));

      setProgress(progress);

      // Update step text based on progress
      const stepIndex = Math.min(
        steps.length - 1,
        Math.floor(progress / (100 / steps.length))
      );
      setCurrentStep(stepIndex);

      if (progress >= 100) {
        clearInterval(progressInterval);
        // Complete immediately when reaching 100%
        setTimeout(() => onComplete(), 100);
      }
    }, updateInterval);

    // Neural activity effect
    const activityInterval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 200);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', (e) => setPrefersReducedMotion(e.matches));

    return () => {
      clearInterval(progressInterval);
      clearInterval(activityInterval);
      mediaQuery.removeEventListener('change', () => {});
    };
  }, [onComplete]);

  // Advanced Neural Network Visualization
  const NeuralNetwork: React.FC = () => {
    const nodes = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: 15 + (i % 8) * 12,
      y: 15 + Math.floor(i / 8) * 15,
      layer: Math.floor(i / 8)
    }));

    const connections = nodes.flatMap(node =>
      nodes
        .filter(target => target.layer === node.layer + 1 || (target.layer === node.layer && Math.abs(target.x - node.x) < 20))
        .map(target => ({ from: node, to: target }))
    );

    return (
      <div className="absolute inset-0 opacity-25">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#00C2FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
              <stop offset="70%" stopColor="#00C2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="strongGlow">
              <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Neural Connections */}
          {connections.map((conn, i) => (
            <line
              key={`connection-${i}`}
              x1={`${conn.from.x}%`}
              y1={`${conn.from.y}%`}
              x2={`${conn.to.x}%`}
              y2={`${conn.to.y}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="1.5"
              filter="url(#glow)"
              className={prefersReducedMotion ? '' : "connectionPulse"}
              opacity={0.6 + Math.random() * 0.4}
            />
          ))}

          {/* Neural Nodes */}
          {nodes.map((node, i) => (
            <g key={`node-${i}`}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="3"
                fill="url(#nodeGradient)"
                filter="url(#strongGlow)"
                className={prefersReducedMotion ? '' : "nodePulse"}
              />
              {/* Pulsing ring around nodes */}
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="6"
                fill="none"
                stroke="url(#neuralGradient)"
                strokeWidth="1"
                opacity="0.3"
                className={prefersReducedMotion ? '' : "nodePulse"}
                style={prefersReducedMotion ? {} : { animationDelay: `${i * 0.2}s` }}
              />
            </g>
          ))}
        </svg>
      </div>
    );
  };

  // Quantum Data Streams
  const DataStreams: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '200px',
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: prefersReducedMotion ? 'none' : `dataFlow ${4 + Math.random() * 2}s linear infinite`,
            animationDelay: prefersReducedMotion ? 'none' : `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );

  // Floating Code Elements
  const FloatingCode: React.FC = () => {
    const codeSnippets = [
      'AI.initialize()', 'neural.train()', 'quantum.compute()',
      'matrix.optimize()', 'data.process()', 'brain.activate()',
      'ML.predict()', 'deep.learn()', 'tensor.flow()', 'gpu.accelerate()'
    ];

    return (
      <div className="absolute inset-0 pointer-events-none">
        {codeSnippets.map((code, i) => (
          <div
            key={`code-${i}`}
            className="absolute text-xs font-mono text-cyan-400/40 bg-cyan-400/5 px-2 py-1 rounded border border-cyan-400/20 backdrop-blur-sm"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animation: prefersReducedMotion ? 'none' : `codeFloat ${6 + i * 0.5}s ease-in-out infinite`,
            }}
          >
            {code}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 bg-ai-background flex items-center justify-center z-[9999] overflow-auto md:overflow-visible px-2 py-4 sm:px-0"
      role="alert"
      aria-live="assertive"
      aria-busy={progress < 100}
      aria-label="AI Portfolio Loading Screen"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden="true" />
      <DataStreams />
      <FloatingCode />

      {/* Enhanced Quantum Particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: `linear-gradient(45deg, ${['#00E5FF', '#00C2FF', '#8B5CF6', '#A855F7'][Math.floor(Math.random() * 4)]}, transparent)`,
              boxShadow: `0 0 ${4 + Math.random() * 6}px ${['#00E5FF', '#00C2FF', '#8B5CF6'][Math.floor(Math.random() * 3)]}`,
              animation: prefersReducedMotion ? 'none' : `particleFloat ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: prefersReducedMotion ? 'none' : `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px, 40px 40px, 80px 80px, 80px 80px',
            backgroundPosition: '0 0, 0 0, 20px 20px, 20px 20px',
            animation: prefersReducedMotion ? 'none' : 'gridShift 20s linear infinite'
          }}
        />
      </div>

      {/* AI Consciousness Waves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              animation: prefersReducedMotion ? 'none' : `waveFlow ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: prefersReducedMotion ? 'none' : `${i * 1.5}s`
            }}
          />
        ))}
      </div>

      <div
        className="text-center px-4 relative z-10 bg-slate-800/40 backdrop-blur-xl rounded-3xl p-2 border border-cyan-400/30 shadow-2xl max-w-lg mx-auto"
        role="status"
        aria-live="polite"
        aria-label={`Loading progress: ${progress}% complete. Current step: ${steps[currentStep]}`}
        style={{
          animation: prefersReducedMotion ? 'none' : 'preloaderAppear 1s ease-out'
        }}
      >
        {/* Quantum Core Loader */}
        <div className="mb-0">
          <div
            className="relative mx-auto mb-2 w-48 h-48"
            style={{
              animation: prefersReducedMotion ? 'none' : 'coreRotate 20s linear infinite'
            }}
          >
            {/* Outer Quantum Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-conic from-cyan-400 via-blue-500 via-purple-600 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900/80 backdrop-blur-sm"></div>
            </div>
            
            {/* Middle Energy Ring */}
            <div
              className="absolute inset-4 rounded-full border-2 border-blue-400/50"
              style={{
                animation: prefersReducedMotion ? 'none' : 'ringRotate 15s linear infinite reverse'
              }}
            />

            {/* Progress Ring */}
            <div className="absolute inset-2 rounded-full">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                  className={prefersReducedMotion ? "filter drop-shadow-lg" : "transition-all duration-500 ease-out filter drop-shadow-lg"}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E5FF" />
                    <stop offset="50%" stopColor="#00C2FF" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Inner Core */}
            <div className="absolute inset-6 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-2"
                  style={{
                    animation: prefersReducedMotion ? 'none' : 'coreGlow 2s ease-in-out infinite'
                  }}
                >
                  AI
                </div>
                <div
                  className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
                  style={{
                    animation: prefersReducedMotion ? 'none' : 'barPulse 2s ease-in-out infinite'
                  }}
                />
              </div>
            </div>

            {/* Quantum Orbs */}
            <div
              className="absolute inset-0"
              style={{
                animation: prefersReducedMotion ? 'none' : 'orbRotate 4s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
            </div>
            <div
              className="absolute inset-0"
              style={{
                animation: prefersReducedMotion ? 'none' : 'orbRotate 6s linear infinite reverse'
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-purple-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Text with Professional Typography */}
        <h2
          className="text-3xl font-bold text-white mb-0 tracking-tight"
          style={{
            animation: prefersReducedMotion ? 'none' : 'textPulse 2s ease-in-out infinite'
          }}
        >
          Nicolette Mashaba
        </h2>
        <p className="text-lg text-slate-300 mb-2 font-medium">
          Software Developer & AI Enthusiast
        </p>

        {/* Professional Progress Section */}
        <div className="w-full max-w-md mx-auto mb-6">
          <div className="flex justify-between text-sm text-slate-400 mb-4">
            <span className="font-medium">{steps[currentStep]}</span>
            <span className="font-bold text-cyan-400">{progress}%</span>
          </div>
          <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden border border-cyan-400/20">
            <div
              className={prefersReducedMotion ? "h-full rounded-full relative" : "h-full rounded-full transition-all duration-300 ease-out relative"}
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00E5FF 0%, #00C2FF 50%, #8B5CF6 100%)'
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  animation: prefersReducedMotion ? 'none' : 'progressShimmer 2s ease-in-out infinite'
                }}
              />
            </div>
          </div>
        </div>

        {/* Professional Step Indicators */}
        <div className="flex justify-center gap-3 mb-8" aria-hidden="true">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${prefersReducedMotion ? '' : 'transition-all duration-300'} ${
                index <= currentStep
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 shadow-lg'
                  : 'bg-slate-600'
              }`}
              style={index <= currentStep && !prefersReducedMotion ? {
                animation: 'stepPulse 0.5s ease-out'
              } : {}}
            />
          ))}
        </div>

        {/* Professional Loading Text */}
        <div className="mt-8 text-sm text-slate-400 font-mono">
          <span
            className={prefersReducedMotion ? "inline-block w-3 h-3 bg-cyan-400 rounded-full mr-3" : "inline-block w-3 h-3 bg-cyan-400 rounded-full mr-3 dotPulse"}
          />
          Initializing quantum consciousness...
        </div>
      </div>

      {/* styles moved to AIPreloader.css */}
    </div>
  );
};

export default AIPreloader;