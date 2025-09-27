import React, { useState, useEffect } from 'react';

interface AIPreloaderProps {
  onComplete: () => void;
}

const AIPreloader: React.FC<AIPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [neuralActivity, setNeuralActivity] = useState(0);

  const steps = [
    'Initializing Neural Networks...',
    'Loading AI Consciousness...',
    'Calibrating Quantum Processors...',
    'Synchronizing Data Streams...',
    'Optimizing Performance Matrix...',
    'Neural Interface Ready!'
  ];

  useEffect(() => {
    // Progressive loading with realistic timing
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Fixed timing issue - call onComplete after animation completes
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        // Realistic loading curve - slower at start and end
        const increment = prev < 20 ? 2 : prev > 80 ? 1 : 3;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    // Step progression - aligned with progress
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    // Neural activity simulation
    const neuralInterval = setInterval(() => {
      setNeuralActivity(Math.random());
    }, 150);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearInterval(neuralInterval);
    };
  }, [onComplete, steps.length]);

  // Advanced Neural Network Visualization
  const NeuralNetwork: React.FC = () => {
    const nodes = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: 20 + (i % 6) * 15,
      y: 20 + Math.floor(i / 6) * 20,
      layer: Math.floor(i / 6)
    }));

    const connections = nodes.flatMap(node => 
      nodes
        .filter(target => target.layer === node.layer + 1)
        .map(target => ({ from: node, to: target }))
    );

    return (
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#00C2FF" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
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
              strokeWidth="1"
              filter="url(#glow)"
              className="connectionPulse"
            />
          ))}
          
          {/* Neural Nodes */}
          {nodes.map((node, i) => (
            <circle
              key={`node-${i}`}
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="2"
              fill="url(#neuralGradient)"
              filter="url(#glow)"
              className="nodePulse"
            />
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
            animation: `dataFlow ${4 + Math.random() * 2}s linear infinite`,
            animationDelay: `${i * 0.5}s`
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
              animation: `codeFloat ${6 + i * 0.5}s ease-in-out infinite`,
            }}
          >
            {code}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <NeuralNetwork />
      <DataStreams />
      <FloatingCode />
      
      {/* Quantum Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particleFloat ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div 
        className="text-center px-8 relative z-10 bg-slate-800/40 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/30 shadow-2xl max-w-lg mx-auto"
        role="status" 
        aria-live="polite" 
        aria-label={`Loading ${progress}%`}
        style={{
          animation: 'preloaderAppear 1s ease-out'
        }}
      >
        {/* Quantum Core Loader */}
        <div className="mb-12">
          <div 
            className="relative mx-auto mb-6 w-48 h-48"
            style={{
              animation: 'coreRotate 20s linear infinite'
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
                animation: 'ringRotate 15s linear infinite reverse'
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
                  className="transition-all duration-500 ease-out filter drop-shadow-lg"
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
                    animation: 'coreGlow 2s ease-in-out infinite'
                  }}
                >
                  AI
                </div>
                <div 
                  className="w-10 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"
                  style={{
                    animation: 'barPulse 2s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
            
            {/* Quantum Orbs */}
            <div 
              className="absolute inset-0"
              style={{
                animation: 'orbRotate 4s linear infinite'
              }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
            </div>
            <div 
              className="absolute inset-0"
              style={{
                animation: 'orbRotate 6s linear infinite reverse'
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-purple-400 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Text with Professional Typography */}
        <h2 
          className="text-3xl font-bold text-white mb-3 tracking-tight"
          style={{
            animation: 'textPulse 2s ease-in-out infinite'
          }}
        >
          Nicolette Mashaba
        </h2>
        <p className="text-lg text-slate-300 mb-10 font-medium">
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
              className="h-full rounded-full transition-all duration-300 ease-out relative"
              style={{ 
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00E5FF 0%, #00C2FF 50%, #8B5CF6 100%)'
              }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  animation: 'progressShimmer 2s ease-in-out infinite'
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentStep 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 shadow-lg' 
                  : 'bg-slate-600'
              }`}
              style={index <= currentStep ? {
                animation: 'stepPulse 0.5s ease-out'
              } : {}}
            />
          ))}
        </div>

        {/* Professional Loading Text */}
        <div className="mt-8 text-sm text-slate-400 font-mono">
          <span 
            className="inline-block w-3 h-3 bg-cyan-400 rounded-full mr-3 dotPulse"
          />
          Initializing quantum consciousness...
        </div>
      </div>

      {/* styles moved to AIPreloader.css */}
    </div>
  );
};

export default AIPreloader;