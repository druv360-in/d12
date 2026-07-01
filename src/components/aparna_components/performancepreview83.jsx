import React from "react";
import PerformanceMetricCard84 from "./performancemetriccard84";

const styles = {
  performancePreviewCard: {
    background: "#1a2438",
    borderRadius: "14px",
    padding: "18px",
    margin: "16px",
  },

  performanceHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "18px",
  },

  performanceIcon: {
    color: "#7c5cff",
    fontSize: "12px",
  },

  headerTitle: {
    margin: 0,
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
  },
};

const PerformancePreview83 = () => {
  return (
    <div style={styles.performancePreviewCard}>
      <div style={styles.performanceHeader}>
        <span style={styles.performanceIcon}>
          ↗
        </span>

        <h3 style={styles.headerTitle}>
          Performance Preview
        </h3>
      </div>

      <PerformanceMetricCard84
        title="Completed Projects"
        value="0"
        subtitle="Will update after first project"
        icon="📋"
        bgClass="metric-purple"
      />

      <PerformanceMetricCard84
        title="Client Rating"
        value="★★★★★"
        subtitle="No reviews yet"
        icon="⭐"
        bgClass="metric-yellow"
      />

      <PerformanceMetricCard84
        title="Total Earnings"
        value="$0"
        subtitle="Track earnings here"
        icon="$"
        bgClass="metric-green"
      />

      <PerformanceMetricCard84
        title="Response Time"
        value="< 1 hr"
        subtitle="Average response time"
        icon="🕒"
        bgClass="metric-blue"
      />

      <PerformanceMetricCard84
        title="On-Time Delivery"
        value="100%"
        subtitle="Maintain quality standards"
        icon="🎯"
        bgClass="metric-pink"
      />
    </div>
  );
};

export default PerformancePreview83;
