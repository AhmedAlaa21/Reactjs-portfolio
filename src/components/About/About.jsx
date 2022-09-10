import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
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
          <img src={ME} alt="" />
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
              <small>200+ clients Worldwide</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, hic
            nobis ullam iure animi dolorum. Distinctio excepturi in laborum,
            nostrum quis, sed quidem optio consectetur aspernatur, dolore nobis
            deserunt. Minus.
          </p>
          <a href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
