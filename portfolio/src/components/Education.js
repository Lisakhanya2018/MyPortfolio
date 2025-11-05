import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      institution: "WeThinkCode_",
      degree: "Software Engineering",
      period: "2023 - 2025",
      description: "Intensive two-year software engineering program focusing on problem-solving, peer learning, and real-world project development."
    },
    {
      institution: "tma Academy",
      degree: "Professional Development Program",
      period: "2025 - Present",
      description: "Comprehensive upskilling program covering advanced technical skills and essential soft skills for professional growth."
    }
  ];

  const certificates = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024"
    },
    {
      name: "Python Programming",
      issuer: "WeThinkCode_",
      date: "2023"
    },
    {
      name: "Agile Development",
      issuer: "tma Academy",
      date: "2025"
    },
    {
      name: "Database Management",
      issuer: "WeThinkCode_",
      date: "2023"
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="section-header">
        <h2 className="section-title">Education & Certificates<span className="dot-accent">.</span></h2>
        <div className="title-underline"></div>
      </div>

      <div className="education-container">
        <div className="education-column">
          <h3 className="subsection-title">
            <FaGraduationCap className="subsection-icon" />
            Education
          </h3>
          <div className="education-list">
            {education.map((edu, index) => (
              <div
                key={index}
                className="education-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="education-degree">{edu.degree}</h4>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-period">{edu.period}</div>
                <p className="education-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-column">
          <h3 className="subsection-title">
            <FaCertificate className="subsection-icon" />
            Certificates
          </h3>
          <div className="certificates-list">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="certificate-card"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="certificate-name">{cert.name}</div>
                <div className="certificate-issuer">{cert.issuer}</div>
                <div className="certificate-date">{cert.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
