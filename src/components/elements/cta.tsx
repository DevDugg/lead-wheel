"use client";

import Image from "next/image";

interface Props {
  href: string;
  name: string;
}

const CTA = ({ href, name }: Props) => {
  return (
    <a
      href={href}
      rel="noreferrer noopener"
      className="flex gap-10 items-center px-6 py-[10px] rounded-3xl bg-WHITE w-fit relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-[1px] w-[1px] bg-BLACK rounded-full z-10" />
      <span className="leading-LOW text-BLACK font-medium z-20">{name}</span>
      <Image src={"/icons/arrow.svg"} alt="Arrow" width={32} height={32} className="z-20" />
    </a>
  );
};
export default CTA;
