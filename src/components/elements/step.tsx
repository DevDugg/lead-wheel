import ToTwoDigit from "@/lib/to-two-digit";

interface Props {
  title: string;
  description: string;
  index: number;
}

const Step = ({ description, title, index }: Props) => {
  return (
    <li className="step flex items-center gap-6 border-b border-GRAY px-6 py-10">
      <span className="step__number text-2xl leading-LOW">{ToTwoDigit(index)}</span>
      <div className="step__content flex items-center gap-6 justify-between w-full">
        <h3 className="step__title text-2xl font-bold leading-LOW">{title}</h3>
        <p className="step__description text-GRAY text-lg">{description}</p>
      </div>
    </li>
  );
};
export default Step;
