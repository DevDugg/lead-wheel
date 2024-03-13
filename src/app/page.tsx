import Benefits from "@/components/sections/benefits";
import CTASection from "@/components/sections/cta";
import Hero from "@/components/sections/hero";
import Paragraph from "@/components/sections/paragraph";
import Steps from "@/components/sections/steps";
import Testimonials from "@/components/sections/testimonials";

const Home = () => {
  return (
    <main className="home flex flex-col gap-[200px] pb-[200px]">
      <Hero />
      <Paragraph />
      <Benefits />
      <Steps />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;
