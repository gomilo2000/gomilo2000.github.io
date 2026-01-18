import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© 2026 Goran Milosevic</span>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/goran-milosevic-849344229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/gomilo2000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;