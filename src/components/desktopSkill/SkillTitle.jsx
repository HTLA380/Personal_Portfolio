import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useStore } from "../store";

const SkillTitle = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const setInViewFeature = useStore((state) => state.setInViewFeature);
  const inViewFeature = useStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <p
      ref={ref}
      className={`py-32 sm:text-5xl transition-colors ${
        isInView ? "text-white" : "text-[#2c2c2c]"
      }`}>
      {children}
    </p>
  );
};

export default SkillTitle;
