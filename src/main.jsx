import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('main.jsx starting...');

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
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('React root created, element:', document.getElementById('root'));

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
