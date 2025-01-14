export const btnVariants = {
  stop: { y: 0 },
  start: {
    y: [0, -5, 0],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const shadowVariants = {
  stop: {
    transform: "scale(1)",
  },
  start: {
    transform: ["scale(1)", "scale(0.85)", "scale(1)"],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
