import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false); 
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const sections = ["work", "about", "contact", "resume"];

  return (
    <div>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Goran Milosevic</div>
          <div
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
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