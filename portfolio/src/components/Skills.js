import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaReact,
  FaJs
} from "react-icons/fa";
import { SiFlask, SiSpring } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "SQL", icon: <FaDatabase />, color: "#4479A1" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Flask", icon: <SiFlask />, color: "#000000" },
    { name: "Spring", icon: <SiSpring />, color: "#6DB33F" },
    { name: "Figma", icon: <FaFigma />, color: "#F24E1E" }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <h2 className="section-title">Tech Stack<span className="dot-accent">.</span></h2>
        <div className="title-underline"></div>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
