import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          
          <div className="landing-intro">
            <h2>ALOK KUMAR SINGH</h2>
            <h1>
              BUILDER<br />
              ENGINEER<br />
              FOUNDER
            </h1>
          </div>

          <div className="landing-info">
            <h3>I DEVELOP HIGH-THROUGHPUT</h3>
            
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">FULL STACK SYSTEMS</div>
              <div className="landing-h2-2" style={{ position: 'absolute', opacity: 0 }}>STARTUP PRODUCTS</div>
            </h2>
            
            <h2>
              <div className="landing-h2-info">SCALABLE DATABASES</div>
              <div className="landing-h2-info-1" style={{ position: 'absolute', opacity: 0 }}>OPEN SOURCE PROJECTS</div>
            </h2>

            <p className="landing-manifesto">
              {config.developer.description}
            </p>
          </div>

          {/* Grid visual coordinates */}
          <div className="landing-coordinates">
            <span className="coord-item">LOC: NOIDA_UP_IN</span>
            <span className="coord-item">SYS: 28.5355° N, 77.3910° E</span>
            <span className="coord-item">STATUS: BUILD_ACTIVE</span>
          </div>

        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
