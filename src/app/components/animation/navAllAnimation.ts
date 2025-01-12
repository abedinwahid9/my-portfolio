// mobile navbar open close
export const containerVariants = {
  hidden: { height: 0 },
  visible: {
    height: "auto",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const paperVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.3,
      ease: "easeOut",
    },
  }),
};

// nav link animated top to bottom
export const navVariants = {
  hidden: {
    y: -100,
  },
  visible: (index: number) => ({
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeIn",
      type: "tween",
    },
  }),
};
