"use client";

import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import SmoothScroll from "./smooth-scroll";
import transition from "@/config/transition";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <MotionConfig transition={transition}>
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
};
export default Provider;
