// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  gradient: string;
  demoUrl: string;
  githubUrl: string;
  metrics: ProjectMetrics;
  category: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectMetrics {
  users?: string;
  accuracy?: string;
  response?: string;
  uptime?: string;
  services?: string;
  requests?: string;
  teams?: string;
  messages?: string;
  satisfaction?: string;
  datasets?: string;
  predictions?: string;
  insights?: string;
}

// Skill Types
export interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  category: string;
}

export interface SkillCategory {
  [key: string]: Skill[];
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  badgeId: string;
  color: string;
  status: 'Certified' | 'In Progress' | 'Expired';
  date: string;
  description: string;
  credentialUrl: string;
  imageUrl?: string;
}

// Contact Types
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  href: string;
  color: string;
}

// Resume Types
export interface ResumeOptions {
  type: 'Technical' | 'General' | 'Academic';
  includeProjects: boolean;
  includeCertifications: boolean;
  includeSkills: boolean;
  format: 'PDF' | 'DOCX';
}

// Analytics Types
export interface VisitorAnalytics {
  id: string;
  timestamp: Date;
  page: string;
  action: string;
  userAgent: string;
  ipAddress: string;
  sessionId: string;
  duration?: number;
}

// AI Types
export interface AIRecommendation {
  projectId: string;
  score: number;
  reason: string;
  category: string;
}

export interface ChatbotMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type: 'text' | 'link' | 'image';
  metadata?: any;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
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

// Particle Types
export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color?: string;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  required: boolean;
  placeholder?: string;
  options?: string[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    message?: string;
  };
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

// Learning Focus Types
export interface LearningFocus {
  title: string;
  progress: number;
  color: string;
  description?: string;
  targetDate?: Date;
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