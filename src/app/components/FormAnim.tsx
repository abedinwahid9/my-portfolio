"use client";
import React from "react";
import AnimatedInput from "./share/AnimatedInput";
import { motion, Variants } from "framer-motion";

const FormAnim = () => {
  const formVariants: Variants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <motion.form
        style={{ transformOrigin: "left center right" }}
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden items-center flex-col gap-4 bg-lg-button/10 md:px-8 py-8 px-5 border-2 dark:border-lg-secondary border-lg-primary rounded-tl-[150px] rounded-br-[60px]"
      >
        <h3 className="dark:text-lg-text lg:text-2xl text-base font-extrabold text-dr-text font-playfairDisplay capitalize text-center">
          &quot;Get in Touch with Me&quot;
        </h3>
        <AnimatedInput field="input" title="name" />
        <AnimatedInput field="input" title="email" />
        <AnimatedInput field="input" title="number" />
        <AnimatedInput field="textarea" title="comment" />
        <motion.button
          whileTap={{ scale: 0.98, transition: { duration: 0.5 } }}
          type="submit"
          className="w-full bg-dr-button py-3 text-lg font-semibold text-dr-text rounded-br-3xl"
        >
          Let’s Talk
        </motion.button>
      </motion.form>
    </div>
  );
};

export default FormAnim;
