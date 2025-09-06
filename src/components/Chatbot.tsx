import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Brain, Sparkles, Zap, Activity } from 'lucide-react';

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
    contact: "You can contact Nicolette through the contact form on this website, email her at hello@nicolettemashaba.dev, or connect with her on LinkedIn and GitHub.",
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

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-azure-600 to-purple-600 rounded-full flex items-center justify-center shadow-azure hover:shadow-neon/25 transition-all duration-300 cursor-pointer"
        aria-label="Open AI chatbot"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 right-4 z-50 w-[400px] max-h-[calc(100vh-120px)] bg-gradient-to-br from-slate-900/95 via-blue-950/95 to-indigo-950/95 backdrop-blur-xl rounded-3xl border-2 border-emerald-400/30 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Enhanced Neural Header */}
            <div className="relative p-6 border-b border-emerald-400/20">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 40px rgba(6, 182, 212, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <Brain className="w-7 h-7 text-white drop-shadow-lg" />
                    </motion.div>
                    
                    {/* Orbiting Particles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full"
                        style={{
                          left: '50%',
                          top: '50%'
                        }}
                        animate={{
                          x: [0, Math.cos(i * 2.1) * 20, 0],
                          y: [0, Math.sin(i * 2.1) * 20, 0],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">AI NEXUS</h3>
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="text-sm text-emerald-300 font-semibold">Neural Intelligence Active</span>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-red-500/20 to-red-600/20 hover:from-red-500/40 hover:to-red-600/40 rounded-xl flex items-center justify-center text-red-300 hover:text-red-200 transition-all duration-300 border border-red-500/30"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Enhanced Chat Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4 relative min-h-0">
              {/* Floating Neural Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8
                    }}
                  />
                ))}
              </div>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} relative z-10`}
                >
                  {message.isBot && (
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3 mt-1 shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 10px rgba(16, 185, 129, 0.3)",
                          "0 0 20px rgba(6, 182, 212, 0.5)",
                          "0 0 10px rgba(16, 185, 129, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Brain className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`max-w-sm px-4 py-3 rounded-2xl text-sm relative overflow-hidden ${
                      message.isBot
                        ? 'bg-gradient-to-br from-slate-800/90 via-blue-900/90 to-indigo-900/90 text-emerald-100 border border-emerald-400/20'
                        : 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg'
                    }`}
                  >
                    {message.isBot && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-teal-500/10"
                        animate={{
                          x: ['-100%', '100%']
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      />
                    )}
                    <span className="relative z-10">{message.text}</span>
                  </motion.div>
                  
                  {!message.isBot && (
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center ml-3 mt-1 shadow-lg"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Activity className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Enhanced Quick Replies */}
            <div className="flex-shrink-0 p-6 border-t border-emerald-400/20 bg-gradient-to-r from-slate-900/50 via-blue-950/50 to-indigo-950/50">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-300">Quick Actions</span>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-slate-800/80 to-blue-900/80 text-emerald-200 text-sm rounded-xl border border-emerald-400/30 hover:from-emerald-500/20 hover:to-teal-500/20 hover:text-white hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
              
              {/* Enhanced Input Area */}
              <div className="flex gap-3 relative">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && inputValue.trim()) {
                        handleSendMessage(inputValue);
                      }
                    }}
                    placeholder="Ask me anything about Nicolette..."
                    className="w-full px-4 py-3 bg-gradient-to-r from-slate-800/90 to-blue-900/90 border-2 border-emerald-400/30 rounded-2xl text-white placeholder-emerald-300/60 focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/60 backdrop-blur-sm transition-all duration-300"
                  />
                  
                  {/* Input Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: inputValue
                        ? ["0 0 0px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.3)", "0 0 0px rgba(16, 185, 129, 0)"]
                        : "0 0 0px rgba(16, 185, 129, 0)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                
                <motion.button
                  onClick={() => handleSendMessage(inputValue)}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-2xl flex items-center justify-center shadow-lg border border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                  <Send className="w-5 h-5 relative z-10" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot; 