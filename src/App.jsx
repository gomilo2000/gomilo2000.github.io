import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import profilePic from "./assets/profile.jpg";

// Work images
import work1 from "./assets/work1.jpg";
import work2 from "./assets/work2.jpg";
import work3 from "./assets/work3.jpg";

function App() {
  const sections = ["WORK", "ABOUT", "CONTACT", "RESUME"];
  const [active, setActive] = useState(0);
  const navRefs = useRef([]);
  const indicatorRef = useRef(null);

  const workImages = [
    { src: work1, alt: "Project 1", caption: "Project 1 description" },
    { src: work2, alt: "Project 2", caption: "Project 2 description" },
    { src: work3, alt: "Project 3", caption: "Project 3 description" },
  ];

  const updateIndicator = () => {
    const el = navRefs.current[active];
    const indicator = indicatorRef.current;
    if (el && indicator) {
      indicator.style.transform = `translateX(${el.offsetLeft}px)`;
      indicator.style.width = `${el.offsetWidth}px`;
    }
  };

  const handleClick = (index) => {
    setActive(index);
    const sectionEl = document.getElementById(sections[index]);
    if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => updateIndicator(), [active]);

  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 0;
      sections.forEach((id, index) => {
        const sectionEl = document.getElementById(id);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) current = index;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {/* NAVBAR */}
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
              {sections.map((section, i) => (
                <li
                  key={section}
                  ref={(el) => (navRefs.current[i] = el)}
                  className={active === i ? "active" : ""}
                  onClick={() => handleClick(i)}
                >
                  {section}
                </li>
              ))}
            </ul>
            <div className="nav-indicator" ref={indicatorRef} />
          </div>
        </div>
      </nav>

      <main>
        {/* WORK Section */}
        <section id="WORK">
          <h1>WORK</h1>
          <p>Here are some projects I've worked on previously.</p>

          <div className="work-grid">
            {workImages.map((item, index) => (
              <div className="work-card" key={index}>
                <img src={item.src} alt={item.alt} className="work-image" />
                {item.caption && <p className="work-caption">{item.caption}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* OTHER SECTIONS */}
        {sections
          .filter((s) => s !== "WORK")
          .map((s) => (
            <section id={s} key={s}>
              <h1>{s}</h1>
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