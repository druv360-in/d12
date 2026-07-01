import React from "react";
import { Briefcase } from "lucide-react";

const styles = {
  hiremeBar: {
    background: "#f3f4f6",
    margin: "16px",
    padding: "18px",
    borderRadius: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  hiremeLeft: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  hiremeIcon: {
    width: "48px",
    height: "48px",
    borderRadius: "14px",
    background: "#1f2937",
    color: "#7c5cff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hiremeInfo: {
    display: "flex",
    flexDirection: "column",
  },

  hiremeLabel: {
    color: "#9ca3af",
    fontSize: "14px",
  },

  hiremeRate: {
    color: "#111827",
    fontSize: "30px",
    fontWeight: "700",
    lineHeight: 1,
    marginTop: "4px",
    marginBottom: 0,
  },

  hiremeBtn: {
    border: "none",
    background: "#1f2937",
    color: "white",
    padding: "14px 24px",
    borderRadius: "18px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  },
};

const HireMeBar47 = () => {
  return (
    <div style={styles.hiremeBar}>
      <div style={styles.hiremeLeft}>
        <div style={styles.hiremeIcon}>
          <Briefcase size={22} />
        </div>

        <div style={styles.hiremeInfo}>
          <span style={styles.hiremeLabel}>
            Hourly Rate
          </span>

          <h3 style={styles.hiremeRate}>
            $35/hr
          </h3>
        </div>
      </div>

      <button style={styles.hiremeBtn}>
        Hire Me
      </button>
    </div>
  );
};

export default HireMeBar47;

