import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, image, link, languages }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="language">
          {languages.map((t, i) => (
            <span key={i} className="tag">{t}</span>
          ))}
        </div>
        </div>
      </a>
  );
}

export default ProjectCard;