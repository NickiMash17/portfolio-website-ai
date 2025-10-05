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
      className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 overflow-auto"
      aria-label="AI Portfolio Loading Screen"
    >
      {/* Main content container */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
        {/* Logo/Title */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Nicolette Mashaba</h2>
          <p className="text-sm sm:text-base text-cyan-400">Software Developer & AI Enthusiast</p>
        </div>
      
        {/* Progress bar */}
        <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      
        {/* Status text */}
        <div className="text-center">
          <p className="text-sm text-slate-300">{steps[currentStep]}</p>
          <p className="text-xs text-slate-500 mt-1">{progress}% complete</p>
        </div>
      
        {/* Visual effects */}
        <NeuralNetwork />
        <DataStreams />
        <FloatingCode />
      </div>
    </div>
);
};

export default AIPreloader;