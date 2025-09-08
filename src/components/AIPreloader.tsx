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
          setTimeout(onComplete, 500);
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
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
            <div 
              className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"
              style={{ animationDuration: '1s' }}
            ></div>
            <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Nicolette Mashaba</h2>
        <p className="text-blue-300 mb-8">Software Developer & AI Enthusiast</p>
        
        <div className="w-80 mx-auto mb-4">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>{steps[currentStep]}</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-center space-x-1">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index <= currentStep ? 'bg-blue-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIPreloader;
