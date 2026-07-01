import React from "react";

const styles = {
  skillsSection: {
    background: "#1a1d29",
    padding: "0 16px 16px",
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },

  skillTag: {
    background: "#252837",
    border: "1px solid #3a3e52",
    color: "#ffffff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "500",
  },
};
const PpSkills44 = () => {
  const skills = [
    "React",
    "Node.js",
    "Python",
    "UI/UX",
  ];

  return (
    <section style={styles.skillsSection}>
      <h3 style={styles.sectionTitle}>
        Skills
      </h3>

      <div style={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span
            key={index}
            style={styles.skillTag}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PpSkills44;
