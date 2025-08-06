import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 'input' | 'hidden' | 'output';
  rotation: number;
  glowIntensity: number;
  dataFlow: number;
  activity: number;
}

interface Connection {
  from: Node;
  to: Node;
  weight: number;
  activity: number;
  pulsePosition: number;
}

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const sketch = (p: p5) => {
      let nodes: Node[] = [];
      let connections: Connection[] = [];
      let width: number;
      let height: number;

      p.setup = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        const canvas = p.createCanvas(width, height);
        canvas.parent(canvasRef.current!);
        p.frameRate(60);
        
        // Initialize neural network layers
        const layers = [
          { count: 6, x: width * 0.15, type: 'input' as const },
          { count: 10, x: width * 0.35, type: 'hidden' as const },
          { count: 12, x: width * 0.55, type: 'hidden' as const },
          { count: 8, x: width * 0.75, type: 'hidden' as const },
          { count: 4, x: width * 0.9, type: 'output' as const }
        ];

        // Create nodes for each layer
        layers.forEach((layer, layerIndex) => {
          for (let i = 0; i < layer.count; i++) {
            const y = height * 0.2 + (height * 0.6 * i) / (layer.count - 1);
            const randomOffset = p.random(-20, 20);
            
            nodes.push({
              x: layer.x + randomOffset,
              y: y + randomOffset,
              vx: p.random(-0.5, 0.5),
              vy: p.random(-0.5, 0.5),
              type: layer.type,
              rotation: p.random(p.TWO_PI),
              glowIntensity: p.random(0.3, 1),
              dataFlow: 0,
              activity: p.random(0.3, 0.8)
            });
          }
        });

        // Create connections between layers
        for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex++) {
          const currentLayerNodes = nodes.filter((_, index) => {
            const nodeIndex = nodes.indexOf(_);
            return nodeIndex >= layers.slice(0, layerIndex).reduce((sum, layer) => sum + layer.count, 0) &&
                   nodeIndex < layers.slice(0, layerIndex + 1).reduce((sum, layer) => sum + layer.count, 0);
          });
          
          const nextLayerNodes = nodes.filter((_, index) => {
            const nodeIndex = nodes.indexOf(_);
            return nodeIndex >= layers.slice(0, layerIndex + 1).reduce((sum, layer) => sum + layer.count, 0) &&
                   nodeIndex < layers.slice(0, layerIndex + 2).reduce((sum, layer) => sum + layer.count, 0);
          });

          // Connect each node in current layer to multiple nodes in next layer
          currentLayerNodes.forEach(fromNode => {
            const connectionCount = p.random(2, 4);
            for (let i = 0; i < connectionCount; i++) {
              const toNode = p.random(nextLayerNodes);
              if (toNode && fromNode !== toNode) {
                connections.push({
                  from: fromNode,
                  to: toNode,
                  weight: p.random(-1, 1),
                  activity: p.random(0.2, 0.8),
                  pulsePosition: p.random(0, 1)
                });
              }
            }
          });
        }
      };

      p.draw = () => {
        p.clear();
        
        // Update canvas size if window resizes
        if (width !== window.innerWidth || height !== window.innerHeight) {
          width = window.innerWidth;
          height = window.innerHeight;
          p.resizeCanvas(width, height);
        }

        // Update nodes
        nodes.forEach(node => {
          // Update position with damping
          node.x += node.vx * 0.5;
          node.y += node.vy * 0.5;
          
          // Gentle boundary handling
          if (node.x < width * 0.05 || node.x > width * 0.95) {
            node.vx *= -0.9;
          }
          if (node.y < height * 0.05 || node.y > height * 0.95) {
            node.vy *= -0.9;
          }
          
          // Update rotation
          node.rotation += 0.01;
          
          // Update activity with oscillation
          node.activity += p.sin(p.frameCount * 0.02) * 0.01;
          node.activity = p.constrain(node.activity, 0.2, 1);
          
          // Update data flow
          node.dataFlow += 0.02;
          if (node.dataFlow > 1) node.dataFlow = 0;
        });

        // Update connections
        connections.forEach(conn => {
          // Update activity
          conn.activity += p.sin(p.frameCount * 0.03) * 0.005;
          conn.activity = p.constrain(conn.activity, 0.1, 1);
          
          // Update pulse position
          conn.pulsePosition += 0.01;
          if (conn.pulsePosition > 1) conn.pulsePosition = 0;
        });

        // Draw connections
        connections.forEach(conn => {
          const ctx = p.drawingContext as CanvasRenderingContext2D;
          ctx.save();
          
          // Calculate connection properties
          const distance = p.dist(conn.from.x, conn.from.y, conn.to.x, conn.to.y);
          const opacity = p.map(conn.activity, 0, 1, 0.1, 0.4);
          const lineWidth = Math.abs(conn.weight) * 1.5 + 0.8;
          
          // Create gradient based on weight
          const gradient = ctx.createLinearGradient(conn.from.x, conn.from.y, conn.to.x, conn.to.y);
          if (conn.weight > 0) {
            gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${opacity})`);
          } else {
            gradient.addColorStop(0, `rgba(236, 72, 153, ${opacity})`);
            gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity})`);
          }
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = lineWidth;
          ctx.lineCap = 'round';
          
          // Draw curved connection
          const midX = (conn.from.x + conn.to.x) / 2;
          const midY = (conn.from.y + conn.to.y) / 2 + p.sin(p.frameCount * 0.01) * 10;
          
          ctx.beginPath();
          ctx.moveTo(conn.from.x, conn.from.y);
          ctx.quadraticCurveTo(midX, midY, conn.to.x, conn.to.y);
          ctx.stroke();
          
          // Draw data pulse for highly active connections
          if (conn.activity > 0.8) {
            const pulseOpacity = p.sin(conn.pulsePosition * p.PI) * 0.3;
            ctx.strokeStyle = `rgba(0, 212, 255, ${pulseOpacity})`;
            ctx.lineWidth = lineWidth * 0.5;
            ctx.beginPath();
            ctx.moveTo(conn.from.x, conn.from.y);
            ctx.quadraticCurveTo(midX, midY, conn.to.x, conn.to.y);
            ctx.stroke();
          }
          
          ctx.restore();
        });

        // Draw nodes
        nodes.forEach(node => {
          const ctx = p.drawingContext as CanvasRenderingContext2D;
          ctx.save();
          
          // Determine node color based on type
          let nodeColor: string;
          switch (node.type) {
            case 'input':
              nodeColor = 'rgba(34, 197, 94, ';
              break;
            case 'hidden':
              nodeColor = 'rgba(59, 130, 246, ';
              break;
            case 'output':
              nodeColor = 'rgba(147, 51, 234, ';
              break;
            default:
              nodeColor = 'rgba(59, 130, 246, ';
          }
          
          // Create glow effect
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 30);
          glowGradient.addColorStop(0, nodeColor + (node.activity * 0.4) + ')');
          glowGradient.addColorStop(0.5, nodeColor + (node.activity * 0.2) + ')');
          glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 30, 0, p.TWO_PI);
          ctx.fill();
          
          // Draw main node
          const mainGradient = ctx.createRadialGradient(node.x - 5, node.y - 5, 0, node.x, node.y, 15);
          mainGradient.addColorStop(0, nodeColor + '1)');
          mainGradient.addColorStop(1, nodeColor + '0.8)');
          
          ctx.fillStyle = mainGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 12, 0, p.TWO_PI);
          ctx.fill();
          
          // Draw core highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.beginPath();
          ctx.arc(node.x - 3, node.y - 3, 4, 0, p.TWO_PI);
          ctx.fill();
          
          ctx.restore();
        });
      };

      // Handle mouse interaction
      p.mouseMoved = () => {
        const mouseX = p.mouseX;
        const mouseY = p.mouseY;
        
        nodes.forEach(node => {
          const distance = p.dist(mouseX, mouseY, node.x, node.y);
          if (distance < 100) {
            const influence = p.map(distance, 0, 100, 0.5, 0);
            node.vx += (mouseX - node.x) * influence * 0.01;
            node.vy += (mouseY - node.y) * influence * 0.01;
            node.activity = p.min(node.activity + 0.1, 1);
          }
        });
      };
    };

    sketchRef.current = new p5(sketch);

    return () => {
      if (sketchRef.current) {
        sketchRef.current.remove();
      }
    };
  }, []);

  return (
    <div 
      ref={canvasRef} 
      className="absolute inset-0 z-0"
      style={{ 
        filter: 'blur(0.5px)',
        opacity: 0.6
      }}
    />
  );
};

export default NeuralBackground; 