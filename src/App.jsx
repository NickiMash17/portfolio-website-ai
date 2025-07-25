import React, { useState, useEffect, useRef, useCallback } from 'react';

// Add icon components for each main tech (React, Next.js, TypeScript, etc.) at the top
const IconReact = () => (<svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="#61dafb"/><ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="1.5" fill="none"/><ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 12 12)"/><ellipse rx="10" ry="4.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 12 12)"/></svg>);
const IconNext = () => (<svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 32 32" fill="none"><path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 7.163 16 16 16s16-7.163 16-16C32 7.163 24.837 0 16 0zm0 29.818C8.56 29.818 2.182 23.44 2.182 16S8.56 2.182 16 2.182 29.818 8.56 29.818 16 23.44 29.818 16 29.818z" fill="#fff"/><path d="M23.636 23.636L8.364 8.364" stroke="#000" strokeWidth="2"/></svg>);
const IconTS = () => (<svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#3178c6"/><text x="7" y="22" fontSize="14" fill="#fff">TS</text></svg>);
const IconJS = () => (<svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="6" fill="#f7df1e"/><text x="7" y="22" fontSize="14" fill="#000">JS</text></svg>);
const IconTailwind = () => (<svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 32 32" fill="none"><path d="M16 10c-4 0-6 2-8 6 2-4 4-6 8-6s6 2 8 6c-2-4-4-6-8-6zm0 4c-2 0-3 1-4 3 1-2 2-3 4-3s3 1 4 3c-1-2-2-3-4-3z" fill="#38bdf8"/></svg>);

// SVG ICONS
const IconRobot = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="#06b6d4"/><rect x="9" y="9" width="6" height="6" rx="3" fill="#fff"/><circle cx="10" cy="11" r="1" fill="#06b6d4"/><circle cx="14" cy="11" r="1" fill="#06b6d4"/></svg>
);
const IconBriefcase = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" fill="#06b6d4"/><rect x="8" y="3" width="8" height="4" rx="1" fill="#fff"/><rect x="1" y="7" width="22" height="2" fill="#0ea5e9"/></svg>
);
const IconDownload = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="18" width="16" height="2" rx="1" fill="#0ea5e9"/></svg>
);
const IconMail = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" fill="#06b6d4"/><polyline points="3,7 12,13 21,7" fill="none" stroke="#fff" strokeWidth="2"/></svg>
);
const IconLinkedIn = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="2" fill="#0ea5e9"/><rect x="6" y="8" width="3" height="8" fill="#fff"/><rect x="10.5" y="11" width="3" height="5" fill="#fff"/><circle cx="7.5" cy="6" r="1.5" fill="#fff"/></svg>
);
const IconGitHub = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff" stroke="#06b6d4" strokeWidth="2"/><path d="M9 19c-4-2 0-6 0-6m6 6c4-2 0-6 0-6" stroke="#0ea5e9" strokeWidth="2"/><circle cx="9" cy="10" r="1" fill="#06b6d4"/><circle cx="15" cy="10" r="1" fill="#06b6d4"/></svg>
);

// Add SVGs for badge icons
const IconChart = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><rect x="3" y="12" width="4" height="8" rx="1" fill="#06b6d4"/><rect x="9" y="8" width="4" height="12" rx="1" fill="#8b5cf6"/><rect x="15" y="4" width="4" height="16" rx="1" fill="#ec4899"/></svg>
);
const IconLightning = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" fill="#f59e0b"/></svg>
);
const IconRocket = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d="M12 2C15 6 22 8 22 8s-2 7-6 10c-4 3-10 2-10 2s2-7 6-10c4-3 10-2 10-2z" fill="#f97316"/><circle cx="12" cy="12" r="2" fill="#fff"/></svg>
);
const IconAI = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a855f7"/><rect x="9" y="9" width="6" height="6" rx="3" fill="#fff"/><circle cx="10" cy="11" r="1" fill="#a855f7"/><circle cx="14" cy="11" r="1" fill="#a855f7"/></svg>
);
const IconArrowDown = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m0 0l-7-7m7 7l7-7" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

// 1. Add SVGs for About interests
const IconInterestAI = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a855f7"/><rect x="9" y="9" width="6" height="6" rx="3" fill="#fff"/><circle cx="10" cy="11" r="1" fill="#a855f7"/><circle cx="14" cy="11" r="1" fill="#a855f7"/></svg>
);
const IconInterestCloud = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><ellipse cx="12" cy="15" rx="8" ry="5" fill="#38bdf8"/><ellipse cx="16" cy="13" rx="4" ry="3" fill="#a5b4fc"/><ellipse cx="8" cy="13" rx="3" ry="2" fill="#f472b6"/></svg>
);
const IconInterestRocket = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><path d="M12 2C15 6 22 8 22 8s-2 7-6 10c-4 3-10 2-10 2s2-7 6-10c4-3 10-2 10-2z" fill="#f97316"/><circle cx="12" cy="12" r="2" fill="#fff"/></svg>
);
const IconInterestBook = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="7" height="14" rx="2" fill="#fbbf24"/><rect x="14" y="5" width="7" height="14" rx="2" fill="#38bdf8"/></svg>
);
const IconInterestDesign = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" fill="#f472b6"/><rect x="8" y="8" width="8" height="8" rx="2" fill="#fff"/></svg>
);
const IconInterestBolt = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" fill="#f59e0b"/></svg>
);

// Advanced Neural Network Background Animation
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

    // Initialize neural network nodes
    const initializeNetwork = () => {
      nodesRef.current = [];
      connectionsRef.current = [];
      
      for (let i = 0; i < 80; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          pulse: Math.random() * Math.PI * 2,
          color: Math.random() > 0.7 ? '#ec4899' : '#00d4ff'
        });
      }
    };

    initializeNetwork();

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += 0.02;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node with pulsing effect
        const pulseRadius = Math.max(0.1, node.radius + Math.sin(node.pulse) * 2);
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseRadius * 2);
        gradient.addColorStop(0, node.color + '80');
        gradient.addColorStop(1, node.color + '00');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        nodesRef.current.slice(i + 1).forEach(otherNode => {
          const distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
          if (distance < 150) {
            const opacity = (150 - distance) / 150;
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.3})`;
            ctx.lineWidth = opacity * 2;
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
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%)' }}
    />
  );
};

// Helper: Get current section in view for nav highlight
const useActiveSection = (sectionIds) => {
  const [active, setActive] = useState(sectionIds[0]);
  useEffect(() => {
    const handleScroll = () => {
      let found = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 80 >= el.offsetTop) found = id;
      }
      setActive(found);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);
  return active;
};

// Professional Navigation (with active link highlight, improved focus/hover, closes mobile menu on link click, divider)
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];
  const active = useActiveSection(navItems.map(n => n.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-cyan-400/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#hero" className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
              Nicolette Mashaba
            </a>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <a key={item.name} href={item.href}
                   className={`relative text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium group focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${active === item.id ? 'text-cyan-400' : ''}`}
                   tabIndex={0}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 ${active === item.id ? 'w-full opacity-100' : 'w-0 opacity-0'} group-hover:w-full group-hover:opacity-100`}></span>
                </a>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-gray-900/95 backdrop-blur-lg rounded-lg mb-4 p-4">
              {navItems.map(item => (
                <a key={item.name} href={item.href}
                   onClick={handleNavClick}
                   className={`block py-2 text-gray-300 hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${active === item.id ? 'text-cyan-400' : ''}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
        {/* Subtle divider/shadow below nav */}
        <div className="w-full h-2 bg-gradient-to-b from-cyan-400/10 via-transparent to-transparent shadow-lg" />
      </nav>
    </>
  );
};

// AI-Powered Chat Assistant with Professional Responses
const AIAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: "👋 Hi! I'm Nicolette's AI assistant. I can help you learn about her experience, skills, and projects. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const professionalResponses = {
    skills: "Nicolette is a full-stack developer with expertise in C#/.NET, React, Azure cloud services, and AI/ML. She's Microsoft Azure certified and specializes in building scalable web applications with modern tech stacks.",
    experience: "She has 3+ years of development experience, including freelance full-stack development, AI training at Outier AI, and leadership experience from her naval service. She's worked on 10+ web applications across various industries.",
    projects: "Her portfolio includes innovative projects like the Meteora Weather App with real-time forecasting, TechShop Pro e-commerce platform, and AI Resume Analyzer. Each project demonstrates her technical skills and creativity.",
    certifications: "Nicolette holds Azure Data Fundamentals and Azure Developer Associate certifications, with Azure DevOps Engineer and Database Administrator certifications in progress. This shows her commitment to continuous learning.",
    contact: "You can reach Nicolette at nene171408@gmail.com or connect with her on LinkedIn. She's based in Polokwane, South Africa and available for remote opportunities worldwide.",
    ai: "Nicolette is passionate about AI and machine learning. She's worked as an AI Trainer at Outier AI, integrated AI features into her projects, and stays current with the latest AI technologies and trends.",
    hire: "Nicolette would be a great addition to your team! She combines technical expertise with creativity, has proven experience delivering projects, and brings a unique perspective from her diverse background.",
    default: "That's a great question! Nicolette is always excited to discuss new opportunities and technical challenges. Feel free to reach out to her directly for more detailed information."
  };
  
  const getResponse = (input) => {
    const lower = input.toLowerCase();
    if (lower.includes('skill') || lower.includes('technology') || lower.includes('tech')) return professionalResponses.skills;
    if (lower.includes('experience') || lower.includes('work') || lower.includes('job')) return professionalResponses.experience;
    if (lower.includes('project') || lower.includes('portfolio') || lower.includes('work')) return professionalResponses.projects;
    if (lower.includes('certification') || lower.includes('azure') || lower.includes('microsoft')) return professionalResponses.certifications;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return professionalResponses.contact;
    if (lower.includes('ai') || lower.includes('artificial') || lower.includes('machine learning')) return professionalResponses.ai;
    if (lower.includes('hire') || lower.includes('recruit') || lower.includes('job') || lower.includes('opportunity')) return professionalResponses.hire;
    return professionalResponses.default;
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
    <div className="fixed bottom-24 right-8 w-96 h-[500px] bg-gray-900/98 backdrop-blur-sm border border-cyan-400/30 rounded-2xl shadow-2xl shadow-cyan-400/20 z-50 flex flex-col">
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <h3 className="text-cyan-400 font-bold">AI Career Assistant</h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-xl">×</button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
              message.type === 'user' 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white' 
                : 'bg-gray-800 text-gray-100 border border-gray-700'
            }`}>
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-800 border border-gray-700 p-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4 border-t border-gray-700">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask about skills, experience, projects..."
            className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-xl text-white text-sm outline-none focus:border-cyan-400 transition-colors"
          />
          <button
            onClick={handleSendMessage}
            className="px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold text-sm hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Floating AI Orb
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
      className={`fixed bottom-8 right-8 z-50 cursor-pointer transition-all duration-500 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
      onClick={onClick}
    >
      <div 
        className="relative w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse shadow-2xl"
        style={{
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
          transform: `rotate(${rotation}deg)`
        }}
      >
        <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-spin">
            <div className="w-full h-full rounded-full bg-gray-900 scale-75 flex items-center justify-center">
              <span className="text-cyan-400 text-xs font-bold">AI</span>
            </div>
          </div>
        </div>
        {[...Array(3)].map((_, i) => (
          <div key={i}
               className="absolute w-2 h-2 bg-cyan-400 rounded-full"
               style={{
                 top: '50%',
                 left: '50%',
                 transform: `translate(-50%, -50%) rotate(${rotation + i * 120}deg) translateY(-35px)`,
                 boxShadow: '0 0 10px currentColor'
               }} />
        ))}
      </div>
    </div>
  );
};

// Revolutionary Hero Section
const Hero = ({ onOpenAIChat }) => {
  const [currentTech, setCurrentTech] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  const technologies = [
    "Full-Stack Developer | AI Enthusiast | Azure Expert",
    "C# • .NET • ASP.NET Core • Entity Framework",
    "React • TypeScript • Next.js • Tailwind CSS",
    "Azure • DevOps • SQL • MongoDB • AI/ML",
    "Building Tomorrow's Technology Today"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % technologies.length);
    }, 3000);
    
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) * 0.02,
        y: (e.clientY - window.innerHeight / 2) * 0.02
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 mt-32">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div key={i}
               className="absolute animate-pulse"
               style={{
                 left: `${10 + (i * 6)}%`,
                 top: `${15 + (i * 5)}%`,
                 animationDuration: `${3 + i}s`,
                 animationDelay: `${i * 0.5}s`
               }}>
            <div className={`w-2 h-2 border border-cyan-400 opacity-30 ${
              i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full' : 'rotate-12'
            }`} />
          </div>
        ))}
      </div>

      <div className={`text-center z-10 px-4 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`} style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}>
        
        <div className="mb-8 md:mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.8)) drop-shadow(0 0 40px rgba(236, 72, 153, 0.6))',
                textShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)',
              }}>
            NICOLETTE
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-2">Mashaba</div>
        </div>

        <div className="relative mb-6 md:mb-8">
          <div className="h-16 flex items-center justify-center">
            <div className="text-xl md:text-2xl lg:text-3xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 typewriter">
              {technologies[currentTech]}
            </div>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="bg-gray-800/60 backdrop-blur-lg border border-green-400/50 rounded-full px-6 py-3 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold">Available for Hire</span>
          </div>
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-14">
          {[
            { name: "Azure Data Expert", icon: <IconChart />, color: "from-blue-500 to-cyan-500" },
            { name: "Azure Developer Pro", icon: <IconLightning />, color: "from-green-500 to-emerald-500" },
            { name: "3+ Years Master", icon: <IconRocket />, color: "from-orange-500 to-red-500" },
            { name: "AI Innovation", icon: <IconAI />, color: "from-purple-500 to-pink-500" }
          ].map((cert, i) => (
            <div key={cert.name} 
                 className={`bg-gradient-to-r ${cert.color} p-0.5 rounded-full animate-pulse`}
                 style={{ animationDelay: `${i * 0.5}s` }}>
              <div className="bg-gray-900 rounded-full px-4 py-2 flex items-center gap-2">
                {cert.icon}
                <span className="text-sm font-medium text-white">{cert.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto mb-10">
          <div className="bg-gray-900/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl"
               style={{
                 background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(236, 72, 153, 0.1))',
                 boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              <strong className="text-white">Microsoft Azure Certified</strong> Full-Stack Developer passionate about 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 font-semibold"> AI-driven solutions</span> and modern web technologies.
              <br />
              Ready to bring innovation and technical excellence to your team.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 md:mb-16">
          <button className="group relative px-12 py-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-bold rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25"
                   onClick={onOpenAIChat}>
            <span className="relative z-10 flex items-center gap-2">
              <IconRobot /> Chat with My AI Assistant
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          
          <a href="#contact" className="group relative px-12 py-4 border-2 border-transparent bg-gradient-to-r from-cyan-400 to-pink-500 p-0.5 rounded-full transition-all duration-500 transform hover:scale-105">
            <div className="bg-gray-900 rounded-full px-10 py-3 group-hover:bg-transparent transition-all duration-500">
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent group-hover:text-white flex items-center gap-2">
                <IconBriefcase /> Hire Me
              </span>
            </div>
          </a>
          
          <a href="/resume.pdf" download className="group relative px-12 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2">
            <IconDownload /> Download Resume
          </a>
        </div>
      </div>

      <style>{`
        .typewriter {
          animation: typewriter 3s steps(40, end), blink 0.75s step-end infinite;
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          from, to { border-color: transparent; }
          50% { border-color: currentColor; }
        }
        .hero-title {
          font-size: clamp(2.5rem, 10vw, 8rem);
          font-weight: 900;
          background: linear-gradient(90deg, #06b6d4, #a21caf, #ec4899, #06b6d4);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shimmer 4s linear infinite;
          text-shadow: 0 0 40px #06b6d4aa, 0 0 80px #ec489988;
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes hero-fade-in { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        .animate-hero-fade-in { animation: hero-fade-in 1.2s cubic-bezier(0.4,0,0.2,1) 0.2s both; }
        .animate-blink-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
};

// About Section
const About = () => {
  const [tab, setTab] = useState('overview');
  
  const tabContent = {
    overview: {
      title: "Professional Overview",
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate <strong className="text-cyan-400">Full-Stack Developer</strong> with 3+ years of experience 
            building scalable web applications and AI-powered solutions. Based in South Africa, I specialize in modern 
            technologies including C#/.NET, React, and Microsoft Azure cloud services.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My unique background combines technical expertise with leadership experience from my naval service, 
            giving me strong problem-solving skills and the ability to work effectively under pressure.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-pink-400">3+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      )
    },
    education: {
      title: "Education & Training",
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-cyan-400 pl-4">
            <h4 className="font-bold text-white">Agile Software Development Bootcamp</h4>
            <p className="text-cyan-400">TechBridle • 2025</p>
            <p className="text-gray-400 text-sm">Advanced training in Agile methodologies and modern development practices</p>
          </div>
          <div className="border-l-4 border-pink-400 pl-4">
            <h4 className="font-bold text-white">NQF Level 6 - Software Engineering</h4>
            <p className="text-pink-400">CTU Training Solutions • 2023-2025</p>
            <p className="text-gray-400 text-sm">Comprehensive software engineering program covering full-stack development</p>
          </div>
          <div className="border-l-4 border-purple-400 pl-4">
            <h4 className="font-bold text-white">NQF Level 4 - Programming Foundation</h4>
            <p className="text-purple-400">CTU Training Solutions • 2022-2023</p>
            <p className="text-gray-400 text-sm">Strong foundation in programming principles and software development</p>
          </div>
        </div>
      )
    },
    interests: {
      title: "Interests & Passion Projects",
      content: (
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: <IconInterestAI />, title: "AI & Machine Learning", desc: "Exploring neural networks and AI applications" },
            { icon: <IconInterestCloud />, title: "Cloud Architecture", desc: "Building scalable Azure solutions" },
            { icon: <IconInterestRocket />, title: "Innovation", desc: "Creating cutting-edge web experiences" },
            { icon: <IconInterestBook />, title: "Continuous Learning", desc: "Always expanding technical knowledge" },
            { icon: <IconInterestDesign />, title: "UI/UX Design", desc: "Crafting beautiful user interfaces" },
            { icon: <IconInterestBolt />, title: "Performance Optimization", desc: "Making applications faster and efficient" }
          ].map((interest, i) => (
            <div key={i} className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800/70 transition-colors">
              <div className="text-2xl mb-2">{interest.icon}</div>
              <h4 className="font-semibold text-white mb-1">{interest.title}</h4>
              <p className="text-gray-400 text-sm">{interest.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Where technical expertise meets creative innovation. Learn more about my journey, education, and interests below.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gray-900/80 rounded-2xl p-6 shadow-2xl border border-cyan-400/20 mb-8">
              <img src="/images/myself.jpg" alt="Nicolette Mashaba" className="w-full h-56 object-cover rounded-xl mb-4" />
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400 mb-1">Nicolette Mashaba</div>
                <div className="text-gray-400 text-sm mb-2">Full-Stack Developer</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-medium">Azure Certified</span>
                  <span className="bg-pink-400/20 text-pink-400 px-3 py-1 rounded-full text-xs font-medium">AI Enthusiast</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/80 rounded-2xl p-6 shadow-2xl border border-cyan-400/20">
              <div className="flex flex-col gap-2">
                <a href="mailto:nene171408@gmail.com" className="text-cyan-400 hover:underline">nene171408@gmail.com</a>
                <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>
                <span className="text-gray-400 text-xs">Polokwane, South Africa</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="flex gap-4 mb-6">
              {Object.keys(tabContent).map(tabKey => (
                <button
                  key={tabKey}
                  onClick={() => setTab(tabKey)}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                    tab === tabKey
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-gray-800/80 text-cyan-400 hover:bg-gray-700 border border-cyan-400/30'
                  }`}
                >
                  {tabContent[tabKey].title}
                </button>
              ))}
            </div>
            <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl min-h-[300px]">
              {tabContent[tab].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Azure Certifications Section
const AzureCertifications = () => (
  <section id="certifications" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
          Microsoft Azure Certifications
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Demonstrating commitment to cloud-native development, data engineering, and DevOps practices.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Azure Data Fundamentals */}
        <a href="https://learn.microsoft.com/en-us/certifications/exams/dp-900/" target="_blank" rel="noopener noreferrer"
           className="group flex items-center gap-6 p-6 bg-gray-900/80 rounded-2xl border border-cyan-400/20 shadow-lg hover:scale-105 transition-transform hover:border-cyan-400/50">
          <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg"
               alt="Azure Data Fundamentals Badge" className="w-20 h-20 drop-shadow-xl group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-1">Azure Data Fundamentals</h3>
            <p className="text-gray-300 text-sm mb-2">DP-900 • Earned 2024</p>
            <span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-xs font-medium">Verified</span>
          </div>
        </a>
        {/* Azure Developer Associate */}
        <a href="https://learn.microsoft.com/en-us/certifications/exams/az-204/" target="_blank" rel="noopener noreferrer"
           className="group flex items-center gap-6 p-6 bg-gray-900/80 rounded-2xl border border-pink-400/20 shadow-lg hover:scale-105 transition-transform hover:border-pink-400/50">
          <img src="https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg"
               alt="Azure Developer Associate Badge" className="w-20 h-20 drop-shadow-xl group-hover:scale-110 transition-transform" />
          <div>
            <h3 className="text-xl font-bold text-pink-400 mb-1">Azure Developer Associate</h3>
            <p className="text-gray-300 text-sm mb-2">AZ-204 • Earned 2024</p>
            <span className="inline-block px-3 py-1 bg-pink-400/20 text-pink-400 rounded-full text-xs font-medium">Verified</span>
          </div>
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <span className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-white rounded-full font-bold animate-pulse">More certifications in progress...</span>
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-gray-900/95 border-t border-cyan-400/10 py-10 mt-20">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 mb-2">Nicolette Mashaba</div>
        <div className="text-gray-400 text-sm mb-2">Full-Stack Developer • AI/ML • Azure Certified</div>
        <div className="flex gap-4 justify-center md:justify-start mb-2">
          <a href="#hero" className="text-cyan-400 hover:underline text-sm">Home</a>
          <a href="#about" className="text-cyan-400 hover:underline text-sm">About</a>
          <a href="#projects" className="text-cyan-400 hover:underline text-sm">Projects</a>
          <a href="#certifications" className="text-cyan-400 hover:underline text-sm">Certifications</a>
          <a href="#contact" className="text-cyan-400 hover:underline text-sm">Contact</a>
        </div>
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="mailto:nene171408@gmail.com" className="text-gray-400 hover:text-cyan-400 text-xl" title="Email"><IconMail /></a>
          <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-xl" title="LinkedIn"><IconLinkedIn /></a>
          <a href="https://github.com/nene171408" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 text-xl" title="GitHub"><IconGitHub /></a>
        </div>
      </div>
      <div className="text-center md:text-right text-gray-500 text-xs mt-6 md:mt-0">
        <div>&copy; {new Date().getFullYear()} Nicolette Mashaba. All rights reserved.</div>
        <div>Made with <span className="text-pink-400">♥</span> and AI.</div>
      </div>
    </div>
  </footer>
);

// Matrix Rain Effect for Projects Section
const MatrixRain = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = 500; // Section height
    let fontSize = 18;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);
    const matrix = 'アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const chars = matrix.split('');

    const resize = () => {
      width = window.innerWidth;
      canvas.width = width;
      canvas.height = height;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.08)';
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px monospace';
      ctx.shadowColor = '#00d4ff';
      ctx.shadowBlur = 8;
      for (let i = 0; i < columns; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = i % 7 === 0 ? '#ec4899' : '#00d4ff';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      ctx.shadowBlur = 0;
    };
    animationRef.current = setInterval(draw, 50);
    return () => {
      clearInterval(animationRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 opacity-40 pointer-events-none"
      style={{ minHeight: 500 }}
    />
  );
};

// Projects Section with Matrix Rain Background and Filtering
const projectsData = [
  {
    id: 1,
    title: 'AI Resume Analyzer',
    description: 'AI-powered system that analyzes resumes using deep learning and NLP for intelligent feedback and job matching.',
    tech: ['Python', 'TensorFlow', 'React'],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'TechShop Pro',
    description: 'Intelligent e-commerce platform with AI recommendations, dynamic pricing, and real-time inventory management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Meteora Weather App',
    description: 'Beautiful weather app with real-time forecasting and predictive analytics using weather pattern recognition.',
    tech: ['React', 'APIs', 'AI'],
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'BookReview App',
    description: 'Full-stack web app for book lovers to review, rate, and discover new reads. Includes user auth and recommendations.',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio site showcasing projects, skills, and certifications. Built with modern frontend tech.',
    tech: ['React', 'Tailwind CSS'],
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'Neural Network Trading Bot',
    description: 'Autonomous crypto trading system using LSTM networks and reinforcement learning for market prediction.',
    tech: ['Python', 'LSTM', 'Reinforcement Learning'],
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 7,
    title: 'Cloud-Native Microservices',
    description: 'Scalable microservices architecture on Azure with Kubernetes, API gateways, and distributed caching.',
    tech: ['C#', 'Azure', 'Kubernetes'],
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 8,
    title: 'AI-Powered Portfolio (This Site)',
    description: 'This portfolio: neural network animations, AI chat assistant, and responsive design.',
    tech: ['React', 'AI Assistant', 'Canvas API'],
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
  },
];

const projectCategories = ['All', 'Frontend', 'Full Stack', 'AI/ML'];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-black overflow-hidden">
      <MatrixRain />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">
            AI Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative applications at the intersection of artificial intelligence, cloud computing, and modern software engineering.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-400/25'
                  : 'bg-gray-800/80 text-cyan-400 hover:bg-gray-700 border border-cyan-400/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map(project => (
            <div key={project.id} className="group bg-gray-900/80 rounded-2xl border border-cyan-400/20 shadow-lg hover:scale-105 transition-transform overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${project.category === 'AI/ML' ? 'text-pink-400' : project.category === 'Full Stack' ? 'text-cyan-400' : 'text-purple-400'}`}>{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-xs font-medium border border-gray-600/50">{t}</span>
                  ))}
                </div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  project.category === 'AI/ML' ? 'bg-pink-400/20 text-pink-400' : project.category === 'Full Stack' ? 'bg-cyan-400/20 text-cyan-400' : 'bg-purple-400/20 text-purple-400'
                }`}>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Skills Section (restored, styled)
const Skills = () => (
  <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">A blend of modern web, cloud, and AI/ML technologies.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-cyan-400 font-bold mb-2">Frontend</h3>
          <ul className="space-y-2 text-gray-300">
            <li><IconReact />React, <IconNext />Next.js, <IconTS />TypeScript, <IconJS />JavaScript</li>
            <li><IconTailwind />Tailwind CSS, CSS3, HTML5</li>
            <li>Responsive & Accessible UI</li>
          </ul>
        </div>
        <div>
          <h3 className="text-pink-400 font-bold mb-2">Backend & Cloud</h3>
          <ul className="space-y-2 text-gray-300">
            <li>C#, .NET Core, Node.js, Express</li>
            <li>Azure, Azure DevOps, Docker, Kubernetes</li>
            <li>SQL Server, MongoDB, REST APIs</li>
          </ul>
        </div>
        <div>
          <h3 className="text-purple-400 font-bold mb-2">AI / ML</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Python, TensorFlow, Scikit-learn</li>
            <li>Natural Language Processing</li>
            <li>Machine Learning Integration</li>
          </ul>
        </div>
        <div>
          <h3 className="text-cyan-400 font-bold mb-2">Other</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Git, GitHub, Agile, CI/CD</li>
            <li>Unit Testing, Code Review</li>
            <li>Technical Writing, Mentoring</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// Contact Section (enhanced with social/contact icons)
const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">Contact</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">Let's connect! Reach out for opportunities, collaborations, or just to say hi.</p>
      </div>
      <form className="bg-gray-900/80 rounded-2xl p-8 shadow-2xl border border-cyan-400/20 flex flex-col gap-6">
        <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none" />
        <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none" />
        <textarea placeholder="Your Message" rows={5} className="p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none" />
        <button type="submit" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-300">Send Message</button>
      </form>
      <div className="text-center text-gray-400 mt-8">
        Or email me directly: <a href="mailto:nene171408@gmail.com" className="text-cyan-400 hover:underline">nene171408@gmail.com</a>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <a href="mailto:nene171408@gmail.com" className="text-cyan-400 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 animate-pulse-slow" title="Email"><IconMail /></a>
        <a href="https://www.linkedin.com/in/nicolette-mashaba/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 animate-pulse-slow" title="LinkedIn"><IconLinkedIn /></a>
        <a href="https://github.com/nene171408" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 animate-pulse-slow" title="GitHub"><IconGitHub /></a>
      </div>
      <style>{`
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  </section>
);

// Add TypewriterSubtitle component:
const TypewriterSubtitle = ({ text }) => {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 120);
    return () => clearInterval(interval);
  }, [text]);
  return <span className="inline-block animate-blink-cursor text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-2">{displayed}<span className="border-r-2 border-cyan-400 ml-1 animate-blink-cursor"></span></span>;
};

// Add scrollToProjects function in Hero:
const scrollToProjects = () => { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); };

// 4. Ensure Experience section exists and has id="experience"
const Experience = () => (
  <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4">Experience</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full mx-auto mb-4"></div>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">A timeline of my professional journey and roles.</p>
      </div>
      {/* Add your timeline or experience cards here */}
      <div className="space-y-8">
        <div className="bg-gray-900/80 rounded-2xl p-6 shadow-2xl border border-cyan-400/20">
          <h3 className="text-cyan-400 font-bold text-xl mb-2">Freelance Full Stack Developer</h3>
          <p className="text-gray-400 mb-1">2021 - Present</p>
          <p className="text-gray-300">Building modern web applications for clients in various industries.</p>
        </div>
        <div className="bg-gray-900/80 rounded-2xl p-6 shadow-2xl border border-cyan-400/20">
          <h3 className="text-pink-400 font-bold text-xl mb-2">AI Trainer</h3>
          <p className="text-gray-400 mb-1">2020 - 2021</p>
          <p className="text-gray-300">Developed and delivered AI/ML training content for students and professionals.</p>
        </div>
        <div className="bg-gray-900/80 rounded-2xl p-6 shadow-2xl border border-cyan-400/20">
          <h3 className="text-purple-400 font-bold text-xl mb-2">Navy</h3>
          <p className="text-gray-400 mb-1">2018 - 2020</p>
          <p className="text-gray-300">Served in the South African Navy, gaining discipline and teamwork skills.</p>
        </div>
      </div>
    </div>
  </section>
);

// Main App
const App = () => {
  const [aiChatOpen, setAIChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <NeuralNetworkCanvas />
      <main className="relative z-10">
        <Hero onOpenAIChat={() => setAIChatOpen(true)} />
        <About />
        <Skills />
        <AzureCertifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <FloatingAIOrb onClick={() => setAIChatOpen((open) => !open)} isActive={aiChatOpen} />
      <AIAssistant isOpen={aiChatOpen} onClose={() => setAIChatOpen(false)} />
    </div>
  );
};

export default App;
