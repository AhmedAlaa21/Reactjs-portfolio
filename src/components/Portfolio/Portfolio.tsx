import { useState } from "react";
import "./Portfolio.css";
import { portfolioProjects } from "../../data";

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showModal, setShowModal] = useState(false);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, portfolioProjects.length));
  };

  const handleGitHubClick = (gitProject: string) => {
    if (!gitProject) {
      setShowModal(true);
    } else {
      window.open(gitProject, "_blank", "noreferrer");
    }
  };

  const hasMoreProjects = visibleProjects < portfolioProjects.length;

  return (
    <section id="portfolio" className="section">
      <h5>My Recent Work</h5>
      <h2>Sample of Completed Projects</h2>
      <div className="container portfolio_container">
        {portfolioProjects.slice(0, visibleProjects).map((project) => (
          <article className="portfolio_item" key={project.id}>
            <div className="portfolio_item-image-wrapper">
              <img src={project.imgPath} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio_item-cta">
              <button
                type="button"
                className={`btn ${!project.gitProject ? "btn-disabled" : ""}`}
                onClick={() => handleGitHubClick(project.gitProject)}
              >
                GitHub
              </button>
              <a
                href={project.url}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMoreProjects && (
        <div className="load-more-container">
          <button
            type="button"
            className="btn btn-primary load-more-btn"
            onClick={handleLoadMore}
          >
            Load More Projects
          </button>
        </div>
      )}

      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          role="presentation"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-header">
              <h3>Private Repository</h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setShowModal(false)}
                aria-label="Close"
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
                type="button"
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
