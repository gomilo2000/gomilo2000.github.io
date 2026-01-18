import React from 'react'

// Work images
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.jpg'
import work6 from '../assets/work6.jpg'

const projects = [
  { src: work1, alt: 'Project 1', caption: 'Project 1 description' },
  { src: work2, alt: 'Project 2', caption: 'Project 2 description' },
  { src: work3, alt: 'Project 3', caption: 'Project 3 description' },
  { src: work4, alt: 'Project 4', caption: 'Project 4 description' },
  { src: work5, alt: 'Project 5', caption: 'Project 5 description' },
  { src: work6, alt: 'Project 6', caption: 'Project 6 description' },
]

const Projects = () => {
  return (
    <section id="PROJECTS" className="projects-section">
      <h1>PROJECTS</h1>
      <p>Here are some projects I've worked on previously.</p>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <img src={project.src} alt={project.alt} className="work-image" />
            {project.caption && (
              <p className="work-caption">{project.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects