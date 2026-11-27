import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";

const GOLD = "#d8be91";
const IVORY = "#e9efe9";

function Pillars({ count = 31 }) {
  const group = useRef();

  const pillars = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const t = i / (count - 1);
        const a = Math.PI * t;
        return {
          x: Math.cos(a) * 2.1,
          y: Math.sin(a) * 1.25 - 0.9,
          phase: t * Math.PI * 2,
          gold: i % 4 === 0,
        };
      }),
    [count],
  );

  useFrame(({ clock, pointer }) => {
    const g = group.current;
    if (!g) return;
    // Ease the bridge toward the pointer
    g.rotation.y += (pointer.x * 0.35 - g.rotation.y) * 0.05;
    g.rotation.x += (-pointer.y * 0.15 - g.rotation.x) * 0.05;
    // Light wave travelling along the arch
    g.children.forEach((mesh, i) => {
      const wave = (Math.sin(clock.elapsedTime * 1.6 - pillars[i].phase) + 1) / 2;
      mesh.scale.y = 0.55 + wave * 1.1;
    });
  });

  return (
    <group ref={group}>
      {pillars.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, 0]}>
          <boxGeometry args={[0.06, 0.5, 0.06]} />
          <meshStandardMaterial
            color={p.gold ? GOLD : IVORY}
            metalness={0.5}
            roughness={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function Orbit() {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * 0.12;
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.6, 0, 0]}>
      <torusGeometry args={[3.1, 0.006, 16, 220]} />
      <meshBasicMaterial color={GOLD} transparent opacity={0.45} />
    </mesh>
  );
}

export default function HeroScene() {
  const reduce = useReducedMotion();
  return (
    <Canvas
      className="hero-canvas"
      camera={{ position: [0, 0.4, 7], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ alpha: true, antialias: true }}
      frameloop={reduce ? "demand" : "always"}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#fff6e6" />
      <pointLight position={[-3, -2, 2]} color={GOLD} intensity={8} />
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.4}>
        <Pillars />
      </Float>
      <Orbit />
      <Sparkles count={70} scale={[7, 4, 4]} size={2.2} speed={0.35} color={GOLD} opacity={0.8} />
    </Canvas>
  );
}