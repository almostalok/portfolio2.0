import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { config } from "../config";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-section section-container" id="projects">
      <div className="work-container">
        <div className="work-header">
          <span className="projects-badge">FEATURED BUILD</span>
          <h2 className="title">
            SELECTED <span>PROJECTS</span>
          </h2>
        </div>

        <div className="work-grid-list">
          {config.projects.slice(0, 3).map((project, index) => (
            <div className="work-grid-item" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools & Features</h4>
                <p className="work-tech">{project.technologies}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>

        <div className="work-cta-row">
          <Link to="/myworks" className="see-all-btn" data-cursor="disable">
            Explore All Projects ({config.projects.length}) →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
