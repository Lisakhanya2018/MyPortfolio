import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch<span className="dot-accent">.</span></h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Let's connect and discuss how we can work together</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <a
              href="mailto:nomthandazomdlovulu@gmail.com"
              className="contact-link"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>nomthandazomdlovulu@gmail.com</p>
              </div>
            </a>
          </div>

          <div className="contact-card">
            <a
              href="tel:0630619608"
              className="contact-link"
            >
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>063 061 9608</p>
              </div>
            </a>
          </div>

          <div className="contact-card">
            <a
              href="https://www.linkedin.com/in/nmdlovu023"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <div className="contact-details">
                <h4>LinkedIn</h4>
                <p>linkedin.com/in/nmdlovu023</p>
              </div>
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-link">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>South Africa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <a
            href="mailto:nomthandazomdlovulu@gmail.com"
            className="btn btn-primary btn-large"
          >
            Send Me a Message
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Nomthandazo Mdlovu. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
