"use client";
import Image from "next/image";
import profile from "../../../assets/my.png";
import { motion } from "framer-motion";

const Profile = () => {
  const imgVariants = {
    hidden: {
      transform: "scale(0)",
    },
    visible: {
      transform: "scale(1)",
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 80,
      },
    },
    shadow: {
      boxShadow: "0px 0px 60px 5px #50AAB8",
      transition: {
        delay: 1, // Delay before the shadow appears
        duration: 3,
        type: "spring",
        stiffness: 80,
      },
    },
  };

  // shadow-[0px_0px_60px_5px_#50AAB8]

  return (
    <motion.div
      variants={imgVariants}
      initial="hidden"
      animate={["visible", "shadow"]}
      className="lg:w-[380px] rounded-2xl overflow-hidden lg:order-2 order-1  lg:h-[380px] sm:w-72 w-48 sm:h-72 h-48 relative "
    >
      <Image src={profile} alt="profile" className="object-cover" fill />
    </motion.div>
  );
};

export default Profile;
