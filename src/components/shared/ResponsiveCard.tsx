import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({ 
  children, 
  className = '',
  hover = true 
}) => {
  return (
    <motion.div
      className={`card-responsive ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};