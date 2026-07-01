import React from "react";
import { Play, Calendar, ExternalLink } from "lucide-react";

const styles = {
  portfolioCard: {
    background: "#182235",
    borderRadius: "16px",
    overflow: "hidden",
    marginBottom: "14px",
  },

  portfolioThumbnail: {
    position: "relative",
    height: "140px",
  },

  portfolioImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  portfolioCardContent: {
    padding: "12px",
  },

  title: {
    color: "white",
    fontSize: "15px",
    fontWeight: "700",
    marginBottom: "8px",
  },

  description: {
    color: "#c4ccd8",
    fontSize: "11px",
    lineHeight: "1.5",
    marginBottom: "10px",
  },

  toolsUsed: {
    display: "block",
    color: "#8c96a8",
    fontSize: "10px",
    marginBottom: "8px",
  },

  portfolioTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "12px",
  },

  portfolioTag: {
    background: "#ece9ff",
    color: "#7c5cff",
    fontSize: "10px",
    fontWeight: "600",
    borderRadius: "999px",
    padding: "4px 8px",
  },

  portfolioFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  portfolioDate: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "#a6afbd",
    fontSize: "10px",
  },

  viewProjectBtn: {
    border: "none",
    background: "linear-gradient(90deg, #6c63ff, #a020f0)",
    color: "white",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "10px",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
};

const PpCard38 = ({
  title,
  image,
  description,
  date,
  tags,
}) => {
  return (
    <div style={styles.portfolioCard}>

      <div style={styles.portfolioThumbnail}>

        <img
          src={image}
          alt={title}
          style={styles.portfolioImage}
        />

        <div style={styles.playButton}>
          <Play size={20} fill="#7C5CFF" />
        </div>

      </div>

      <div style={styles.portfolioCardContent}>

        <h3 style={styles.title}>{title}</h3>

        <p style={styles.description}>{description}</p>

        <span style={styles.toolsUsed}>
          Tools Used
        </span>

        <div style={styles.portfolioTags}>

          {tags.map((tag, index) => (
            <span
              key={index}
              style={styles.portfolioTag}
            >
              {tag}
            </span>
          ))}

        </div>

        <div style={styles.portfolioFooter}>

          <div style={styles.portfolioDate}>
            <Calendar size={12} />
            <span>{date}</span>
          </div>

          <button style={styles.viewProjectBtn}>
            <ExternalLink size={12} />
            View Project
          </button>

        </div>

      </div>

    </div>
  );
};

export default PpCard38;
