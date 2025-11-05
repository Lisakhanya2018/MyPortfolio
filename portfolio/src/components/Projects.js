import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "SheHacks Finance App",
      description: "A comprehensive mobile application developed during the Mukuru SheHacks hackathon focused on financial management and literacy. Features include expense tracking, budget planning, savings goals, and financial tips to empower users to take control of their finances.",
      tech: ["React Native", "Firebase", "Node.js"],
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Task Management App",
      description: "A clean and intuitive to-do application built with modern web technologies. Features include task creation, categorization, priority levels, due dates, and local storage persistence. The responsive design ensures seamless use across all devices.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my professional journey, technical skills, and projects. Built with React and featuring smooth animations, interactive components, and a clean design aesthetic that reflects attention to detail and user experience.",
      tech: ["React", "CSS3", "React Icons"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution featuring product browsing, shopping cart functionality, secure checkout process, and order management. Implemented RESTful APIs and integrated payment gateway for seamless transactions.",
      tech: ["Java", "Spring Boot", "MySQL"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather application that provides real-time weather data, forecasts, and weather alerts. Features include location-based weather, multi-city comparison, and beautiful data visualizations powered by weather APIs.",
      tech: ["Python", "Flask", "APIs"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Cloud Infrastructure Project",
      description: "Designed and deployed a scalable cloud infrastructure on AWS using EC2, S3, RDS, and Lambda. Implemented CI/CD pipelines, automated deployments, and monitoring solutions to ensure high availability and performance.",
      tech: ["AWS", "Docker", "Python"],
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2 className="section-title">Projects<span className="dot-accent">.</span></h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Here are some projects I've worked on recently</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
