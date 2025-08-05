import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-box">
        <img src="/priya%20image.png" alt="Priya Singh" className="profile-pic" />
        <h1>Hello, I'm <span>Priya Singh</span></h1>
        <h3>“From concept to code — crafting seamless digital experiences.”</h3>
        <p>
          I am a passionate Computer Science student with hands-on experience in full stack web development and machine learning projects, aiming to build innovative and impactful tech solutions.
        </p>
        <a href="/about" className="btn">Know More About Me</a>
      </div>
    </div>
  );
}

export default Home;
