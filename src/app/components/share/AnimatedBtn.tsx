import { motion } from "framer-motion";

interface BtnProps {
  title: string;
  width: string;
  icon?: React.ReactNode;
  show?: boolean;
}

const AnimatedBtn: React.FC<BtnProps> = ({ title, width, icon, show }) => {
  const bouncBtn = {
    stop: { y: 0 },
    bounc: {
      y: [0, -5, 0],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const shadowVariants = {
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

  return (
    <div className={` flex flex-col ${width} h-full gap-5`}>
      {/* Animated button with shadow effect */}
      <motion.button
        variants={bouncBtn}
        initial="stop"
        animate="bounc"
        className={`dark:bg-lg-button flex gap-2 justify-center items-center font-semibold bg-dr-button md:py-2 py-1 md:px-5 px-2 md:text-lg text-sm capitalize text-lg-text dark:text-dr-text rounded-sm`}
      >
        <p>{title}</p>
        {icon && <div className="md:text-xl text-sm">{icon}</div>}
      </motion.button>

      {/* Static shadow effect */}
      {show && (
        <motion.div
          variants={shadowVariants}
          initial="stop"
          animate="start"
          style={{
            background:
              "radial-gradient(circle, rgba(80,170,184,1) 10%, rgba(80,170,184,0.76) 40%, rgba(80,170,184,0.01) 100%)",
            filter: "blur(5px)",
          }}
          className="w-full h-[6px] rounded-sm"
        ></motion.div>
      )}
    </div>
  );
};

export default AnimatedBtn;
