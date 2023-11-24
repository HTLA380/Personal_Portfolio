import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
      />
      <motion.div
        className="slide-out flex items-center justify-center"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{
          duration: 1,
          ease: [0.85, 0, 0.15, 1],
        }}></motion.div>
    </>
  );
};

export default Transition;
