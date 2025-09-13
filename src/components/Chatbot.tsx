import React, { useState } from 'react';
import { MessageCircle, Send, X, Brain, Sparkles } from 'lucide-react';

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi! I'm Nicolette's AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Tell me about Nicolette's skills",
    "What projects has she worked on?",
    "How can I contact her?",
    "What are her rates?"
  ];

  const botResponses = {
    skills: "Nicolette is a full-stack developer with expertise in C#, .NET, React, TypeScript, Azure Cloud, SQL Server, and MongoDB. She's Microsoft certified in Azure Data Fundamentals and Azure Developer Associate.",
    projects: "Nicolette has worked on various projects including AI-powered portfolio websites, Azure cloud management systems, e-commerce platforms, and real-time chat applications. You can see her projects in the Projects section!",
    contact: "You can contact Nicolette through the contact form on this website, email her at nene171408@gmail.com, or connect with her on LinkedIn and GitHub.",
    rates: "Nicolette's rates vary depending on project scope and requirements. For detailed pricing and availability, please reach out through the contact form or email directly."
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(),
      text: message,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      let response = "I'm here to help! Feel free to ask about Nicolette's skills, projects, or how to get in touch.";
      
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
        response = botResponses.skills;
      } else if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
        response = botResponses.projects;
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        response = botResponses.contact;
      } else if (lowerMessage.includes('rate') || lowerMessage.includes('price') || lowerMessage.includes('cost')) {
        response = botResponses.rates;
      }

      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Neural Network Background */}
        <div className="absolute inset-0 w-20 h-20 -translate-x-2 -translate-y-2">
          <svg className="w-full h-full opacity-30 group-hover:opacity-60 transition-opacity duration-500" viewBox="0 0 80 80">
            {/* Neural Network Nodes */}
            <circle cx="20" cy="20" r="2" fill="#00E5FF" className="animate-pulse" style={{ animationDelay: '0s' }} />
            <circle cx="60" cy="20" r="2" fill="#00C2FF" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="20" cy="60" r="2" fill="#8B5CF6" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="60" cy="60" r="2" fill="#00E5FF" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="40" cy="40" r="3" fill="#00C2FF" className="animate-pulse" style={{ animationDelay: '0.25s' }} />
            
            {/* Neural Connections */}
            <line x1="20" y1="20" x2="40" y2="40" stroke="#00E5FF" strokeWidth="1" opacity="0.4" className="animate-pulse" />
            <line x1="60" y1="20" x2="40" y2="40" stroke="#00C2FF" strokeWidth="1" opacity="0.4" className="animate-pulse" />
            <line x1="20" y1="60" x2="40" y2="40" stroke="#8B5CF6" strokeWidth="1" opacity="0.4" className="animate-pulse" />
            <line x1="60" y1="60" x2="40" y2="40" stroke="#00E5FF" strokeWidth="1" opacity="0.4" className="animate-pulse" />
          </svg>
        </div>

        {/* Quantum Field Effect */}
        <div className="absolute inset-0 w-16 h-16 rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E5FF]/20 to-[#00C2FF]/20 animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-1 rounded-full bg-gradient-to-l from-[#8B5CF6]/15 to-[#00E5FF]/15 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#00C2FF]/10 to-[#8B5CF6]/10 animate-spin" style={{ animationDuration: '4s' }} />
        </div>

        {/* Holographic Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl border border-cyan-400/30 shadow-2xl hover:shadow-[#00E5FF]/40 transition-all duration-700 group cursor-glow overflow-hidden"
          aria-label="Activate Neural AI Assistant"
        >
          {/* Holographic Scan Lines */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00C2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="absolute top-0 left-2 w-0.5 h-full bg-gradient-to-b from-[#00E5FF] to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-0 left-6 w-0.5 h-full bg-gradient-to-b from-[#00C2FF] to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-0 left-10 w-0.5 h-full bg-gradient-to-b from-[#8B5CF6] to-transparent animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="absolute top-0 right-2 w-0.5 h-full bg-gradient-to-b from-[#00E5FF] to-transparent animate-pulse" style={{ animationDelay: '0.9s' }} />
          </div>

          {/* Central AI Core */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="relative">
              {/* Rotating AI Symbol */}
              <div className="w-8 h-8 border-2 border-[#00E5FF] rounded-lg rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 flex items-center justify-center">
                <div className="w-4 h-4 bg-gradient-to-br from-[#00E5FF] to-[#00C2FF] rounded-sm group-hover:scale-125 transition-transform duration-500" />
              </div>
              
              {/* Orbiting Particles */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
                <div className="absolute -top-1 left-1/2 w-1 h-1 bg-[#00E5FF] rounded-full transform -translate-x-1/2" />
                <div className="absolute top-1/2 -right-1 w-1 h-1 bg-[#00C2FF] rounded-full transform -translate-y-1/2" />
                <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-[#8B5CF6] rounded-full transform -translate-x-1/2" />
                <div className="absolute top-1/2 -left-1 w-1 h-1 bg-[#00E5FF] rounded-full transform -translate-y-1/2" />
              </div>
            </div>
          </div>

          {/* Energy Pulse */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00E5FF]/0 via-[#00E5FF]/20 to-[#00E5FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
        </button>

        {/* Floating Data Streams */}
        <div className="absolute -top-8 -left-8 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
          <div className="absolute top-4 left-4 text-xs font-mono text-[#00E5FF] animate-pulse">01101</div>
          <div className="absolute top-8 left-12 text-xs font-mono text-[#00C2FF] animate-pulse" style={{ animationDelay: '0.5s' }}>AI.exe</div>
          <div className="absolute top-12 left-2 text-xs font-mono text-[#8B5CF6] animate-pulse" style={{ animationDelay: '1s' }}>NEURAL</div>
          <div className="absolute top-16 left-16 text-xs font-mono text-[#00E5FF] animate-pulse" style={{ animationDelay: '1.5s' }}>∞</div>
        </div>

        {/* Status Indicator */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center border-2 border-black shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-ping" />
        </div>

        {/* Interactive Tooltip */}
        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
          <div className="bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl px-4 py-3 rounded-xl border border-[#00E5FF]/40 shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="w-4 h-4 text-[#00E5FF]" />
              <span className="text-[#00E5FF] text-sm font-bold">NEURAL AI</span>
            </div>
            <p className="text-white text-xs whitespace-nowrap">Initialize conversation protocol</p>
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-end sm:items-center sm:justify-end sm:p-4">
      <div className="w-full h-full sm:w-[420px] sm:h-auto sm:max-h-[calc(100vh-32px)] bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl rounded-none sm:rounded-2xl border-2 border-cyan-400/40 shadow-2xl overflow-hidden flex flex-col relative">
        {/* Neural Network Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full" viewBox="0 0 420 600">
            {/* Neural Network Grid */}
            {[...Array(8)].map((_, i) => (
              <g key={i}>
                <circle cx={50 + (i % 4) * 100} cy={100 + Math.floor(i / 4) * 150} r="3" fill="#00E5FF" className="animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                <circle cx={100 + (i % 3) * 100} cy={200 + Math.floor(i / 3) * 100} r="2" fill="#00C2FF" className="animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
              </g>
            ))}
            {/* Neural Connections */}
            <line x1="50" y1="100" x2="150" y2="200" stroke="#00E5FF" strokeWidth="1" opacity="0.3" className="animate-pulse" />
            <line x1="150" y1="100" x2="250" y2="200" stroke="#00C2FF" strokeWidth="1" opacity="0.3" className="animate-pulse" />
            <line x1="250" y1="100" x2="350" y2="200" stroke="#8B5CF6" strokeWidth="1" opacity="0.3" className="animate-pulse" />
          </svg>
        </div>

        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-5 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-0.5 h-full bg-gradient-to-b from-cyan-400 to-transparent animate-pulse"
              style={{
                left: `${8 + i * 8}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        {/* Header */}
        <div className="relative p-3 sm:p-6 border-b border-cyan-400/30 bg-gradient-to-r from-black/50 to-gray-900/50">
          {/* Holographic Scan Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse" />
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-black via-gray-900 to-black rounded-lg border-2 border-cyan-400/50 flex items-center justify-center relative overflow-hidden">
                {/* Rotating AI Core */}
                <div className="w-4 h-4 sm:w-6 sm:h-6 border border-cyan-400 rounded rotate-45 flex items-center justify-center animate-spin" style={{ animationDuration: '4s' }}>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-sm" />
                </div>
                {/* Energy Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent animate-pulse" />
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-mono">
                    NEURAL.AI
                  </h3>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm text-cyan-400 font-mono font-semibold">QUANTUM_PROTOCOL_ACTIVE</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-black/80 to-gray-900/80 hover:from-red-500/20 hover:to-red-600/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-300 transition-all duration-300 border border-cyan-400/30 hover:border-red-500/50 touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 relative min-h-0">
          {/* Floating Data Particles */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-4 right-4 text-xs font-mono text-cyan-400 animate-pulse">01101</div>
            <div className="absolute top-12 right-8 text-xs font-mono text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }}>AI.exe</div>
            <div className="absolute top-20 right-2 text-xs font-mono text-purple-400 animate-pulse" style={{ animationDelay: '1s' }}>∞</div>
          </div>
          
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[90%] sm:max-w-[80%] p-3 sm:p-4 rounded-xl relative overflow-hidden ${
                  message.isBot
                    ? 'bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 border border-cyan-400/30 text-white backdrop-blur-sm'
                    : 'bg-gradient-to-br from-cyan-400/20 to-blue-400/20 border border-cyan-400/40 text-cyan-400 backdrop-blur-sm'
                }`}
              >
                {/* Message Scan Line Effect */}
                {message.isBot && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse" />
                )}
                <p className="text-sm sm:text-base leading-relaxed break-words hyphens-auto">{message.text}</p>
                <span className="text-xs opacity-60 mt-2 block font-mono">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Replies */}
        <div className="p-3 sm:p-4 border-t border-cyan-400/30 bg-gradient-to-r from-black/80 to-gray-900/80 relative">
          {/* Terminal-style Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent" />
          
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="px-2 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-black/60 to-gray-900/60 hover:from-cyan-400/20 hover:to-blue-400/20 text-cyan-400 hover:text-white rounded-lg text-xs sm:text-sm transition-all duration-300 border border-cyan-400/30 hover:border-cyan-400/60 font-mono backdrop-blur-sm touch-manipulation active:scale-95 break-words hyphens-auto leading-tight"
              >
                {reply}
              </button>
            ))}
          </div>
          
          {/* Input Area */}
          <div className="flex gap-2 relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Initialize query..."
              className="flex-1 bg-gradient-to-r from-black/80 to-gray-900/80 text-white placeholder-gray-500 rounded-lg px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 border border-cyan-400/30 focus:border-cyan-400/60 font-mono backdrop-blur-sm text-sm sm:text-base min-w-0"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim()}
              className="w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-blue-400 hover:to-purple-400 rounded-lg flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-cyan-400/30 relative overflow-hidden group touch-manipulation active:scale-95 flex-shrink-0"
            >
              {/* Button Energy Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
