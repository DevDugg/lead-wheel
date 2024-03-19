"use client";

import { AnimationProps, TargetAndTransition, VariantLabels, motion } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

import { useInView } from "react-intersection-observer";

interface Props extends PropsWithChildren {
  initialVariant: AnimationProps["initial"];
  inViewVariant: VariantLabels | TargetAndTransition | undefined;
  threshold?: number;
}

const AnimatedInView = ({ children, inViewVariant, initialVariant, threshold = 0.1 }: Props) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: true,
  });
  return (
    <motion.div ref={ref} initial={initialVariant} animate={inView ? inViewVariant : {}}>
      {children}
    </motion.div>
  );
};

export default AnimatedInView;
