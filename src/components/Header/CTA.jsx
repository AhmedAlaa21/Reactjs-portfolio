import React from "react";
import CV from "../../assets/react-nextdeveloper.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.usercontent.google.com/download?id=1gfFqvHsqju_1ZnAwznu7ZM1SlHCGJJhD&export=download&authuser=0&confirm=t&uuid=ff2ebba2-27eb-4854-94bf-193af86bbea4&at=APZUnTXI_n0drJGxq_Uve8DSznlt:1697467704627"
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
