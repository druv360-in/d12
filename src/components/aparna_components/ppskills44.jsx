import React from "react";

const PpSkills44 = () => {
  const skills = [
    "React",
    "Node.js",
    "Python",
    "UI/UX",
  ];

  return (
    <section className="pp-skills-section">
      <h3 className="pp-section-title">
        Skills
      </h3>

      <div className="pp-skills-container">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="pp-skill-tag"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PpSkills44;