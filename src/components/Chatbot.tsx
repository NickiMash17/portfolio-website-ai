import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Send, X, Brain, Minimize2, Maximize2, Volume2, VolumeX, Copy, Download, RefreshCw, Sparkles, MessageCircle, User, Bot } from 'lucide-react';
import { findBestMatch } from 'string-similarity';
import DOMPurify from 'dompurify';
import './Chatbot.css';

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

// --- Topic Card Component for Interactive Responses ---
const TopicCard: React.FC<{ query: string; icon: string; label: string; onClick: (query: string) => void }> = ({ query, icon, label, onClick }) => (
  <div
    className="topic-card"
    onClick={() => onClick(query)}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === 'Enter' && onClick(query)}
    aria-label={`Select ${label}`}
  >
    <span className="topic-icon">{icon}</span>
    <span>{label}</span>
  </div>
);

// --- Main Component ---
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

  // --- AI Response Definitions ---
  const aiResponses = useMemo(() => {
    // Define a placeholder sendMessage function to avoid circular dependency
    // This will be replaced later in the sendMessage definition
    const placeholderSendMessage = (query: string) => {};

    return [
      {
        keywords: ['hello', 'hi', 'hey', 'greetings'],
        content: (
          <div className="ai-welcome">
            <div className="neural-header">🧠 Neural Interface Active</div>
            <p>Greetings! I'm Nicolette's advanced AI assistant, powered by cutting-edge neural networks. I'm here to showcase her extraordinary work in AI/ML and full-stack development.</p>
            <div className="quick-actions">
              <span className="action-chip" onClick={() => placeholderSendMessage('show projects')}>
                💼 View Projects
              </span>
              <span className="action-chip" onClick={() => placeholderSendMessage('skills overview')}>
                🎯 Skills Overview
              </span>
              <span className="action-chip" onClick={() => placeholderSendMessage('contact info')}>
                📞 Contact Info
              </span>
            </div>
            <p className="ai-prompt">What would you like to explore about Nicolette's expertise?</p>
          </div>
        ),
      },
      {
        keywords: ['about nicolette', 'who is she', 'her background', 'nicolette', 'about her'],
        content: (
          <div className="ai-profile">
            <div className="neural-header">🚀 Nicolette's Neural Network Profile</div>
            <div className="skill-matrix">
              <div className="skill-category">
                <h4>🧠 AI/ML Mastery</h4>
                <div className="tech-stack">TensorFlow • PyTorch • Computer Vision • NLP • MLOps</div>
              </div>
              <div className="skill-category">
                <h4>💻 Full-Stack Excellence</h4>
                <div className="tech-stack">React • TypeScript • Node.js • Python • Next.js</div>
              </div>
              <div className="skill-category">
                <h4>☁️ Cloud Architecture</h4>
                <div className="tech-stack">Azure Certified • AWS • Docker • Kubernetes • CI/CD</div>
              </div>
            </div>
            <div className="highlight-box">
              <div className="pulse-indicator"></div>
              <strong>Specialization:</strong> Building AI-powered applications that scale and amaze
            </div>
          </div>
        ),
      },
      {
        keywords: ['projects', 'work', 'portfolio', 'what has she built', 'show projects'],
        content: (
          <div className="projects-showcase">
            <div className="neural-header">🎯 Project Portfolio</div>
            <div className="project-grid">
              <div className="project-card">
                <div className="project-header">
                  <span className="project-icon">🤖</span>
                  <h4>AI-Powered Portfolio Assistant</h4>
                </div>
                <p>Advanced NLP chatbot with real-time neural processing and intelligent conversation flow.</p>
                <div className="tech-badges">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">AI/ML</span>
                  <span className="tech-badge">TypeScript</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <span className="project-icon">📊</span>
                  <h4>ML Analytics Dashboards</h4>
                </div>
                <p>Predictive modeling systems with real-time data visualization and business intelligence.</p>
                <div className="tech-badges">
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">TensorFlow</span>
                  <span className="tech-badge">D3.js</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <span className="project-icon">👁️</span>
                  <h4>Computer Vision Systems</h4>
                </div>
                <p>Object detection and recognition applications with real-time video processing.</p>
                <div className="tech-badges">
                  <span className="tech-badge">OpenCV</span>
                  <span className="tech-badge">PyTorch</span>
                  <span className="tech-badge">YOLO</span>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <span className="project-icon">☁️</span>
                  <h4>Cloud AI Solutions</h4>
                </div>
                <p>Scalable ML model deployment with auto-scaling container orchestration.</p>
                <div className="tech-badges">
                  <span className="tech-badge">Azure</span>
                  <span className="tech-badge">Docker</span>
                  <span className="tech-badge">K8s</span>
                </div>
              </div>
            </div>
            <div className="cta-section">
              <p>
                <strong>Want to see these projects in action?</strong> Check out the Projects section on this portfolio!
              </p>
            </div>
          </div>
        ),
      },
      {
        keywords: ['contact', 'reach', 'email', 'hire', 'work together', 'collaborate'],
        content: (
          <div className="contact-section">
            <div className="neural-header">📡 Neural Communication Channels</div>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📧</div>
                <h4>Direct Communication</h4>
                <p className="contact-info">nene171408@gmail.com</p>
                <p className="response-time">⚡ Typically responds within 24 hours</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">💼</div>
                <h4>Professional Network</h4>
                <p className="contact-info">LinkedIn: /in/nicolette-mashaba</p>
                <p className="response-time">🤝 Perfect for networking & collaborations</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">👨‍💻</div>
                <h4>Code Repository</h4>
                <p className="contact-info">GitHub: /NickiMash17</p>
                <p className="response-time">💻 Technical discussions & contributions</p>
              </div>
            </div>
            <div className="availability-status">
              <div className="status-indicator active"></div>
              <span>
                <strong>Status:</strong> Available for exciting projects and collaborations!
              </span>
            </div>
          </div>
        ),
      },
      {
        keywords: ['rates', 'pricing', 'cost', 'budget', 'hire', 'freelance'],
        content: (
          <div className="pricing-section">
            <div className="neural-header">💰 Investment in Excellence</div>
            <div className="pricing-grid">
              <div className="pricing-card premium">
                <h4>🧠 AI/ML Development</h4>
                <div className="price">
                  $120-150<span>/hour</span>
                </div>
                <ul>
                  <li>Neural Network Design</li>
                  <li>Computer Vision</li>
                  <li>NLP Solutions</li>
                  <li>MLOps Implementation</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>💻 Full-Stack Development</h4>
                <div className="price">
                  $100-130<span>/hour</span>
                </div>
                <ul>
                  <li>React/Next.js Apps</li>
                  <li>TypeScript Development</li>
                  <li>API Design</li>
                  <li>Database Architecture</li>
                </ul>
              </div>
              <div className="pricing-card">
                <h4>☁️ Cloud Architecture</h4>
                <div className="price">
                  $130-160<span>/hour</span>
                </div>
                <ul>
                  <li>Azure Solutions</li>
                  <li>DevOps Pipeline</li>
                  <li>Container Orchestration</li>
                  <li>Scalability Optimization</li>
                </ul>
              </div>
            </div>
            <div className="project-pricing">
              <h4>📦 Project-Based Pricing</h4>
              <div className="project-tiers">
                <span className="tier">Small Projects: $2,000-5,000</span>
                <span className="tier">Medium Projects: $5,000-15,000</span>
                <span className="tier">Large Projects: $15,000+</span>
              </div>
            </div>
            <div className="special-offers">
              <h4>🎁 Special Offers</h4>
              <p>
                • 10% discount for long-term contracts
                <br />
                • Free consultation for first-time clients
                <br />
                • Custom packages available for unique requirements
              </p>
            </div>
          </div>
        ),
      },
      {
        keywords: ['skills', 'technologies', 'expertise', 'what can she do', 'abilities'],
        content: (
          <div className="skills-matrix">
            <div className="neural-header">⚡ Technical Arsenal</div>
            <div className="skills-categories">
              <div className="skill-group">
                <h4 className="skill-title">🧠 AI/ML Frameworks</h4>
                <div className="skill-items">
                  <span className="skill-chip expert">TensorFlow</span>
                  <span className="skill-chip expert">PyTorch</span>
                  <span className="skill-chip advanced">Scikit-learn</span>
                  <span className="skill-chip advanced">OpenCV</span>
                  <span className="skill-chip intermediate">Hugging Face</span>
                </div>
              </div>
              <div className="skill-group">
                <h4 className="skill-title">💻 Frontend Technologies</h4>
                <div className="skill-items">
                  <span className="skill-chip expert">React</span>
                  <span className="skill-chip expert">TypeScript</span>
                  <span className="skill-chip advanced">Next.js</span>
                  <span className="skill-chip advanced">Tailwind CSS</span>
                  <span className="skill-chip intermediate">Three.js</span>
                </div>
              </div>
              <div className="skill-group">
                <h4 className="skill-title">🔧 Backend & DevOps</h4>
                <div className="skill-items">
                  <span className="skill-chip expert">Node.js</span>
                  <span className="skill-chip expert">Python</span>
                  <span className="skill-chip advanced">Azure</span>
                  <span className="skill-chip advanced">Docker</span>
                  <span className="skill-chip intermediate">Kubernetes</span>
                </div>
              </div>
            </div>
            <div className="expertise-highlight">
              <div className="highlight-card">
                <div className="highlight-icon">🎯</div>
                <h4>Unique Specialization</h4>
                <p>Building AI-powered web applications that seamlessly integrate machine learning with stunning user experiences.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        keywords: ['help', 'what can you do', 'commands', 'how does this work'],
        content: (
          <div className="help-section">
            <div className="neural-header">🆘 Neural Assistant Guide</div>
            <div className="help-categories">
              <div className="help-card">
                <div className="help-icon">🧠</div>
                <h4>About Nicolette</h4>
                <p>Learn about her background, expertise, and specializations in AI/ML and full-stack development.</p>
                <div className="example-queries">
                  <span className="query-chip" onClick={() => placeholderSendMessage('tell me about her skills')}>
                    Tell me about her AI skills
                  </span>
                  <span className="query-chip" onClick={() => placeholderSendMessage("what's her background?")}>
                    What's her background?
                  </span>
                </div>
              </div>
              <div className="help-card">
                <div className="help-icon">🚀</div>
                <h4>Projects & Work</h4>
                <p>Explore her portfolio of AI-powered applications and cutting-edge development projects.</p>
                <div className="example-queries">
                  <span className="query-chip" onClick={() => placeholderSendMessage('show me her projects')}>
                    Show me her projects
                  </span>
                  <span className="query-chip" onClick={() => placeholderSendMessage('what has she built?')}>
                    What has she built?
                  </span>
                </div>
              </div>
              <div className="help-card">
                <div className="help-icon">📞</div>
                <h4>Contact & Collaboration</h4>
                <p>Get contact information, rates, and learn how to work with Nicolette.</p>
                <div className="example-queries">
                  <span className="query-chip" onClick={() => placeholderSendMessage('how can I contact her?')}>
                    How can I contact her?
                  </span>
                  <span className="query-chip" onClick={() => placeholderSendMessage('what are her rates?')}>
                    What are her rates?
                  </span>
                </div>
              </div>
            </div>
            <div className="ai-capabilities">
              <h4>🤖 My Capabilities</h4>
              <ul>
                <li>Intelligent conversation with context awareness</li>
                <li>Rich, interactive responses with visual elements</li>
                <li>Real-time neural processing simulation</li>
                <li>Comprehensive knowledge of Nicolette's work</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        keywords: [],
        content: (
          <div className="fallback-response">
            <div className="neural-header">🧠 Neural Network Suggestion</div>
            <p>I didn't quite catch that! I'm designed to help you learn about Nicolette's expertise. Here's what I can tell you about:</p>
            <div className="topic-grid">
              <TopicCard query="tell me about her skills" icon="⚡" label="Technical Skills" onClick={placeholderSendMessage} />
              <TopicCard query="show her projects" icon="🚀" label="Project Portfolio" onClick={placeholderSendMessage} />
              <TopicCard query="how to contact her" icon="📞" label="Contact Info" onClick={placeholderSendMessage} />
              <TopicCard query="what are her rates" icon="💰" label="Pricing & Rates" onClick={placeholderSendMessage} />
            </div>
          </div>
        ),
      },
    ];
  }, []);

  // --- Utility Functions ---
  const getAIResponse = useCallback(
    (userInput: string): AIResponse => {
      const input = userInput.toLowerCase().trim();
      const allKeywords = aiResponses.flatMap((r) => r.keywords);
      const { bestMatch } = findBestMatch(input, allKeywords);

      if (bestMatch.rating > 0.6) {
        const matchedResponse = aiResponses.find((r) => r.keywords.includes(bestMatch.target));
        return matchedResponse || aiResponses[aiResponses.length - 1];
      }

      return aiResponses[aiResponses.length - 1];
    },
    [aiResponses]
  );

  const sendMessage = useCallback(
    (text?: string) => {
      const messageText = text || inputValue.trim();
      if (!messageText) {
        inputRef.current?.classList.add('animate-shake');
        setTimeout(() => inputRef.current?.classList.remove('animate-shake'), 500);
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
        const aiResponse = getAIResponse(messageText);
        const aiMessage: Message = {
          id: messageId + 1,
          content: aiResponse.content,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString(),
          type: `AI_RESPONSE_${String(messageId + 1).padStart(3, '0')}`,
        };

        setIsThinking(false);
        setMessages((prev) => [...prev, aiMessage]);
        playNotificationSound();

        if (aiResponse.trigger) {
          aiResponse.trigger();
        }

        setTimeout(() => setIsTyping(false), 500);
      }, 1500 + Math.random() * 1000);
    },
    [inputValue, messageId, getAIResponse, playNotificationSound]
  );

  // Update aiResponses to use the actual sendMessage
  const updatedAiResponses = useMemo(() => {
    return aiResponses.map((response) => ({
      ...response,
      content: React.cloneElement(response.content as React.ReactElement, {
        // Replace placeholderSendMessage with actual sendMessage in onClick handlers
        children: React.Children.map((response.content as React.ReactElement).props.children, (child) => {
          if (React.isValidElement(child) && child.props.className?.includes('quick-actions')) {
            return React.cloneElement(child, {
              children: React.Children.map(child.props.children, (actionChip) => {
                if (React.isValidElement(actionChip)) {
                  return React.cloneElement(actionChip, {
                    onClick: () => sendMessage(actionChip.props.children[1]),
                  });
                }
                return actionChip;
              }),
            });
          }
          if (React.isValidElement(child) && child.props.className?.includes('example-queries')) {
            return React.cloneElement(child, {
              children: React.Children.map(child.props.children, (queryChip) => {
                if (React.isValidElement(queryChip)) {
                  return React.cloneElement(queryChip, {
                    onClick: () => sendMessage(queryChip.props.children),
                  });
                }
                return queryChip;
              }),
            });
          }
          if (React.isValidElement(child) && child.props.className?.includes('topic-grid')) {
            return React.cloneElement(child, {
              children: React.Children.map(child.props.children, (topicCard) => {
                if (React.isValidElement(topicCard)) {
                  return React.cloneElement(topicCard, {
                    onClick: () => sendMessage(topicCard.props.query),
                  });
                }
                return topicCard;
              }),
            });
          }
          return child;
        }),
      }),
    }));
  }, [aiResponses, sendMessage]);

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
      <div className="ai-welcome">
        <div className="neural-header">🤖 Neural AI Assistant Online</div>
        <div className="startup-animation">
          <div className="neural-grid">
            <div className="neural-node active"></div>
            <div className="neural-node"></div>
            <div className="neural-node active"></div>
          </div>
        </div>
        <p>I'm Nicolette's advanced AI assistant, powered by neural networks and machine learning. I have comprehensive knowledge about her expertise in AI/ML and full-stack development.</p>
        <div className="capabilities-preview">
          <span className="capability">🧠 AI/ML Expertise</span>
          <span className="capability">💻 Full-Stack Development</span>
          <span className="capability">☁️ Cloud Architecture</span>
        </div>
        <div className="cta-message">
          <strong>What would you like to know about Nicolette's work?</strong>
        </div>
      </div>
    );

    setMessages([
      {
        id: 0,
        content: welcomeMessage,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString(),
        type: 'AI_WELCOME',
      },
    ]);
  }, []);

  // --- Action Handlers ---
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const copyConversation = () => {
    const conversationText = messages.map((msg) => {
      const text = typeof msg.content === 'string' ? msg.content : DOMPurify.sanitize(msg.content as string, { ALLOWED_TAGS: [] });
      return `[${msg.timestamp}] ${msg.sender.toUpperCase()}: ${text}`;
    }).join('\n');
    navigator.clipboard.writeText(conversationText);
  };

  const downloadConversation = () => {
    const conversationText = messages.map((msg) => {
      const text = typeof msg.content === 'string' ? msg.content : DOMPurify.sanitize(msg.content as string, { ALLOWED_TAGS: [] });
      return `[${msg.timestamp}] ${msg.sender.toUpperCase()}: ${text}`;
    }).join('\n\n');
    const blob = new Blob([conversationText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'conversation-with-nicolette-ai.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const resetConversation = () => {
    setMessages([]);
    setMessageId(1);

    const welcomeMessage = (
      <div className="ai-welcome">
        <div className="neural-header">🤖 Neural AI Assistant Reinitialized</div>
        <p>System reset complete. I'm ready to help you explore Nicolette's expertise again!</p>
        <div className="reset-confirmation">
          <span className="status-indicator">✅</span>
          <span>All neural pathways cleared and ready for new queries</span>
        </div>
      </div>
    );

    setMessages([
      {
        id: 0,
        content: welcomeMessage,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString(),
        type: 'AI_RESET',
      },
    ]);
  };

  // --- Sub-components ---
  const TypingIndicator: React.FC = () => (
    <div className="ai-typing-container">
      <div className="ai-message-bubble typing">
        <div className="message-header">
          <div className="ai-avatar">
            <Brain className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="ai-name">Neural AI</span>
          <span className="neural-activity">
            <div className="activity-bar" />
          </span>
        </div>
        <div className="typing-content">
          <span className="typing-text">Neural processing</span>
          <div className="typing-dots">
            <div className="typing-dot" style={{ animationDelay: '0ms' }} />
            <div className="typing-dot" style={{ animationDelay: '150ms' }} />
            <div className="typing-dot" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );

  // --- Render ---
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-4 right-4 w-96 max-w-[calc(100vw-2rem)] bg-slate-900/95 backdrop-blur-xl text-white rounded-2xl shadow-2xl border border-cyan-400/30 flex flex-col h-[600px] max-h-[calc(100vh-2rem)] z-50 chatbot-container">
          {/* Enhanced Header */}
          <header className="flex items-center justify-between p-4 border-b border-cyan-400/30 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900 flex items-center justify-center"
                  style={{ animation: 'pulse 2s ease-in-out infinite' }}
                >
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Neural AI Assistant
                </h2>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-green-400 font-semibold">Active & Learning</span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <button
                onClick={resetConversation}
                className="p-2 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:text-cyan-400 group"
                title="Reset Conversation"
                aria-label="Reset Conversation"
              >
                <RefreshCw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              </button>
              <button
                onClick={copyConversation}
                className="p-2 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:text-purple-400"
                title="Copy Conversation"
                aria-label="Copy Conversation"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={downloadConversation}
                className="p-2 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:text-blue-400"
                title="Download Conversation"
                aria-label="Download Conversation"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="p-2 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:text-yellow-400"
                title={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
                aria-label={soundEnabled ? 'Mute sounds' : 'Enable sounds'}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:text-cyan-400"
                title={isMinimized ? 'Expand' : 'Minimize'}
                aria-label={isMinimized ? 'Expand Chat' : 'Minimize Chat'}
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-red-500/20 transition-all duration-300 hover:text-red-400"
                title="Close Chat"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {!isMinimized && (
            <>
              {/* Enhanced Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
                <div className="flex flex-col gap-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-3 ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}
                      style={{ animation: 'messageSlideIn 0.4s ease-out' }}
                    >
                      {msg.sender === 'ai' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div
                        className={`max-w-xs lg:max-w-sm p-4 rounded-2xl ${
                          msg.sender === 'ai'
                            ? 'bg-gradient-to-br from-slate-800/80 to-slate-700/80 border border-cyan-400/20 shadow-lg backdrop-blur-sm'
                            : 'bg-gradient-to-br from-cyan-600/90 to-purple-600/90 text-white shadow-lg'
                        }`}
                      >
                        <div className="text-sm leading-relaxed chatbot-content">
                          {typeof msg.content === 'string' ? (
                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(msg.content) }} />
                          ) : (
                            msg.content
                          )}
                        </div>
                        <div className={`text-xs mt-2 opacity-70 ${msg.sender === 'ai' ? 'text-slate-400' : 'text-white/80'}`}>
                          {msg.timestamp}
                        </div>
                      </div>
                      {msg.sender === 'user' && (
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Enhanced Input Area */}
              <footer className="p-4 border-t border-cyan-400/30 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-b-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about Nicolette's expertise..."
                      className="w-full bg-slate-800/50 border border-slate-600/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all backdrop-blur-sm placeholder-slate-400"
                      aria-label="Message input"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <MessageCircle className="w-4 h-4 text-slate-500" />
                    </div>
                  </div>
                  <button
                    onClick={() => sendMessage()}
                    className={`p-3 rounded-xl transition-all duration-300 transform ${
                      inputValue.trim()
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 scale-100 shadow-lg'
                        : 'bg-slate-700/50 scale-95'
                    }`}
                    disabled={!inputValue.trim()}
                    aria-label="Send message"
                  >
                    <Send className={`w-5 h-5 transition-colors ${inputValue.trim() ? 'text-white' : 'text-slate-500'}`} />
                  </button>
                </div>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <button
                    onClick={() => sendMessage('tell me about her skills')}
                    className="px-3 py-1 bg-slate-700/50 hover:bg-cyan-600/20 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg text-xs transition-all"
                    aria-label="View Skills"
                  >
                    Skills
                  </button>
                  <button
                    onClick={() => sendMessage('show her projects')}
                    className="px-3 py-1 bg-slate-700/50 hover:bg-purple-600/20 border border-slate-600/50 hover:border-purple-500/50 rounded-lg text-xs transition-all"
                    aria-label="View Projects"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => sendMessage('how to contact her')}
                    className="px-3 py-1 bg-slate-700/50 hover:bg-blue-600/20 border border-slate-600/50 hover:border-blue-500/50 rounded-lg text-xs transition-all"
                    aria-label="View Contact Info"
                  >
                    Contact
                  </button>
                </div>
              </footer>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NeuralAIAssistant;