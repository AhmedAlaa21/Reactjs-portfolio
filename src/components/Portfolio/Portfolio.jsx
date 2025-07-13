import React, { useState } from "react";
import "./Portfolio.css";
import IMG5 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";
import IMG1 from "../../assets/5.png";
import IMG6 from "../../assets/6.png";
import IMG7 from "../../assets/7.png";
import IMG8 from "../../assets/8.png";
import IMG9 from "../../assets/hbplus.png";
import IMG10 from "../../assets/qmedia.png";
import IMG11 from "../../assets/xcodes.png";
import IMG12 from "../../assets/tadarab.png";

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showModal, setShowModal] = useState(false);

  const portfolioProjects = [
    {
      id: "12",
      imgPath: IMG12,
      title: "Tadarab Platform",
      url: "https://m.tadarab.com/",
      gitProject: "",
    },
    {
      id: "9",
      imgPath: IMG9,
      title: "HB Plus",
      url: "https://www.hbplus.store/",
      gitProject: "",
    },
    {
      id: "10",
      imgPath: IMG10,
      title: "QMedia",
      url: "http://q-media.co/",
      gitProject: "",
    },
    {
      id: "11",
      imgPath: IMG11,
      title: "XCodes",
      url: "https://www.xcodes.store/",
      gitProject: "",
    },
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

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 6, portfolioProjects.length));
  };

  const handleGitHubClick = (gitProject) => {
    if (!gitProject || gitProject === "") {
      setShowModal(true);
    } else {
      window.open(gitProject, '_blank', 'noreferrer');
    }
  };

  const hasMoreProjects = visibleProjects < portfolioProjects.length;

  return (
    <section id="porfolio" className="section">
      <h5>My Recent Work</h5>
      <h2>Sample of Completed Projects</h2>
      <div className="container portfolio_container">
        {portfolioProjects.slice(0, visibleProjects).map((portfolioProject) => {
          return (
            <article className="portfolio_item" key={portfolioProject.id}>
              <div className="portfolio_item-image-wrapper">
                <img src={portfolioProject.imgPath} alt="project" />
              </div>
              <h3>{portfolioProject.title}</h3>
              <div className="portfolio_item-cta">
                <button
                  className={`btn ${!portfolioProject.gitProject ? 'btn-disabled' : ''}`}
                  onClick={() => handleGitHubClick(portfolioProject.gitProject)}
                >
                  GitHub
                </button>
                <a
                  href={portfolioProject.url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
      
      {hasMoreProjects && (
        <div className="load-more-container">
          <button 
            className="btn btn-primary load-more-btn"
            onClick={handleLoadMore}
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* Modal for Private Repository */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Private Repository</h3>
              <button 
                className="modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>This is a private repository. You cannot access it.</p>
              <p>Feel free to check out the live demo instead!</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
