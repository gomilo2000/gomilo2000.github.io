import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import CodeCanvas from "./components/CodeCanvas";

import Navbar from "./components/Navbar";

import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Section from "./components/Section";

import Footer from "./components/Footer";

function App() {
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
      />

      <div className="content">
        <main>
          <Section id="ABOUT" title="ABOUT" rightContent={<CodeCanvas/>}>
            <About />
          </Section>

          <Section id="PROJECTS" title="PROJECTS">
            <Projects />
          </Section>

          <Section id="SKILLS" title="SKILLS">
            <Skills />
          </Section>

          <Section id="CONTACT" title="CONTACT">
            <Contact />
          </Section>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;