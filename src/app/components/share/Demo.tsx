import { motion } from "motion/react";
import { useEffect } from "react";

const Demo = () => {
  return (
    <div>
      <h2>demo</h2>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: 0.2,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "10px",
          transformOrigin: "0%",
          backgroundColor: "#ff0088",
          zIndex: 1000,
        }}
      />
    </div>
  );
};

export default Demo;
