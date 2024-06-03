// ProjectsPage.jsx

import React from 'react';
import MP4ProjectCard from '../components/MP4ProjectCard';
import '../styles/Project.css';

const mp4Projects = [
    {
        title: "Match Game",
        description: "A game match the images.",
        videoURL: "https://assets.ccbp.in/frontend/content/react-js/match-game-output.mp4",
        link: "https://matchgame.ccbp.tech/"
    },
    {
        title: "Planets App",
        description: "Learn about the planets in our solar system.",
        videoURL: "https://assets.ccbp.in/frontend/content/react-js/planets-app-output.mp4",
        link: "https://planetsapp.ccbp.tech/login"
    },
    {
        title: "Jobby App",
        description: "Find and apply for jobs.",
        videoURL: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-success-output-v0.mp4",
        link: "https://jobbyapp.ccbp.tech/login"
    },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      {mp4Projects.map((project, index) => (
        <MP4ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          videoURL={project.videoURL}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
