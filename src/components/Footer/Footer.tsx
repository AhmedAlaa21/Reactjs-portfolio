import "./Footer.css";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { footerLinks } from "../../data";

const Footer = () => {
  return (
    <footer>
      <p className="footer_logo">Ahmed Mohamed Alaa</p>
      <p className="footer_tagline">Frontend Engineer · React · Next.js · TypeScript</p>
      <ul className="permalinks">
        {footerLinks.map((footerLink) => (
          <li key={footerLink.id}>
            <a href={footerLink.link}>{footerLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="footer_socials">
        <a
          href="https://github.com/AhmedAlaa21"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/ahmed.mohamed.alaa2016"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ahmedm.alaa1996/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/AhmedMo47400200"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Ahmed Mohamed Alaa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
