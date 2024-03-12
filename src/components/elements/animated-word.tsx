"use client";

import AnimatedCharacter from "./animated-character";
import { MotionValue } from "framer-motion";

interface Props {
  children: string;
  range: [number, number];
  scrollYProgress: MotionValue<number>;
}

const AnimatedWord = ({ children, range, scrollYProgress }: Props) => {
  const characters = children.toString().split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;
  return (
    <span className="mr-2 mt-2">
      {characters.map((character, index) => {
        const start = range[0] + step * index;
        const end = range[0] + step * (index + 1);

        return (
          <AnimatedCharacter range={[start, end]} key={index} scrollYProgress={scrollYProgress}>
            {character}
          </AnimatedCharacter>
        );
      })}
    </span>
  );
};

export default AnimatedWord;
