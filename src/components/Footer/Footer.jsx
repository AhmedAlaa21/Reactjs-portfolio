import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { footerLinks } from "../../data";

const Footer = () => {
  return (
    <footer>
      <p className="footer_logo">Ahmed Mohamed Alaa</p>
      <ul className="permalinks">
        {footerLinks.map((footerLink) => (
          <li key={footerLink.id}>
            <a href={footerLink.link}>{footerLink.title}</a>
          </li>
        ))}
      </ul>
      <div className="footer_socials" target={"_blank"} rel="noreferrer">
        <a href="https://www.facebook.com/ahmed.mohamed.alaa2016">
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/ahmedm.alaa1996/"
          target={"_blank"}
          rel="noreferrer"
        >
          <FiInstagram />
        </a>
        <a
          href="https://twitter.com/AhmedMo47400200"
          target={"_blank"}
          rel="noreferrer"
        >
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Developed by AhmedAlaa. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
