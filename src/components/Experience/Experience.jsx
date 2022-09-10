import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="exp">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp_container">
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp_backend">
          <h3>Backend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>{" "}
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>MongoDB</h4>

                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp_details">
              <BsPatchCheckFill className="exp_icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
