import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X,
  Plus,
  Sparkles
} from 'lucide-react';

interface FloatingActionMenuProps {
  className?: string;
}

const FloatingActionMenu: React.FC<FloatingActionMenuProps> = ({ className = '' }) => {
  const [isTouchDevice] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openChatbot = () => {
    document.getElementById('chatbot')?.scrollIntoView({ behavior: 'smooth' });
    setActiveAction('chat');
    setTimeout(() => setActiveAction(null), 2000);
    setIsOpen(false);
  };

  return (
    <div className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 ${className}`}>
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
                AI Assistant opened!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant Button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 50, scale: 0.8 }}
            className="absolute bottom-20 right-0 mb-4"
          >
            <motion.button
              {...(!isTouchDevice && {
                whileHover: { scale: 1.05, x: -5 },
                whileTap: { scale: 0.95 }
              })}
              onClick={openChatbot}
              className="group relative flex items-center gap-4 px-6 py-4 
                bg-gradient-to-r from-cyan-500 to-blue-500 
                text-white rounded-2xl shadow-2xl 
                border border-white/20 backdrop-blur-sm
                transition-all duration-300 hover:shadow-cyan-500/25
                w-full sm:w-56 h-16"
            >
              {/* Label */}
              <span className="text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                AI Assistant
              </span>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center ml-auto">
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        {...(!isTouchDevice && {
          whileHover: { scale: 1.1 },
          whileTap: { scale: 0.9 }
        })}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={`
          w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
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
    </div>
  );
};

export default FloatingActionMenu;
