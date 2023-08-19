import React from "react";
import "./About.css";
import ME from "../../assets/ME2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import CountUp from "react-countup";

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
              <small>
                <CountUp start={-5} end={4} duration={5} />+ years working
              </small>
            </article>
            <article className="about_card">
              <FiUsers />
              <h5>Clients</h5>
              <small>
                <CountUp start={0} end={7} duration={5} />+ Satisfied Clients
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>
                <CountUp start={0} end={60} duration={5} />+ completed Projects
              </small>
            </article>
          </div>
          <p>
            4 years ago, I began freelancing as a developer. Since then,
            I&apos;ve done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
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
