import React from 'react';
import { 
  ExternalLink,
  Calendar,
  Mail
} from 'lucide-react';
import { 
  EnterpriseButton, 
  EnterpriseSectionHeader
} from './EnterpriseDesignSystem';

const EnterpriseProjects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-platinum-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <EnterpriseSectionHeader
          title="Strategic Project Portfolio"
          subtitle="Enterprise-grade solutions that demonstrate technical leadership and business impact"
          action={
            <EnterpriseButton
              variant="primary"
              size="lg"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={() => window.open('/portfolio-pdf', '_blank')}
            >
              Download Portfolio
            </EnterpriseButton>
          }
        />

        {/* Simple Test Content */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-navy-900 font-executive mb-6">
            Projects Section Working!
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
              View Projects
            </EnterpriseButton>
            <EnterpriseButton
              variant="secondary"
              size="lg"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            >
              Schedule Demo
            </EnterpriseButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseProjects; 