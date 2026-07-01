import React from "react";
import { Star, Briefcase, MessageSquare } from "lucide-react";

const styles = {
  profileHeroCard: {
    margin: "16px",
    padding: "20px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  },

  profileHeroTop: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    marginBottom: "22px",
  },

  profileAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    objectFit: "cover",
    border: "2px solid rgba(255,255,255,0.25)",
  },

  profileInfo: {
    display: "flex",
    flexDirection: "column",
  },

  profileName: {
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "4px",
  },

  profileSubtitle: {
    color: "#e0e7ff",
    fontSize: "13px",
  },

  profileStats: {
    display: "flex",
    justifyContent: "space-between",
  },

  profileStat: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },

  profileIcon: {
    color: "white",
    marginBottom: "6px",
  },

  profileStatValue: {
    color: "white",
    fontSize: "14px",
    fontWeight: "700",
    marginBottom: "2px",
  },

  profileStatLabel: {
    color: "#e0e7ff",
    fontSize: "11px",
  },
};

const ProfileHeroCard40 = () => {
  return (
    <div style={styles.profileHeroCard}>

      <div style={styles.profileHeroTop}>

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Emma Thompson"
          style={styles.profileAvatar}
        />

        <div style={styles.profileInfo}>
          <h2 style={styles.profileName}>Emma Thompson</h2>
          <p style={styles.profileSubtitle}>
            Computer Science @ Stanford University
          </p>
        </div>

      </div>

      <div style={styles.profileStats}>

        <div style={styles.profileStat}>
          <Star
            size={18}
            fill="white"
            color="white"
            style={styles.profileIcon}
          />
          <h4 style={styles.profileStatValue}>4.9</h4>
          <span style={styles.profileStatLabel}>Rating</span>
        </div>

        <div style={styles.profileStat}>
          <Briefcase
            size={18}
            style={styles.profileIcon}
          />
          <h4 style={styles.profileStatValue}>89</h4>
          <span style={styles.profileStatLabel}>Projects</span>
        </div>

        <div style={styles.profileStat}>
          <MessageSquare
            size={18}
            style={styles.profileIcon}
          />
          <h4 style={styles.profileStatValue}>127</h4>
          <span style={styles.profileStatLabel}>Reviews</span>
        </div>

      </div>

    </div>
  );
};

export default ProfileHeroCard40;
