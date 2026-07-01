import React from "react";
import {
  MessageCircle,
  Clock3,
  CheckCircle,
  Star,
} from "lucide-react";

const styles = {
  freelancerSection: {
    marginTop: "20px",
    marginBottom: "20px",
  },

  freelancerCard: {
    background: "#f5eef4",
    borderRadius: "16px",
    padding: "12px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  freelancerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  freelancerAvatar: {
    width: "46px",
    height: "46px",
    borderRadius: "12px",
    objectFit: "cover",
  },

  freelancerInfo: {
    display: "flex",
    flexDirection: "column",
  },

  freelancerName: {
    color: "#111827",
    fontSize: "14px",
    fontWeight: "700",
    margin: 0,
  },

  freelancerRole: {
    color: "#6b7280",
    fontSize: "11px",
    margin: "2px 0 0 0",
  },

  chatBtn: {
    width: "36px",
    height: "36px",
    border: "none",
    background: "transparent",
    color: "#7c5cff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    marginTop: "14px",
  },

  statCard: {
    background: "#15233a",
    borderRadius: "14px",
    padding: "14px 10px",
    textAlign: "center",
  },

  statIcon: {
    color: "#9ca3af",
    marginBottom: "8px",
  },

  successIcon: {
    color: "#00d084",
    marginBottom: "8px",
  },

  warningIcon: {
    color: "#ffc107",
    marginBottom: "8px",
  },

  statLabel: {
    display: "block",
    color: "#8ea0b9",
    fontSize: "11px",
    marginBottom: "6px",
  },

  statValue: {
    color: "white",
    fontSize: "18px",
    fontWeight: "700",
    margin: 0,
  },
};

const ChatButton35 = ({ onChat }) => {
  return (
    <div style={styles.freelancerSection}>

      <div style={styles.freelancerCard}>

        <div style={styles.freelancerLeft}>

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Emma Johnson"
            style={styles.freelancerAvatar}
          />

          <div style={styles.freelancerInfo}>
            <h4 style={styles.freelancerName}>Emma Johnson</h4>
            <p style={styles.freelancerRole}>
              Computer Science • Stanford University
            </p>
          </div>

        </div>

        <button
          style={styles.chatBtn}
          type="button"
          onClick={() => {
            if (onChat) onChat();
          }}
        >
          <MessageCircle size={18} />
        </button>

      </div>

      <div style={styles.statsGrid}>

        <div style={styles.statCard}>
          <Clock3 size={18} style={styles.statIcon} />
          <span style={styles.statLabel}>Delivery</span>
          <h5 style={styles.statValue}>5 days</h5>
        </div>

        <div style={styles.statCard}>
          <CheckCircle size={18} style={styles.successIcon} />
          <span style={styles.statLabel}>Orders</span>
          <h5 style={styles.statValue}>45</h5>
        </div>

        <div style={styles.statCard}>
          <Star size={18} style={styles.warningIcon} />
          <span style={styles.statLabel}>Rating</span>
          <h5 style={styles.statValue}>4.9</h5>
        </div>

      </div>

    </div>
  );
};

export default ChatButton35;
