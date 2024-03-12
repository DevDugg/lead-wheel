import AnimatedParagraph from "../elements/animated-paragraph";
import Container from "../layout/container";

const Paragraph = () => {
  return (
    <section className="paragraph" id="paragraph">
      <Container>
        <AnimatedParagraph text="We don't just promise results. We deliver tangible growth for your agency. Imagine adding an extra 2-5K Monthly Recurring Revenue to your bottom line within a span of 90 days - that's our commitment." />
      </Container>
    </section>
  );
};
export default Paragraph;
