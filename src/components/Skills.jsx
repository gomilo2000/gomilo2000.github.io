import React from "react";

const skillGroups = [
{
title: "Frontend",
skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Vue"],
},
{
title: "Mobile",
skills: ["React Native", "Swift", "Kotlin", "Ionic"],
},
{
title: "Backend (Basic)",
skills: ["Java", "C#", "Python", "Node.js"],
},
{
title: "Other / General",
skills: ["Git", "REST APIs"],
},
];


const Skills = () => {
return (
<div className="skills-wrapper">
{skillGroups.map((group) => (
<div key={group.title} className="skills-group">
<h3 className="skills-title">{group.title}</h3>
<ul className="skills-list">
{group.skills.map((skill) => (
<li key={skill} className="skill-pill">
{skill}
</li>
))}
</ul>
</div>
))}
</div>
);
};


export default Skills;