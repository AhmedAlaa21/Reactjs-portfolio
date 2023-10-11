import React from "react";
import CV from "../../assets/react-nextdeveloper.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.usercontent.google.com/download?id=1FmMEZL3rElKlE2350zh7GUmhwXJpo_HE&export=download&authuser=0&confirm=t&uuid=4c708d6f-3cf3-48f4-b984-a55109c2dec3&at=APZUnTWwumexQCcDa6swI8Kds6Na:1697013912854"
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
