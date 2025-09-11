import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary';
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

console.log('main.tsx starting...');

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
  
  // Default to light mode for better UX
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
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
  
  console.log('Theme initialized:', theme);
};

// Initialize theme before React renders
initializeTheme();

// Optimize React rendering
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}
const root = ReactDOM.createRoot(rootElement);
console.log('React root created, element:', rootElement);

// Use React.StrictMode for development only
if (process.env.NODE_ENV === 'development') {
  console.log('Rendering in development mode with StrictMode...');
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <ErrorBoundary>
        <App />
      </ErrorBoundary>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  console.log('Rendering in production mode...');
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}
