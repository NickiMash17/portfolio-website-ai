import React, { useEffect, useRef, useCallback, useState } from 'react';

interface NeuralNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'input' | 'hidden' | 'output';
  size: number;
  energy: number;
  pulsePhase: number;
  targetX: number;
  targetY: number;
  connections: number[];
}

interface NeuralConnection {
  from: number;
  to: number;
  weight: number;
  pulsePosition: number;
  strength: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
  alpha: number;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<NeuralNode[]>([]);
  const connectionsRef = useRef<NeuralConnection[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const timeRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  // Performance optimization: Use Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          stopAnimation();
        }
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize neural network
  const initializeNetwork = useCallback((width: number, height: number) => {
    const nodes: NeuralNode[] = [];
    const connections: NeuralConnection[] = [];
          
    // Create layers with optimized positioning
          const layers = [
      { count: 4, x: width * 0.15, type: 'input' as const },
      { count: 6, x: width * 0.35, type: 'hidden' as const },
      { count: 8, x: width * 0.55, type: 'hidden' as const },
      { count: 6, x: width * 0.75, type: 'hidden' as const },
      { count: 4, x: width * 0.85, type: 'output' as const }
          ];

    let nodeIndex = 0;
          layers.forEach((layer, layerIndex) => {
            for (let i = 0; i < layer.count; i++) {
        const y = height * 0.2 + (height * 0.6 * i) / Math.max(layer.count - 1, 1);
        const randomOffset = (Math.random() - 0.5) * 40;
              
              nodes.push({
                x: layer.x + randomOffset,
                y: y + randomOffset,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
                type: layer.type,
          size: Math.random() * 4 + 3,
          energy: Math.random() * 0.5 + 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
                targetX: layer.x + randomOffset,
                targetY: y + randomOffset,
          connections: []
              });
        nodeIndex++;
            }
          });

    // Create optimized connections
          for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
      const currentLayerStart = layers.slice(0, layerIndex).reduce((sum, layer) => sum + layer.count, 0);
      const currentLayerEnd = currentLayerStart + layers[layerIndex].count;
      const nextLayerStart = currentLayerEnd;
      const nextLayerEnd = nextLayerStart + layers[layerIndex + 1].count;

      for (let i = currentLayerStart; i < currentLayerEnd; i++) {
        const connectionCount = Math.min(2, layers[layerIndex + 1].count);
        for (let j = 0; j < connectionCount; j++) {
          const targetIndex = nextLayerStart + Math.floor(Math.random() * layers[layerIndex + 1].count);
          if (targetIndex !== i) {
                  connections.push({
              from: i,
              to: targetIndex,
              weight: Math.random() * 2 - 1,
              pulsePosition: Math.random(),
              strength: Math.random() * 0.5 + 0.5
            });
            nodes[i].connections.push(targetIndex);
                }
              }
      }
          }
          
    nodesRef.current = nodes;
    connectionsRef.current = connections;
  }, []);

  // Create optimized particles
  const createParticles = useCallback((x: number, y: number, color: string, count: number = 3) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const speed = Math.random() * 2 + 1;
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: Math.random() * 30 + 30,
        size: Math.random() * 3 + 2,
        color,
        alpha: 1
      });
        }
  }, []);

  // Main animation loop with performance optimizations
  const animate = useCallback(() => {
    if (!canvasRef.current || !isVisible) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')!;
    const width = canvas.width;
    const height = canvas.height;
    const time = timeRef.current;
    const nodes = nodesRef.current;
    const connections = connectionsRef.current;
    const particles = particlesRef.current;

    // Clear canvas efficiently
    ctx.clearRect(0, 0, width, height);
          
    // Create subtle gradient background
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.8);
    gradient.addColorStop(0, 'rgba(17, 24, 39, 0.8)');
    gradient.addColorStop(0.5, 'rgba(17, 24, 39, 0.6)');
    gradient.addColorStop(1, 'rgba(17, 24, 39, 0.9)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Update and draw connections with WebGL-like optimization
    ctx.lineCap = 'round';
          connections.forEach(connection => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];
      if (!fromNode || !toNode) return;
            
      connection.pulsePosition += 0.015;
      if (connection.pulsePosition > 1) connection.pulsePosition = 0;

      const pulseAlpha = Math.sin(connection.pulsePosition * Math.PI) * 0.4 + 0.6;
            const weight = connection.weight;
      const strokeWidth = Math.abs(weight) * 1.5 + 0.5;
      
      // Draw connection with glow effect
      ctx.strokeStyle = weight > 0 
        ? `rgba(52, 211, 153, ${pulseAlpha * 0.6})`
        : `rgba(248, 113, 113, ${pulseAlpha * 0.6})`;
      ctx.lineWidth = strokeWidth + 1;
      ctx.beginPath();
      ctx.moveTo(fromNode.x, fromNode.y);
      ctx.lineTo(toNode.x, toNode.y);
      ctx.stroke();

      // Add data flow particles occasionally
      if (Math.random() < 0.05) {
        const t = Math.random();
        const x = fromNode.x + (toNode.x - fromNode.x) * t;
        const y = fromNode.y + (toNode.y - fromNode.y) * t;
        createParticles(x, y, weight > 0 ? '#34d399' : '#f87171', 1);
            }
          });

    // Update and draw particles efficiently
    particlesRef.current = particles.filter(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= 1;
      particle.vy += 0.02;
      particle.alpha = particle.life / particle.maxLife;
            
            if (particle.life > 0) {
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
              return true;
            }
            return false;
          });

          // Update and draw nodes with enhanced effects
          nodes.forEach(node => {
      // Smooth movement towards target
      node.x += (node.targetX - node.x) * 0.01;
      node.y += (node.targetY - node.y) * 0.01;
            
            // Add subtle floating motion
      node.x += Math.sin(time * 0.5 + node.x * 0.01) * 0.2;
      node.y += Math.cos(time * 0.3 + node.y * 0.01) * 0.2;

      // Update properties
      node.pulsePhase += 0.02;
      node.energy = Math.sin(time * 0.01 + node.y * 0.01) * 0.2 + 0.8;

            // Mouse interaction
      const mouseDist = Math.sqrt((mouseRef.current.x - node.x) ** 2 + (mouseRef.current.y - node.y) ** 2);
      if (mouseDist < 80 && mouseRef.current.active) {
        node.energy = Math.min(node.energy + 0.05, 1.2);
        if (Math.random() < 0.03) {
          const colors = { input: '#00d4ff', hidden: '#a855f7', output: '#ff007a' };
          createParticles(node.x, node.y, colors[node.type], 2);
              }
            }

            // Draw node with enhanced effects
      const pulseSize = node.size + Math.sin(node.pulsePhase) * 1.5;
      const glowSize = pulseSize * 2.5 + node.energy * 8;
            
      // Multiple glow layers for depth
            for (let i = 3; i > 0; i--) {
              const layerSize = glowSize * (i / 3);
        const layerAlpha = (node.energy * 0.4) * (i / 3) * 0.3;
        
        const colors = { 
          input: `rgba(0, 212, 255, ${layerAlpha})`, 
          hidden: `rgba(168, 85, 247, ${layerAlpha})`, 
          output: `rgba(255, 0, 122, ${layerAlpha})` 
        };
        
        ctx.fillStyle = colors[node.type];
        ctx.beginPath();
        ctx.arc(node.x, node.y, layerSize, 0, Math.PI * 2);
        ctx.fill();
            }

            // Core node
      const colors = { 
        input: '#00d4ff', 
        hidden: '#a855f7', 
        output: '#ff007a' 
      };
      
      ctx.fillStyle = colors[node.type];
      ctx.beginPath();
      ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
      ctx.fill();

            // Inner highlight
      ctx.fillStyle = `rgba(255, 255, 255, ${node.energy * 0.6})`;
      ctx.beginPath();
      ctx.arc(node.x - pulseSize * 0.3, node.y - pulseSize * 0.3, pulseSize * 0.4, 0, Math.PI * 2);
      ctx.fill();
          });

    // Add ambient particles occasionally
    if (Math.random() < 0.2) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const colors = ['#00d4ff', '#a855f7', '#ff007a'];
      createParticles(x, y, colors[Math.floor(Math.random() * colors.length)], 1);
    }

    timeRef.current += 0.016;
    animationRef.current = requestAnimationFrame(animate);
  }, [isVisible, createParticles]);

  // Start/stop animation for performance
  const startAnimation = useCallback(() => {
    if (!animationRef.current && isVisible) {
      animationRef.current = requestAnimationFrame(animate);
          }
  }, [animate, isVisible]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
        }
  }, []);

  // Handle canvas resize efficiently
  const handleResize = useCallback(() => {
    if (!canvasRef.current) return;
          
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size with device pixel ratio for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    
    const ctx = canvas.getContext('2d')!;
    ctx.scale(dpr, dpr);
    
    // Reinitialize network with new dimensions
    initializeNetwork(rect.width, rect.height);
  }, [initializeNetwork]);

  // Mouse event handlers with throttling
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current.x = event.clientX - rect.left;
      mouseRef.current.y = event.clientY - rect.top;
      mouseRef.current.active = true;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false;
  }, []);

  // Initialize and cleanup
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      stopAnimation();
    };
  }, [handleResize, stopAnimation]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, [stopAnimation]);

  return (
    <canvas
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        background: `
          radial-gradient(circle at 20% 80%, rgba(0,212,255,0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255,0,122,0.1) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 70%)
        `
      }}
    />
  );
};

export default NeuralBackground; 