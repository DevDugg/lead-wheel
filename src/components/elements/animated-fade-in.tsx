"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import transition from "@/config/transition";

const AnimatedFadeIn = ({ children }: PropsWithChildren) => {
  return (
    <>
      <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 1 }}>
        {children}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none bg-BLACK z-50 shadow-FADEIN"
        transition={{ ...transition, delay: 0.5, duration: 1 }}
        initial={{
          top: "0%",
        }}
        animate={{
          top: "105%",
        }}
      ></motion.div>
    </>
  );
};
export default AnimatedFadeIn;
