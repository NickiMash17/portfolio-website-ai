import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const techSkills = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Azure', color: '#0078D4' },
  { name: 'Python', color: '#3776AB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'TensorFlow', color: '#FF6F00' },
];

const TechWord = ({ children, color: wordColor = 'white', fontSize = 2.5, ...props }: any) => {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => { document.body.style.cursor = 'auto' };
  }, [hovered]);

  useFrame(({ camera }) => {
    // Make text face the camera
    if(ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <Text
      {...props}
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      fontSize={fontSize}
      color={hovered ? '#fa2720' : wordColor}
    >
      {children}
    </Text>
  );
};

const TechCloud = ({ count = 4, radius = 20, fontSize = 2.5 }) => {
  const words = useMemo(() => {
    const temp: [THREE.Vector3, string, string][] = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const skill = techSkills[i % techSkills.length];
        temp.push([
          new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)),
          skill.name,
          skill.color,
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word, color], index) =>
        <TechWord key={index} position={pos} color={color} children={word} fontSize={fontSize} />
      )}
    </>
  );
};

const TechStack3D: React.FC = () => {
  const [cloudProps, setCloudProps] = useState({ count: 8, radius: 20, fontSize: 2.5 });

  useEffect(() => {
    const updateCloudProps = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCloudProps({ count: 5, radius: 14, fontSize: 2.0 });
      } else if (width < 768) {
        setCloudProps({ count: 6, radius: 16, fontSize: 2.2 });
      } else if (width < 1024) {
        setCloudProps({ count: 7, radius: 18, fontSize: 2.4 });
      } else {
        setCloudProps({ count: 8, radius: 20, fontSize: 2.5 });
      }
    };

    window.addEventListener('resize', updateCloudProps);
    updateCloudProps();

    return () => window.removeEventListener('resize', updateCloudProps);
  }, []);

  return (
    <div className="w-full h-full relative">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 35], fov: 90 }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#202025', 0, 80]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float floatIntensity={2} rotationIntensity={2}>
          <TechCloud {...cloudProps} />
        </Float>
      </Canvas>
    </div>
  );
};

export default TechStack3D;
