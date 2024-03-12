"use client";

import { MotionValue, motion, useTransform } from "framer-motion";

interface Props {
  children: string;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
}

const AnimatedCharacter = ({ children, range, scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="opacity-[0.1] absolute">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
export default AnimatedCharacter;
