import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

const styles = {
  header: {
    height: "72px",
    background: "#d9d9d9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },

  headerBtn: {
    width: "40px",
    height: "40px",
    border: "none",
    borderRadius: "50%",
    background: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  headerTitle: {
    color: "#f5f5f5",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "0.2px",
  },
};

const PpHeader39 = ({
  onBack,
  onFavorite,
  isFavorited = false,
}) => {
  return (
    <header style={styles.header}>
      <button
        style={styles.headerBtn}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#5b6270")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6b7280")}
        onClick={onBack}
        type="button"
      >
        <ArrowLeft size={20} color="#ffffff" />
      </button>

      <h1 style={styles.headerTitle}>
        Profile
      </h1>

      <button
        style={styles.headerBtn}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#5b6270")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6b7280")}
        onClick={onFavorite}
        type="button"
      >
        <Heart
          size={20}
          color="#ffffff"
          fill={isFavorited ? "#ffffff" : "transparent"}
        />
      </button>
    </header>
  );
};

export default PpHeader39;

