"use client";

import Image from "next/image";
import colors from "@/config/colors";
import { motion } from "framer-motion";

interface Props {
  href: string;
  name: string;
}

const FooterLink = ({ href, name }: Props) => {
  return (
    <motion.a
      href={href}
      rel="noreferrer noopener"
      className="leading-NORMAL text-lg flex items-center gap-2"
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.4 }}
    >
      <span className="underline">{name}</span>
      <Image alt="arrow" src={"/icons/arrow_45.svg"} width={14} height={14} />
    </motion.a>
  );
};
export default FooterLink;
