import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ReactIMG from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="start" className="section">
      <div className="container header_container">
        <h1>Ahmed Mohamed Alaa</h1>
        <h5 className="text-light"> Frontend Engineer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ReactIMG} alt="formal" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
