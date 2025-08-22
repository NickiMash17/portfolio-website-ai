import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

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
            className="fixed bottom-40 right-8 z-50 w-80 h-96 bg-dark-800/95 backdrop-blur-md rounded-2xl border border-dark-700/50 shadow-2xl"
          >
            {/* Chatbot Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-700/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-azure-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Assistant</h3>
                  <p className="text-neon-400 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-light-400 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      message.isBot
                        ? 'bg-dark-700/80 text-white'
                        : 'bg-gradient-to-r from-azure-600 to-purple-600 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="p-4 border-t border-dark-700/50">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-dark-700/80 text-light-300 text-xs rounded-full hover:bg-gradient-to-r hover:from-azure-600 hover:to-purple-600 hover:text-white transition-all duration-300"
                  >
                    {reply}
                  </motion.button>
                ))}
              </div>
              
              {/* Input Area */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && inputValue.trim()) {
                      handleSendMessage(inputValue);
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 bg-dark-700/80 border border-dark-600/50 rounded-lg text-white text-sm placeholder-light-400 focus:ring-2 focus:ring-azure-400 focus:border-transparent backdrop-blur-sm"
                />
                <motion.button
                  onClick={() => handleSendMessage(inputValue)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 bg-gradient-to-r from-azure-600 to-purple-600 text-white rounded-lg hover:shadow-azure transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
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