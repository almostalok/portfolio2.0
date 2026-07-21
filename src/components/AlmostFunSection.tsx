import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import "./styles/AlmostFunSection.css";

const AlmostFunSection = () => {
  return (
    <div className="almostfun-section section-container" id="almostfun">
      <div className="almostfun-container">
        <div className="almostfun-header">
          <span className="almostfun-badge">INTERACTIVE PLAYGROUND</span>
          <h2 className="title">ALMOST <span>FUN</span></h2>
          <p className="almostfun-subtitle">
            Play chess against custom engine algorithms or chat directly with my interactive AI persona.
          </p>
        </div>

        <div className="almostfun-card">
          <div className="almostfun-preview">
            <div className="chess-icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" className="chess-svg">
                <g fill="none" fillRule="evenodd" stroke="#c2a4ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path strokeLinejoin="miter" d="M22.5 11.63V6" stroke="#c2a4ff"/>
                  <path fill="#1a1a2e" stroke="#c2a4ff" d="M20 8h5"/>
                  <path fill="#1a1a2e" stroke="#c2a4ff" strokeLinecap="butt" strokeLinejoin="miter" d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"/>
                  <path fill="#1a1a2e" stroke="#c2a4ff" d="M12.5 37c5.5 3.5 14.5 3.5 20 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-2.5-7.5-12-10.5-16-4-3 6 6 10.5 6 10.5v7"/>
                  <path stroke="#c2a4ff" d="M12.5 30c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0m-20 3.5c5.5-3 14.5-3 20 0"/>
                </g>
              </svg>
            </div>
            <div className="almostfun-details">
              <h3>REDOX CHESS ENGINE & ALOK AI</h3>
              <p>
                Experience real-time move evaluation, chess mechanics, and live technical discussions with an AI model trained on my background and projects.
              </p>
              <div className="almostfun-tags">
                <span className="tag">CHESS.JS</span>
                <span className="tag">CUSTOM ENGINE</span>
                <span className="tag">AI CHATBOT</span>
                <span className="tag">SYSTEM DESIGN</span>
              </div>
            </div>
          </div>

          <div className="almostfun-action">
            <Link to="/play" className="almostfun-btn" data-cursor="disable">
              ENTER PLAYGROUND <MdArrowOutward />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmostFunSection;
