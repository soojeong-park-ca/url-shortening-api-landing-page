import Button from "../Button";

import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="heroBgImgBox"></div>
      <div className="heroText">
        <h1 className="headingPrimary">More than just shorter links</h1>
        <p className="paragraph">
          Build your brand's recognition and get detailed insights on how your
          links are performing .
        </p>
        <Button className="btnHero">Get Started</Button>
      </div>
      <div></div>
    </section>
  );
}
