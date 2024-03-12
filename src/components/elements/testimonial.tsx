interface Props {
  name: string;
  text: string;
}

const Testimonial = ({ text, name }: Props) => {
  return (
    <div className="rounded-3xl p-6 bg-LIGHTBLACK flex flex-col gap-6 text-lg">
      <span className="font-bold leading-LOW">{name}</span>
      <p className="text-GRAY">{text}</p>
    </div>
  );
};
export default Testimonial;
