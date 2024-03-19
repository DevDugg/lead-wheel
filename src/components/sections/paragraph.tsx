import AnimatedParagraph from "../elements/animated-paragraph";
import Container from "../layout/container";
import Section from "../layout/section";

const Paragraph = () => {
  return (
    <Section order={1}>
      <section className="paragraph" id="paragraph">
        <Container>
          <AnimatedParagraph text="We don't just promise results. We deliver tangible growth for your agency. Imagine adding an extra 2-5K Monthly Recurring Revenue to your bottom line within a span of 90 days - that's our commitment." />
        </Container>
      </section>
    </Section>
  );
};
export default Paragraph;
