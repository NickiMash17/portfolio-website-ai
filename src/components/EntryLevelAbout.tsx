import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Code, 
  Users, 
  Target, 
  Heart,
  Lightbulb,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const EntryLevelAbout: React.FC = () => {
  const skills = [
    {
      category: 'Languages',
      items: [
        { name: 'JavaScript', level: 'comfortable', icon: '💻' },
        { name: 'HTML', level: 'comfortable', icon: '🌐' },
        { name: 'CSS', level: 'comfortable', icon: '🎨' },
        { name: 'Python', level: 'learning', icon: '🐍' }
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 'comfortable', icon: '⚛️' },
        { name: 'Tailwind CSS', level: 'comfortable', icon: '🎯' },
        { name: 'Responsive Design', level: 'comfortable', icon: '📱' },
        { name: 'Next.js', level: 'learning', icon: '🚀' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 'comfortable', icon: '🟢' },
        { name: 'Express', level: 'comfortable', icon: '📡' },
        { name: 'Basic Database Work', level: 'learning', icon: '🗄️' },
        { name: 'REST APIs', level: 'learning', icon: '🔌' }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git', level: 'comfortable', icon: '📝' },
        { name: 'VS Code', level: 'comfortable', icon: '💻' },
        { name: 'Chrome DevTools', level: 'comfortable', icon: '🔍' },
        { name: 'TypeScript', level: 'learning', icon: '📘' }
      ]
    }
  ];

  const softSkills = [
    'Problem-solving',
    'Teamwork',
    'Quick learning',
    'Communication',
    'Attention to detail',
    'Time management'
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'comfortable': return 'bg-success-100 text-success-700 border-success-200';
      case 'learning': return 'bg-learning-100 text-learning-700 border-learning-200';
      default: return 'bg-clean-100 text-clean-700 border-clean-200';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'comfortable': return 'Comfortable with';
      case 'learning': return 'Currently learning';
      default: return 'Familiar with';
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-bold text-clean-800 mb-4">
            About Me
          </h2>
          <p className="text-body text-clean-600 max-w-2xl mx-auto">
            My journey into development and what makes me a great teammate
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-professional-50 to-fresh-50 rounded-2xl p-8 border border-professional-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-professional-100 rounded-full flex items-center justify-center text-professional-600 flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-subtitle font-semibold text-clean-800 mb-3">
                  My Journey Into Development
                </h3>
                <p className="text-body text-clean-700 leading-relaxed">
                  After 3 years in marketing, I discovered my passion for coding through online courses. 
                  I love solving problems and building things that make people's lives easier. 
                  Currently expanding my skills in React and Node.js while contributing to open source projects.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-fresh-100 rounded-full flex items-center justify-center text-fresh-600">
                  <Target className="w-4 h-4" />
                </div>
                <span className="text-clean-700">Passionate about learning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-highlight-100 rounded-full flex items-center justify-center text-highlight-600">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-clean-700">Great team player</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-professional-100 rounded-full flex items-center justify-center text-professional-600">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <span className="text-clean-700">Problem solver</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success-100 rounded-full flex items-center justify-center text-success-600">
                  <Heart className="w-4 h-4" />
                </div>
                <span className="text-clean-700">User-focused thinking</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-subtitle font-semibold text-clean-800 mb-8 text-center">
            Skills & Technologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-clean-50 rounded-xl p-6 border border-clean-200"
              >
                <h4 className="text-lg font-semibold text-clean-800 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-professional-600" />
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-clean-700">{skill.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(skill.level)}`}>
                        {getLevelText(skill.level)}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-subtitle font-semibold text-clean-800 mb-6 text-center">
            Soft Skills & Personal Qualities
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-clean-200 shadow-professional hover:shadow-clean transition-all duration-200"
              >
                <CheckCircle className="w-5 h-5 text-success-500 flex-shrink-0" />
                <span className="text-clean-700 font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Growth Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-fresh-50 to-professional-50 rounded-2xl p-8 border border-fresh-200">
            <div className="w-16 h-16 bg-fresh-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-fresh-600" />
            </div>
            <h3 className="text-subtitle font-semibold text-clean-800 mb-3">
              Growth Mindset
            </h3>
            <p className="text-body text-clean-700 mb-6 max-w-2xl mx-auto">
              I'm constantly learning and improving my skills. Every project is an opportunity 
              to grow, and I'm excited to contribute to a development team where I can learn 
              from experienced developers while bringing fresh energy and enthusiasm.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-fresh-100 text-fresh-700 rounded-full text-sm font-medium">
                Always Learning
              </span>
              <span className="px-4 py-2 bg-professional-100 text-professional-700 rounded-full text-sm font-medium">
                Team Player
              </span>
              <span className="px-4 py-2 bg-highlight-100 text-highlight-700 rounded-full text-sm font-medium">
                Problem Solver
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EntryLevelAbout; 