import React from "react";
import CV from "../../assets/react-nextdeveloper.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.usercontent.google.com/download?id=1k5K6Y-U1z2bJEqVUTxeYPE1rsCzsgGU7&export=download&authuser=0&confirm=t&uuid=e34b7061-3a31-44e0-8c74-3dc9eb57449b&at=APZUnTWXy0jLpnu065rc0fdFkF8M:1697009074741"
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
