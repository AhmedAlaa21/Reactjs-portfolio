import React, { useState, useEffect } from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquare } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useScrollContext } from "../../ScrollContext";

const Nav = () => {
  // const [activeNav, setActiveNav] = useState("#start");
  const { activeIndex, setActiveIndex } = useScrollContext();

  const handleScroll = () => {
    const sections = document.querySelectorAll(".section");
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        setActiveIndex(index);
      }
    });
  };

  const scrollToSection = (index) => {
    const sections = document.querySelectorAll(".section");
    const targetSection = sections[index];
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  };

  const navItems = [
    {
      id: 0,
      icon: <AiOutlineHome />,
    },
    {
      id: 1,
      icon: <AiOutlineUser />,
    },
    {
      id: 2,
      icon: <BiBook />,
    },
    {
      id: 3,
      icon: <RiServiceLine />,
    },
    {
      id: 4,
      icon: <BiMessageSquare />,
    },
  ];

  return (
    <nav>
      {navItems.map((item) => {
        return (
          <a
            style={{ cursor: "pointer" }}
            key={item.id}
            className={item.id === activeIndex ? "active" : ""}
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
