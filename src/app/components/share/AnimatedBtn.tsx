"use client";
import { motion } from "framer-motion";
import { btnVariants, shadowVariants } from "../animation/animatedBtn";
import { useState } from "react";

interface BtnProps {
  title: string;
  width: string;
  icon?: React.ReactNode;
  show?: boolean;
}

const AnimatedBtn: React.FC<BtnProps> = ({ title, width, icon, show }) => {
  const textSplit: string[] = title?.split("");
  const [hover, setHover] = useState<boolean>(false);

  // Text animation variants with stagger effect
  const textVariants = {
    initial: {
      y: 0,
    },
    start: (i: number) => ({
      y: -33,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: [0.19, 1, 0.22, 1],
        type: "spring",
        visualDuration: 0.5,
        bounce: 0.25,
      },
    }),
    exit: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.2,
        ease: [0.19, 1, 0.22, 1],
        repeatType: "reverse",
        type: "spring",
        visualDuration: 0.5,
        bounce: 0.25,
      },
    }),
  };

  return (
    <div className={`flex flex-col ${width} h-full gap-5`}>
      {/* Animated button with shadow effect */}
      <motion.button
        variants={btnVariants}
        initial="stop"
        animate="start"
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        className={`dark:bg-lg-button flex gap-2 justify-center items-center font-semibold bg-dr-button md:py-2 py-1 md:px-5 px-2 md:text-lg text-sm capitalize text-lg-text dark:text-dr-text rounded-sm`}
      >
        <motion.div className="block  h-8 overflow-hidden">
          {textSplit?.map((str, i) => (
            <motion.span
              key={`${str}-${i}`}
              variants={textVariants}
              initial="initial"
              animate={hover ? "start" : "exit"}
              custom={i}
              className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
              data-letter={str}
            >
              {str === " " ? "\u00A0" : str}
            </motion.span>
          ))}
        </motion.div>

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
