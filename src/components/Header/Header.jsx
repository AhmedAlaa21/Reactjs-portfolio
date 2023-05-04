import React from "react";
import CTA from "./CTA";
import "./Header.css";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="start">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Ahmed Mohamed Alaa</h1>
        <h5 className="text-light"> React Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="formal" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
