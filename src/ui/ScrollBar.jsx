"use client";
import { motion, useScroll } from "motion/react";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-1 bg-[#1d8386] origin-left z-100"
    />
  );
};

export default ScrollBar;