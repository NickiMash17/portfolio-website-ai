// Project Types
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

// Contact Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Resume Types
export interface ResumeOptions {
  type: 'Technical' | 'General' | 'Academic';
  includeProjects: boolean;
  includeCertifications: boolean;
  includeSkills: boolean;
  format: 'PDF' | 'DOCX';
}

// Theme Types
export interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

// Animation Types
export interface AnimationConfig {
  duration: number;
  delay: number;
  easing: string;
  direction: 'forward' | 'reverse' | 'alternate';
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon: string;
  active: boolean;
}

// Social Media Types
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  username: string;
}

// Timeline Types
export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  icon?: string;
  color?: string;
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  value: string;
  color: string;
  category: string;
}

// Interest Types
export interface Interest {
  name: string;
  icon: string;
  description?: string;
  category: string;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  retry?: () => void;
}

// User Preferences
export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: boolean;
  analytics: boolean;
}

// SEO Types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url: string;
  type: 'website' | 'article' | 'profile';
}

// Performance Metrics
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

// Accessibility Types
export interface AccessibilityConfig {
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
  screenReader: boolean;
} 