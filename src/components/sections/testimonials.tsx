import AnimatedInView from "../elements/animated-in-view";
import Container from "../layout/container";
import Testimonial from "../elements/testimonial";
import Title from "../elements/title";

const testimonials = [
  {
    name: "This is Elon Musk",
    text: "So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would",
  },
  {
    name: "This is Elon Musk",
    text: "An average healthy 7 year old boy weighs about 50 lb (23 kg). If we suppose the same amount of alcoh",
  },
  {
    name: "This is Elon Musk",
    text: "Even factoring differences in body weight between children and adults into account, it would still n",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <Container className="flex flex-col gap-12">
        <AnimatedInView threshold={0.4} initialVariant={{ y: 50, opacity: 0.2 }} inViewVariant={{ y: 0, opacity: 1 }}>
          <Title value="What other clients say about us" centered />
        </AnimatedInView>
        <div className="grid grid-cols-3 gap-2">
          {testimonials.map((testimonial, index) => (
            <AnimatedInView
              key={index}
              threshold={(index + 4) / 10}
              initialVariant={{ y: 50, opacity: 0.2 }}
              inViewVariant={{ y: 0, opacity: 1 }}
            >
              <Testimonial {...testimonial} />
            </AnimatedInView>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
