import React, { useEffect, useState } from "react";

import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import work4 from "../assets/work4.jpg";

const projects = [
  {
    src: work1,
    title: "Project One",
    description: "Short description of what this project does.",
    tech: ["React", "CSS", "API"]
  },
  {
    src: work2,
    title: "Project Two",
    description: "Short description of what this project does.",
    tech: ["TypeScript", "React", "Node.js"]
  },
  {
    src: work3,
    title: "Project Three",
    description: "Short description of what this project does.",
    tech: ["React Native", "Expo"]
  },
  {
    src: work4,
    title: "Project Four",
    description: "Short description of what this project does.",
    tech: ["Vue", "Firebase"]
  }
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = projects.length;

  // Auto-rotate
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused, length]);

  return (
    <>
      <p>Here are some projects I've worked on previously.</p>

      <div
        className="projects-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                className={`carousel-slide ${
                  current === index ? "active" : ""
                }`}
                key={index}
              >
                <img src={project.src} alt={project.title} />

                <div className="carousel-caption">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tag) => (
                      <span className="tech-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                current === index ? "active" : ""
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;