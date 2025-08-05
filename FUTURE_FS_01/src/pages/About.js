import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="profile-section">
        <img src="priya image.png" alt="Priya Singh" className="profile-img" />
        <div className="profile-info">
          <h1>Priya Singh</h1>
          <h3>“From concept to code — crafting seamless digital experiences.”</h3>
          <p>
            I am a passionate Computer Science student with hands-on experience in full stack web development and machine learning projects, aiming to build innovative and impactful tech solutions.
          </p>
        </div>
      </div>

      <section>
        <h2>💻 Software Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React.js, Node.js</li>
          <li>MongoDB, Express.js</li>
          <li>Python, Machine Learning</li>
          <li>Git & GitHub</li>
          <li>Data Science</li>
          <li>Java Programming Language</li>
          <li>Data Visualization, Data Modeling</li>
          <li>Web Hosting and Deployment</li>
        </ul>
      </section>

      <section>
        <h2>🧠 Soft Skills</h2>
        <ul>
          <li>Curiosity and Willingness to Learn</li>
          <li>Communication Skills</li>
          <li>Planning and Organisation</li>
          <li>Adaptability</li>
          <li>Receptiveness to Feedback</li>
        </ul>
      </section>

      <section>
        <h2>🎓 Education</h2>
        <div className="education">
          <p><strong>B.Tech in Computer Science</strong><br />
            Babu Banarasi Das University, Lucknow</p>
          <p><strong>Intermediate - 2022</strong><br />
            Lucknow Public School (CBSE), New Delhi</p>
          <p><strong>High School - 2020</strong><br />
            Lucknow Public School (CBSE), New Delhi</p>
        </div>
      </section>

      <section>
        <h2>📜 Certifications</h2>
        <ul>
          <li>Full Stack Web Development (in progress)</li>
          <li>Machine Learning & Data Science Internship at GRAStech</li>
          <li>Samsung Solve for Tomorrow</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
