import React from "react";
import profile from "../assets/nomthandazo.jpg";

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="intro-small animate-fade-in">
          Hey, I'm <strong>Nomthandazo</strong>
        </div>
        <h1 className="hero-title animate-slide-up">
          <span className="highlight">Software</span><br />
          Engineer
        </h1>
        <p className="hero-desc animate-fade-in-delay">
          I'm a Software Engineer passionate about designing and building
          scalable, efficient, and user friendly software solutions.
        </p>
        <div className="hero-buttons animate-fade-in-delay-2">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-border animate-scale-in">
          <img
            src={profile}
            alt="Nomthandazo Mdlovu"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
