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
              <small>2+ years Working</small>
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
            Frontend Web Developer using React.js to build fully optimized & responsive Websites. I'm graduated from Faculty of Science 
            , Computer Science Dept., I used to manage my eCommerce online stores for 2+ years but always my passion was in Software Development,
            I found that the best way to do a comeback is to create websites using React.js and it's helpful libs.
          </p>
          <a href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
