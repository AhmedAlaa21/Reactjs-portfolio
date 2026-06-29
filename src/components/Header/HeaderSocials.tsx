import { BsLinkedin, BsGithub, BsTwitter, BsFacebook } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ahmed-alaa-52b51518a/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/AhmedAlaa21"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <BsGithub />
      </a>
      <a
        href="https://twitter.com/AhmedMo47400200"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <BsTwitter />
      </a>
      <a
        href="https://www.facebook.com/ahmed.mohamed.alaa2016/"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
      >
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
