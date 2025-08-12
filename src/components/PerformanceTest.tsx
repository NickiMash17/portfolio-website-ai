import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePerformance } from '../hooks/usePerformance';

const PerformanceTest: React.FC = () => {
  const { metrics, optimizeElement } = usePerformance({
    enableMonitoring: true,
    enableScrollOptimization: true,
    enableMemoryCleanup: true
  });

  const [testResults, setTestResults] = useState({
    scrollTest: 0,
    animationTest: 0,
    memoryTest: 0
  });

  // Performance test functions
  const runScrollTest = () => {
    const startTime = performance.now();
    let scrollCount = 0;
    
    const testScroll = () => {
      window.scrollBy(0, 10);
      scrollCount++;
      
      if (scrollCount < 100) {
        requestAnimationFrame(testScroll);
      } else {
        const endTime = performance.now();
        const duration = endTime - startTime;
        setTestResults(prev => ({
          ...prev,
          scrollTest: Math.round(1000 / (duration / 100)) // FPS
        }));
        
        // Reset scroll position
        window.scrollTo(0, 0);
      }
    };
    
    requestAnimationFrame(testScroll);
  };

  const runAnimationTest = () => {
    const startTime = performance.now();
    let frameCount = 0;
    
    const testAnimation = () => {
      frameCount++;
      
      if (frameCount < 60) {
        requestAnimationFrame(testAnimation);
      } else {
        const endTime = performance.now();
        const duration = endTime - startTime;
        setTestResults(prev => ({
          ...prev,
          animationTest: Math.round(60 / (duration / 1000)) // FPS
        }));
      }
    };
    
    requestAnimationFrame(testAnimation);
  };

  const runMemoryTest = () => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      setTestResults(prev => ({
        ...prev,
        memoryTest: memoryUsage
      }));
    }
  };

  // Optimize elements on mount
  useEffect(() => {
    const elements = document.querySelectorAll('.performance-critical');
    elements.forEach(element => {
      if (element instanceof HTMLElement) {
        optimizeElement(element);
      }
    });
  }, [optimizeElement]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg backdrop-blur-sm border border-gray-600 max-w-xs"
    >
      <h3 className="text-sm font-bold mb-3 text-blue-400">Performance Monitor</h3>
      
      {/* Real-time Metrics */}
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps >= 55 ? 'text-green-400' : metrics.fps >= 30 ? 'text-yellow-400' : 'text-red-400'}>
            {metrics.fps}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Memory:</span>
          <span className={metrics.memoryUsage < 50 ? 'text-green-400' : metrics.memoryUsage < 100 ? 'text-yellow-400' : 'text-red-400'}>
            {metrics.memoryUsage} MB
          </span>
        </div>
        <div className="flex justify-between">
          <span>Scroll:</span>
          <span className={metrics.isScrolling ? 'text-blue-400' : 'text-gray-400'}>
            {metrics.isScrolling ? 'Active' : 'Idle'}
          </span>
        </div>
      </div>

      {/* Performance Tests */}
      <div className="mt-4 space-y-2">
        <h4 className="text-xs font-semibold text-purple-400">Performance Tests</h4>
        
        <div className="space-y-1 text-xs">
          <div className="flex justify-between">
            <span>Scroll FPS:</span>
            <span className={testResults.scrollTest >= 55 ? 'text-green-400' : 'text-yellow-400'}>
              {testResults.scrollTest || 'Not tested'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Animation FPS:</span>
            <span className={testResults.animationTest >= 55 ? 'text-green-400' : 'text-yellow-400'}>
              {testResults.animationTest || 'Not tested'}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Memory Usage:</span>
            <span className={testResults.memoryTest < 50 ? 'text-green-400' : 'text-yellow-400'}>
              {testResults.memoryTest || 'Not tested'} MB
            </span>
          </div>
        </div>

        {/* Test Buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={runScrollTest}
            className="px-2 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors"
          >
            Test Scroll
          </button>
          <button
            onClick={runAnimationTest}
            className="px-2 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors"
          >
            Test Animation
          </button>
          <button
            onClick={runMemoryTest}
            className="px-2 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors"
          >
            Test Memory
          </button>
        </div>
      </div>

      {/* Performance Status */}
      <div className="mt-3 pt-3 border-t border-gray-600">
        <div className="text-xs">
          <div className="flex items-center gap-2">
            <span>Status:</span>
            <span className={`px-2 py-1 rounded text-xs ${
              metrics.fps >= 55 && metrics.memoryUsage < 50 
                ? 'bg-green-600 text-white' 
                : metrics.fps >= 30 && metrics.memoryUsage < 100 
                ? 'bg-yellow-600 text-white' 
                : 'bg-red-600 text-white'
            }`}>
              {metrics.fps >= 55 && metrics.memoryUsage < 50 
                ? 'Excellent' 
                : metrics.fps >= 30 && metrics.memoryUsage < 100 
                ? 'Good' 
                : 'Needs Optimization'
              }
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceTest; 