import React, { useEffect, useRef } from "react";
import CTA from "./CTA";
import "./Header.css";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { useScrollContext } from "../../ScrollContext";

const Header = () => {
  const { setActiveIndex } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        setActiveIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveIndex]);
  return (
    <header id="start" className="section" ref= {sectionRef}>
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
