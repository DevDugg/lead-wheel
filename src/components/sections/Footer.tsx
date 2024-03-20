import Container from "../layout/container";
import FooterLink from "../elements/footer-link";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex items-end justify-between gap-10 pb-[100px]">
        <div className="flex flex-col gap-2">
          <h6 className="text-2xl leading-NORMAL">Leighlin Ramsay</h6>
          <p className="text-GRAY leading-NORMAL text-lg">© Lead Wheel. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-10">
          <FooterLink href="#" name="Twitter" />
          <FooterLink href="#" name="leighlinr@gmail.com" />
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
