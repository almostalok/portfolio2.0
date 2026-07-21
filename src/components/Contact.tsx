import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-header-block">
          <span className="contact-badge">GET IN TOUCH</span>
          <h2 className="title">LET'S BUILD <span>SOMETHING SERIOUS</span></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-box">
            <h4>COMMUNICATION</h4>
            <p className="contact-email">
              <a href={`mailto:${config.contact.email}`} data-cursor="disable">
                {config.contact.email}
              </a>
            </p>

            <h4>LOCATION</h4>
            <p className="contact-location">
              {config.social.location.toUpperCase()}
            </p>
          </div>
          
          <div className="contact-box">
            <h4>NETWORKS</h4>
            <div className="contact-social-links">
              <a
                href={config.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                GITHUB <MdArrowOutward />
              </a>
              <a
                href={config.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                LINKEDIN <MdArrowOutward />
              </a>
              <a
                href={config.contact.twitter}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                TWITTER <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-copyright-box">
            <h2>
              DESIGNED & DEVELOPED<br />
              BY <span>{config.developer.fullName.toUpperCase()}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()} ALL RIGHTS RESERVED
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
