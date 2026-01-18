import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

function App() {
  const sections = ["WORK", "ABOUT", "CONTACT", "RESUME"];
  const [active, setActive] = useState(0);
  const navRefs = useRef([]);
  const indicatorRef = useRef(null);

  // Update indicator position and width
  const updateIndicator = () => {
    const el = navRefs.current[active];
    const indicator = indicatorRef.current;
    if (el && indicator) {
      const { offsetLeft, offsetWidth } = el;
      indicator.style.transform = `translateX(${offsetLeft}px)`;
      indicator.style.width = `${offsetWidth}px`;
    }
  };

  // Scroll to section
  const handleClick = (index) => {
    setActive(index);
    const sectionEl = document.getElementById(sections[index]);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update indicator on active change
  useEffect(() => {
    updateIndicator();
  }, [active]);

  // Update indicator on window resize
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [active]);

  // Update active based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = 0;
      sections.forEach((id, index) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          current = index;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <div className="profile-circle">
              <img src={profilePic} alt="Profile" /> 
            </div>
            <span className="name">GORAN MILOSEVIC</span>
          </div>
          <div className="nav-links-container">
            <ul className="nav-links">
              {sections.map((section, index) => (
                <li
                  key={section}
                  ref={(el) => (navRefs.current[index] = el)}
                  className={active === index ? "active" : ""}
                  onClick={() => handleClick(index)}
                >
                  {section}
                </li>
              ))}
            </ul>
            <div className="nav-indicator" ref={indicatorRef}></div>
          </div>
        </div>
      </nav>

      <main>
        {sections.map((section) => (
          <section id={section} key={section}>
            <h1>{section.toUpperCase()}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;