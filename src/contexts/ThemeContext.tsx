import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference - default to light mode for better UX
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', theme);
    
    // Update document attributes
    document.documentElement.setAttribute('data-theme', theme);
    document.body.className = theme;
    
    // Update CSS custom properties with enhanced light mode support
    const root = document.documentElement;
    if (theme === 'light') {
      // Enhanced light mode colors
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--bg-tertiary', '#f1f5f9');
      root.style.setProperty('--text-primary', '#0f172a');
      root.style.setProperty('--text-secondary', '#475569');
      root.style.setProperty('--text-muted', '#64748b');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--border-hover', '#cbd5e1');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-hover', 'rgba(0, 0, 0, 0.15)');
      
      // Add light mode class to body for additional styling
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      // Dark mode colors
      root.style.setProperty('--bg-primary', '#0a0f1c');
      root.style.setProperty('--bg-secondary', '#0f172a');
      root.style.setProperty('--bg-tertiary', '#1e293b');
      root.style.setProperty('--text-primary', '#f1f5f9');
      root.style.setProperty('--text-secondary', '#cbd5e1');
      root.style.setProperty('--text-muted', '#94a3b8');
      root.style.setProperty('--border-color', '#334155');
      root.style.setProperty('--border-hover', '#475569');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
      root.style.setProperty('--shadow-hover', 'rgba(0, 0, 0, 0.4)');
      
      // Add dark mode class to body for additional styling
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
    
    // Force a re-render of components that might not be using CSS variables
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'light' : 'dark');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
}; 