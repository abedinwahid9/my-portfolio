// logo animated
interface logoVariants {
  hidden: {
    transform: string;
  };
  visible: {
    transform: string;
    transformOrigin: string;
    ease: string;
    duration: number;
    type: string;
    stiffness: number;
  };
}

export const logoVariants = {
  hidden: {
    transform: "scale(0)",
  },
  visible: {
    transform: "scale(1)",
    transformOrigin: "left center right",
    ease: "easeIn",
    duration: 0.5,
    type: "spring",
    stiffness: 300,
  },
};
