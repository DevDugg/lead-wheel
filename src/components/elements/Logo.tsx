"use client";

import logonAnimation from "@/config/logon-animation";
import { motion } from "framer-motion";
import transition from "@/config/transition";

const Logo = () => {
  return logonAnimation ? (
    <motion.div
      className="logo fixed top-6 left-[50%] -translate-x-[50%] font-bold text-lg mix-blend-difference z-50"
      transition={{ ...transition, delay: 2, duration: 1 }}
      initial={{ top: "50%" }}
      animate={{ top: "24px" }}
    >
      <motion.span transition={{ ...transition, delay: 0.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Lead
      </motion.span>{" "}
      <motion.span transition={{ ...transition, delay: 1 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Wheel
      </motion.span>
    </motion.div>
  ) : (
    <div className="logo fixed top-6 left-[50%] -translate-x-[50%] font-bold text-lg mix-blend-difference z-50">
      <span>Lead</span> <span>Wheel</span>
    </div>
  );
};
export default Logo;
