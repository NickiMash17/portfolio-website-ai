import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MessageCircle, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="contact" className="relative py-16 overflow-hidden theme-transition">
      {/* Simple background that matches main page */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-azure-950" />
        <div className="absolute inset-0 bg-gradient-to-br from-azure-500/10 via-transparent to-purple-500/10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-azure-600 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Ready to start a project or have a question? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-dark-800/30 rounded-3xl border border-dark-700/50 p-8 shadow-2xl relative overflow-hidden theme-transition">
              {/* Enhanced card background - using consistent dark theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-800/50 via-dark-700/30 to-dark-800/50 rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-azure-500/5 via-purple-500/5 to-neon-500/5 rounded-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-light-300 text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-white placeholder-light-400 focus:ring-2 focus:ring-azure-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-azure-400/50 theme-transition"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-light-300 text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-white placeholder-light-400 focus:ring-2 focus:ring-azure-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-azure-400/50 theme-transition"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-light-300 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-white placeholder-light-400 focus:ring-2 focus:ring-azure-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:border-azure-400/50 theme-transition"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-light-300 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700/50 rounded-lg text-white placeholder-light-400 focus:ring-2 focus:ring-azure-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none hover:border-azure-400/50 theme-transition"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseDown={handleRipple}
                    className="w-full px-8 py-4 bg-gradient-to-r from-azure-600 to-purple-600 text-white rounded-lg font-semibold text-lg backdrop-blur-sm border border-white/20 hover:shadow-lg hover:shadow-azure/25 transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group theme-transition"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-azure-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-6 bg-dark-800/20 backdrop-blur-sm rounded-xl border border-dark-700/50 hover:border-azure-400/50 transition-all duration-300 relative overflow-hidden group theme-transition"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-azure-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="w-12 h-12 bg-gradient-to-r from-azure-600 to-purple-600 rounded-lg flex items-center justify-center relative z-10">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-light-300">hello@nicolettemashaba.dev</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-6 bg-dark-800/20 backdrop-blur-sm rounded-xl border border-dark-700/50 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden group theme-transition"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-neon-500 rounded-lg flex items-center justify-center relative z-10">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-light-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 p-6 bg-dark-800/20 backdrop-blur-sm rounded-xl border border-dark-700/50 hover:border-neon-400/50 transition-all duration-300 relative overflow-hidden group theme-transition"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="w-12 h-12 bg-gradient-to-r from-neon-500 to-azure-600 rounded-lg flex items-center justify-center relative z-10">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-light-300">Remote / Worldwide</p>
                </div>
              </motion.div>
            </div>

            {/* Availability Status */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-6 bg-gradient-to-r from-azure-500/10 via-purple-500/10 to-neon-500/10 backdrop-blur-sm rounded-xl border border-dark-700/50 relative overflow-hidden group theme-transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-azure-500/5 via-purple-500/5 to-neon-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-neon-400 rounded-full animate-pulse" />
                  <span className="text-neon-400 font-semibold">Available for new opportunities</span>
                </div>
                <p className="text-light-300 text-sm">
                  I'm currently accepting new projects and full-time opportunities. 
                  Let's discuss how I can help bring your ideas to life!
                </p>
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="p-6 bg-dark-800/20 backdrop-blur-sm rounded-xl border border-dark-700/50 relative overflow-hidden group theme-transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-800/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10">
                <h4 className="text-white font-semibold mb-2">Response Time</h4>
                <p className="text-light-300 text-sm">
                  I typically respond within 24 hours during business days. 
                  For urgent matters, feel free to reach out on LinkedIn.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 