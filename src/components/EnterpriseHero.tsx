import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  Calendar, 
  MapPin, 
  Star,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Zap,
  Shield,
  Cpu,
  Database,
  Cloud,
  Globe,
  Lock,
  CheckCircle
} from 'lucide-react';
import { 
  EnterpriseButton, 
  EnterpriseCard, 
  EnterpriseBadge, 
  EnterpriseMetric,
  EnterpriseTooltip
} from './EnterpriseDesignSystem';

const EnterpriseHero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-platinum-100/20 via-transparent to-azure-100/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Executive Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-executive-600 to-executive-400 rounded-full shadow-gold-glow mb-8">
            <Award className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white font-executive tracking-tight mb-6">
            <span className="bg-gradient-to-r from-executive-400 via-azure-400 to-innovation-400 bg-clip-text text-transparent">
              Nicolette Mashaba
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-platinum-300 font-corporate mb-8 max-w-4xl mx-auto">
            Senior Full-Stack Engineer & Technical Leader
          </p>
          
          <p className="text-lg text-platinum-400 font-corporate mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming complex business challenges into elegant technical solutions. 
            Expert in Azure cloud architecture, AI/ML integration, and leading high-performing development teams.
          </p>

          {/* Executive CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <EnterpriseButton
              variant="primary"
              size="xl"
              icon={<Calendar className="w-5 h-5" />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Consultation
            </EnterpriseButton>
            <EnterpriseButton
              variant="ghost"
              size="xl"
              icon={<ExternalLink className="w-5 h-5" />}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </EnterpriseButton>
          </div>
        </div>

        {/* Simple Test Content */}
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Enterprise Portfolio Working!</h2>
          <p className="text-lg">If you can see this, the components are loading correctly.</p>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseHero; 