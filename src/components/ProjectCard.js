import React from 'react';
import '../styles/ProjectCard.css'

const ProjectCard = ({ title, description, imageLarge, videoURL, link }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {videoURL ? (
        <img src={videoURL} alt={title} style={{ width: '100%', height: 'auto' }} />
      ) : (
        <img src={imageLarge} alt={title} style={{ width: '100%', height: 'auto' }} />
      )}
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
