import React from 'react';

interface TopicCardProps {
  query: string;
  icon: string;
  label: string;
  onClick: (query: string) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ query, icon, label, onClick }) => (
  <div
    className="cursor-pointer p-3 bg-slate-700/50 hover:bg-cyan-600/20 border border-slate-600/50 hover:border-cyan-500/50 rounded-lg transition-all duration-300 flex items-center gap-2"
    onClick={() => onClick(query)}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick(query)}
    aria-label={`Select ${label}`}
  >
    <span className="text-lg">{icon}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default TopicCard;
