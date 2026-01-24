import React, { useState } from "react";

/* -----------------------------
   Skill groups (left side)
----------------------------- */
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

/* -----------------------------
   Skill detail data (right panel)
----------------------------- */
const skillDetails = {
  React: {
    description:
      "I use React to build structured, component-based interfaces with a focus on clarity and reuse.",
    points: [
      "Hooks & component architecture",
      "State & side-effect management",
      "Reusable UI patterns",
    ],
  },
  TypeScript: {
    description:
      "I use TypeScript to write clearer, more predictable code and reduce errors as projects grow.",
    points: [
      "Typed props and component state",
      "Improved readability and maintainability",
      "Safer refactoring during development",
    ],
  },
  JavaScript: {
    description:
      "I use modern JavaScript to handle application logic, interactions, and asynchronous behavior.",
    points: [
      "ES6+ syntax and patterns",
      "Working with async logic",
      "Integrating with APIs and browser features",
    ],
  },
  Vue: {
    description:
      "I have experience building smaller applications and components using Vue.",
    points: [
      "Component-based structure",
      "Reactivity fundamentals",
      "Clean templating",
    ],
  },
  "React Native": {
    description:
      "I use React Native to build simple cross-platform mobile applications.",
    points: [
      "Shared component logic",
      "Platform-aware UI decisions",
      "Expo-based development",
    ],
  },
  Swift: {
    description:
      "Basic experience working with Swift and native iOS development concepts.",
    points: [
      "Swift language fundamentals",
      "iOS UI concepts",
    ],
  },
  Kotlin: {
    description:
      "Basic experience using Kotlin for Android development during coursework.",
    points: [
      "Android app structure",
      "Kotlin syntax fundamentals",
    ],
  },
  Ionic: {
    description:
      "Experience using Ionic for hybrid mobile app development.",
    points: [
      "Web-to-mobile workflows",
      "Component-based UI",
    ],
  },
  HTML5: {
    description:
      "I write semantic and accessible markup to support clean structure and usability.",
    points: [
      "Semantic elements",
      "Accessibility basics",
      "Well-structured documents",
    ],
  },
  CSS: {
    description:
      "I use CSS to create responsive layouts and polished interfaces with attention to detail.",
    points: [
      "Flexbox & Grid layouts",
      "Responsive design principles",
      "Subtle UI interactions",
    ],
  },
  Java: {
    description:
      "Experience with Java fundamentals and object-oriented programming.",
    points: [
      "OOP concepts",
      "Basic backend logic",
    ],
  },
  "C#": {
    description:
      "Basic experience working with C# and object-oriented programming.",
    points: [
      "OOP fundamentals",
      ".NET basics",
    ],
  },
  Python: {
    description:
      "Some experience using Python for scripting and basic programming tasks.",
    points: [
      "Readable syntax",
      "Basic scripting and logic",
    ],
  },
};

function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);

  return (
    <div className="skills skills-with-panel">
      {/* =============================
          LEFT: Skill list
      ============================== */}
      <div className="skills-left">
        {skillGroups.map((group) => (
          <div
            className="skill-group"
            key={group.title}
            data-group={group.title.toLowerCase()}
          >
            <h3 className="skill-group-title">{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span
                  className="skill-pill"
                  key={skill}
                  onMouseEnter={() => {
                    setActiveSkill(skill);
                    setActiveGroup(group.title.toLowerCase());
                  }}
                  onMouseLeave={() => {
                    setActiveSkill(null);
                    setActiveGroup(null);
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* =============================
          RIGHT: Interactive panel
      ============================== */}
      <div
        className="skill-panel"
        data-group={activeGroup || undefined}
      >
        {!activeSkill && (
          <div className="skill-panel-idle">
            <p>Hover a skill to see how I use it.</p>
          </div>
        )}

        {activeSkill && skillDetails[activeSkill] && (
          <div className="skill-panel-content">
            <h4 className="skill-panel-title">{activeSkill}</h4>
            <p className="skill-panel-description">
              {skillDetails[activeSkill].description}
            </p>

            <ul className="skill-panel-points">
              {skillDetails[activeSkill].points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;

