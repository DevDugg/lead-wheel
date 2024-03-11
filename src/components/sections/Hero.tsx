import CTA from "../ui/CTA";
import Container from "../layout/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero relative h-screen pt-32">
      <Image
        src={"/images/hero_bg.png"}
        alt="Hero BG"
        width={1920}
        height={1080}
        unoptimized
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
      <Container className="flex flex-col gap-20">
        <div className="flex flex-col gap-10">
          <p className="text-[100px] leading-LOW">Your Gateway to Elevate Advertising & CRO Agencies</p>
          <CTA name="Book a call" href="#" />
        </div>
      </Container>
    </section>
  );
};
export default Hero;
