import { useEffect, useRef, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  scrollPerformance: number;
  isScrolling: boolean;
}

interface PerformanceOptions {
  enableMonitoring?: boolean;
  enableMemoryCleanup?: boolean;
  enableScrollOptimization?: boolean;
  throttleDelay?: number;
}

export const usePerformance = (options: PerformanceOptions = {}) => {
  const {
    enableMonitoring = true,
    enableMemoryCleanup = true,
    enableScrollOptimization = true,
    throttleDelay = 16
  } = options;

  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memoryUsage: 0,
    scrollPerformance: 0,
    isScrolling: false
  });

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();
  const lastScrollY = useRef(0);
  const scrollStartTime = useRef(0);

  // FPS monitoring
  const measureFPS = useCallback(() => {
    frameCountRef.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }
    
    rafRef.current = requestAnimationFrame(measureFPS);
  }, []);

  // Memory usage monitoring
  const measureMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  // Scroll performance monitoring
  const measureScrollPerformance = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollDistance = Math.abs(currentScrollY - lastScrollY.current);
    const currentTime = performance.now();
    
    if (scrollDistance > 0) {
      if (!metrics.isScrolling) {
        scrollStartTime.current = currentTime;
        setMetrics(prev => ({ ...prev, isScrolling: true }));
      }
      
      const scrollDuration = currentTime - scrollStartTime.current;
      const scrollSpeed = scrollDistance / scrollDuration; // pixels per millisecond
      const scrollPerformance = Math.round(scrollSpeed * 1000); // pixels per second
      
      setMetrics(prev => ({ ...prev, scrollPerformance }));
    } else if (metrics.isScrolling) {
      setMetrics(prev => ({ ...prev, isScrolling: false }));
    }
    
    lastScrollY.current = currentScrollY;
  }, [metrics.isScrolling]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      measureScrollPerformance();
    }, throttleDelay);
  }, [measureScrollPerformance, throttleDelay]);

  // Memory cleanup
  const cleanupMemory = useCallback(() => {
    if (enableMemoryCleanup) {
      // Force garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }
      
      // Clear any cached data
      if ('caches' in window) {
        caches.keys().then(names => {
          names.forEach(name => {
            if (name.includes('temp') || name.includes('cache')) {
              caches.delete(name);
            }
          });
        });
      }
      
      // Clear console for development
      if (process.env.NODE_ENV === 'development') {
        console.clear();
      }
    }
  }, [enableMemoryCleanup]);

  // Performance optimization for animations
  const optimizeAnimations = useCallback(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--animation-delay', '0s');
      document.documentElement.style.setProperty('--scroll-behavior', 'auto');
    } else {
      document.documentElement.style.setProperty('--animation-duration', '0.3s');
      document.documentElement.style.setProperty('--animation-delay', '0.1s');
      document.documentElement.style.setProperty('--scroll-behavior', 'smooth');
    }

    // Performance hints for the browser
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        document.documentElement.classList.add('low-bandwidth');
      }
    }
  }, []);

  // Initialize performance monitoring
  useEffect(() => {
    if (enableMonitoring) {
      // Start FPS monitoring
      rafRef.current = requestAnimationFrame(measureFPS);
      
      // Start memory monitoring
      const memoryInterval = setInterval(measureMemory, 2000);
      
      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        clearInterval(memoryInterval);
      };
    }
  }, [enableMonitoring, measureFPS, measureMemory]);

  // Initialize scroll optimization
  useEffect(() => {
    if (enableScrollOptimization) {
      const options = { passive: true, capture: false };
      window.addEventListener('scroll', handleScroll, options);
      
      return () => {
        window.removeEventListener('scroll', handleScroll, options);
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
    }
  }, [enableScrollOptimization, handleScroll]);

  // Initialize performance optimizations
  useEffect(() => {
    optimizeAnimations();
    
    // Cleanup on unmount
    return () => {
      cleanupMemory();
    };
  }, [optimizeAnimations, cleanupMemory]);

  // Performance optimization utilities
  const optimizeElement = useCallback((element: HTMLElement) => {
    element.style.willChange = 'transform';
    element.style.transform = 'translateZ(0)';
    element.style.backfaceVisibility = 'hidden';
  }, []);

  const debounceScroll = useCallback((callback: () => void, delay: number = 100) => {
    let timeoutId: NodeJS.Timeout;
    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, delay);
    };
  }, []);

  const throttleScroll = useCallback((callback: () => void, limit: number = 16) => {
    let inThrottle: boolean;
    return () => {
      if (!inThrottle) {
        callback();
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  return {
    metrics,
    optimizeElement,
    debounceScroll,
    throttleScroll,
    cleanupMemory,
    optimizeAnimations
  };
}; 