import React from "react";
import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquare } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { RiServiceLine } from "react-icons/ri";
import { useScrollContext } from "../../ScrollContext";

const Nav = () => {
  const { activeIndex, scrollToSection } = useScrollContext();

  const navItems = [
    {
      id: 0,
      icon: <AiOutlineHome />,
      title: "Ahmed",
    },
    {
      id: 1,
      icon: <AiOutlineUser />,
      title: "about",
    },
    {
      id: 2,
      icon: <BiBook />,
      title: "experience",
    },
    {
      id: 3,
      icon: <RiServiceLine />,
      title: "services",
    },
    {
      id: 4,
      icon: <CgCommunity />,
      title: "testimonials",
    },
    {
      id: 5,
      icon: <BiMessageSquare />,
      title: "contact",
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
            title={item.title}
          >
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
