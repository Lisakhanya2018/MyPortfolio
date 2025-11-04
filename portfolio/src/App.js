import React from "react";
import "./App.css";
import profile from "./assets/nomthandazo.jpg";

export default function App() {
  return (
    <div className="App">
      <div className="browser-frame">
        <div className="browser-header">
          <div className="browser-dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="browser-url">nomthandazo.dev</div>
        </div>

        <nav className="navbar">
          <div className="logo">Nomthandazo.</div>
          <ul className="nav-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <div className="avatar">N</div>
        </nav>

        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="intro-small">
              Hey, I'm <strong>Nomthandazo</strong>
            </div>
            <h1 className="hero-title">
              <span className="highlight">Software</span><br />
              Engineer
            </h1>
            <p className="hero-desc">
              I'm a Software Engineer passionate about designing and building
              scalable, efficient, and user-friendly software solutions.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Get In Touch</button>
              <button className="btn btn-secondary">Browse Projects</button>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-border">
              <img
                src={profile}
                alt="Nomthandazo Mdlovu"
                className="profile-img"
              />
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h1>Projects</h1>
          <p>Here are a few projects I've worked on recently</p>

          <div className="projects-grid">
            <div className="project-card">
              <h3>SheHacks Finance App</h3>
              <p>
                A mobile app built during the Mukuru SheHacks hackathon to help
                users manage their finances.
              </p>
            </div>

            <div className="project-card">
              <h3>To-Do App</h3>
              <p>
                A clean, responsive web app to manage tasks — built using HTML,
                CSS, and JavaScript.
              </p>
            </div>

            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>
                This personal portfolio showcasing my work and skills in frontend
                development.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
    <h1 className="framer-text framer-styles-preset-9y448z" data-styles-preset="iwZUWfENf" style={{ '--framer-text-color': 'var(--token-ae272b84-a508-4205-a7e5-cc526e6b9840, rgb(36, 38, 47))' }}>
      About me<span className="framer-text" style={{ '--framer-text-color': 'var(--token-e4865808-d3fd-4cc6-b7f8-3e7c150d7f2a, rgb(110, 6, 242))', color: 'purple' }}>.</span>
    </h1>
          <p>
          Hi! I'm <strong>Nomthandazo Mdlovu</strong>, a driven Software Engineer
          with expertise in Python, Java, HTML, CSS, and SQL, and hands-on experience
          with AWS cloud technologies. I graduated from WeThinkCode_ and am currently
          upskilling myself in both technical and soft skills at tma Academy.
          I excel in cloud computing, problem-solving, and collaborative development
          using Git. Passionate about innovation and continuous learning, I thrive in
          dynamic teams, leveraging my skills to deliver impactful, scalable solutions.
          When I'm not coding, I enjoy exploring UI design tools like Figma, learning
          new frameworks, and working on side projects to sharpen my skills.
          </p>
        </section>
      </div>
    </div>
  );
}
