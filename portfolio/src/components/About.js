import React from "react";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <h2 className="section-title">About Me<span className="dot-accent">.</span></h2>
        <div className="title-underline"></div>
      </div>
      <div className="about-content">
        <p className="about-text">
          Hi! I'm <strong>Nomthandazo Mdlovu</strong>, a driven Software Engineer
          with expertise in <strong>Python, Java, HTML, CSS, and SQL</strong>, and hands-on experience
          with <strong>AWS cloud technologies</strong>. I graduated from <strong>WeThinkCode_</strong> and am currently
          upskilling myself in both technical and soft skills at <strong>tma Academy</strong>.
        </p>
        <p className="about-text">
          I excel in cloud computing, problem-solving, and collaborative development
          using Git. Passionate about innovation and continuous learning, I thrive in
          dynamic teams, leveraging my skills to deliver impactful, scalable solutions.
        </p>
        <p className="about-text">
          When I'm not coding, I enjoy exploring UI design tools like Figma, learning
          new frameworks, and working on side projects to sharpen my skills.
        </p>
      </div>
    </section>
  );
};

export default About;
