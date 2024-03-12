import Container from "../layout/container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="flex items-end justify-between gap-10 pb-[100px]">
        <div className="flex flex-col gap-2">
          <h6 className="text-2xl leading-NORMAL">Leighlin Ramsay</h6>
          <p className="text-GRAY leading-NORMAL text-lg">© Mythical Marketing. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-10">
          <a href="#" rel="noreferrer noopener" className="underline leading-NORMAL text-lg">
            Twitter
          </a>
          <a href="#" rel="noreferrer noopener" className="underline leading-NORMAL text-lg">
            leighlinr@gmail.com
          </a>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
