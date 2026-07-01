import React from "react";
import { Play } from "lucide-react";

const styles = {
  portfolioCard: {
    margin: "14px",
    background: "#121a2b",
    borderRadius: "16px",
    overflow: "hidden",
  },

  portfolioThumb: {
    position: "relative",
  },

  portfolioImage: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    display: "block",
  },

  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(255,255,255,0.9)",
    borderRadius: "50%",
    padding: "10px",
    color: "#7c5cff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  portfolioInfo: {
    padding: "12px",
  },

  title: {
    color: "white",
    fontSize: "14px",
    marginBottom: "6px",
  },

  description: {
    color: "#9ca3af",
    fontSize: "12px",
    lineHeight: "normal",
    margin: 0,
  },
};

const PortfolioCard46 = () => {
  return (
    <div style={styles.portfolioCard}>
      <div style={styles.portfolioThumb}>
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="Product Demo Video"
          style={styles.portfolioImage}
        />

        <div style={styles.playButton}>
          <Play size={22} />
        </div>
      </div>

      <div style={styles.portfolioInfo}>
        <h3 style={styles.title}>
          Product Demo Video
        </h3>

        <p style={styles.description}>
          Professional product showcase video with motion graphics,
          screen recordings and promotional storytelling.
        </p>
      </div>
    </div>
  );
};

export default PortfolioCard46;