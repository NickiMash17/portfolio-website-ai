import React, { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface Connection {
  from: Particle;
  to: Particle;
  opacity: number;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isVisible, setIsVisible] = useState(false);
  
  const particles = useRef<Particle[]>([]);
  const connections = useRef<Connection[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const isMouseMoving = useRef(false);

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    particles.current = [];
    connections.current = [];
    
    // Create fewer, larger particles
    for (let i = 0; i < 15; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.3
      });
    }
    
    // Create connections between nearby particles
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i + 1; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          connections.current.push({
            from: particles.current[i],
            to: particles.current[j],
            opacity: Math.random() * 0.3 + 0.1
          });
        }
      }
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update particles
    particles.current.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Bounce off edges
      if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
      if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
      
      // Keep particles in bounds
      particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      particle.y = Math.max(0, Math.min(canvas.height, particle.y));
    });
    
    // Draw connections (subtle lines)
    ctx.strokeStyle = 'rgba(100, 149, 237, 0.15)';
    ctx.lineWidth = 1;
    connections.current.forEach(connection => {
      ctx.beginPath();
      ctx.moveTo(connection.from.x, connection.from.y);
      ctx.lineTo(connection.to.x, connection.to.y);
      ctx.globalAlpha = connection.opacity;
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
    
    // Draw particles (subtle dots)
    particles.current.forEach(particle => {
      ctx.fillStyle = 'rgba(100, 149, 237, 0.4)';
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isVisible]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
  }, [createParticles]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
    isMouseMoving.current = true;
    
    // Clear timeout for mouse movement
    setTimeout(() => {
      isMouseMoving.current = false;
    }, 100);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isMouseMoving.current = false;
  }, []);

  const startAnimation = useCallback(() => {
    if (animationRef.current) return;
    setIsVisible(true);
    animate();
  }, [animate]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
    setIsVisible(false);
  }, []);

  // Initialize and cleanup
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Start animation immediately
    setIsVisible(true);
    startAnimation();
  
    return () => {
      window.removeEventListener('resize', handleResize);
      stopAnimation();
    };
  }, [handleResize, stopAnimation, startAnimation]);

  return (
    <canvas
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default NeuralBackground; 