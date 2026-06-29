import CTA from "./CTA";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import HeroVisual from "./HeroVisual";

const Header = () => {
  return (
    <header id="start" className="section">
      <div className="container header_container">
        <p className="header_eyebrow">
          Open to opportunities · Alexandria, Egypt
        </p>
        <h1>Ahmed Mohamed Alaa</h1>
        <h5 className="text-light header_role">Frontend Engineer</h5>
        <p className="header_tagline">
          Building production-scale React, Next.js &amp; React Native apps
        </p>
        <CTA />
        <HeaderSocials />
        <HeroVisual />
        <a href="#about" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
