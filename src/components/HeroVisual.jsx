import { Component, lazy, Suspense, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { MapPin, Scale } from "lucide-react";
import { ease } from "../lib/motion";
import "./HeroVisual.css";

const HeroScene = lazy(() => import("./three/HeroScene"));

// Tries each file in /public until one loads, so the extension can be png, webp or jpg.
const SOURCES = [
  "/legal-team.png",
  "/legal-team.webp",
  "/legal-team.jpg",
  "/legal-team.jpeg",
];

// If your hero background is LIGHT, a jpg with a white background blends in cleanly.
// Set to false if the hero background is dark.
const LIGHT_BACKGROUND = true;

// If WebGL or the 3D chunk fails, hide the scene instead of crashing the whole app.
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function HeroVisual({ showScene = true }) {
  const reduce = useReducedMotion();
  const [srcIndex, setSrcIndex] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 15 });
  const sy = useSpring(my, { stiffness: 80, damping: 15 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const backX = useTransform(sx, [-0.5, 0.5], [16, -16]);
  const backY = useTransform(sy, [-0.5, 0.5], [16, -16]);
  const frontX = useTransform(sx, [-0.5, 0.5], [-8, 8]);

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const src = SOURCES[srcIndex];
  const blend = LIGHT_BACKGROUND && src && /\.jpe?g$/i.test(src);

  return (
    <div className="hvx" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Back layer: 3D scene, glows and rings move opposite to the mouse */}
      <motion.div className="hvx-back" style={{ x: backX, y: backY }}>
        <span className="hvx-glow hvx-glow-a" />
        <span className="hvx-glow hvx-glow-b" />
        <span className="hvx-ring hvx-ring-a" />
        <span className="hvx-ring hvx-ring-b" />
        {showScene && (
          <SceneBoundary>
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </SceneBoundary>
        )}
      </motion.div>

      {/* Front layer: the legal team */}
      <motion.div
        className="hvx-frame"
        style={{ rotateX, rotateY, x: frontX, transformPerspective: 1100 }}
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease }}
      >
        {src && (
          <motion.img
            key={src}
            src={src}
            alt="Three advocates ready to help"
            className={"hvx-img" + (blend ? " hvx-blend" : "")}
            onError={() => setSrcIndex((i) => i + 1)}
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.div>

      {/* Floating info cards */}
      <motion.div
        className="hvx-chip hvx-chip-a"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0, y: reduce ? 0 : [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.9 },
          x: { duration: 0.8, delay: 0.9, ease },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.7 },
        }}
      >
        <span className="hvx-chip-icon">
          <Scale size={16} />
        </span>
        <span>
          <strong>8 practice areas</strong>
          <small>Plain-language guidance</small>
        </span>
      </motion.div>

      <motion.div
        className="hvx-chip hvx-chip-b"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0, y: reduce ? 0 : [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.7, delay: 1.1 },
          x: { duration: 0.8, delay: 1.1, ease },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.9 },
        }}
      >
        <span className="hvx-chip-icon">
          <MapPin size={16} />
        </span>
        <span>
          <strong>Rawalpindi &amp; Islamabad</strong>
          <small>Support closer to home</small>
        </span>
      </motion.div>
    </div>
  );
}