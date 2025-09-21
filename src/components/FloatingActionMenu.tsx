import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X,
  Plus,
  Sparkles,
  Brain
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
  const [isHovered, setIsHovered] = useState(false);

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
            className="absolute bottom-24 right-0 neural-message px-6 py-3 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-white">
                AI Assistant activated!
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced AI Assistant Button */}
      <motion.button
        onClick={openChatbot}
        className="floating-ai-button flex items-center justify-center text-white font-bold text-lg relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Neural AI Assistant"
      >
        {/* Pulsing Ring Effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Neural Network Icon */}
            <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
            >
          <Brain className="w-6 h-6" />
            </motion.div>

        {/* Hover Glow Effect */}
        {isHovered && (
            <motion.div
            className="absolute inset-0 rounded-full bg-cyan-400/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
          )}
      </motion.button>

      {/* AI Status Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -top-12 right-0"
      >
        <div className="ai-status">
          <div className="ai-status-dot" />
          <span>Neural AI Online</span>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingActionMenu;
