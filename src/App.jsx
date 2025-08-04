import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRocket, FaBrain, FaCloud, FaCode, FaRobot, FaMicrochip, FaNetworkWired, FaCogs, FaSun, FaMoon, FaChartLine } from "react-icons/fa";
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

// Theme Context
const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  );
};

// Advanced AI-Powered Components
const AIBrain = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="ai-brain-network">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="ai-node"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  </div>
);

// Azure Certification Badges Component
const AzureBadges = () => (
  <div className="azure-badges-container">
    <div className="badge-grid">
      <div className="azure-badge certified">
        <img 
          src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" 
          alt="Azure Data Fundamentals"
          className="badge-icon"
        />
        <div className="badge-content">
          <h4>Azure Data Fundamentals</h4>
          <p>DP-900 • Earned 2024</p>
          <span className="status verified">✓ Verified</span>
        </div>
      </div>
      
      <div className="azure-badge certified">
        <img 
          src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg" 
          alt="Azure Developer Associate"
          className="badge-icon"
        />
        <div className="badge-content">
          <h4>Azure Developer Associate</h4>
          <p>AZ-204 • Earned 2024</p>
          <span className="status verified">✓ Verified</span>
        </div>
      </div>
      
      <div className="azure-badge in-progress">
        <img 
          src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-expert-badge.svg" 
          alt="Azure DevOps Engineer"
          className="badge-icon"
        />
        <div className="badge-content">
          <h4>Azure DevOps Engineer</h4>
          <p>AZ-400 • In Progress</p>
          <span className="status progress">🔄 75% Complete</span>
        </div>
      </div>
      
      <div className="azure-badge in-progress">
        <img 
          src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg" 
          alt="Azure Database Administrator"
          className="badge-icon"
        />
        <div className="badge-content">
          <h4>Azure Database Administrator</h4>
          <p>AZ-104 • In Progress</p>
          <span className="status progress">🔄 60% Complete</span>
        </div>
      </div>
    </div>
  </div>
);

// Advanced Neural Network Background
const NeuralNetworkCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const initializeNetwork = () => {
      nodesRef.current = [];
      connectionsRef.current = [];
      
      for (let i = 0; i < 100; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          pulse: Math.random() * Math.PI * 2,
          color: Math.random() > 0.6 ? '#ec4899' : Math.random() > 0.3 ? '#a855f7' : '#06b6d4',
          type: Math.random() > 0.8 ? 'input' : Math.random() > 0.6 ? 'output' : 'hidden'
        });
      }
    };

    initializeNetwork();

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      nodesRef.current.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.03;

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        const pulseRadius = Math.max(0.1, node.radius + Math.sin(node.pulse) * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseRadius * 3);
        gradient.addColorStop(0, node.color + '80');
        gradient.addColorStop(1, node.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections with different colors based on node types
        nodesRef.current.slice(i + 1).forEach(otherNode => {
          const distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
          if (distance < 150) {
            const opacity = (150 - distance) / 150;
            const connectionColor = node.type === 'input' && otherNode.type === 'hidden' ? '#06b6d4' :
                                  node.type === 'hidden' && otherNode.type === 'output' ? '#ec4899' :
                                  '#a855f7';
            ctx.strokeStyle = `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            ctx.lineWidth = opacity * 2.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
    />
  );
};

// AI-Powered Chat Assistant
const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "🤖 Hi! I'm Nicolette's AI assistant. I can help you learn about her Azure expertise, AI projects, and technical skills. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const aiResponses = {
    azure: "Nicolette is a Microsoft Azure Certified professional with expertise in cloud architecture, DevOps, and AI services. She holds Azure Data Fundamentals and Azure Developer Associate certifications, with Azure DevOps Engineer and Database Administrator certifications in progress.",
    ai: "Nicolette is passionate about AI/ML and has worked on projects including neural networks, NLP, computer vision, and Azure AI services. She's currently exploring advanced AI applications and MLOps.",
    projects: "Her portfolio includes innovative AI projects like the Meteora Weather App with predictive analytics, AI Resume Analyzer using deep learning, and cloud-native microservices on Azure.",
    skills: "Full-stack development with C#/.NET, React, Azure cloud services, AI/ML with Python/TensorFlow, DevOps with Azure DevOps, and modern web technologies.",
    contact: "You can reach Nicolette at nene171408@gmail.com or connect on LinkedIn. She's based in South Africa and available for remote opportunities worldwide."
  };
  
  const getResponse = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes('azure') || lower.includes('cloud') || lower.includes('certification')) return aiResponses.azure;
    if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('ml')) return aiResponses.ai;
    if (lower.includes('project') || lower.includes('portfolio') || lower.includes('work')) return aiResponses.projects;
    if (lower.includes('skill') || lower.includes('technology') || lower.includes('tech')) return aiResponses.skills;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return aiResponses.contact;
    return "That's a great question! Nicolette is always excited to discuss new opportunities and technical challenges. Feel free to reach out to her directly for more detailed information.";
  };
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', text: inputValue }]);
    const userInput = inputValue;
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const response = getResponse(userInput);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 1500);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="ai-chat-window">
      <div className="ai-chat-header">
        <div className="ai-status">
          <div className="ai-indicator"></div>
          <h3>AI Career Assistant</h3>
        </div>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      
      <div className="ai-messages">
        {messages.map((message, index) => (
          <div key={index} className={`ai-message ${message.type}`}>
            {message.text}
          </div>
        ))}
        {isTyping && (
          <div className="ai-message bot typing">
            <div className="typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
      </div>
      
      <div className="ai-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Ask about Azure, AI, projects..."
          className="ai-input-field"
        />
        <button onClick={handleSendMessage} className="ai-send-btn">
          <FaRobot />
        </button>
      </div>
    </div>
  );
};

// Floating AI Orb
const FloatingAIOrb = ({ onClick, isActive }) => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className={`ai-orb ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div 
        className="orb-core"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="orb-inner">
          <FaRobot className="orb-icon" />
        </div>
        {[...Array(6)].map((_, i) => (
          <div key={i}
               className="orb-particle"
               style={{
                 transform: `rotate(${rotation + i * 60}deg) translateY(-40px)`
               }} />
        ))}
      </div>
    </div>
  );
};

// Professional Navigation
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Azure', href: '#azure' },
    { name: 'AI Projects', href: '#ai-projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#hero" className="nav-logo">
          <FaBrain className="logo-icon" />
          <span>Nicolette Mashaba</span>
        </a>
        
        <div className="nav-links">
          {navItems.map(item => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>
        
        <div className="nav-actions">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      
      {isOpen && (
        <div className="nav-mobile">
          {navItems.map(item => (
            <a key={item.name} href={item.href} 
               onClick={() => setIsOpen(false)} 
               className="nav-link-mobile">
              {item.name}
            </a>
          ))}
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

// Revolutionary Hero Section
const Hero = ({ onOpenAIChat }) => {
  const [currentText, setCurrentText] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const texts = [
    "AI-Powered Full-Stack Developer",
    "Microsoft Azure Certified Expert", 
    "Machine Learning Enthusiast",
    "Cloud-Native Innovator"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <AIBrain />
      
      <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span className="title-main">NICOLETTE</span>
            <span className="title-sub">MASHABA</span>
          </h1>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </div>

        <div className="hero-subtitle-container">
          <div className="typewriter-container">
            <span className="typewriter-text">{texts[currentText]}</span>
            <span className="typewriter-cursor">|</span>
          </div>
        </div>

        <div className="hero-status">
          <div className="status-badge">
            <div className="status-indicator"></div>
            <span>Available for AI/Cloud Opportunities</span>
          </div>
        </div>

        <div className="hero-badges">
          <div className="badge-preview">
            <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg" alt="Azure Certified" />
            <span>Azure Developer Associate</span>
          </div>
          <div className="badge-preview">
            <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" alt="Azure Data" />
            <span>Azure Data Fundamentals</span>
          </div>
        </div>

        <div className="hero-description">
          <div className="description-card">
            <p>
              <strong className="highlight">Microsoft Azure Certified</strong> Full-Stack Developer passionate about 
              <span className="ai-highlight"> AI-driven solutions</span> and cloud-native architecture.
              <br />
              Specializing in <span className="tech-highlight">C#/.NET, React, Azure AI Services</span> and building 
              <span className="innovation-highlight"> innovative applications</span> that push the boundaries of technology.
            </p>
          </div>
        </div>

        <div className="hero-actions">
          <button className="cta-primary" onClick={onOpenAIChat}>
            <FaRobot className="cta-icon" />
            <span>Chat with AI Assistant</span>
          </button>
          
          <a href="#azure" className="cta-secondary">
            <FaCloud className="cta-icon" />
            <span>View Azure Certifications</span>
          </a>
          
          <a href="#ai-projects" className="cta-tertiary">
            <FaBrain className="cta-icon" />
            <span>Explore AI Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Azure Certifications Section
const AzureSection = () => (
  <section id="azure" className="azure-section">
    <div className="section-container">
      <div className="section-header">
        <h2 className="section-title">
          <FaCloud className="title-icon" />
          Microsoft Azure Expertise
        </h2>
        <div className="title-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
          <div className="decoration-line"></div>
        </div>
        <p className="section-subtitle">
          Certified Azure professional with hands-on experience in cloud architecture, AI services, and DevOps practices
        </p>
      </div>
      
      <AzureBadges />
      
      <div className="azure-skills">
        <div className="skill-category">
          <h3>Cloud Architecture</h3>
          <div className="skill-items">
            <span className="skill-item">Azure App Services</span>
            <span className="skill-item">Azure Functions</span>
            <span className="skill-item">Azure Kubernetes Service</span>
            <span className="skill-item">Azure SQL Database</span>
            <span className="skill-item">Cosmos DB</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>AI & Machine Learning</h3>
          <div className="skill-items">
            <span className="skill-item">Azure Machine Learning</span>
            <span className="skill-item">Cognitive Services</span>
            <span className="skill-item">Azure Bot Service</span>
            <span className="skill-item">Computer Vision</span>
            <span className="skill-item">Language Understanding</span>
          </div>
        </div>
        
        <div className="skill-category">
          <h3>DevOps & Security</h3>
          <div className="skill-items">
            <span className="skill-item">Azure DevOps</span>
            <span className="skill-item">Azure Security Center</span>
            <span className="skill-item">Azure Active Directory</span>
            <span className="skill-item">Azure Monitor</span>
            <span className="skill-item">Application Insights</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// AI Projects Section
const AIProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      title: "AI Resume Analyzer",
      description: "Advanced NLP system using BERT and Azure Cognitive Services for intelligent resume analysis and job matching",
      tech: ["Python", "TensorFlow", "Azure ML", "React", "NLP"],
      metrics: { accuracy: "94%", speed: "2.3s", users: "500+" },
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Meteora Weather AI",
      description: "Predictive weather forecasting using LSTM networks and real-time data processing on Azure",
      tech: ["Python", "LSTM", "Azure Functions", "React", "Time Series"],
      metrics: { accuracy: "89%", predictions: "24h ahead", data: "10TB+" },
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Neural Trading Bot",
      description: "Autonomous cryptocurrency trading system using reinforcement learning and Azure ML",
      tech: ["Python", "Reinforcement Learning", "Azure ML", "Docker", "Kubernetes"],
      metrics: { roi: "23%", trades: "1000+", accuracy: "78%" },
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject(prev => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ai-projects" className="ai-projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaBrain className="title-icon" />
            AI/ML Innovation Projects
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-subtitle">
            Cutting-edge AI applications showcasing machine learning, neural networks, and Azure AI services
          </p>
        </div>
        
        <div className="projects-showcase">
          <div className="project-carousel">
            {projects.map((project, index) => (
              <div key={index} className={`project-card ${index === activeProject ? 'active' : ''}`}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-metrics">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="metric">
                        <span className="metric-value">{value}</span>
                        <span className="metric-label">{key}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="project-btn">
                    <FaCode className="btn-icon" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaEnvelope className="title-icon" />
            Get In Touch
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-subtitle">
            Ready to collaborate on AI/ML projects or discuss Azure solutions? Let's connect!
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>nene171408@gmail.com</p>
                <a href="mailto:nene171408@gmail.com" className="contact-link">
                  Send Email →
                </a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <div className="info-content">
                <h3>LinkedIn</h3>
                <p>Connect professionally</p>
                <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Connect →
                </a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaGithub />
              </div>
              <div className="info-content">
                <h3>GitHub</h3>
                <p>View my projects</p>
                <a href="https://github.com/nene171408" target="_blank" rel="noopener noreferrer" className="contact-link">
                  Explore →
                </a>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <FaCloud />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Polokwane, South Africa</p>
                <span className="availability">Available for remote opportunities worldwide</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-card">
              <h3>Send Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <FaEnvelope className="btn-icon" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = {
    overview: {
      title: "Professional Overview",
      content: (
        <div className="about-content">
          <p className="about-text">
            I'm a passionate <strong className="highlight">Full-Stack Developer</strong> with 3+ years of experience 
            building scalable web applications and AI-powered solutions. Based in South Africa, I specialize in modern 
            technologies including C#/.NET, React, and Microsoft Azure cloud services.
          </p>
          <p className="about-text">
            My unique background combines technical expertise with leadership experience from my naval service, 
            giving me strong problem-solving skills and the ability to work effectively under pressure.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      )
    },
    education: {
      title: "Education & Training",
      content: (
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-marker azure"></div>
            <div className="timeline-content">
              <h4>Agile Software Development Bootcamp</h4>
              <p className="institution">TechBridle • 2025</p>
              <p className="description">Advanced training in Agile methodologies and modern development practices</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker ai"></div>
            <div className="timeline-content">
              <h4>NQF Level 6 - Software Engineering</h4>
              <p className="institution">CTU Training Solutions • 2023-2025</p>
              <p className="description">Comprehensive software engineering program covering full-stack development</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-marker cloud"></div>
            <div className="timeline-content">
              <h4>NQF Level 4 - Programming Foundation</h4>
              <p className="institution">CTU Training Solutions • 2022-2023</p>
              <p className="description">Strong foundation in programming principles and software development</p>
            </div>
          </div>
        </div>
      )
    },
    interests: {
      title: "Interests & Passion Projects",
      content: (
        <div className="interests-grid">
          {[
            { icon: <FaBrain />, title: "AI & Machine Learning", desc: "Exploring neural networks and AI applications", color: "purple" },
            { icon: <FaCloud />, title: "Cloud Architecture", desc: "Building scalable Azure solutions", color: "blue" },
            { icon: <FaRocket />, title: "Innovation", desc: "Creating cutting-edge web experiences", color: "orange" },
            { icon: <FaCode />, title: "Clean Code", desc: "Writing maintainable, efficient code", color: "green" },
            { icon: <FaMicrochip />, title: "Emerging Tech", desc: "Staying current with latest technologies", color: "cyan" },
            { icon: <FaNetworkWired />, title: "System Design", desc: "Architecting robust solutions", color: "pink" }
          ].map((interest, i) => (
            <div key={i} className={`interest-card ${interest.color}`}>
              <div className="interest-icon">
                {interest.icon}
              </div>
              <h4 className="interest-title">{interest.title}</h4>
              <p className="interest-desc">{interest.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaBrain className="title-icon" />
            About Me
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-subtitle">
            Where technical expertise meets creative innovation. Learn more about my journey, education, and interests below.
          </p>
        </div>
        
        <div className="about-content-wrapper">
          <div className="about-sidebar">
            <div className="profile-card">
              <div className="profile-avatar">
                <div className="avatar-ring">
                  <span className="avatar-text">NM</span>
                </div>
              </div>
              <div className="profile-info">
                <h3 className="profile-name">Nicolette Mashaba</h3>
                <p className="profile-title">Full-Stack Developer</p>
                <div className="profile-badges">
                  <span className="profile-badge azure">Azure Certified</span>
                  <span className="profile-badge ai">AI Enthusiast</span>
                </div>
              </div>
            </div>
            
            <div className="contact-card">
              <h4>Get In Touch</h4>
              <div className="contact-links">
                <a href="mailto:nene171408@gmail.com" className="contact-link">
                  <FaEnvelope /> nene171408@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaLinkedin /> LinkedIn Profile
                </a>
                <a href="https://github.com/nene171408" target="_blank" rel="noopener noreferrer" className="contact-link">
                  <FaGithub /> GitHub Profile
                </a>
                <div className="location-info">
                  <FaCloud />
                  <span>Polokwane, South Africa</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-main">
            <div className="tab-navigation">
              {Object.keys(tabs).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`tab-button ${activeTab === tabKey ? 'active' : ''}`}
                >
                  {tabs[tabKey].title}
                </button>
              ))}
            </div>
            
            <div className="tab-content">
              {tabs[activeTab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "cyan",
      icon: <FaCode />,
      skills: [
        { name: "React", level: 90, category: "Framework" },
        { name: "TypeScript", level: 85, category: "Language" },
        { name: "Next.js", level: 80, category: "Framework" },
        { name: "Tailwind CSS", level: 95, category: "Styling" },
        { name: "HTML/CSS", level: 90, category: "Markup" }
      ]
    },
    {
      title: "Backend & Cloud",
      color: "blue",
      icon: <FaCloud />,
      skills: [
        { name: "C#/.NET", level: 85, category: "Language" },
        { name: "Azure", level: 90, category: "Cloud" },
        { name: "Node.js", level: 75, category: "Runtime" },
        { name: "SQL Server", level: 80, category: "Database" },
        { name: "MongoDB", level: 70, category: "Database" }
      ]
    },
    {
      title: "AI/ML & Data",
      color: "purple",
      icon: <FaBrain />,
      skills: [
        { name: "Python", level: 75, category: "Language" },
        { name: "TensorFlow", level: 70, category: "ML" },
        { name: "Azure ML", level: 80, category: "Cloud ML" },
        { name: "NLP", level: 65, category: "AI" },
        { name: "Computer Vision", level: 60, category: "AI" }
      ]
    },
    {
      title: "DevOps & Tools",
      color: "green",
      icon: <FaCogs />,
      skills: [
        { name: "Git", level: 90, category: "Version Control" },
        { name: "Azure DevOps", level: 85, category: "CI/CD" },
        { name: "Docker", level: 75, category: "Containerization" },
        { name: "CI/CD", level: 80, category: "Automation" },
        { name: "Kubernetes", level: 65, category: "Orchestration" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaMicrochip className="title-icon" />
            Technical Skills
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-subtitle">
            A comprehensive blend of modern web, cloud, and AI/ML technologies.
          </p>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <div key={i} className={`skill-category ${category.color}`}>
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, j) => (
                  <div key={j} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-category">{skill.category}</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="certifications-showcase">
          <h3 className="certifications-title">Microsoft Azure Certifications</h3>
          <div className="certifications-grid">
            <div className="certification-card verified">
              <div className="cert-icon">☁️</div>
              <h4>Azure Data Fundamentals</h4>
              <p>DP-900 • Earned 2024</p>
              <span className="status verified">✓ Verified</span>
            </div>
            <div className="certification-card verified">
              <div className="cert-icon">⚡</div>
              <h4>Azure Developer Associate</h4>
              <p>AZ-204 • Earned 2024</p>
              <span className="status verified">✓ Verified</span>
            </div>
            <div className="certification-card progress">
              <div className="cert-icon">🚀</div>
              <h4>Azure DevOps Engineer</h4>
              <p>AZ-400 • In Progress</p>
              <span className="status progress">🔄 75% Complete</span>
            </div>
            <div className="certification-card progress">
              <div className="cert-icon">🗄️</div>
              <h4>Azure Database Administrator</h4>
              <p>AZ-104 • In Progress</p>
              <span className="status progress">🔄 60% Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Interactive Skills Radar Chart Component
const SkillsRadarChart = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const skillCategories = {
    all: {
      label: 'All Skills',
      data: {
        labels: ['React', 'C#/.NET', 'Azure', 'Python', 'TypeScript', 'Node.js', 'SQL', 'Git', 'Docker', 'AI/ML'],
        datasets: [
          {
            label: 'Current Level',
            data: [90, 85, 90, 75, 85, 75, 80, 90, 75, 70],
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            borderColor: 'rgba(6, 182, 212, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(6, 182, 212, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    },
    frontend: {
      label: 'Frontend Development',
      data: {
        labels: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
        datasets: [
          {
            label: 'Frontend Skills',
            data: [90, 85, 80, 95, 90, 85],
            backgroundColor: 'rgba(168, 85, 247, 0.2)',
            borderColor: 'rgba(168, 85, 247, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(168, 85, 247, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    },
    backend: {
      label: 'Backend & Cloud',
      data: {
        labels: ['C#/.NET', 'Azure', 'Node.js', 'SQL Server', 'MongoDB', 'REST API'],
        datasets: [
          {
            label: 'Backend Skills',
            data: [85, 90, 75, 80, 70, 85],
            backgroundColor: 'rgba(6, 182, 212, 0.2)',
            borderColor: 'rgba(6, 182, 212, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(6, 182, 212, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    },
    ai: {
      label: 'AI/ML & Data',
      data: {
        labels: ['Python', 'TensorFlow', 'Azure ML', 'NLP', 'Computer Vision', 'Data Analysis'],
        datasets: [
          {
            label: 'AI/ML Skills',
            data: [75, 70, 80, 65, 60, 75],
            backgroundColor: 'rgba(236, 72, 153, 0.2)',
            borderColor: 'rgba(236, 72, 153, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(236, 72, 153, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    },
    devops: {
      label: 'DevOps & Tools',
      data: {
        labels: ['Git', 'Azure DevOps', 'Docker', 'CI/CD', 'Kubernetes', 'Monitoring'],
        datasets: [
          {
            label: 'DevOps Skills',
            data: [90, 85, 75, 80, 65, 75],
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderColor: 'rgba(16, 185, 129, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(16, 185, 129, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }
        ]
      }
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(6, 182, 212, 0.5)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed.r}%`;
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
          color: 'var(--text-secondary)',
          font: {
            size: 12
          }
        },
        grid: {
          color: 'var(--border-primary)',
          lineWidth: 1
        },
        angleLines: {
          color: 'var(--border-primary)',
          lineWidth: 1
        },
        pointLabels: {
          color: 'var(--text-primary)',
          font: {
            size: 14,
            weight: '600'
          },
          padding: 20
        }
      }
    },
    elements: {
      point: {
        hoverRadius: 8,
        radius: 6
      }
    }
  };

  return (
    <div className="skills-radar-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            <FaChartLine className="title-icon" />
            Skills Visualization
          </h2>
          <div className="title-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
          <p className="section-subtitle">
            Interactive radar chart showcasing my technical expertise across different domains.
          </p>
        </div>
        
        <div className="radar-controls">
          {Object.keys(skillCategories).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`radar-category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {skillCategories[category].label}
            </button>
          ))}
        </div>
        
        <div className="radar-chart-container">
          <div className="radar-chart-wrapper">
            <Radar 
              data={skillCategories[selectedCategory].data} 
              options={chartOptions}
              height={400}
            />
          </div>
          
          <div className="radar-stats">
            <div className="stat-item">
              <div className="stat-number">
                {Math.round(
                  skillCategories[selectedCategory].data.datasets[0].data.reduce((a, b) => a + b, 0) / 
                  skillCategories[selectedCategory].data.datasets[0].data.length
                )}
              </div>
              <div className="stat-label">Average Skill Level</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {skillCategories[selectedCategory].data.labels.length}
              </div>
              <div className="stat-label">Skills Tracked</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {Math.max(...skillCategories[selectedCategory].data.datasets[0].data)}
              </div>
              <div className="stat-label">Highest Skill</div>
            </div>
          </div>
        </div>
        
        <div className="radar-insights">
          <h3 className="insights-title">Key Insights</h3>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🚀</div>
              <h4>Frontend Excellence</h4>
              <p>Strong expertise in React, TypeScript, and modern CSS frameworks</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">☁️</div>
              <h4>Cloud Native</h4>
              <p>Deep knowledge of Azure services and cloud architecture</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🤖</div>
              <h4>AI/ML Enthusiast</h4>
              <p>Growing expertise in machine learning and AI applications</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">⚙️</div>
              <h4>DevOps Ready</h4>
              <p>Proficient in CI/CD, containerization, and automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Footer Section
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="brand-logo">
              <FaBrain className="logo-icon" />
              <span>Nicolette Mashaba</span>
            </div>
            <p className="brand-description">
              AI-Powered Full-Stack Developer specializing in Azure cloud solutions, 
              machine learning, and innovative web applications.
            </p>
            <div className="social-links">
              <a href="mailto:nene171408@gmail.com" className="social-link" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/nene171408" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="#azure" className="social-link" title="Azure Certifications">
                <FaCloud />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Navigation</h4>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#azure">Azure</a>
              <a href="#ai-projects">AI Projects</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="link-group">
              <h4>Expertise</h4>
              <a href="#azure">Azure Cloud</a>
              <a href="#ai-projects">AI/ML</a>
              <a href="#skills">Full-Stack</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
            </div>
            
            <div className="link-group">
              <h4>Technologies</h4>
              <span>C#/.NET</span>
              <span>React</span>
              <span>Azure</span>
              <span>Python</span>
              <span>AI/ML</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; {currentYear} Nicolette Mashaba. All rights reserved.</p>
            <p>Made with <span className="heart">♥</span> and AI</p>
          </div>
          
          <div className="footer-badges">
            <span className="badge">Azure Certified</span>
            <span className="badge">AI Enthusiast</span>
            <span className="badge">Full-Stack Developer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [aiChatOpen, setAIChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="app-container">
        <Navigation />
        <NeuralNetworkCanvas />
        
        <main className="main-content">
          <Hero onOpenAIChat={() => setAIChatOpen(true)} />
          <AboutSection />
          <SkillsSection />
          <SkillsRadarChart />
          <AzureSection />
          <AIProjectsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <FloatingAIOrb onClick={() => setAIChatOpen(open => !open)} isActive={aiChatOpen} />
        <AIAssistant isOpen={aiChatOpen} onClose={() => setAIChatOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default App;
