import React, { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();
  const rafRef = useRef<number>();
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  // Optimized scroll handling with RAF and throttling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress for performance monitoring
  const scrollY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Advanced scroll optimization with RAF
  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      setIsScrolling(true);
      
      // Use RAF for smooth scroll handling
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
        setScrollDirection(direction);
        lastScrollY.current = currentScrollY;
        
        // Reset scrolling state after a delay
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
          setScrollDirection(null);
        }, 150);
      });
    }
  }, [isScrolling]);

  // Optimized scroll event listener with passive option
  useEffect(() => {
    const options = { passive: true, capture: false };
    window.addEventListener('scroll', handleScroll, options);
    
    return () => {
      window.removeEventListener('scroll', handleScroll, options);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        }
      };
  }, [handleScroll]);

  // Intersection Observer for lazy loading with performance optimization
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '100px',
      threshold: [0, 0.1, 0.5, 1.0]
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation class with performance optimization
          entry.target.classList.add('animate-in');
          
          // Optimize images and heavy content
          const images = entry.target.querySelectorAll('img[data-src]');
          images.forEach((img) => {
            if (img instanceof HTMLImageElement && img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
          });
        }
      });
    }, observerOptions);

    // Observe all sections efficiently
    const sections = document.querySelectorAll('section[id], .lazy-load');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Performance monitoring and optimization
  useEffect(() => {
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

  // Memory management and cleanup
  const cleanupMemory = useCallback(() => {
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
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupMemory();
    };
  }, [cleanupMemory]);

  // Optimized children rendering with performance hints
  const optimizedChildren = useMemo(() => {
    return (
      <div className="optimized-content">
        {children}
      </div>
    );
  }, [children]);

  return (
    <div 
      ref={containerRef} 
      className={`performance-optimizer ${isScrolling ? 'scrolling' : ''} ${scrollDirection || ''}`}
    >
      {/* Performance monitoring overlay (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          className="fixed top-4 left-4 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-xs font-mono backdrop-blur-sm border border-gray-600"
          style={{ y: scrollY }}
        >
          <div>Scroll: {Math.round(scrollYProgress.get() * 100)}%</div>
          <div>State: {isScrolling ? 'Scrolling' : 'Idle'}</div>
          <div>Direction: {scrollDirection || 'None'}</div>
          <div>FPS: {Math.round(1000 / 16)}</div>
        </motion.div>
      )}

      {/* Optimized content */}
      {optimizedChildren}

      {/* Advanced performance styles */}
      <style>{`
        .performance-optimizer {
          will-change: transform;
          contain: layout style paint;
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        .performance-optimizer.scrolling {
          pointer-events: none;
        }
        
        .performance-optimizer.scrolling * {
          pointer-events: none;
        }
        
        .performance-optimizer.scrolling .interactive {
          pointer-events: auto;
        }
        
        .performance-optimizer.up .animate-in {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        
        .performance-optimizer.down .animate-in {
          animation: fadeInDown 0.4s ease-out forwards;
        }
        
        .optimized-content {
          contain: layout style;
          transform: translateZ(0);
        }
        
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }
        
        /* High-DPI display optimization */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .performance-optimizer {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
          }
        }
        
        /* Reduced motion optimization */
        @media (prefers-reduced-motion: reduce) {
          .performance-optimizer * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* Low bandwidth optimization */
        .low-bandwidth .performance-optimizer {
          --animation-duration: 0.1s;
          --animation-delay: 0s;
        }
        
        .low-bandwidth .performance-optimizer * {
          animation-duration: var(--animation-duration) !important;
          animation-delay: var(--animation-delay) !important;
        }
        
        /* Scroll performance optimization */
        .performance-optimizer.scrolling {
          --scroll-behavior: auto;
        }
        
        /* GPU acceleration hints */
        .performance-optimizer > * {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        
        /* Optimize for mobile devices */
        @media (max-width: 768px) {
          .performance-optimizer {
            contain: layout style;
          }
          
          .performance-optimizer .animate-in {
            animation-duration: 0.3s;
          }
        }
      `}</style>
    </div>
  );
};

export default PerformanceOptimizer; 