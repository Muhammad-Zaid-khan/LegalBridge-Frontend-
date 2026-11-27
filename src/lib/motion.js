export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease, delay },
  }),
};

export const itemUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const staggerOf = (gap = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: 0.05 } },
});

export const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};