"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { ComponentType } from "react";

interface PageTransitionProps {
  OgComponent: ComponentType;
}

const PageTransition = ({
  OgComponent,
}: PageTransitionProps): React.JSX.Element => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathName} className="relative">
        <OgComponent />
        {/* Page Exit Animation */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
        />
        {/* Page Entry Animation */}
        <motion.div
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 w-full h-full bg-black z-50"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
