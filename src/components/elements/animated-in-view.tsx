import { Variants, motion } from "framer-motion";

import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  initial: Variants;
  inView: Variants;
}

const AnimatedInView = ({ children, inView, initial }: Props) => {
  return (
    <motion.div initial={initial} whileInView={inView}>
      {children}
    </motion.div>
  );
};

export default AnimatedInView;
