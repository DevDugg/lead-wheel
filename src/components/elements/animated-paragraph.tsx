"use client";

import AnimatedWord from "./animated-word";
import { useRef } from "react";
import { useScroll } from "framer-motion";

interface Props {
  text: string;
}

const AnimatedParagraph = ({ text }: Props) => {
  const words = text.split(" ");

  const ref = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.1"],
  });
  return (
    <h2 ref={ref} className="text-[40px] font-medium leading-NORMAL flex flex-wrap">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <AnimatedWord key={index} range={[start, end]} scrollYProgress={scrollYProgress}>
            {word}
          </AnimatedWord>
        );
      })}
    </h2>
  );
};
export default AnimatedParagraph;
