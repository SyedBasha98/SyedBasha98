import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Mp4Card.css';

const MP4ProjectCard = ({ title, description, videoURL, link }) => {
  return (
    <div className="mp4-project-card">
      <div className="video-wrapper">
        <video className="project-video" controls>
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="card-content">
        <h3 className="title">{title}</h3>
        <p className="description-card-s">{description}</p>
        <a className="learn-more" href={link} target="_blank" rel="noopener noreferrer">
         View Project
        </a>
      </div>
    </div>
  );
};

MP4ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default MP4ProjectCard;
