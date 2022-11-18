import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer_logo">
        Ahmed Mohamed Alaa
      </a>
      <ul className="permalinks">
        <li>
          <a href="#start">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exp">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials" target={"_blank"} rel="noreferrer">
        <a href="https://www.facebook.com/ahmed.mohamed.alaa2016">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ahmedm.alaa1996/" target={"_blank"} rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/AhmedMo47400200" target={"_blank"} rel="noreferrer">
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
