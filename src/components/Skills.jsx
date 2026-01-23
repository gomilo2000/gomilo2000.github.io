import React from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["TypeScript", "JavaScript", "React", "Vue"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Swift", "Kotlin", "Ionic"],
  },
  {
    title: "Styling & Markup",
    skills: ["HTML5", "CSS"],
  },
  {
    title: "Backend / Other",
    skills: ["Java", "C#", "Python"],
  },
];

function Skills() {
  return (
    <div className="skills">
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.title}>
          <h3 className="skill-group-title">{group.title}</h3>

          <div className="skill-list">
            {group.skills.map((skill) => (
              <span className="skill-pill" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;