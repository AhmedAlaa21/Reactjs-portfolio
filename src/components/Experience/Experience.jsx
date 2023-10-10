import React, { useEffect, useRef } from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { useScrollContext } from "../../ScrollContext";
import { backendSkills, frontendSkills } from "../../data";

const Experience = () => {
  const { setActiveIndex } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        setActiveIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveIndex]);

  return (
    <section id="exp" className="section" ref={sectionRef}>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            {frontendSkills.map((item) => (
              <article className="exp_details" key={item.id}>
                <BsPatchCheckFill className="exp_icon" />
                <div>
                  <h4>{item.title}</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="exp_backend">
          <h3>Backend Development</h3>
          <div className="exp_content">
            {backendSkills.map((item) => (
              <article className="exp_details" key={item.id}>
                <BsPatchCheckFill className="exp_icon" />
                <div>
                  <h4>{item.title}</h4>
                  <small className="text-light">{item.experience}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
