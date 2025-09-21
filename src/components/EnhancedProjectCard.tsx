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
  onViewDetails?: (project: Project) => void;
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
      <div className="glass-ai interactive-card cursor-glow rounded-2xl sm:rounded-3xl border border-[var(--ai-primary)]/20 hover:border-[var(--ai-primary)]/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[var(--ai-primary)]/25 h-full flex flex-col scroll-reveal relative">
        {/* Enhanced Hover Glow Effect */}
        <div className="absolute inset-0 bg-brand-gradient/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl" />
        
        {/* Project Image with Enhanced Effects - Mobile Optimized */}
        <div className="h-32 sm:h-40 md:h-48 bg-brand-gradient/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-gradient/20" />
          
          {/* Simplified Background Pattern for Mobile */}
          <div className="absolute inset-0 opacity-10 sm:opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,229,255,0.25)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.25)_0%,transparent_50%)]" />
          </div>
          
          <CategoryIcon className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-[var(--ai-primary)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-lg" />
          
          {/* Enhanced Badges with Better Mobile Positioning */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 flex flex-col gap-1 sm:gap-2">
            <span className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-[10px] sm:text-xs md:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {project.category.replace('-', ' ').toUpperCase()}
            </span>
            <span className={`px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white text-[10px] sm:text-xs md:text-sm font-bold rounded-full shadow-lg backdrop-blur-sm`}>
              {project.difficulty.toUpperCase()}
            </span>
          </div>

          {/* Status Indicator with Enhanced Mobile Styling */}
          <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 md:bottom-4 md:left-4">
            <span className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] md:text-xs font-semibold border backdrop-blur-sm ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          {/* Mobile-Optimized Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            {onViewDetails && (
              <motion.button
                onClick={() => onViewDetails(project)}
                className="btn-premium px-4 py-2 sm:px-6 sm:py-3 backdrop-blur-md rounded-xl sm:rounded-2xl text-white font-semibold flex items-center gap-2 cursor-glow text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Quick Preview</span>
                <span className="sm:hidden">View</span>
              </motion.button>
            )}
          </div>
        </div>
        
        {/* Enhanced Project Content with Better Mobile Spacing */}
        <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col relative z-10">
          {/* Project Header with Better Mobile Typography */}
          <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-[var(--ai-primary)] transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
          </div>
          
          {/* Description with Better Mobile Readability */}
          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4 md:mb-6 flex-1 line-clamp-3 sm:line-clamp-none">
            {project.description}
          </p>
          
          {/* Enhanced Technologies with Better Mobile Spacing */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 sm:px-3 sm:py-1.5 glass-premium text-white text-[10px] sm:text-xs md:text-sm rounded-full font-medium hover:bg-purple-500/20 transition-colors duration-300 cursor-glow"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 sm:px-3 sm:py-1.5 glass-premium text-white text-[10px] sm:text-xs md:text-sm rounded-full font-medium hover:bg-purple-500/20 transition-colors duration-300 cursor-glow">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
          
          {/* Enhanced Project Stats with Mobile Optimization */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm md:text-base text-white/80">
            <span className="flex items-center gap-1.5 sm:gap-2 hover:text-[var(--ai-primary)] transition-colors duration-300">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <span className="truncate">{project.duration}</span>
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2 hover:text-[var(--ai-primary)] transition-colors duration-300">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              {project.teamSize}
            </span>
          </div>
          
          {/* Mobile-Optimized Primary Actions */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full h-10 sm:h-12 md:h-14 px-3 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white flex items-center justify-center gap-2 sm:gap-3 cursor-glow group/btn min-h-[44px]"
                aria-label={`Open live demo: ${project.title}`}
                title="Live Demo"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5] group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base md:text-lg font-bold">Live</span>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium w-full h-10 sm:h-12 md:h-14 px-3 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-white flex items-center justify-center gap-2 sm:gap-3 cursor-glow group/btn min-h-[44px]"
                aria-label={`View source code: ${project.title}`}
                title="Code"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5] group-hover/btn:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base md:text-lg font-bold">Code</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;