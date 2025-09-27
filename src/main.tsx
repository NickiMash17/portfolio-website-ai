import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeWrapper from './components/ThemeWrapper';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Only register service worker in production
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  import('virtual:pwa-register').then(({ registerSW }) => {
    registerSW({ onNeedRefresh: () => {}, onOfflineReady: () => {} });
  });
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <ThemeWrapper>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeWrapper>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
