import AnimatedInView from "../elements/animated-in-view";
import Container from "../layout/container";
import FooterLink from "../elements/footer-link";
import { link } from "fs";

const footerLinks = [
  {
    name: "Twitter",
    href: "#",
  },
  {
    name: "leighlinr@gmail.com",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex items-end justify-between gap-10 pb-[100px]">
        <div className="flex flex-col gap-2">
          <AnimatedInView initialVariant={{ y: 20, opacity: 0.2 }} inViewVariant={{ y: 0, opacity: 1 }} threshold={0.4}>
            <h6 className="text-2xl leading-NORMAL">Leighlin Ramsay</h6>
          </AnimatedInView>
          <AnimatedInView initialVariant={{ y: 20, opacity: 0.2 }} inViewVariant={{ y: 0, opacity: 1 }} threshold={0.4}>
            <p className="text-GRAY leading-NORMAL text-lg">© Lead Wheel. All rights reserved.</p>
          </AnimatedInView>
        </div>
        <div className="flex items-center gap-10">
          {footerLinks.map((link, index) => (
            <AnimatedInView
              initialVariant={{ y: 20, opacity: 0.2 }}
              inViewVariant={{ y: 0, opacity: 1 }}
              threshold={(index + 4) / 10}
              key={index}
            >
              <FooterLink {...link} />
            </AnimatedInView>
          ))}
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
