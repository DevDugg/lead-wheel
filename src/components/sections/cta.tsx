import CTA from "../elements/cta";
import Container from "../layout/container";

const CTASection = () => {
  return (
    <section className="cta" id="cta">
      <Container className="rounded-3xl bg-LIGHTBLACK overflow-hidden flex flex-col gap-[100px] p-6">
        <div className="flex flex-col gap-10">
          <h2 className="text-gradient text-[100px] leading-LOW bg-GRADIENT_BLUE">Ready to elevate your business?</h2>
          <CTA href="#" name="Book a call" />
        </div>
        <div className="flex flex-col gap-4 max-w-[660px]">
          <h3 className="font-medium text-lg leading-LOW">Digital Transformation Tailored to Your Business Needs.</h3>
          <p className="text-base text-GRAY">
            {
              "At Mythical Marketing, we understand the unique challenges of advertising and conversion rate optimization agencies. We listen to your specific needs, identify the most effective approach, and craft a personalized strategy to elevate your agency's success."
            }
          </p>
        </div>
      </Container>
    </section>
  );
};
export default CTASection;
