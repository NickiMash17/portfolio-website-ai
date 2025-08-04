import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Install Prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show install button or notification
  const installButton = document.createElement('div');
  installButton.className = 'pwa-install-prompt';
  installButton.innerHTML = `
    <div class="pwa-install-content">
      <h3>Install Portfolio App</h3>
      <p>Add this portfolio to your home screen for quick access!</p>
      <button class="pwa-install-btn">Install</button>
      <button class="pwa-dismiss-btn">Not Now</button>
    </div>
  `;
  
  installButton.querySelector('.pwa-install-btn').addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
      installButton.remove();
    });
  });
  
  installButton.querySelector('.pwa-dismiss-btn').addEventListener('click', () => {
    installButton.remove();
  });
  
  document.body.appendChild(installButton);
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
