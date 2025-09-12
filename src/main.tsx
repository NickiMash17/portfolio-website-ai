import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';

// Performance optimizations
if (process.env.NODE_ENV === 'production') {
  // Disable console in production
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  
  // Performance hints
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // SW disabled for deploy freshness
    });
  }
}

// Theme initialization
const initializeTheme = () => {
  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Force single brand theme (LockedIn AI style) — ignore any saved theme
  const theme = 'dark';
  try { localStorage.setItem('theme', theme); } catch {}
  
  // Set initial theme
  document.documentElement.setAttribute('data-theme', theme);
  document.body.className = theme;
  
  // Add theme transition class
  document.body.classList.add('theme-transition');
  
  // Add theme-specific class
  if (theme === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.add('dark-mode');
  }
  
  if (process.env.NODE_ENV === 'development') {
    console.log('Theme initialized:', theme);
  }
};

// Initialize theme before React renders
initializeTheme();

// Optimize React rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(rootElement);

if (process.env.NODE_ENV === 'development') {
  console.log('React root created, element:', rootElement);
}

// Use React.StrictMode for development only
if (process.env.NODE_ENV === 'development') {
  console.log('Rendering in development mode with StrictMode...');
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <ThemeWrapper>
              <App />
            </ThemeWrapper>
          </ThemeProvider>
        </ErrorBoundary>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  root.render(
    <HelmetProvider>
      <ThemeProvider>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ThemeProvider>
    </HelmetProvider>
  );
}
