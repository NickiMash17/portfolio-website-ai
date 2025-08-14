import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }
}

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
      <App />
    </React.StrictMode>
  );
} else {
  console.log('Rendering in production mode...');
  root.render(<App />);
}
