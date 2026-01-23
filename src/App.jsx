import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import FocusCard from "./components/FocusCard";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Section from "./components/Section";

import Footer from "./components/Footer";

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const sections = ["ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const [active, setActive] = useState(0);
  const navRefs = useRef([]);
  const indicatorRef = useRef(null);

  const handleClick = (index) => {
    setActive(index);
    const sectionEl = document.getElementById(sections[index]);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 0;

      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = index;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update navbar indicator position
  useEffect(() => {
    const activeEl = navRefs.current[active];
    const indicator = indicatorRef.current;

    if (activeEl && indicator) {
      indicator.style.width = `${activeEl.offsetWidth}px`;
      indicator.style.transform = `translateX(${activeEl.offsetLeft}px)`;
    }
  }, [sections]);

  return (
    <div className="App">
      <Navbar
        sections={sections}
        active={active}
        navRefs={navRefs}
        indicatorRef={indicatorRef}
        onClick={handleClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="content">
        <main>
          <Section 
            id="ABOUT" 
            title="ABOUT" 
            intro="A frontend-focused developer from Norway with a strong interest in building clean, user-friendly applications." 
            rightContent={<FocusCard/>}>
            <About />
          </Section>

          <Section 
            id="PROJECTS" 
            title="PROJECTS"
            intro="A selection of projects that showcase my approach to design, structure, and problem-solving.">
            <Projects />
          </Section>

          <Section 
            id="SKILLS" 
            title="SKILLS" 
            intro="Technologies and tools I've worked with across web, mobile and backend development.">
            <Skills />
          </Section>

          <Section 
            id="CONTACT" 
            title="CONTACT"
            intro="Ways to get in touch or learn more about my work.">
            <Contact />
          </Section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;