"use client";

import { Variants, motion } from "framer-motion";
import { btnVariants, shadowVariants } from "../animation/animatedBtn";
import { useState } from "react";
import Link from "next/link";

// Props for the Animated Button component
interface BtnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  width: string;
  icon?: React.ReactNode; // Optional React node for an icon
  show?: boolean; // Optional boolean to control the shadow display
  href?: string | undefined;
}

const AnimatedBtn: React.FC<BtnProps> = ({
  title,
  width,
  icon,
  show,
  href,
  ...props
}) => {
  const textSplit: string[] = title?.split(""); // Split the title into an array of characters
  const [hover, setHover] = useState<boolean>(false);

  // Text animation variants with stagger effect
  const textVariants: Variants = {
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
        type: "spring",
        visualDuration: 0.5,
        bounce: 0.25,
      },
    }),
  };

  return (
    <Link
      href={href || "#"}
      className={`flex flex-col ${width} h-full gap-2`}
      {...props}
    >
      {/* Animated button with shadow effect */}
      <motion.button
        whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
        variants={btnVariants}
        initial="stop"
        animate="start"
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        className={`dark:bg-lg-button flex gap-2 justify-center items-center font-semibold bg-dr-button md:py-2 py-1 md:px-5 px-2 md:text-lg text-sm capitalize text-lg-text dark:text-dr-text rounded-sm shadow-[inset_0px_0px_32px_-15px_rgba(0,_0,_0,_0.8)]`}
      >
        <motion.div className="block h-8 overflow-hidden">
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
    </Link>
  );
};

export default AnimatedBtn;
