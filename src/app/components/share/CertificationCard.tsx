"use client";
import Image from "next/image";
import { FC, useState } from "react";
import certificate from "@/assets/certificate-1.png";
import { AnimatePresence, motion, Variants } from "framer-motion";

const CertificationCard: FC = () => {
  const [hover, setHover] = useState<boolean>(false);

  const detailsVariants: Variants = {
    default: {
      clipPath: "circle(0px at 0% 100%)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      clipPath: "circle(350px at 0% 100%)",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Child animations (staggered effect)
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.3, // Delay starts after clipPath animation
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onClick={() => setHover((prev) => !prev)} // Toggle on mobile
      onHoverEnd={() => setHover(false)}
      className="w-full h-full rounded-lg overflow-hidden shadow-[0px_0px_5px_1px_#1E88A8] hover:shadow-[0px_0px_20px_1px_#1E88A8] relative bg-no-repeat bg-center cursor-pointer"
    >
      <Image
        width={0}
        height={0}
        src={certificate}
        alt="certificate"
        className="w-full h-full object-fill z-0"
      />
      <AnimatePresence>
        {hover && (
          <motion.div
            variants={detailsVariants}
            initial="default"
            animate="visible"
            exit="default"
            className="bg-lg-text/85 bottom-0 right-0 rounded-tr-[450px] absolute h-28 w-full py-5 px-3"
          >
            {/* Animate each child sequentially */}
            <motion.h4
              custom={0}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-dr-text text-xl font-bold capitalize"
            >
              Programming Hero
            </motion.h4>
            <motion.p
              custom={1}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-dr-text capitalize"
            >
              <span className="font-semibold">Course:</span> Web Development
            </motion.p>
            <motion.p
              custom={2}
              variants={childVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="text-dr-text capitalize"
            >
              <span className="font-semibold">Session:</span> 2023
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CertificationCard;
