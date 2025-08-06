import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Portfolio Website",
      description: "A dynamic portfolio website with neural network background, AI chatbot integration, and advanced animations using React, TypeScript, and Framer Motion.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["React", "TypeScript", "AI", "Framer Motion"],
      category: "web",
      githubUrl: "https://github.com/nicolettemashaba/portfolio-website",
      liveUrl: "https://nicolettemashaba.dev"
    },
    {
      id: 2,
      title: "Azure Cloud Management System",
      description: "Comprehensive cloud management platform for Azure resources with real-time monitoring, cost optimization, and automated scaling capabilities.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      tags: ["Azure", "C#", ".NET", "Cloud"],
      category: "cloud",
      githubUrl: "https://github.com/nicolettemashaba/azure-manager",
      liveUrl: "https://azure-manager.azurewebsites.net"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and responsive design for optimal user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "web",
      githubUrl: "https://github.com/nicolettemashaba/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.vercel.app"
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and user authentication using WebSocket technology.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      tags: ["WebSocket", "React", "Node.js", "Socket.io"],
      category: "web",
      githubUrl: "https://github.com/nicolettemashaba/chat-app",
      liveUrl: "https://chat-app-demo.netlify.app"
    },
    {
      id: 5,
      title: "Database Management System",
      description: "Advanced database management system with SQL Server integration, data visualization, and automated backup solutions.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop",
      tags: ["SQL Server", "C#", ".NET", "Entity Framework"],
      category: "database",
      githubUrl: "https://github.com/nicolettemashaba/db-manager",
      liveUrl: "https://db-manager.azurewebsites.net"
    },
    {
      id: 6,
      title: "Machine Learning API",
      description: "RESTful API for machine learning models with Azure ML integration, model versioning, and automated deployment pipelines.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      tags: ["Python", "Azure ML", "FastAPI", "Docker"],
      category: "ai",
      githubUrl: "https://github.com/nicolettemashaba/ml-api",
      liveUrl: "https://ml-api-docs.azurewebsites.net"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'devops', label: 'DevOps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleRipple = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section id="projects" className="relative min-h-screen py-16 bg-gray-900 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-transparent to-gray-900/40 z-5" />
        <div className="absolute inset-0 z-5 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/25 via-transparent to-transparent" style={{ transform: 'translate(70%, 30%)' }} />
          <div className="absolute inset-0 bg-gradient-radial from-emerald-500/25 via-transparent to-transparent" style={{ transform: 'translate(-30%, 70%)' }} />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development, cloud solutions, and AI integration.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={handleRipple}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 text-white border-white/20 shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:text-blue-400 hover:border-blue-400/50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-blue-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseDown={handleRipple}
                        className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white shadow-lg hover:shadow-blue-400/25 transition-all duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onMouseDown={handleRipple}
                        className="w-10 h-10 bg-gradient-to-r from-purple-500 to-emerald-400 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center text-white shadow-lg hover:shadow-purple-400/25 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-400/20 to-purple-500/20 backdrop-blur-sm rounded-full text-xs font-medium text-blue-400 border border-blue-400/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseDown={handleRipple}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-medium text-sm backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
                      >
                        <Eye className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onMouseDown={handleRipple}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-emerald-400 text-white rounded-lg font-medium text-sm backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Explore More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="backdrop-blur-sm bg-gray-800/20 rounded-3xl border border-gray-700/50 p-12 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-emerald-400" />
              <h3 className="text-2xl font-bold text-white">
                Explore More Projects
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-6">
              Interested in seeing more of my work? Check out my GitHub profile for additional projects and contributions.
            </p>
            <motion.a
              href="https://github.com/nicolettemashaba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={handleRipple}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400 text-white rounded-full font-semibold backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              View All Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 