import React from 'react';
import './Contact.css';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiHuggingface } from 'react-icons/si'; // Hugging Face icon

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>I'd love to connect with you! Feel free to reach out via the following platforms:</p>

      <div className="contact-details">
        <a href="mailto:ps7607920@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon email-icon" />
          ps7607920@gmail.com
        </a>

        <a href="https://wa.me/917607920798" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon whatsapp-icon" />
          +91 7607920798
        </a>

        <a
          href="https://www.linkedin.com/in/priya-singh-70692a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon linkedin-icon" />
          LinkedIn Profile
        </a>

        <a href="https://github.com/ps7607920-lgtm" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github-icon" />
          GitHub Profile
        </a>

        <a href="https://huggingface.co/PriyaSinghlgtm" target="_blank" rel="noopener noreferrer">
          <SiHuggingface className="icon huggingface-icon" />
          Hugging Face Profile
        </a>
      </div>
    </div>
  );
}

export default Contact;
