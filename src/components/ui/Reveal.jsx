import { motion } from "framer-motion";
import { fadeUp, itemUp, staggerOf } from "../../lib/motion";

export function Reveal({ as = "div", delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={fadeUp}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function Stagger({ as = "div", gap = 0.1, className, children }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={staggerOf(gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </Tag>
  );
}

export function StaggerItem({ as = "div", className, children }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={itemUp}>
      {children}
    </Tag>
  );
}