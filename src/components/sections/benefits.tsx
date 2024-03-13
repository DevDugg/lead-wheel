import BenefitWrapper from "../elements/benefit-wrapper";
import CTA from "../elements/cta";
import Container from "../layout/container";
import Image from "next/image";
import Title from "../elements/title";

const Benefits = () => {
  return (
    <section className="benefits" id="benefits">
      <Container className="flex flex-col gap-12">
        <Title value="Who Benefits from Mythical Marketing?" centered />
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-BENEFITS gap-2">
            <BenefitWrapper>
              <div className="flex flex-col gap-6 max-w-[480px] w-full">
                <Image
                  src={"/icons/star_big.svg"}
                  alt="Star"
                  width={343}
                  height={343}
                  className="absolute -bottom-[65px] -right-[65px] drop-shadow-BENEFIT"
                />
                <div className="flex items-center gap-2">
                  <Image src={"/icons/star_sharp.svg"} alt="Star" width={24} height={24} />
                  <h3 className="font-bold text-2xl leading-LOW">CRO Agencies</h3>
                </div>
                <p className="text-base text-GRAY">
                  Optimize your conversion rates and watch your revenue soar. Mythical Marketing specializes in
                  strategies tailored for Conversion Rate Optimization agencies.
                </p>
              </div>
              <span className="font-bold leading-LOW text-[200px] drop-shadow-BENEFIT">10X</span>
            </BenefitWrapper>
            <BenefitWrapper>
              <div className="flex flex-col gap-6 max-w-[480px] w-full">
                <Image
                  src={"/icons/google.svg"}
                  alt="Google"
                  width={300}
                  height={300}
                  className="absolute -bottom-[90px] left-[50%] -translate-x-[50%] drop-shadow-BENEFIT"
                />
                <div className="flex items-center gap-2">
                  <Image src={"/icons/star_sharp.svg"} alt="Star" width={24} height={24} />
                  <h3 className="font-bold text-2xl leading-LOW">Google AD Agencies</h3>
                </div>
                <p className="text-base text-GRAY">
                  Leverage the power of Google Ads with our data-driven approaches. Unleash the full potential of your
                  Google AD agency with Mythical Marketing.
                </p>
              </div>
            </BenefitWrapper>
          </div>
          <div className="grid grid-cols-BENEFITS_REVERSE gap-2">
            <BenefitWrapper>
              <div className="flex flex-col gap-6 max-w-[480px] w-full">
                <Image
                  src={"/icons/facebook.svg"}
                  alt="Facebook"
                  width={300}
                  height={300}
                  className="absolute -bottom-[90px] left-[50%] -translate-x-[50%] drop-shadow-BENEFIT"
                />
                <div className="flex items-center gap-2">
                  <Image src={"/icons/star_sharp.svg"} alt="Star" width={24} height={24} />
                  <h3 className="font-bold text-2xl leading-LOW">Facebook AD Agencies</h3>
                </div>
                <p className="text-base text-GRAY">
                  Dominate the social media landscape. Our strategies for Facebook Ad agencies ensure maximum reach and
                  engagement, translating to increased MRR
                </p>
              </div>
            </BenefitWrapper>
            <BenefitWrapper>
              <div className="flex flex-col gap-6 max-w-[536px] w-full">
                <Image
                  src={"/icons/icon_grid.svg"}
                  alt="Star"
                  width={608}
                  height={80}
                  className="absolute -bottom-[140px] -right-[140px] drop-shadow-BENEFIT"
                />
                <div className="flex flex-col gap-10">
                  <p className="leading-LOW text-5xl">Want the same results for you?</p>
                  <CTA name="Book a call" href="#" />
                </div>
              </div>
            </BenefitWrapper>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Benefits;
