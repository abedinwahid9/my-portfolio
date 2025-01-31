"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
import js from "../../../../public/icons/icons8-javascript-480.png";

const SkillCard: FC = () => {
  return (
    <motion.div className="w-20 h-20 border-2 border-lg-link flex justify-center items-center flex-col relative overflow-hidden group">
      <div className="w-10 h-10 relative z-10">
        <Image
          className="w-full h-full"
          width={0}
          height={0}
          src={js || "/placeholder.svg"}
          alt="js"
        />
      </div>
      <p className="select-none relative z-10">javascript</p>
      {/* shine overlay */}
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 transition-all duration-700 ease-in group-hover:left-full" />
    </motion.div>
  );
};

export default SkillCard;
