import React from "react";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1g96h6Z27xfL0l14W3WVwmlbFhWNhsOt9/view?usp=sharing"
        }
        download="react-nextdeveloper.pdf"
        className="btn"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
