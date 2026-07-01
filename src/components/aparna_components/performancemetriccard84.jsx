import React from "react";

const PerformanceMetricCard84 = ({
  title,
  value,
  subtitle,
  icon,
  bgClass,
}) => {
  const backgroundColors = {
    "metric-purple": "#f2ecf7",
    "metric-yellow": "#f7f4e7",
    "metric-green": "#e6f4ec",
    "metric-blue": "#eef3ff",
    "metric-pink": "#f9edf2",
  };

  const styles = {
    metricCard: {
      background: backgroundColors[bgClass] || "#f2ecf7",
      borderRadius: "14px",
      padding: "14px",
      marginBottom: "12px",
    },

    metricCardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    metricTitle: {
      fontSize: "11px",
      color: "#8b93a8",
      fontWeight: "500",
    },

    metricIcon: {
      fontSize: "12px",
    },

    metricValue: {
      marginTop: "12px",
      fontSize: "22px",
      fontWeight: "700",
      color: "#ffffff",
    },

    metricSubtitle: {
      marginTop: "8px",
      fontSize: "10px",
      color: "#8b93a8",
    },
  };

  return (
    <div style={styles.metricCard}>
      <div style={styles.metricCardHeader}>
        <span style={styles.metricTitle}>
          {title}
        </span>

        <span style={styles.metricIcon}>
          {icon}
        </span>
      </div>

      <div style={styles.metricValue}>
        {value}
      </div>

      <div style={styles.metricSubtitle}>
        {subtitle}
      </div>
    </div>
  );
};

export default PerformanceMetricCard84;


