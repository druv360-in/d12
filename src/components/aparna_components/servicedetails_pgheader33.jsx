import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

const ServiceDetailsPgHeader = ({
  onBack,
  onFavorite,
  isFavorited = false,
}) => {
  const styles = {
    wrapper: {
      background: "#111C33",
      padding: "20px 20px 16px",
      borderRadius: "0 0 18px 18px",
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    backButton: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "rgba(255,255,255,0.08)",
      border: "none",
      borderRadius: "20px",
      padding: "8px 14px",
      color: "#ffffff",
      cursor: "pointer",
      fontSize: "13px",
      fontWeight: "600",
    },

    title: {
      color: "#ffffff",
      fontSize: "22px",
      fontWeight: "700",
      margin: 0,
      flex: 1,
      textAlign: "center",
    },

    favoriteBtn: {
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      border: "none",
      background: "rgba(255,255,255,0.08)",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },

    divider: {
      marginTop: "18px",
      height: "1px",
      background: "rgba(255,255,255,0.08)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <button
          style={styles.backButton}
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </button>

        <h1 style={styles.title}>
          Service Details
        </h1>

        <button
          style={styles.favoriteBtn}
          onClick={onFavorite}
          type="button"
        >
          <Heart
            size={18}
            fill={isFavorited ? "#ffffff" : "transparent"}
            color="#ffffff"
          />
        </button>
      </div>

      <div style={styles.divider} />
    </div>
  );
};

export default ServiceDetailsPgHeader;