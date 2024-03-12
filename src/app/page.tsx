import Hero from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";

const Home = () => {
  return (
    <main className="home flex flex-col gap-[200px] pb-[200px]">
      <Hero />
      <Testimonials />
    </main>
  );
};

export default Home;
