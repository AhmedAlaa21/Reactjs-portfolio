import cvPdf from "../../assets/Ahmed-Mohamed-Alaa.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={cvPdf} download="Ahmed-Mohamed-Alaa.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s Talk
      </a>
    </div>
  );
};

export default CTA;
