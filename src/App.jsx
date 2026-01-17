import { useState, useEffect, useRef } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

function App() {
  const sections = ["work", "about", "contact", "resume"];
  const [active, setActive] = useState("work");
  const navRefs = useRef({});
  const indicatorRef = useRef(null);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
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

  // Animate the active indicator
  useEffect(() => {
    const el = navRefs.current[active];
    const indicator = indicatorRef.current;
    if (el && indicator) {
      const { offsetLeft, offsetWidth } = el;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  }, [active]);

  const handleNavClick = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
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

          <div className="nav-links-container">
            <ul className="nav-links">
              {sections.map((section) => (
                <li
                  key={section}
                  ref={(el) => (navRefs.current[section] = el)}
                  className={active === section ? "active" : ""}
                  onClick={() => handleNavClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              ))}
            </ul>
            <div className="nav-indicator" ref={indicatorRef}></div>
          </div>
        </div>
      </nav>

      <main>
        {sections.map((section) => (
          <section key={section} id={section}>
            <div className="section-content">
              <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
              <p>
                This is placeholder content for the {section} section.
              </p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;