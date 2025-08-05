import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'all' | 'ai' | 'fullstack';
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Sentiment Analyzer",
    description: "A machine learning application that analyzes text sentiment using natural language processing. Built with Python, TensorFlow, and React.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2300D4FF' text-anchor='middle' dominant-baseline='middle'%3EAI Sentiment Analyzer%3C/text%3E%3C/svg%3E",
    tags: ["AI", "Python", "TensorFlow", "React"],
    category: "ai",
    liveUrl: "https://sentiment-analyzer.demo",
    githubUrl: "https://github.com/nicolette/sentiment-analyzer"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with ASP.NET Core and React.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23FF007A' text-anchor='middle' dominant-baseline='middle'%3EE-Commerce Platform%3C/text%3E%3C/svg%3E",
    tags: ["C#", ".NET", "React", "SQL Server"],
    category: "fullstack",
    liveUrl: "https://ecommerce.demo",
    githubUrl: "https://github.com/nicolette/ecommerce-platform"
  },
  {
    id: 3,
    title: "Azure Cloud Dashboard",
    description: "Real-time monitoring dashboard for Azure resources with automated scaling and cost optimization. Built with Azure Functions and React.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2300D4FF' text-anchor='middle' dominant-baseline='middle'%3EAzure Dashboard%3C/text%3E%3C/svg%3E",
    tags: ["Azure", "C#", "React", "Azure Functions"],
    category: "fullstack",
    liveUrl: "https://azure-dashboard.demo",
    githubUrl: "https://github.com/nicolette/azure-dashboard"
  },
  {
    id: 4,
    title: "AI Chatbot Assistant",
    description: "Intelligent chatbot powered by OpenAI GPT with natural language understanding and context awareness.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23FF007A' text-anchor='middle' dominant-baseline='middle'%3EAI Chatbot%3C/text%3E%3C/svg%3E",
    tags: ["AI", "OpenAI", "React", "Node.js"],
    category: "ai",
    liveUrl: "https://chatbot.demo",
    githubUrl: "https://github.com/nicolette/ai-chatbot"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with AI-powered features and interactive animations.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%2300D4FF' text-anchor='middle' dominant-baseline='middle'%3EPortfolio Website%3C/text%3E%3C/svg%3E",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI"],
    category: "fullstack",
    liveUrl: "https://nicolette.dev",
    githubUrl: "https://github.com/nicolette/portfolio"
  },
  {
    id: 6,
    title: "Data Analytics Platform",
    description: "Real-time data visualization platform with interactive charts and predictive analytics.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' fill='%23FF007A' text-anchor='middle' dominant-baseline='middle'%3EAnalytics Platform%3C/text%3E%3C/svg%3E",
    tags: ["Python", "React", "Chart.js", "MongoDB"],
    category: "ai",
    liveUrl: "https://analytics.demo",
    githubUrl: "https://github.com/nicolette/analytics-platform"
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack'>('all');

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-inter mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, AI integration, and cloud solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'ai', label: 'AI Projects' },
            { key: 'fullstack', label: 'Full-Stack' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key as 'all' | 'ai' | 'fullstack')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-cyan-400 text-gray-900 hover:bg-pink-500 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -5 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-cyan-500 text-gray-900 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm font-medium"
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Interested in working together? Let's discuss your next project!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-gray-900 rounded-full font-semibold hover:from-pink-500 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 