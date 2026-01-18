import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";

function Projects() {
  const projects = [
    { src: work1, alt: "Project 1", caption: "Project 1 description" },
    { src: work2, alt: "Project 2", caption: "Project 2 description" },
    { src: work3, alt: "Project 3", caption: "Project 3 description" },
  ];

  return (
    <section id="PROJECTS">
      <h1>PROJECTS</h1>
      <p>Here are some projects I've worked on previously.</p>

      <div className="work-grid">
        {projects.map((item, index) => (
          <div className="work-card" key={index}>
            <img src={item.src} alt={item.alt} className="work-image" />
            {item.caption && (
              <p className="work-caption">{item.caption}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;