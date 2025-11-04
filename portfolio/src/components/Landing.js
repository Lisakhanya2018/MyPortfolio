import React from "react";
import "../App.css";
import profileImg from "../assets/nomthandazo.jpg";

const Landing = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h4 className="intro-small">Hey, I’m Nomthandazo 👋</h4>
        <h1 className="hero-title">
          <span className="highlight">Software</span> Engineer
        </h1>
        <p className="hero-desc">
          I’m a driven Software Engineer with a strong foundation in Python,
          Java, HTML, CSS, and SQL, and hands-on experience working with AWS
          Cloud technologies. A graduate of WeThinkCode_, currently expanding my
          expertise through tma Academy to become a well-rounded developer.
          <br /><br />
          I’m passionate about cloud computing, problem-solving, and
          collaborative software development using Git. My goal is to build
          scalable, impactful solutions that make a difference.
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary">Get in Touch</button>
          <button className="btn btn-secondary">View Projects</button>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-border">
          <img src={profileImg} alt="Nomthandazo Mdlovu" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
