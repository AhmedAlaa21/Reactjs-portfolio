import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";
import IMG5 from "../../assets/5.png";
import IMG6 from "../../assets/portfolio6.jpg";
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
      title: "Gericht Fine Dining",
      url: "https://gericht-beta.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/Gericht",
    },
    {
      id: "2",
      imgPath: IMG2,
      title: "Delta Security System",
      url: "https://delta-liart.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/delta",
    },
    {
      id: "3",
      imgPath: IMG3,
      title: "Animated Portofolio - Figma",
      url: "https://animated-portfolio-rust.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/Animated-Portfolio",
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
      title: "IGCSE 2021 Prosecution",
      url: "https://ig-ashen.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/IGCSE-Prosecution",
    },
    {
      id: "6",
      imgPath: IMG6,
      title: "TODO App - Add, Edit, Update & Delete ",
      url: "https://todo-app-dun-seven.vercel.app/",
      gitProject: "https://github.com/AhmedAlaa21/todo-app",
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
              <div className="portfolio_item-image">
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
