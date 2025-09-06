import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

console.log('main.tsx starting...');

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement);
console.log('React root created, element:', rootElement);

root.render(<App />);
