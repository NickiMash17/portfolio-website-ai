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
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      if (savedTheme) {
        return savedTheme;
      }
    }
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const isLight = theme === 'light';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.className = theme;
      
      const root = document.documentElement;
      if (theme === 'light') {
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
        root.style.setProperty('--ai-primary', '#00E5FF');
        root.style.setProperty('--ai-secondary', '#00C2FF');
        root.style.setProperty('--ai-accent', '#8B5CF6');
        root.style.setProperty('--ai-glow', 'rgba(0, 229, 255, 0.35)');
        root.style.setProperty('--devops-primary', '#00C2FF');
        root.style.setProperty('--devops-secondary', '#0099E6');
        root.style.setProperty('--devops-accent', '#0077CC');
        root.style.setProperty('--code-primary', '#8B5CF6');
        root.style.setProperty('--code-secondary', '#A78BFA');
        root.style.setProperty('--code-accent', '#7C3AED');
        root.style.setProperty('--code-syntax', '#C4B5FD');
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      } else {
        root.style.setProperty('--bg-primary', '#0B1220');
        root.style.setProperty('--bg-secondary', '#0E1726');
        root.style.setProperty('--bg-tertiary', '#102038');
        root.style.setProperty('--text-primary', '#f1f5f9');
        root.style.setProperty('--text-secondary', '#cbd5e1');
        root.style.setProperty('--text-muted', '#94a3b8');
        root.style.setProperty('--border-color', '#334155');
        root.style.setProperty('--border-hover', '#475569');
        root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
        root.style.setProperty('--shadow-hover', 'rgba(0, 0, 0, 0.4)');
        root.style.setProperty('--ai-primary', '#00E5FF');
        root.style.setProperty('--ai-secondary', '#00C2FF');
        root.style.setProperty('--ai-accent', '#8B5CF6');
        root.style.setProperty('--ai-glow', 'rgba(0, 229, 255, 0.35)');
        root.style.setProperty('--devops-primary', '#00C2FF');
        root.style.setProperty('--devops-secondary', '#0099E6');
        root.style.setProperty('--devops-accent', '#0077CC');
        root.style.setProperty('--code-primary', '#8B5CF6');
        root.style.setProperty('--code-secondary', '#A78BFA');
        root.style.setProperty('--code-accent', '#7C3AED');
        root.style.setProperty('--code-syntax', '#C4B5FD');
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      }
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
      const handleChange = (e: MediaQueryListEvent) => {
        if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
          setTheme(e.matches ? 'light' : 'dark');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isLight }}>
      {children}
    </ThemeContext.Provider>
  );
};