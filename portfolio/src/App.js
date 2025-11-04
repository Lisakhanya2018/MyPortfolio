import React from "react";
import "./App.css";
import profile from "./assets/nomthandazo.jpg"; // ✅ image from src/assets

export default function App() {
  return (
    <div className="App">
      {/* 🌈 Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="intro-small">
            Hey, I'm <strong>Nomthandazo</strong> 👋
          </div>
          <h1 className="hero-title">
            <span className="highlight">Frontend</span> <br /> Developer
          </h1>
          <p className="hero-desc">
            I'm a frontend developer passionate about creating beautiful,
            intuitive web experiences. I love building projects that help people
            manage their goals and finances effectively.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get in Touch</button>
            <button className="btn btn-secondary">Browse Projects</button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-border">
            <img
              src={profile}
              alt="Nomthandazo Mdlovu"
              className="profile-img real-photo"
            />
          </div>
        </div>
      </section>

      {/* 🚀 Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Here are a few projects I’ve worked on recently 👇</p>

        <div className="projects-grid">
          <div className="project-card">
            <h3>💰 SheHacks Finance App</h3>
            <p>
              A mobile app built during the Mukuru SheHacks hackathon to help
              users manage their finances.
            </p>
          </div>

          <div className="project-card">
            <h3>📝 To-Do App</h3>
            <p>
              A clean, responsive web app to manage tasks — built using HTML,
              CSS, and JavaScript.
            </p>
          </div>

          <div className="project-card">
            <h3>🌐 Portfolio Website</h3>
            <p>
              This personal portfolio showcasing my work and skills in frontend
              development.
            </p>
          </div>
        </div>
      </section>

      {/* 👩‍💻 About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          Hi! I'm <strong>Nomthandazo Mdlovu</strong>, a creative frontend
          developer who enjoys transforming ideas into interactive, user-friendly
          digital experiences. I’m passionate about learning modern web
          technologies and collaborating with teams to build impactful products.
        </p>
        <p>
          When I’m not coding, I enjoy exploring UI design tools like Figma,
          learning new frameworks, and working on side projects to sharpen my
          skills.
        </p>
      </section>
    </div>
  );
}
