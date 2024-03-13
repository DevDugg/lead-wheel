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
        <Title value="What other clients say about us" centered />
        <div className="grid grid-cols-3 gap-2">
          {testimonials.map((testimonial, index) => (
            <Testimonial {...testimonial} key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
