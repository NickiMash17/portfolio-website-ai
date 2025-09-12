import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  Clock,
  CheckCircle,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nene171408@email.com',
      href: 'mailto:nene171408@email.com',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+2763 152 6795',
      href: 'tel:+27631526795',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'South Africa',
      href: '#',
      color: 'from-purple-500 to-cyan-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/NickiMash17',
      href: 'https://github.com/NickiMash17',
      color: 'from-gray-600 to-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nicolette-mashaba',
      href: 'https://linkedin.com/in/nicolette-mashaba',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  return (
    <section id="contact" className={`py-12 sm:py-16 md:py-20 relative overflow-hidden ${className}`}>
      {/* Background Layers */}
      <div className="absolute inset-0 bg-app-gradient -z-10" />
      
      {/* Network Connectivity Visualization */}
      <div className="absolute inset-0 pointer-events-none opacity-20 sm:opacity-30">
        <svg className="w-full h-full">
          {/* Communication Network */}
          {[...Array(8)].map((_, i) => (
            <motion.circle
              key={`network-${i}`}
              cx={`${20 + (i % 3) * 20}%`} // Adjusted for mobile
              cy={`${25 + Math.floor(i / 3) * 15}%`} // Adjusted for mobile
              r="4" // Smaller on mobile
              className="sm:r-6"
              fill="none"
              stroke="var(--ai-secondary)"
              strokeWidth="2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3 + i * 0.3,
                delay: i * 0.4,
                repeat: Infinity
              }}
            />
          ))}
          {/* Connection Lines */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`net-line-${i}`}
              x1={`${20 + (i % 2) * 20}%`} // Adjusted for mobile
              y1={`${25 + i * 10}%`} // Adjusted for mobile
              x2={`${40 + (i % 2) * 20}%`} // Adjusted for mobile
              y2={`${45 + i * 8}%`} // Adjusted for mobile
              stroke="var(--ai-secondary)"
              strokeWidth="1"
              strokeDasharray="6,6"
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 5,
                delay: i * 0.7,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </div>

      {/* Floating Communication Tech */}
      <div className="absolute inset-0 pointer-events-none">
        {['GitHub', 'LinkedIn', 'Email', 'Slack', 'Teams', 'Discord'].map((platform, i) => (
          <motion.div
            key={platform}
            className="absolute text-xs font-mono text-[var(--ai-secondary)]/60 bg-[var(--ai-secondary)]/10 px-2 py-1 rounded border border-[var(--ai-secondary)]/40"
            style={{
              right: `${10 + (i * 13)}%`,
              top: `${25 + (i % 2) * 35}%`,
            }}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {platform}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            CONTACT
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed px-4">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 px-4 sm:px-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-ai rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 
                      rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 
                      focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)] focus:border-transparent 
                      transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)] focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)] focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800/50 border border-gray-600 rounded-lg sm:rounded-xl text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--ai-primary)] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 bg-brand-gradient text-sm sm:text-base text-white 
                  font-bold rounded-lg sm:rounded-xl transition-all duration-300 
                  disabled:opacity-50 disabled:cursor-not-allowed flex items-center 
                  justify-center gap-2 sm:gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent 
                      rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Submit Status */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-semibold">Message sent successfully!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="glass-ai rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="block p-3 sm:p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 
                    rounded-lg sm:rounded-xl border border-gray-600/50 
                    hover:border-[var(--ai-primary)]/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-gradient rounded-lg sm:rounded-xl 
                        flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-white font-semibold">{method.label}</p>
                        <p className="text-sm sm:text-base text-white font-medium">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-ai rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 
              border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg sm:rounded-xl 
                  flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                Availability
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm sm:text-base text-green-400 font-semibold">
                    Available for new projects
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white">
                  I'm currently accepting new opportunities and would love to discuss your project requirements.
                </p>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-white">
                  <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="glass-ai rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 
              border border-[var(--ai-primary)]/20 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-brand-gradient rounded-lg sm:rounded-xl 
                  flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                Why Work With Me?
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-white font-semibold">Microsoft Azure Certified</p>
                    <p className="text-xs sm:text-sm text-white">Professional cloud computing expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-white font-semibold">AI/ML Specialization</p>
                    <p className="text-xs sm:text-sm text-white">Cutting-edge machine learning solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-white font-semibold">Full-Stack Development</p>
                    <p className="text-xs sm:text-sm text-white">End-to-end application development</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--ai-primary)] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm sm:text-base text-white font-semibold">DevOps Expertise</p>
                    <p className="text-xs sm:text-sm text-white">Scalable and maintainable solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
