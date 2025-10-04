import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Send, X, Brain, Minimize2, Maximize2, Volume2, VolumeX, Copy, Download, RefreshCw, Sparkles, MessageCircle, User, Bot } from 'lucide-react';
import TopicCard from './shared/TopicCard';

// --- Type Definitions ---
interface Message {
  id: number;
  content: string | React.ReactNode;
  sender: 'user' | 'ai';
  timestamp: string;
  type: string;
  trigger?: () => void;
}

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
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

const NeuralAIAssistant: React.FC = () => {
  // --- State Management ---
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageId, setMessageId] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isThinking, setIsThinking] = useState(false);
  const [githubData, setGithubData] = useState<{ repos: GitHubRepo[], topLanguages: string[] }>({ repos: [], topLanguages: [] });
  const [githubLoading, setGithubLoading] = useState(true);

  // --- Refs ---
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Utility Functions ---
  const playNotificationSound = useCallback(() => {
    if (soundEnabled) {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
      } catch (error) {
        console.warn('Audio not supported, falling back to visual notification');
      }
    }
  }, [soundEnabled]);

  // --- GitHub API Fetch ---  
  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/NickiMash17/repos?sort=pushed&per_page=10');
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }
        const repos: GitHubRepo[] = await response.json();
        const languages = repos.reduce((acc, repo) => {
          if (repo.language) {
            acc[repo.language] = (acc[repo.language] || 0) + 1;
          }
          return acc;
        }, {} as Record<string, number>);
        const topLanguages = Object.keys(languages).sort((a, b) => languages[b] - languages[a]).slice(0, 5);
        setGithubData({ repos, topLanguages });
      } catch (error) {
        console.error(error);
      } finally {
        setGithubLoading(false);
      }
    };
    fetchGithubData();
  }, []);

  // --- AI Response Definitions ---
  const createAIResponses = useCallback((sendMessage: (query: string) => void): AIResponse[] => [
    {
      keywords: ['hello', 'hi', 'hey', 'greetings'],
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400 mb-2">🧠 Neural Interface Active</div>
          </div>
          <p>Greetings! I'm Nicolette's advanced AI assistant, powered by cutting-edge neural networks. I'm here to showcase her extraordinary work in AI/ML and full-stack development.</p>
          <div className="flex flex-wrap gap-2">
            <span 
              className="cursor-pointer px-3 py-1 bg-cyan-600/20 border border-cyan-500/50 rounded-lg text-sm hover:bg-cyan-600/30 transition-all"
              onClick={() => sendMessage('show projects')}
            >
              💼 View Projects
            </span>
            <span 
              className="cursor-pointer px-3 py-1 bg-purple-600/20 border border-purple-500/50 rounded-lg text-sm hover:bg-purple-600/30 transition-all"
              onClick={() => sendMessage('skills overview')}
            >
              🎯 Skills Overview
            </span>
            <span 
              className="cursor-pointer px-3 py-1 bg-blue-600/20 border border-blue-500/50 rounded-lg text-sm hover:bg-blue-600/30 transition-all"
              onClick={() => sendMessage('contact info')}
            >
              📞 Contact Info
            </span>
          </div>
          <p className="text-sm text-slate-300">What would you like to explore about Nicolette's expertise?</p>
        </div>
      ),
    },
    {
      keywords: ['projects', 'work', 'portfolio', 'github'],
      content: (
        <div className="space-y-4">
          <div className="text-lg font-bold text-cyan-400">Project Portfolio</div>
          <p>Here are some of Nicolette's most recent projects from her GitHub profile. You can click on any project to view it on GitHub.</p>
          {githubLoading ? (
            <div className="text-center">Loading projects...</div>
          ) : (
            <div className="space-y-2">
              {githubData.repos.slice(0, 3).map(repo => (
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" key={repo.id} className="block p-2 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-all">
                  <div className="font-bold text-white">{repo.name}</div>
                  <p className="text-xs text-slate-300">{repo.description}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs">
                    <span>{repo.language}</span>
                    <span>⭐ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      ),
    },
    {
      keywords: ['skills', 'technologies', 'languages'],
      content: (
        <div className="space-y-4">
          <div className="text-lg font-bold text-cyan-400">Technical Skills</div>
          <p>Based on her GitHub activity, here are some of the technologies Nicolette works with most frequently:</p>
          {githubLoading ? (
            <div>Loading skills...</div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {githubData.topLanguages.map(lang => (
                <span key={lang} className="px-2 py-1 bg-purple-600/20 text-purple-300 rounded-md text-sm">{lang}</span>
              ))}
            </div>
          )}
        </div>
      ),
    },
    // ... other AI responses (truncated for brevity)
  ], [githubData, githubLoading]);

  // Fallback response
  const fallbackResponse = useCallback((sendMessage: (query: string) => void): AIResponse => ({
    keywords: [],
    content: (
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400 mb-2">🧠 Neural Network Suggestion</div>
        </div>
        <p>I didn't quite catch that! I'm designed to help you learn about Nicolette's expertise. Here's what I can tell you about:</p>
        <div className="grid grid-cols-2 gap-2">
          <TopicCard 
            query="tell me about her skills" 
            icon="⚡" 
            label="Technical Skills" 
            onClick={sendMessage} 
          />
          <TopicCard 
            query="show her projects" 
            icon="🚀" 
            label="Project Portfolio" 
            onClick={sendMessage} 
          />
          <TopicCard 
            query="how to contact her" 
            icon="📞" 
            label="Contact Info" 
            onClick={sendMessage} 
          />
          <TopicCard 
            query="what are her rates" 
            icon="💰" 
            label="Pricing & Rates" 
            onClick={sendMessage} 
          />
        </div>
      </div>
    ),
  }), []);

  // --- Create sendMessage function ---
  const sendMessage = useCallback(
    (text?: string) => {
      const messageText = text || inputValue.trim();
      if (!messageText) {
        inputRef.current?.classList.add('animate-bounce');
        setTimeout(() => inputRef.current?.classList.remove('animate-bounce'), 500);
        return;
      }

      const userMessage: Message = {
        id: messageId,
        content: messageText,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString(),
        type: `USER_INPUT_${String(messageId).padStart(3, '0')}`,
      };

      setMessages((prev) => [...prev, userMessage]);
      setInputValue('');
      setMessageId((prev) => prev + 2);
      setIsTyping(true);
      setIsThinking(true);

      setTimeout(() => {
        const aiResponses = createAIResponses(sendMessage);
        const input = messageText.toLowerCase().trim();
        const allKeywords = aiResponses.flatMap((r) => r.keywords);
        
        let matchedResponse;
        if (allKeywords.length > 0) {
          const { bestMatch } = findBestMatch(input, allKeywords);
          if (bestMatch.rating > 0.6) {
            matchedResponse = aiResponses.find((r) => r.keywords.includes(bestMatch.target));
          }
        }
        
        const response = matchedResponse || fallbackResponse(sendMessage);
        
        const aiMessage: Message = {
          id: messageId + 1,
          content: response.content,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString(),
          type: `AI_RESPONSE_${String(messageId + 1).padStart(3, '0')}`,
        };

        setIsThinking(false);
        setMessages((prev) => [...prev, aiMessage]);
        playNotificationSound();

        if (response.trigger) {
          try {
            response.trigger();
          } catch (error) {
            console.error('Error triggering response:', error);
          }
        }

        setTimeout(() => setIsTyping(false), 500);
      }, 1500 + Math.random() * 1000);
    },
    [inputValue, messageId, createAIResponses, fallbackResponse, playNotificationSound]
  );

  // --- Effects ---
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    const welcomeMessage = (
      <div className="space-y-4">
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400 mb-2">🤖 Neural AI Assistant Online</div>
          <div className="flex justify-center items-center gap-1 mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        <p>I'm Nicolette's advanced AI assistant, powered by neural networks and machine learning. I have comprehensive knowledge about her expertise in AI/ML and full-stack development.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="px-3 py-1 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-xs">🧠 AI/ML Expertise</span>
          <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs">💻 Full-Stack Development</span>
          <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-xs">☁️ Cloud Architecture</span>
        </div>
        <div className="text-center p-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-lg">
          <strong>What would you like to know about Nicolette's work?</strong>
        </div>
      </div>
    );

    const initialMessage: Message = {
      id: 0,
      content: welcomeMessage,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString(),
      type: 'WELCOME_MESSAGE'
    };

    setMessages([initialMessage]);
  }, []);

  // --- Render ---
  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${isOpen ? '' : 'ai-assistant-mobile'}`}
      role="dialog"
      aria-modal="true"
      aria-label="AI Assistant Chat"
      tabIndex={-1}
    >
      {isOpen ? (
        <div
          className={`bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 flex flex-col focus:outline-none ${
            isMinimized
              ? 'w-72 h-14 sm:w-80 sm:h-16'
              : 'max-w-[calc(100vw-2rem)] w-full h-[50vh] sm:max-w-xs sm:h-[60vh] md:max-w-sm md:h-[600px]'
          }`}
          tabIndex={0}
          aria-labelledby="ai-assistant-title"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border-b border-slate-700/50 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 id="ai-assistant-title" className="font-bold text-white text-sm sm:text-base truncate">Neural AI Assistant</h3>
                <p className="text-xs text-cyan-400 truncate">Powered by Nicolette's expertise</p>
              </div>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-1.5 sm:p-2 text-slate-400 hover:text-cyan-400 transition-colors focus:outline focus:ring-2 focus:ring-cyan-400 rounded"
                aria-label={soundEnabled ? 'Mute sound' : 'Enable sound'}
                tabIndex={0}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 sm:p-2 text-slate-400 hover:text-cyan-400 transition-colors focus:outline focus:ring-2 focus:ring-cyan-400 rounded"
                aria-label={isMinimized ? 'Maximize' : 'Minimize'}
                tabIndex={0}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 sm:p-2 text-slate-400 hover:text-red-400 transition-colors focus:outline focus:ring-2 focus:ring-red-400 rounded"
                aria-label="Close"
                tabIndex={0}
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div
                className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-900/50"
                aria-live="polite"
                aria-label="Chat messages"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.sender === 'ai' && (
                      <div className="w-8 h-8 bg-cyan-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-cyan-400" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-cyan-600/20 border border-cyan-500/30 text-white'
                          : 'bg-slate-800/50 border border-slate-700/50 text-slate-200'
                      }`}
                    >
                      <div className="text-sm">{message.content}</div>
                      <div className="text-xs text-slate-400 mt-1">{message.timestamp}</div>
                    </div>
                    {message.sender === 'user' && (
                      <div className="w-8 h-8 bg-purple-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-purple-400" />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-cyan-600/20 border border-cyan-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-3">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-slate-700/50 bg-slate-900 flex-shrink-0">
                <form
                  className="flex gap-2 flex-col sm:flex-row"
                  onSubmit={e => {
                    e.preventDefault();
                    sendMessage();
                  }}
                  aria-label="Send a message"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask about Nicolette's work..."
                    className="flex-1 min-w-0 bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-400 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500/30 transition-all text-sm sm:text-base mb-2 sm:mb-0 min-h-[44px] sm:min-h-[auto]"
                    disabled={isTyping}
                    aria-label="Type your message"
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !inputValue.trim()}
                    className="bg-brand-gradient text-white rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline focus:ring-2 focus:ring-cyan-400 min-h-[44px] sm:min-h-[auto]"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-gradient text-white rounded-2xl shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center focus:outline focus:ring-2 focus:ring-cyan-400"
          aria-label="Open AI Assistant"
          tabIndex={0}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default NeuralAIAssistant;