import "./Nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquare, BiBriefcase } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { RiServiceLine } from "react-icons/ri";
import { useScrollContext } from "../../ScrollContext";

const Nav = () => {
  const { activeIndex, scrollToSection } = useScrollContext();

  const navItems = [
    { id: 0, icon: <AiOutlineHome />, title: "Home" },
    { id: 1, icon: <AiOutlineUser />, title: "About" },
    { id: 2, icon: <BiBook />, title: "Experience" },
    { id: 3, icon: <RiServiceLine />, title: "Services" },
    { id: 4, icon: <BiBriefcase />, title: "Portfolio" },
    { id: 5, icon: <CgCommunity />, title: "Testimonials" },
    { id: 6, icon: <BiMessageSquare />, title: "Contact" },
  ];

  return (
    <nav aria-label="Main navigation">
      {navItems.map((item) => (
        <button
          type="button"
          key={item.id}
          className={item.id === activeIndex ? "active" : ""}
          onClick={() => scrollToSection(item.id)}
          title={item.title}
          aria-label={item.title}
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
