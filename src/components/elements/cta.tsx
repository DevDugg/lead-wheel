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
      className="flex gap-10 items-center px-6 py-[10px] rounded-3xl bg-GRADIENT_BLUE w-fit"
    >
      <span className="leading-LOW text-BLACK font-medium">{name}</span>
      <Image src={"/icons/arrow.svg"} alt="Arrow" width={32} height={32} />
    </a>
  );
};
export default CTA;
