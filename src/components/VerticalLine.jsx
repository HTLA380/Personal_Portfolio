import React from "react";
import {motion} from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

function VerticalLine({left}) {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  if (isAboveLarge) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        transition={{delay: 0.3, duration: 0.8}}
        variants={{
          hidden: {opacity: 0, height: 0},
          visible: {opacity: 1, height: 400},
        }}
        className={`absolute ${left ? "left-0" : "right-0"}`}>
        <div className="absolute w-4 h-4 rounded-full left-[50%] translate-x-[-50%] -top-5 bg-red"></div>
        <div className="bg-[#8FE3CF] w-1 h-[44%] top-1 left-[50%] translate-x-[-50%] absolute"></div>
        <div className="absolute w-4 h-4 rounded-full left-[50%] translate-x-[-50%] top-[50%] z-10 translate-y-[-50%] bg-red"></div>
        <div className="bg-[#8FE3CF] w-1 h-[44%] bottom-1 left-[50%] translate-x-[-50%] absolute"></div>
        <div className="absolute w-4 h-4 rounded-full left-[50%] translate-x-[-50%] -bottom-5 bg-red"></div>
      </motion.div>
    );
  }
}

export default VerticalLine;
