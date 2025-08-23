import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  MessageCircle, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  X,
  FileText,
  User,
  Briefcase,
  Sparkles
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
      color: 'from-azure-600 to-purple-600',
      action: () => {
        // Scroll to chatbot section
        document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
        setActiveAction('chat');
        setTimeout(() => setActiveAction(null), 2000);
      }
    },
    {
      id: 'resume',
      icon: FileText,
      label: 'Resume',
      color: 'from-purple-600 to-neon-500',
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
      color: 'from-neon-500 to-azure-600',
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
      color: 'from-azure-600 to-purple-600',
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
      color: 'from-dark-600 to-dark-800',
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
      color: 'from-azure-600 to-azure-800',
      action: () => {
        window.open('https://linkedin.com/in/nicolette-mashaba', '_blank');
        setActiveAction('linkedin');
        setTimeout(() => setActiveAction(null), 2000);
      }
    }
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
            className="absolute bottom-20 right-0 bg-dark-800/90 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-dark-600/50 shadow-xl"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neon-400" />
              <span className="text-sm font-medium">
                {actions.find(a => a.id === activeAction)?.label} opened!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 right-0 mb-4">
            {actions.map((action, index) => (
              <motion.div
                key={action.id}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                className="mb-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.action}
                  className={`
                    group relative flex items-center gap-3 px-4 py-3 
                    bg-gradient-to-r ${action.color} 
                    text-white rounded-full shadow-lg 
                    border border-white/20 backdrop-blur-sm
                    transition-all duration-300 hover:shadow-xl
                  `}
                >
                  {/* Label */}
                  <span className="text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {action.label}
                  </span>
                  
                  {/* Icon */}
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <action.icon className="w-5 h-5" />
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
          w-16 h-16 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 
          rounded-full shadow-2xl border-2 border-white/20 
          flex items-center justify-center text-white
          transition-all duration-300 hover:shadow-blue-400/25
          ${isOpen ? 'rotate-45' : 'rotate-0'}
        `}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Plus className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Quick Download Resume Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          // Trigger resume download
          const link = document.createElement('a');
          link.href = '/resume.pdf'; // Update with actual resume path
          link.download = 'Nicolette_Mashaba_Resume.pdf';
          link.click();
        }}
        className="absolute bottom-20 right-0 mb-4 px-4 py-2 bg-gradient-to-r from-emerald-400 to-blue-400 text-white rounded-full shadow-lg border border-white/20 backdrop-blur-sm transition-all duration-300 hover:shadow-emerald-400/25"
      >
        <div className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Download Resume</span>
        </div>
      </motion.button>
    </div>
  );
};

export default FloatingActionMenu; 