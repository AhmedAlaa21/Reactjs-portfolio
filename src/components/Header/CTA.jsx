import React from "react";
import CV from "../../assets/react-nextdeveloper.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.usercontent.google.com/download?id=1JIVGQzTueUv5Bdx-L13k0WWdnHXh1WrJ&export=download&authuser=0&confirm=t&uuid=3503b185-3c18-4736-b141-6b667b70f97b&at=APZUnTX0kexGoIElszMVhdgUk1v-:1697005637897"
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
