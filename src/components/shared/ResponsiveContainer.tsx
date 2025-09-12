import React from 'react';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container-responsive ${className}`}>
      {children}
    </div>
  );
};