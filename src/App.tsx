import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import AIProjects from './components/AIProjects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NeuralAIAssistant from './components/NeuralAIAssistant';
import AIPreloader from './components/AIPreloader';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  // Simulate minimum loading time for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 2000); // Minimum 2 seconds to show preloader

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <AIPreloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <ThemeProvider>
      <Layout>
        <AIHero />
        <AIAbout />
        <AIProjects />
        <Resume />
        <Contact />
        <NeuralAIAssistant />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
