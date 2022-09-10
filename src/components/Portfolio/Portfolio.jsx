import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: "1",
      imgPath: IMG1,
      title: "This is a portfolio item title",
      // TODO add links
    },
    {
      id: "2",
      imgPath: IMG2,
      title: "This is a portfolio item title",
      // TODO add links
    },
    {
      id: "3",
      imgPath: IMG3,
      title: "This is a portfolio item title",
      // TODO add links
    },
    {
      id: "4",
      imgPath: IMG4,
      title: "This is a portfolio item title",
      // TODO add links
    },
    {
      id: "5",
      imgPath: IMG5,
      title: "This is a portfolio item title",
      // TODO add links
    },
    {
      id: "6",
      imgPath: IMG6,
      title: "This is a portfolio item title",
      // TODO add links
    },
  ];
  return (
    <section id="porfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {portfolioProjects.map((portfolioProject) => {
          return (
            <article className="portfolio_item" key={portfolioProject.id}>
              <div className="portfolio_item-image">
                <img src={portfolioProject.imgPath} alt="" />
              </div>
              <h3>{portfolioProject.title}</h3>
              <div className="portfolio_item-cta">
                <a href="" className="btn" target="_blank">
                  GitHub
                </a>
                <a href="" className="btn btn-primary" target="_blank">
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
