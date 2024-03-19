"use client";

import { PropsWithChildren } from "react";
import logonAnimation from "@/config/logon-animation";
import { motion } from "framer-motion";
import transition from "@/config/transition";

const AnimatedFadeIn = ({ children }: PropsWithChildren) => {
  return logonAnimation ? (
    <>
      <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 1 }} transition={{ ...transition, delay: 2 }}>
        {children}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen bg-BLACK z-0 shadow-FADEIN"
        transition={{ ...transition, delay: 2, duration: 1 }}
        initial={{
          top: "0%",
        }}
        animate={{
          top: "105%",
        }}
      ></motion.div>
    </>
  ) : (
    children
  );
};
export default AnimatedFadeIn;
