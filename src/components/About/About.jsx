import React, { useEffect, useRef } from "react";
import ME from "../../assets/Aboutme.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import CountUp from "react-countup";
import { useScrollContext } from "../../ScrollContext";
import "./About.css";

const About = () => {
  const { setActiveIndex } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        setActiveIndex(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveIndex]);

  return (
    <section id="about" className="section" ref={sectionRef}>
      <h5>Get to know</h5>
      <h2>Who Am I?</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="about me" style={{ objectFit: "cover" }} />
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
            Passionate ReactJS and Next.js developer with 3+ years of ReactJS
            and 1+ year of Next.js experience. Proficient in crafting seamless,
            interactive user interfaces and optimizing application performance.
            A collaborator who thrives on teamwork, constantly learning, and
            staying updated with the latest technologies. Let's connect to
            create exceptional web experiences!
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
