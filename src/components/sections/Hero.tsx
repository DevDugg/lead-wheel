import BulletPoints from "../elements/bullet-points";
import CTA from "../elements/cta";
import Container from "../layout/container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero relative h-screen pt-32" id="hero">
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
          <h1 className="text-[100px] leading-LOW">Your Gateway to Elevate Advertising & CRO Agencies</h1>
          <CTA name="Book a call" href="#" />
        </div>
        <BulletPoints />
      </Container>
    </section>
  );
};
export default Hero;
