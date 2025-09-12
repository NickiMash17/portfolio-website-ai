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
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-azure-600 to-purple-600 rounded-full flex items-center justify-center shadow-azure hover:shadow-neon/25 transition-all duration-300 cursor-pointer"
        aria-label="Open AI chatbot"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 right-0 z-50 w-full h-full sm:bottom-4 sm:right-4 sm:w-[400px] sm:max-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-xl rounded-none sm:rounded-3xl border-2 border-emerald-400/30 shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="relative p-6 border-b border-emerald-400/20">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <Brain className="w-7 h-7 text-white drop-shadow-lg" />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                  AI NEXUS
                </h3>
                <Sparkles className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-sm text-emerald-300 font-semibold">Neural Intelligence Active</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/40 hover:to-red-600/40 rounded-xl flex items-center justify-center text-red-300 hover:text-red-200 transition-all duration-300 border border-red-500/30"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.isBot
                  ? 'bg-slate-800/80 text-white'
                  : 'bg-emerald-500/20 text-emerald-300'
              }`}
            >
              <p className="text-sm sm:text-base">{message.text}</p>
              <span className="text-xs opacity-50 mt-2 block">
                {message.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Replies */}
      <div className="p-4 border-t border-emerald-400/20 bg-slate-900/50">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 rounded-xl text-sm transition-all duration-300"
            >
              {reply}
            </button>
          ))}
        </div>
        
        {/* Input Area */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
            placeholder="Ask me anything..."
            className="flex-1 bg-slate-800/50 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 border border-emerald-400/20"
          />
          <button
            onClick={() => handleSendMessage(inputValue)}
            disabled={!inputValue.trim()}
            className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
