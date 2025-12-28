import React, { useState } from "react";
import ProfileImg from "../../assets/ahmed-mohamed-alaa.jpg";
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
            className={`profile_image_container ${isAnimating ? "bounce" : ""}`}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
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
              <VscFolderLibrary className="about_card_icon" />
              <h5>Projects</h5>
              <small>
                <CountUp start={0} end={23} duration={3} />+ completed
              </small>
            </article>
          </div>
          <p>
            Frontend Engineer specializing in React ecosystems with 5+ years
            building responsive web applications, 2 years crafting mobile
            experiences with React Native, and extensive Next.js expertise. I
            create performant, user-focused interfaces while leveraging modern
            AI tools to accelerate development workflows and solve complex
            problems efficiently.
            <br />
            <br />I thrive in collaborative environments where I can both
            contribute to the team's success and continue growing my technical
            skills. Always exploring emerging technologies and best practices to
            deliver exceptional web experiences.
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
