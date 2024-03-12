import Image from "next/image";

interface Props {
  name: string;
}

const BulletPoint = ({ name }: Props) => {
  return (
    <div className="bullet-point flex items-center gap-4 pr-6">
      <Image src={"/icons/star.svg"} alt="Star" width={24} height={24} />
      <p className="text-base font-bold">{name}</p>
    </div>
  );
};
export default BulletPoint;
