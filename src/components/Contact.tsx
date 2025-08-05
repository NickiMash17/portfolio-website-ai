import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, X } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm Nicolette's AI assistant. How can I help you today?", isBot: true }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // In real implementation, this would send data to backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChatbotMessage = (message: string) => {
    // Add user message
    const userMessage = { id: Date.now(), text: message, isBot: false };
    setChatMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's a great question! Nicolette specializes in full-stack development with C# and React.",
        "I'd be happy to connect you with Nicolette for your project needs.",
        "Nicolette has extensive experience with Azure cloud services and AI integration.",
        "You can reach out via the contact form or email directly at nicolette@example.com"
      ];
      const botResponse = { 
        id: Date.now() + 1, 
        text: responses[Math.floor(Math.random() * responses.length)], 
        isBot: true 
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const quickMessages = [
    "Tell me about Nicolette's skills",
    "What projects has she worked on?",
    "How can I contact her?",
    "What are her rates?"
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-lg border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-gray-900 rounded-lg font-semibold hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-300">nicolette@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">Remote / Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Availability</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Full-time opportunities</span>
                  <span className="text-cyan-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Freelance projects</span>
                  <span className="text-cyan-400">Available</span>
                </div>
                <div className="flex justify-between">
                  <span>Consulting</span>
                  <span className="text-cyan-400">Available</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/nicolette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/nicolette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chatbot Toggle Button */}
        <motion.button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="w-14 h-14 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/75 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-7 h-7 text-gray-900" />
        </motion.button>

        {/* Chatbot Window */}
        <AnimatePresence>
          {isChatbotOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 w-80 h-96 bg-gray-800 rounded-lg border border-gray-700 shadow-xl"
            >
              {/* Chatbot Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI Assistant</h3>
                    <p className="text-gray-400 text-xs">Online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatbotOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg ${
                        message.isBot
                          ? 'bg-gray-700 text-white'
                          : 'bg-cyan-400 text-gray-900'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Messages */}
              <div className="p-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-2 mb-3">
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => handleChatbotMessage(msg)}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-colors duration-300"
                    >
                      {msg}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && e.currentTarget.value.trim()) {
                        handleChatbotMessage(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <button
                    onClick={() => {
                      const input = document.querySelector('input[placeholder="Type your message..."]') as HTMLInputElement;
                      if (input && input.value.trim()) {
                        handleChatbotMessage(input.value);
                        input.value = '';
                      }
                    }}
                    className="px-3 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-pink-500 transition-colors duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact; 