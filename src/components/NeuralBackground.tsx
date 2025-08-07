import React, { useEffect, useRef, useState } from 'react';
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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!canvasRef.current || isInitialized) return;

    // Clean up previous sketch
    if (sketchRef.current) {
      try {
        sketchRef.current.remove();
      } catch (error) {
        console.error('Error removing previous sketch:', error);
      }
    }

    const sketch = (p: p5) => {
      let nodes: Node[] = [];
      let connections: Connection[] = [];
      let width: number = 800;
      let height: number = 600;
      let canvas: p5.Element | null = null;
      let isSetup = false;

      p.setup = () => {
        try {
          // Get safe dimensions
          width = Math.max(window.innerWidth, 800);
          height = Math.max(window.innerHeight, 600);
          
          // Create canvas with safe dimensions
          canvas = p.createCanvas(width, height);
          
          if (canvasRef.current && canvas) {
            canvas.parent(canvasRef.current);
          }
          
          p.frameRate(30); // Reduced frame rate for better performance
          
          // Initialize neural network layers with safe positioning
          const layers = [
            { count: 4, x: width * 0.15, type: 'input' as const },
            { count: 6, x: width * 0.35, type: 'hidden' as const },
            { count: 8, x: width * 0.55, type: 'hidden' as const },
            { count: 6, x: width * 0.75, type: 'hidden' as const },
            { count: 3, x: width * 0.9, type: 'output' as const }
          ];

          // Create nodes for each layer
          layers.forEach((layer) => {
            for (let i = 0; i < layer.count; i++) {
              const y = height * 0.2 + (height * 0.6 * i) / Math.max(layer.count - 1, 1);
              const randomOffset = p.random(-15, 15);
              
              nodes.push({
                x: layer.x + randomOffset,
                y: y + randomOffset,
                vx: p.random(-0.3, 0.3),
                vy: p.random(-0.3, 0.3),
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
              const connectionCount = Math.min(p.random(1, 3), nextLayerNodes.length);
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
          
          isSetup = true;
        } catch (error) {
          console.error('Error in p5 setup:', error);
        }
      };

      p.draw = () => {
        try {
          if (!isSetup || !canvas) return;
          
          // Clear with safe background
          p.clear();
          p.background(26, 26, 26, 10);

          // Update and draw connections
          connections.forEach(connection => {
            if (!connection.from || !connection.to) return;
            
            connection.pulsePosition += 0.01;
            if (connection.pulsePosition > 1) {
              connection.pulsePosition = 0;
            }

            const pulseAlpha = p.sin(connection.pulsePosition * p.PI) * 0.5 + 0.5;
            const weight = connection.weight;
            const strokeWeight = p.abs(weight) * 1.5 + 0.5;
            const strokeColor = weight > 0 ? 
              p.color(52, 211, 153, pulseAlpha * 80) : 
              p.color(248, 113, 113, pulseAlpha * 80);

            p.stroke(strokeColor);
            p.strokeWeight(strokeWeight);
            p.line(connection.from.x, connection.from.y, connection.to.x, connection.to.y);
          });

          // Update and draw nodes
          nodes.forEach(node => {
            if (!node) return;
            
            // Update node position with bounds checking
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges with safe margins
            const margin = 50;
            if (node.x < margin || node.x > width - margin) node.vx *= -0.8;
            if (node.y < margin || node.y > height - margin) node.vy *= -0.8;

            // Keep nodes within bounds
            node.x = p.constrain(node.x, margin, width - margin);
            node.y = p.constrain(node.y, margin, height - margin);

            // Update rotation and activity
            node.rotation += 0.01;
            node.activity = p.sin(p.frameCount * 0.03 + node.x * 0.01) * 0.3 + 0.7;

            // Draw node
            p.push();
            p.translate(node.x, node.y);
            p.rotate(node.rotation);

            // Node glow effect
            const glowSize = 15 + node.activity * 8;
            const glowAlpha = node.activity * 40;
            
            // Input nodes (cyan)
            if (node.type === 'input') {
              p.fill(0, 212, 255, glowAlpha);
              p.noStroke();
              p.ellipse(0, 0, glowSize);
              p.fill(0, 212, 255);
              p.ellipse(0, 0, 6);
            }
            // Output nodes (pink)
            else if (node.type === 'output') {
              p.fill(255, 0, 122, glowAlpha);
              p.noStroke();
              p.ellipse(0, 0, glowSize);
              p.fill(255, 0, 122);
              p.ellipse(0, 0, 6);
            }
            // Hidden nodes (purple)
            else {
              p.fill(168, 85, 247, glowAlpha);
              p.noStroke();
              p.ellipse(0, 0, glowSize);
              p.fill(168, 85, 247);
              p.ellipse(0, 0, 5);
            }

            p.pop();
          });
        } catch (error) {
          console.error('Error in p5 draw:', error);
        }
      };

      p.windowResized = () => {
        try {
          if (!isSetup) return;
          
          const newWidth = Math.max(window.innerWidth, 800);
          const newHeight = Math.max(window.innerHeight, 600);
          
          if (newWidth !== width || newHeight !== height) {
            width = newWidth;
            height = newHeight;
            p.resizeCanvas(width, height);
          }
        } catch (error) {
          console.error('Error in p5 windowResized:', error);
        }
      };
    };

    try {
      sketchRef.current = new p5(sketch);
      setIsInitialized(true);
    } catch (error) {
      console.error('Error creating p5 sketch:', error);
    }

    return () => {
      if (sketchRef.current) {
        try {
          sketchRef.current.remove();
        } catch (error) {
          console.error('Error removing p5 sketch:', error);
        }
      }
      setIsInitialized(false);
    };
  }, [isInitialized]);

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ 
        background: 'radial-gradient(circle at 20% 80%, rgba(0,212,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,0,122,0.1) 0%, transparent 50%)',
        backgroundSize: '100% 100%, 100% 100%'
      }}
    />
  );
};

export default NeuralBackground; 