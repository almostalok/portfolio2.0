import { Link } from "react-router-dom";
import { config } from "../config";
import "./MyWorks.css";

const MyWorks = () => {
  return (
    <div className="myworks-page">
      <div className="myworks-container">
        
        <div className="myworks-header">
          <Link to="/" className="back-button" data-cursor="disable">
            ← BACK TO HOME
          </Link>
          <h1>ALL PROJECTS</h1>
          <p>A detailed index of systems, interfaces, and open-source applications built by Alok.</p>
        </div>

        <div className="myworks-list">
          {config.projects.map((project, index) => (
            <div className="myworks-row" key={project.id} data-cursor="disable">
              <div className="myworks-meta">
                <div className="myworks-num">0{index + 1}</div>
                <div className="myworks-cat">{project.category.toUpperCase()}</div>
              </div>
              
              <div className="myworks-main">
                <h2>{project.title.toUpperCase()}</h2>
                <p className="myworks-desc">{project.description}</p>
                <div className="myworks-tech-list">
                  {project.technologies.split(",").map((tech, tIdx) => (
                    <span key={tIdx} className="myworks-tech-tag">{tech.trim()}</span>
                  ))}
                </div>
              </div>

              <div className="myworks-image-container">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MyWorks;
