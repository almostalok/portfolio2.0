import "./styles/Career.css";
import { config } from "../config";

const Career = () => {
  return (
    <div className="career-section section-container" id="work">
      <div className="career-container">
        <div className="career-header-block">
          <span className="career-badge">EXPERIENCE & TIMELINE</span>
          <h2 className="title">PROFESSIONAL <span>CREDENTIALS</span></h2>
          <p className="career-intro-text">
            A chronological trace of startup development, systems engineering, and academic leadership.
          </p>
        </div>

        <div className="career-list">
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-row">
              <div className="career-time">
                <h3>{exp.period.toUpperCase()}</h3>
                <span className="career-location">{exp.location.toUpperCase()}</span>
              </div>
              <div className="career-body">
                <h4>{exp.position}</h4>
                <h5>{exp.company}</h5>
                <ul className="career-bullets">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Education Block integrated directly as a credential */}
          <div className="career-row education-row">
            <div className="career-time">
              <h3>2023 — 2027</h3>
              <span className="career-location">GREATER NOIDA, INDIA</span>
            </div>
            <div className="career-body">
              <h4>B.Tech in Computer Science Engineering</h4>
              <h5>I.T.S Engineering College</h5>
              <ul className="career-bullets">
                <li>Academic Performance: GPA 8.4/10 (Penultimate Year)</li>
                <li>President — E-Cell, Social Service & Project Management Club</li>
                <li>Head Coordinator — Smart India Hackathon 2024–25</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
