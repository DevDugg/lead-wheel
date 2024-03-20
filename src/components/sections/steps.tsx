import AnimatedInView from "../elements/animated-in-view";
import Container from "../layout/container";
import Step from "../elements/step";
import Title from "../elements/title";

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
        <AnimatedInView initialVariant={{ y: 50, opacity: 0.2 }} inViewVariant={{ y: 0, opacity: 1 }} threshold={0.4}>
          <Title value="Our Unique Approach" />
        </AnimatedInView>
        <ul className="border-t border-GRAY flex flex-col">
          {steps.map((step, index) => (
            <AnimatedInView
              key={index}
              initialVariant={{ y: 50, opacity: 0.2 }}
              inViewVariant={{ y: 0, opacity: 1 }}
              threshold={0.4}
            >
              <Step index={index + 1} title={step.title} description={step.description} />
            </AnimatedInView>
          ))}
        </ul>
      </Container>
    </section>
  );
};
export default Steps;
