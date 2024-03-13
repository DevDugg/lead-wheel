interface Props {
  value: string;
  centered?: boolean;
}

const Title = ({ value, centered }: Props) => {
  return (
    <h2
      className="text-gradient capitalize bg-GRADIENT_BLUE text-TITLE font-medium leading-LOW"
      style={centered ? { textAlign: "center" } : {}}
    >
      {value}
    </h2>
  );
};
export default Title;
