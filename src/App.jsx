import { useState, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

function App() {
  const sections = ["work", "about", "contact", "resume"];
  const [active, setActive] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll listener to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <div className="profile-circle">
              <img src={profilePic} alt="Profile" />
            </div>
            <div className="name">Goran Milosevic</div>
          </div>

          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            {sections.map((section) => (
              <li
                key={section}
                className={active === section ? "active" : ""}
                onClick={() => handleNavClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {sections.map((section) => (
          <section key={section} id={section}>
            <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
            <p>Placeholder content for {section} section.</p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;