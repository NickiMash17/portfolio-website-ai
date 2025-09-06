import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  X,
  FileText,
  User,
  Briefcase,
  Sparkles,
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
  Shield
} from 'lucide-react';

interface FloatingActionMenuProps {
  className?: string;
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const actions = [
    {
      id: 'chat',
      icon: MessageCircle,
      label: 'AI Chat',
      color: 'from-cyan-500 to-blue-500',
      category: 'ai',
      action: () => {
        document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
        setActiveAction('chat');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'resume',
      icon: FileText,
      label: 'Resume',
      color: 'from-blue-500 to-purple-500',
      category: 'code',
      action: () => {
        document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' });
        setActiveAction('resume');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'projects',
      icon: Briefcase,
      label: 'Projects',
      color: 'from-purple-500 to-cyan-500',
      category: 'innovation',
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setActiveAction('projects');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'contact',
      icon: Mail,
      label: 'Contact',
      color: 'from-cyan-500 to-blue-500',
      category: 'communication',
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setActiveAction('contact');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      color: 'from-gray-600 to-gray-800',
      category: 'code',
      action: () => {
        window.open('https://github.com/NickiMash17', '_blank');
        setActiveAction('github');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-800',
      category: 'professional',
      action: () => {
        window.open('https://linkedin.com/in/nicolette-mashaba', '_blank');
        setActiveAction('linkedin');
        setTimeout(() => setActiveAction(null), 2000);
      }
    }
  ];

  const techIcons = [
    { icon: Brain, color: 'text-cyan-400', label: 'AI/ML' },
    { icon: Cloud, color: 'text-blue-400', label: 'Cloud' },
    { icon: Code, color: 'text-purple-400', label: 'Code' },
    { icon: Database, color: 'text-emerald-400', label: 'Data' },
    { icon: Server, color: 'text-orange-400', label: 'DevOps' },
    { icon: Terminal, color: 'text-red-400', label: 'Tools' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 ${className}`}>
      {/* Action Feedback */}
      <AnimatePresence>
        {activeAction && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            className="absolute bottom-24 right-0 glass-ai text-cyan-400 px-6 py-3 rounded-2xl border border-cyan-500/20 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold">
                {actions.find(a => a.id === activeAction)?.label} opened!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tech Stack Visualization */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute bottom-32 right-0 mb-4 glass-ai rounded-2xl p-6 border border-cyan-500/20"
          >
            <h3 className="text-sm font-bold text-white mb-4 text-center">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-3">
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 ${tech.color} rounded-xl flex items-center justify-center glass-ai`}>
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <p className="text-xs text-gray-300 font-medium">{tech.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-20 right-0 mb-4">
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.action}
                  className={`
                    group relative flex items-center gap-4 px-6 py-4 
                    bg-gradient-to-r ${action.color} 
                    text-white rounded-2xl shadow-2xl 
                    border border-white/20 backdrop-blur-sm
                    transition-all duration-300 hover:shadow-cyan-500/25
                    w-56 h-16
                  `}
                >
                  {/* Label */}
                  <span className="text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {action.label}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center ml-auto">
                    <action.icon className="w-6 h-6" />
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className={`
          w-20 h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
          rounded-2xl shadow-2xl border-2 border-white/20 
          flex items-center justify-center text-white
          transition-all duration-300 hover:shadow-cyan-500/25
          ${isOpen ? 'rotate-45' : 'rotate-0'}
          relative overflow-hidden
        `}
      >
        {/* Holographic Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-purple-400/20 animate-pulse" />
        
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <Plus className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Quick Download Resume Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const link = document.createElement('a');
          link.href = '/resume.pdf';
          link.download = 'Nicolette_Mashaba_Resume.pdf';
          link.click();
        }}
        className="absolute bottom-24 right-0 mb-4 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-cyan-500/25 w-56 h-16 flex items-center justify-center group"
      >
        <div className="flex items-center gap-3">
          <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-sm font-semibold">Download Resume</span>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingActionMenu;
