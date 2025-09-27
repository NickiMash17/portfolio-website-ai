import React from 'react';
import { Layout } from './components/Layout';
import AIHero from './components/AIHero';
import AIAbout from './components/AIAbout';
import AIProjects from './components/AIProjects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import NeuralAIAssistant from './components/NeuralAIAssistant';

// Temporarily comment out other unused imports
// import AIHero from './components/AIHero';
// import AIAbout from './components/AIAbout';
// import AIProjects from './components/AIProjects';
// import Resume from './components/Resume';
// import Contact from './components/Contact';
// import NeuralAIAssistant from './components/NeuralAIAssistant';

// --- Type Definitions ---
interface Message {
  id: number;
  content: string | React.ReactNode;
  sender: 'user' | 'ai';
  timestamp: string;
  type: string;
}

interface AIResponse {
  keywords: string[];
  content: React.ReactNode;
  trigger?: () => void;
}

// --- Utility function for string similarity ---
const findBestMatch = (mainString: string, targetStrings: string[]) => {
  if (!targetStrings.length) {
    return { bestMatch: { target: '', rating: 0 } };
  }
  
  const ratings = targetStrings.map(target => ({
    target,
    rating: calculateSimilarity(mainString, target)
  }));
  
  const bestMatch = ratings.reduce((best, current) => 
    current.rating > best.rating ? current : best
  );
  
  return { bestMatch };
};

const calculateSimilarity = (str1: string, str2: string): number => {
  if (str1 === str2) return 1;
  if (str1.length < 2 || str2.length < 2) return 0;
  
  const bigrams1 = getBigrams(str1);
  const bigrams2 = getBigrams(str2);
  
  let matches = 0;
  for (let i = 0; i < bigrams1.length; i++) {
    if (bigrams2.includes(bigrams1[i])) {
      matches += 1;
    }
  }
  
  return (2 * matches) / (bigrams1.length + bigrams2.length);
};

const getBigrams = (str: string): string[] => {
  const bigrams = [];
  for (let i = 0; i < str.length - 1; i++) {
    bigrams.push(str.substring(i, i + 2));
  }
  return bigrams;
};

// Simple loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <div className="flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
      <p className="text-slate-300">Loading Neural Interface...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <Layout>
      <AIHero />
      <AIAbout />
      <AIProjects />
      <Resume />
      <Contact />
      <NeuralAIAssistant />
    </Layout>
  );
};

export default App;