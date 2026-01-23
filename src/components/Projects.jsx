import React, { useEffect, useRef, useState } from "react";

import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";

const projects = [
  {
    src: work1,
    title: "AtCampus",
    description: "Colloquium Feature Process",
    tech: ["React", "Tailwind CSS", "Figma"],
    github: null,
    demo: null
  },
  {
    src: work2,
    title: "ReverseImageSearch App",
    description: "ReverseImageSearch Android Application.",
    tech: ["Android Studio", "Kotlin", "API"],
    github: null,
    demo: null
  }
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef(null);
  const length = projects.length;

  const next = () => setCurrent((c) => (c + 1) % length);
  const prev = () => setCurrent((c) => (c - 1 + length) % length);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Swipe support
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    startX.current = null;
  };

  return (
    <>
      <p>Here are a couple of projects I’ve worked on so far. This section is still growing, and I’ll be adding more as I continue to develop my skills and gain experience.</p>

      <div
        className="projects-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  current === index ? "active" : ""
                }`}
              >
                <img src={project.src} alt={project.title} />

                {/* TOP-RIGHT ICON ACTIONS */}
                <div className="project-actions top-right">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                    >
                      {/* GitHub icon */}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.1c-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.69-1.27-1.69-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.17a11.07 11.07 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.07 0 4.39-2.69 5.36-5.25 5.64.41.35.77 1.04.77 2.1v3.11c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                      </svg>
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View live demo"
                    >
                      {/* External link icon */}
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                        <path d="M5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="carousel-caption">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-tags">
                    {project.tech.map((tag) => (
                      <span key={tag} className="tech-tag">
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