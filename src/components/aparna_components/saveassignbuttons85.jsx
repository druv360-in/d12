import React from "react";

const styles = {
  saveAssignContainer: {
    background: "#1a2438",
    borderRadius: "14px",
    padding: "12px",
    margin: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  saveTeamBtn: {
    height: "38px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(90deg, #7c4dff 0%, #a855f7 100%)",
    color: "white",
    fontSize: "11px",
    fontWeight: "600",
    cursor: "pointer",
  },

  assignProjectBtn: {
    height: "34px",
    border: "none",
    borderRadius: "12px",
    background: "#d9e7ff",
    color: "#8fa6d8",
    fontSize: "10px",
    fontWeight: "600",
    cursor: "not-allowed",
    opacity: 0.85,
  },

  cancelBtn: {
    height: "34px",
    borderRadius: "12px",
    border: "1px solid #263756",
    background: "transparent",
    color: "#c7d2e8",
    fontSize: "10px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

const SaveAssignButtons85 = () => {
  return (
    <div style={styles.saveAssignContainer}>
      <button style={styles.saveTeamBtn}>
        ⚡ Save Team Member
      </button>

      <button
        style={styles.assignProjectBtn}
        disabled
      >
        ➕ Assign to Project
      </button>

      <button style={styles.cancelBtn}>
        Cancel
      </button>
    </div>
  );
};

export default SaveAssignButtons85;





