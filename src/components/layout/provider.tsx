"use client";

import { GlobalContextProvider } from "@/context/global-context";
import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import SmoothScroll from "./smooth-scroll";
import transition from "@/config/transition";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <MotionConfig transition={transition}>
      <SmoothScroll>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </SmoothScroll>
    </MotionConfig>
  );
};
export default Provider;
