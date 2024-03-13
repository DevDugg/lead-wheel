import Container from "../layout/container";
import Step from "../elements/step";

const steps = [
  {
    title: "Lead Gen Process",
    description: "Looking to grow your business through the power of great digital design?",
  },
  {
    title: "Entertainment for Growth",
    description: "Looking to grow your business through the power of great digital design?",
  },
  {
    title: "Knowledge for Fans",
    description: "Looking to grow your business through the power of great digital design?",
  },
  {
    title: "Authority for Leads",
    description: "Looking to grow your business through the power of great digital design?",
  },
];

const Steps = () => {
  return (
    <section className="steps" id="steps">
      <Container className="flex flex-col gap-12">
        <h2 className="text-gradient bg-GRADIENT_BLUE text-TITLE font-medium leading-LOW">Our Unique Approach</h2>
        <ul className="border-t border-GRAY flex flex-col">
          {steps.map((step, index) => (
            <Step key={index} index={index + 1} title={step.title} description={step.description} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default Steps;
