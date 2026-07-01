import React from "react";

const styles = {
  teamBenefitsCard: {
    background: "#ffffff",
    borderRadius: "12px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
  },

  teamBenefitsTitle: {
    margin: "0 0 16px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#1f2937",
  },

  teamBenefitsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  teamBenefitItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "12px",
  },

  teamBenefitItemLast: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: 0,
  },

  teamBenefitCheck: {
    width: "16px",
    height: "16px",
    border: "1px solid #a855f7",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#a855f7",
    fontSize: "10px",
    flexShrink: 0,
    marginTop: "2px",
  },

  teamBenefitText: {
    fontSize: "12px",
    color: "#6b7280",
    lineHeight: "1.5",
  },
};

const TeamBenefitsInfoCard76 = () => {
  const benefits = [
    "Hire multiple freelancers for different roles",
    "Pay only for work that meets your quality standards",
    "Scale your team up or down based on project needs",
    "Save 60% compared to traditional platforms",
  ];

  return (
    <div style={styles.teamBenefitsCard}>
      <h3 style={styles.teamBenefitsTitle}>
        Team Benefits
      </h3>

      <ul style={styles.teamBenefitsList}>
        {benefits.map((benefit, index) => (
          <li
            key={index}
            style={
              index === benefits.length - 1
                ? styles.teamBenefitItemLast
                : styles.teamBenefitItem
            }
          >
            <div style={styles.teamBenefitCheck}>
              ✓
            </div>

            <span style={styles.teamBenefitText}>
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamBenefitsInfoCard76;


