import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Clock, 
  Users, 
  Brain, 
  Cloud, 
  Code, 
  Server, 
  Rocket 
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'ai-ml' | 'cloud-azure' | 'full-stack' | 'devops' | 'innovation';
  difficulty: 'advanced' | 'expert' | 'pioneering';
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  impact: string;
  teamSize: number;
  duration: string;
  status: 'completed' | 'in-progress' | 'planned';
  architecture?: string;
  metrics?: {
    performance?: string;
    users?: string;
    uptime?: string;
    efficiency?: string;
  };
}

interface EnhancedProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({ 
  project, 
  index, 
  onViewDetails 
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return Brain;
      case 'cloud-azure': return Cloud;
      case 'full-stack': return Code;
      case 'devops': return Server;
      case 'innovation': return Rocket;
      default: return Code;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ai-ml': return 'from-[var(--ai-primary)] to-[var(--ai-accent)]';
      case 'cloud-azure': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'full-stack': return 'from-[var(--ai-accent)] to-[var(--ai-secondary)]';
      case 'devops': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'innovation': return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
      default: return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'advanced': return 'from-[var(--ai-secondary)] to-[var(--ai-primary)]';
      case 'expert': return 'from-[var(--ai-accent)] to-[var(--ai-primary)]';
      case 'pioneering': return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
      default: return 'from-[var(--ai-primary)] to-[var(--ai-secondary)]';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress': return 'bg-[var(--ai-primary)]/15 text-[var(--ai-primary)] border-[var(--ai-primary)]/40';
      case 'planned': return 'bg-[var(--ai-secondary)]/15 text-[var(--ai-secondary)] border-[var(--ai-secondary)]/40';
      default: return 'bg-[var(--ai-primary)]/15 text-[var(--ai-primary)] border-[var(--ai-primary)]/40';
    }
  };

  const CategoryIcon = getCategoryIcon(project.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <div className="glass-premium interactive-card cursor-glow rounded-3xl border border-[var(--ai-primary)]/20 hover:border-[var(--ai-primary)]/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[var(--ai-primary)]/25 h-full flex flex-col scroll-reveal relative">
        {/* Enhanced Hover Glow Effect */}
        <div className="absolute inset-0 bg-brand-gradient/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        
        {/* Project Image with Enhanced Effects */}
        <div className="h-40 sm:h-48 bg-brand-gradient/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gradient/20" />
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,229,255,0.25)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.25)_0%,transparent_50%)]" />
          </div>
          
          <CategoryIcon className="w-16 h-16 sm:w-20 sm:h-20 text-[var(--ai-primary)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" />
          
          {/* Enhanced Badges with Better Positioning */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-col gap-2">
            <span className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs sm:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {project.category.replace('-', ' ').toUpperCase()}
            </span>
            <span className={`px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-xs sm:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {project.difficulty.toUpperCase()}
            </span>
          </div>

          {/* Status Indicator with Enhanced Styling */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
            <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold border backdrop-blur-sm ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          {/* Hover Overlay with Action Preview */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.button
              onClick={() => onViewDetails(project)}
              className="btn-premium px-6 py-3 backdrop-blur-md rounded-2xl text-white font-semibold flex items-center gap-2 cursor-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-5 h-5" />
              Quick Preview
            </motion.button>
          </div>
        </div>
        
        {/* Enhanced Project Content */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10">
          {/* Project Header with Better Typography */}
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <h3 className="text-fluid-xl sm:text-2xl font-bold text-white group-hover:text-[var(--ai-primary)] transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
          </div>
          
          {/* Description with Better Readability */}
          <p className="text-fluid-base sm:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 flex-1">
            {project.description}
          </p>
          
          {/* Enhanced Technologies with Better Spacing */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 glass-premium text-white text-xs sm:text-sm rounded-full font-medium hover:bg-purple-500/20 transition-colors duration-300 cursor-glow"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1.5 glass-premium text-white text-xs sm:text-sm rounded-full font-medium hover:bg-purple-500/20 transition-colors duration-300 cursor-glow">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
          
          {/* Enhanced Project Stats */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-4 sm:mb-6 text-sm sm:text-base text-white/80">
            <span className="flex items-center gap-2 hover:text-[var(--ai-primary)] transition-colors duration-300">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
              {project.duration}
            </span>
            <span className="flex items-center gap-2 hover:text-[var(--ai-primary)] transition-colors duration-300">
              <Users className="w-6 h-6 sm:w-7 sm:h-7" />
              {project.teamSize}
            </span>
          </div>
          
          {/* Primary Actions: Live and Code only */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full h-12 sm:h-14 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-3 cursor-glow group/btn"
                aria-label={`Open live demo: ${project.title}`}
                title="Live Demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="text-base sm:text-lg font-bold">Live</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full h-12 sm:h-14 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-3 cursor-glow group/btn"
                aria-label={`View source code: ${project.title}`}
                title="Code"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="text-base sm:text-lg font-bold">Code</span>
              </motion.a>
            )}
          </div></div>
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;