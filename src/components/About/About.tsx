import { useState } from "react";
import ProfileImg from "../../assets/ahmed-mohamed-alaa.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { HiOutlineAcademicCap } from "react-icons/hi";
import CountUp from "react-countup";
import { profileSummary, education, languages } from "../../data";
import "./About.css";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleImageClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 600);
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
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleImageClick()}
            aria-label="Profile photo"
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
                <CountUp start={0} end={5} duration={1.5} />+ years shipping
              </small>
            </article>
            <article className="about_card">
              <FiUsers className="about_card_icon" />
              <h5>Active Users</h5>
              <small>
                <CountUp start={0} end={50} duration={2} suffix="K+" />
              </small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_card_icon" />
              <h5>Products Led</h5>
              <small>
                <CountUp start={0} end={3} duration={1.5} /> flagship apps
              </small>
            </article>
          </div>
          <p>{profileSummary}</p>
          <p>
            Known for clean architecture, thorough code reviews, and translating
            ambiguous requirements into reliable, maintainable UIs at scale.
          </p>

          <div className="about_education">
            <HiOutlineAcademicCap className="about_education_icon" />
            <div>
              <h4>{education.degree}</h4>
              <p>
                {education.institution}, {education.location} · {education.period}
              </p>
              <p className="text-light">{education.project}</p>
            </div>
          </div>

          <p className="about_languages">
            <strong>Languages:</strong> {languages.join(" · ")}
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
