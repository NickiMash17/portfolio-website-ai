import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin,
  Brain,
  Cloud,
  Code,
  Database,
  Server,
  Terminal,
  Layers,
  Activity,
  Zap,
  Rocket,
  Shield,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  MessageCircle,
  User,
  FileText,
  Briefcase,
  Eye,
  Sparkles,
  Target,
  TrendingUp
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nene171408@gmail.com',
      href: 'mailto:nene171408@gmail.com',
      color: 'from-cyan-500 to-blue-500',
      description: 'Best for detailed discussions and project inquiries'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 152 6795',
      href: 'tel:+271526795',
      color: 'from-blue-500 to-purple-500',
      description: 'Available for urgent matters and quick calls'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@NickiMash17',
      href: 'https://github.com/NickiMash17',
      color: 'from-gray-600 to-gray-800',
      description: 'View my code repositories and contributions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'nicolette-mashaba',
      href: 'https://linkedin.com/in/nicolette-mashaba',
      color: 'from-blue-600 to-blue-800',
      description: 'Professional networking and career opportunities'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Remote / Worldwide',
      href: '#',
      color: 'from-purple-500 to-cyan-500',
      description: 'Available for remote work globally'
    }
  ];

  const expertiseAreas = [
    {
      icon: Brain,
      label: 'AI & Machine Learning',
      description: 'Python, TensorFlow, OpenAI GPT, Azure AI',
      color: 'text-cyan-400'
    },
    {
      icon: Cloud,
      label: 'Cloud Computing',
      description: 'Microsoft Azure, Docker, CI/CD, Infrastructure',
      color: 'text-blue-400'
    },
    {
      icon: Code,
      label: 'Full-Stack Development',
      description: 'React.js, TypeScript, Node.js, ASP.NET Core',
      color: 'text-purple-400'
    },
    {
      icon: Database,
      label: 'Data & Analytics',
      description: 'MongoDB, SQL Server, Data Visualization',
      color: 'text-emerald-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="ai-data-flow absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10" />
        <div className="devops-pipeline absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10" />
        <div className="particle-system absolute inset-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 font-orbitron tracking-wider tech-title">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start a project or have a question? I'd love to hear from you. 
            <span className="text-cyan-400 font-semibold"> Let's create something amazing together</span> with 
            <span className="text-blue-400 font-semibold"> cutting-edge technology</span> and 
            <span className="text-purple-400 font-semibold"> innovative solutions</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="glass-ai rounded-3xl p-8 data-visualization">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-ai border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-ai border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-ai border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 glass-ai border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full px-8 py-4 text-lg font-bold rounded-2xl flex items-center justify-center gap-3 relative overflow-hidden group ${
                    isSubmitting 
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed' 
                      : 'btn-ai'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <X className="w-6 h-6" />
                      <span>Error - Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                Contact Methods
              </h3>
              
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-4 p-6 glass-ai rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center relative z-10`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 relative z-10">
                    <h4 className="text-white font-bold text-lg">{method.label}</h4>
                    <p className="text-cyan-400 font-semibold text-lg">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Expertise Areas */}
            <div className="glass-devops rounded-3xl p-8 data-visualization">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertiseAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 glass-ai rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <area.icon className={`w-6 h-6 ${area.color}`} />
                      <h4 className="text-white font-bold">{area.label}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="glass-code rounded-3xl p-8 data-visualization"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-cyan-400 font-bold text-lg">Available for new opportunities</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm currently accepting new projects and full-time opportunities. 
                <span className="text-cyan-400 font-semibold"> Response time: within 24 hours</span> during business days.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-ai rounded-3xl p-12 data-visualization">
            <h2 className="text-3xl font-bold text-white mb-4 tech-title">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you need a full-stack application, AI integration, or cloud infrastructure, 
              I'm ready to bring your vision to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-ai text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                View My Work
              </motion.a>
              <motion.a
                href="#resume"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 btn-code text-lg font-bold rounded-2xl flex items-center justify-center gap-3 group"
              >
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
