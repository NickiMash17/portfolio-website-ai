import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className = '' }) => {
  const { theme, isLight } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Listen for theme changes and update component state
    const handleThemeChange = (event: CustomEvent) => {
      // Force re-render when theme changes
      setMounted(false);
      setTimeout(() => setMounted(true), 0);
    };

    window.addEventListener('themechange', handleThemeChange as EventListener);
    return () => window.removeEventListener('themechange', handleThemeChange as EventListener);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div 
      className={`theme-wrapper ${isLight ? 'light-mode' : 'dark-mode'} ${className}`}
      data-theme={theme}
    >
      {children}
    </div>
  );
};

export default ThemeWrapper; 