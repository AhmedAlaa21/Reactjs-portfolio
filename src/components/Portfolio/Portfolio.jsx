import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";
import IMG5 from "../../assets/5.png";
import IMG6 from "../../assets/6.png";
import IMG7 from "../../assets/7.png";
import IMG8 from "../../assets/8.png";
import { useScrollContext } from "../../ScrollContext";

const Portfolio = () => {
  const { setActiveIndex } = useScrollContext();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;

      if (sectionTop <= window.innerHeight && sectionBottom >= 0) {
        setActiveIndex(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setActiveIndex]);
  const portfolioProjects = [
    {
      id: "1",
      imgPath: IMG1,
      title: "Chatly",
      url: "https://chatly-tau.vercel.app/app",
      gitProject: "https://github.com/AhmedAlaa21/chat-app",
    },
    {
      id: "2",
      imgPath: IMG2,
      title: "Tadarab Development Path",
      url: "https://tadarab-test.vercel.app/development-path",
      gitProject: "https://github.com/AhmedAlaa21/tadarab-test",
    },
    {
      id: "3",
      imgPath: IMG3,
      title: "Beauty Essence",
      url: "https://beauty-essence.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/beauty-essence",
    },
    {
      id: "4",
      imgPath: IMG4,
      title: "DeFi - Crypto News",
      url: "https://de-fi-phi.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/DeFi",
    },
    {
      id: "5",
      imgPath: IMG5,
      title: "Car Hub",
      url: "https://car-hub-ruddy.vercel.app",
      gitProject: "https://github.com/AhmedAlaa21/car-hub",
    },
    {
      id: "6",
      imgPath: IMG6,
      title: "Nextjs Portfolio",
      url: "https://ahmedalaa.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/ahmedalaa",
    },
    {
      id: "7",
      imgPath: IMG7,
      title: "Lama Store",
      url: "https://lama-psi.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/Lama",
    },
    {
      id: "8",
      imgPath: IMG8,
      title: "Gericht | Fine Dining",
      url: "https://gericht-beta.vercel.app",
      gitProject: "https://github.com/AhmedAlaa21/Gericht",
    },
  ];
  return (
    <section id="porfolio" className="section" ref={sectionRef}>
      <h5>My Recent Work</h5>
      <h2>Sample of Completed Projects</h2>
      <div className="container portfolio_container">
        {portfolioProjects.map((portfolioProject) => {
          return (
            <article className="portfolio_item" key={portfolioProject.id}>
              <div className="portfolio_item-image-wrapper">
                <img src={portfolioProject.imgPath} alt="project" />
              </div>
              <h3>{portfolioProject.title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={portfolioProject.gitProject}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={portfolioProject.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
