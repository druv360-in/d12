import React from "react";

const styles = {
  verificationBadgeCard: {
    background: "#e6f7ef",
    borderRadius: "14px",
    padding: "14px",
    margin: "16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },

  verificationBadgeIcon: {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    background: "#17b26a",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    flexShrink: 0,
  },

  verificationBadgeContent: {},

  title: {
    margin: "0 0 4px",
    color: "#1f5f43",
    fontSize: "13px",
    fontWeight: "700",
  },

  description: {
    margin: 0,
    color: "#4d7a66",
    fontSize: "11px",
    lineHeight: "1.4",
  },
};

const VerificationBadgeInfoCard82 = () => {
  return (
    <div style={styles.verificationBadgeCard}>
      <div style={styles.verificationBadgeIcon}>
        ✓
      </div>

      <div style={styles.verificationBadgeContent}>
        <h4 style={styles.title}>
          Verified Student Badge
        </h4>

        <p style={styles.description}>
          Members get verified badge
          <br />
          after document approval
        </p>
      </div>
    </div>
  );
};

export default VerificationBadgeInfoCard82;



