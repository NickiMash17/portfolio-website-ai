import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  XCircle, 
  ChevronRight, 
  ChevronDown,
  ExternalLink,
  Star,
  TrendingUp,
  Users,
  Award,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

// Enterprise Button Component
interface EnterpriseButtonProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'critical' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const EnterpriseButton: React.FC<EnterpriseButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-azure-950 text-white hover:bg-azure-900 focus:ring-azure-500 shadow-azure-glow',
    secondary: 'bg-platinum-300 text-navy-900 hover:bg-platinum-400 focus:ring-platinum-500 border border-platinum-400',
    success: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500',
    critical: 'bg-critical-500 text-white hover:bg-critical-600 focus:ring-critical-500',
    ghost: 'bg-transparent text-navy-700 hover:bg-navy-50 focus:ring-navy-500 border border-navy-200'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

// Enterprise Card Component
interface EnterpriseCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'premium' | 'interactive';
  className?: string;
  onClick?: () => void;
}

const EnterpriseCard: React.FC<EnterpriseCardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-xl border transition-all duration-300';
  
  const variants = {
    default: 'border-platinum-300 shadow-executive hover:shadow-premium',
    elevated: 'border-platinum-200 shadow-premium hover:shadow-enterprise',
    premium: 'border-executive-300 shadow-gold-glow hover:shadow-enterprise',
    interactive: 'border-azure-200 shadow-azure-glow hover:shadow-enterprise cursor-pointer'
  };

  const Component = onClick ? motion.div : 'div';
  const props = onClick ? {
    whileHover: { y: -4, scale: 1.02 },
    whileTap: { scale: 0.98 },
    onClick
  } : {};

  return (
    <Component
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

// Enterprise Badge Component
interface EnterpriseBadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'critical' | 'info' | 'premium';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EnterpriseBadge: React.FC<EnterpriseBadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-navy-100 text-navy-800',
    success: 'bg-success-100 text-success-700',
    warning: 'bg-warning-100 text-warning-700',
    critical: 'bg-critical-100 text-critical-700',
    info: 'bg-azure-100 text-azure-700',
    premium: 'bg-executive-100 text-executive-700'
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

// Enterprise Alert Component
interface EnterpriseAlertProps {
  type: 'success' | 'warning' | 'error' | 'info';
  title: string;
  message?: string;
  className?: string;
}

const EnterpriseAlert: React.FC<EnterpriseAlertProps> = ({
  type,
  title,
  message,
  className = '',
}) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-warning-500" />,
    error: <XCircle className="w-5 h-5 text-critical-500" />,
    info: <Info className="w-5 h-5 text-azure-500" />
  };

  const colors = {
    success: 'border-success-200 bg-success-50 text-success-800',
    warning: 'border-warning-200 bg-warning-50 text-warning-800',
    error: 'border-critical-200 bg-critical-50 text-critical-800',
    info: 'border-azure-200 bg-azure-50 text-azure-800'
  };

  return (
    <div className={`border rounded-lg p-4 ${colors[type]} ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {icons[type]}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold">{title}</h3>
          {message && <p className="mt-1 text-sm opacity-90">{message}</p>}
        </div>
      </div>
    </div>
  );
};

// Enterprise Metric Card
interface EnterpriseMetricProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
  className?: string;
}

const EnterpriseMetric: React.FC<EnterpriseMetricProps> = ({
  title,
  value,
  change,
  changeType = 'neutral',
  icon,
  className = '',
}) => {
  const changeColors = {
    positive: 'text-success-600',
    negative: 'text-critical-600',
    neutral: 'text-neutral-600'
  };

  const changeIcons = {
    positive: <TrendingUp className="w-4 h-4" />,
    negative: <TrendingUp className="w-4 h-4 transform rotate-180" />,
    neutral: <div className="w-4 h-4" />
  };

  return (
    <div className={`bg-white rounded-xl p-6 border border-platinum-200 shadow-executive ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-neutral-600">{title}</p>
          <p className="text-3xl font-bold text-navy-900 mt-2">{value}</p>
          {change && (
            <div className={`flex items-center mt-2 text-sm ${changeColors[changeType]}`}>
              {changeIcons[changeType]}
              <span className="ml-1">{change}</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="text-azure-600">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

// Enterprise Section Header
interface EnterpriseSectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

const EnterpriseSectionHeader: React.FC<EnterpriseSectionHeaderProps> = ({
  title,
  subtitle,
  action,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between mb-8 ${className}`}>
      <div>
        <h2 className="text-3xl font-bold text-navy-900 font-executive tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-lg text-neutral-600 font-corporate">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="flex-shrink-0">
          {action}
        </div>
      )}
    </div>
  );
};

// Enterprise Divider
interface EnterpriseDividerProps {
  className?: string;
}

const EnterpriseDivider: React.FC<EnterpriseDividerProps> = ({ className = '' }) => {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-platinum-300 to-transparent ${className}`} />
  );
};

// Enterprise Loading Spinner
interface EnterpriseLoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const EnterpriseLoadingSpinner: React.FC<EnterpriseLoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizes[size]} border-2 border-platinum-200 border-t-azure-600 rounded-full animate-spin`} />
    </div>
  );
};

// Enterprise Tooltip
interface EnterpriseTooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

const EnterpriseTooltip: React.FC<EnterpriseTooltipProps> = ({
  content,
  children,
  position = 'top',
  className = '',
}) => {
  const positions = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative group">
      {children}
      <div className={`absolute ${positions[position]} z-50 px-3 py-2 text-sm text-white bg-navy-900 rounded-lg shadow-enterprise opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap ${className}`}>
        {content}
        <div className={`absolute w-2 h-2 bg-navy-900 transform rotate-45 ${
          position === 'top' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' :
          position === 'bottom' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' :
          position === 'left' ? 'left-full top-1/2 -translate-y-1/2 -ml-1' :
          'right-full top-1/2 -translate-y-1/2 -mr-1'
        }`} />
      </div>
    </div>
  );
};

// Export all components
export {
  EnterpriseButton,
  EnterpriseCard,
  EnterpriseBadge,
  EnterpriseAlert,
  EnterpriseMetric,
  EnterpriseSectionHeader,
  EnterpriseDivider,
  EnterpriseLoadingSpinner,
  EnterpriseTooltip
}; 