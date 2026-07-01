import React from "react";

const styles = {
  aboutSection: {
    background: "#1a1d29",
    padding: "0 16px 16px",
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  aboutText: {
    color: "#8b92b0",
    fontSize: "14px",
    lineHeight: "1.6",
  },
};
const PpAboutMe43 = () => {
  return (
    <section style={styles.aboutSection}>
      <h3 style={styles.sectionTitle}>
        About Me
      </h3>

      <p style={styles.aboutText}>
        Full-stack developer passionate about creating beautiful and
        functional web applications. 3 years of experience in modern
        web technologies.
      </p>
    </section>
  );
};

export default PpAboutMe43;

