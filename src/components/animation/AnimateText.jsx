import React from "react";
import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const AnimateText = ({ text, el: Wrapper = "p", className }) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}>
        {text.split(" ").map((word) => (
          <span className="inline-block">
            {word.split("").map((char) => {
              return (
                <motion.span
                  className="inline-block"
                  variants={defaultAnimations}>
                  {char}
                </motion.span>
              );
            })}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimateText;
