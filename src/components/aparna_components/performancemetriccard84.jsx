import React from "react";

const PerformanceMetricCard84 = ({
  title,
  value,
  subtitle,
  icon,
  bgClass,
}) => {
  return (
    <div className={`metric-card ${bgClass}`}>
      <div className="metric-card-header">
        <span className="metric-title">{title}</span>
        <span className="metric-icon">{icon}</span>
      </div>

      <div className="metric-value">
        {value}
      </div>

      <div className="metric-subtitle">
        {subtitle}
      </div>
    </div>
  );
};

export default PerformanceMetricCard84;