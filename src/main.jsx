import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

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

// Use React.StrictMode for development only
if (process.env.NODE_ENV === 'development') {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  root.render(<App />);
}
