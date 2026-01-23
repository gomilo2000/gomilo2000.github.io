import React from "react";

function Contact() {
  return (
    <div className="contact">
      <p className="contact-intro">
        I’m always open to discussing new opportunities, collaborations, or
        interesting projects.
      </p>

      <a
        href="mailto:gomilo2000@gmail.com"
        className="contact-email"
      >
        gomilo2000@gmail.com
      </a>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/goran-milosevic-849344229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/gomilo2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Contact;