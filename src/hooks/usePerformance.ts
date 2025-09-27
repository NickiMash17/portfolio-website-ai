import { useState, useEffect } from 'react';

const usePerformance = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);

      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
        setPrefersReducedMotion(event.matches);
      };

      mediaQuery.addEventListener('change', handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const shouldDisableAnimations = isMobile || prefersReducedMotion;

  return { isMobile, prefersReducedMotion, shouldDisableAnimations };
};

export default usePerformance;