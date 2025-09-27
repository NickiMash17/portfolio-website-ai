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

const TechWord = ({ children, ...props }: any) => {
  const color = new THREE.Color();
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false };
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const over = (e: any) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => { document.body.style.cursor = 'auto' };
  }, [hovered]);

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
  });

  return <Text ref={ref} onPointerOver={over} onPointerOut={out} {...props} {...fontProps} children={children} />;
};

const TechCloud = ({ count = 4, radius = 20 }) => {
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), techSkills[i % techSkills.length].name]);
      }
    }
    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(([pos, word], index) => <TechWord key={index} position={pos} children={word} />)}
    </>
  );
};

const TechStack3D: React.FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Float floatIntensity={2} rotationIntensity={2}>
        <TechCloud count={8} radius={20} />
      </Float>
    </Canvas>
  );
};

export default TechStack3D;
