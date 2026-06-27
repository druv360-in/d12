import React from "react";
import PerformanceMetricCard84 from "./performancemetriccard84";

const PerformancePreview83 = () => {
  return (
    <div className="performance-preview-card">

      <div className="performance-header">
        <span className="performance-icon">
          ↗
        </span>

        <h3>Performance Preview</h3>
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