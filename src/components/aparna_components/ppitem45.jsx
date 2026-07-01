import React from "react";

const styles = {
  item: {
    margin: "14px",
    padding: "14px",
    background: "#121a2b",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  badge: {
    display: "inline-block",
    padding: "4px 10px",
    fontSize: "10px",
    background: "#7c5cff",
    color: "white",
    borderRadius: "999px",
    marginBottom: "8px",
  },

  title: {
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "6px",
  },

  desc: {
    color: "#9ca3af",
    fontSize: "12px",
    lineHeight: "1.5",
  },
};const PpItem45 = () => {
  return (
    <div style={styles.item}>
      <div style={styles.itemBadge}>Featured</div>

      <h3 style={styles.itemTitle}>
        Brand Campaign Video (Highlight)
      </h3>

      <p style={styles.itemDesc}>
        A premium showcase project with cinematic transitions,
        motion graphics, and storytelling visuals.
      </p>
    </div>
  );
};

export default PpItem45;

