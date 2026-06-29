import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { workExperience, skillCategories } from "../../data";

const Experience = () => {
  return (
    <section id="exp" className="section">
      <h5>My Journey</h5>
      <h2>Work Experience</h2>

      <div className="container work_timeline">
        {workExperience.map((job) => (
          <article className="work_item" key={job.id}>
            <div className="work_item__marker" aria-hidden="true" />
            <div className="work_item__content">
              <div className="work_item__header">
                <div>
                  <h3>
                    {job.role} — {job.company}
                  </h3>
                  <p className="work_item__meta">
                    {job.employmentType} · {job.location}
                  </p>
                </div>
                <span className="work_item__period">{job.period}</span>
              </div>
              <ul className="work_item__highlights">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <h5 className="skills_subtitle">Technical Expertise</h5>
      <h2 className="skills_heading">Skills</h2>

      <div className="container exp_container">
        {skillCategories.map((category) => (
          <div className="exp_category" key={category.id}>
            <h3>{category.title}</h3>
            <div className="exp_content">
              {category.skills.map((skill) => (
                <article className="exp_details" key={skill.id}>
                  <BsPatchCheckFill className="exp_icon" />
                  <div>
                    <h4>{skill.title}</h4>
                    <small className="text-light">Proficient</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
