import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-grid">
        <div className="project-card">
          <h2>Disease Predictor & Health Assistant</h2>
          <p>
            A machine learning-based health assistant that predicts diseases using user input. Built with Python, Streamlit, and deployed on Hugging Face Spaces.
          </p>
          <div className="project-links">
            <a href="https://github.com/ps7607920-lgtm/Disease_Predictor_and_Health_Assistant.git" target="_blank" rel="noreferrer">
              🔗 GitHub
            </a>
            <a href="https://huggingface.co/spaces/PriyaSinghlgtm/Disease_Predictor_and_Health_Assistant" target="_blank" rel="noreferrer">
              🚀 Hugging Face
            </a>
          </div>
        </div>

        {/* You can duplicate and modify the project-card div below to add more projects */}
      </div>
    </div>
  );
}

export default Projects;
