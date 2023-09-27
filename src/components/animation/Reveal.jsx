import React from "react";
import { motion } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      {children}
      <motion.div
        className="absolute top-0 bottom-0 left-0 right-0 bg-flat-black z-20 before:w-0.5 before:h-full before:absolute before:top-0 before:left-0 before:bg-white"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{
          duration: 2,
          delay: 0.25,
          ease: [0.85, 0, 0.15, 1],
        }}></motion.div>
    </div>
  );
};
