"use client";

import { PropsWithChildren, useEffect } from "react";

import { useGlobalContext } from "@/context/global-context";
import { useInView } from "react-intersection-observer";

interface SectionProps extends PropsWithChildren {
  order: number;
}

const Section = ({ children, order }: SectionProps) => {
  const { section, setSection } = useGlobalContext().sectionContext;
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      setSection(order);
    }
  }, [inView, order, setSection]);

  useEffect(() => {
    console.log(section);
  }, [section]);
  return (
    <section ref={ref} className="min-h-screen">
      {children}
    </section>
  );
};
export default Section;
