import React, { useState } from "react";
import ProfileImg from "../../assets/profile-img.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import CountUp from "react-countup";
import "./About.css";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  return (
    <section id="about" className="section">
      <h5>Get to know</h5>
      <h2>Who Am I?</h2>

      <div className="container about_container">
        <div className="about_me">
          <div 
            className={`profile_image_container ${isAnimating ? 'bounce' : ''}`}
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          >
            <img src={ProfileImg} alt="Ahmed Mohamed Alaa" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_card_icon" />
              <h5>Experience</h5>
              <small>
                <CountUp start={-5} end={5} duration={1} />+ years working
              </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_card_icon" />
              <h5>Clients</h5>
              <small>
                <CountUp start={0} end={11} duration={2} />+ Satisfied Clients
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_card_icon"  />
              <h5>Projects</h5>
              <small>
                <CountUp start={0} end={23} duration={3} />+ completed
              </small>
            </article>
          </div>
          <p>
            Experienced ReactJS and Next.JS Developer with over four years of
            ReactJS, two years of React Native, and a year of Next.js expertise.
            Skilled in designing fluid, interactive user interfaces and
            enhancing application performance. A dedicated collaborator who
            excels in team environments, consistently pursues learning, and
            remains abreast of cutting-edge technologies. Eager to connect and
            contribute to the development of outstanding web experiences.
            <br />
            <br />I possess extensive expertise in leveraging Chat GPT and other
            AI tools to enhance and maximize productivity.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
