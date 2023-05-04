import React from "react";
import "./About.css";
import ME from "../../assets/ME2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="about me" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_card_icon" />
              <h5>Experience</h5>
              <small>3+ years Working</small>
            </article>
            <article className="about_card">
              <FiUsers />
              <h5>Clients</h5>
              <small>5+ clients Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>
            I am a frontend web developer who utilizes React.js to construct
            websites that are both fully optimized and responsive. I have a
            degree from the Computer Science Department in the Faculty of
            Science and have spent over two years managing my eCommerce online
            stores. However, my true passion lies in software development, and I
            have found that the most effective way to pursue this passion is by
            creating websites using React.js and its fundamentals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
