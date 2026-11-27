import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function Counter({ to, duration = 1.6, pad = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {String(value).padStart(pad, "0")}
      {suffix}
    </span>
  );
}