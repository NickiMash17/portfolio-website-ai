import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemeWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children, className = '' }) => {
  const { theme, isLight } = useTheme();

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