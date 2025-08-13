import React from 'react';
import { 
  Award, 
  Users, 
  Star,
  Calendar,
  Mail
} from 'lucide-react';
import { 
  EnterpriseButton, 
  EnterpriseSectionHeader
} from './EnterpriseDesignSystem';

const EnterpriseAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <EnterpriseSectionHeader
          title="Technical Leadership Profile"
          subtitle="Demonstrating architectural thinking, business acumen, and innovation leadership"
        />

        {/* Simple Test Content */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-navy-900 font-executive mb-6">
            About Section Working!
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            This is a simplified version to test if the components are loading correctly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <EnterpriseButton
              variant="primary"
              size="lg"
              icon={<Mail className="w-4 h-4" />}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </EnterpriseButton>
            <EnterpriseButton
              variant="secondary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            >
              Schedule Meeting
            </EnterpriseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseAbout; 