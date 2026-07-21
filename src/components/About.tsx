import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section section-container" id="about">
      <div className="about-container">
        <span className="about-badge">BACKGROUND & VISION</span>
        <h2 className="title">
          BUILDING <span>HIGH-THROUGHPUT</span> SYSTEMS
        </h2>

        <div className="about-stats-grid">
          <div className="stat-card">
            <div className="stat-number">24+</div>
            <div className="stat-label">REPOSITORIES</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">8.4</div>
            <div className="stat-label">B.TECH GPA</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">40%</div>
            <div className="stat-label">LATENCY REDUCTION</div>
          </div>
        </div>

        <div className="about-content">
          <h3 className="about-subtitle">ENGINEERING PHILOSOPHY</h3>
          <p className="para">
            {config.about.description}
          </p>
        </div>

        <div className="about-achievements">
          <div className="achievement-item">
            <h4>INCUBATED FOUNDER</h4>
            <p>Built Hospate from concept to incubation stage, securing a government grant for implementation.</p>
          </div>
          <div className="achievement-item">
            <h4>LEADERSHIP</h4>
            <p>President of E-Cell and Social Service Clubs, coordinating events for 500+ students and leading hackathons.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
