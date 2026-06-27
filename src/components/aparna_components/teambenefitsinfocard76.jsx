import React from "react";

const TeamBenefitsInfoCard76 = () => {
  const benefits = [
    "Hire multiple freelancers for different roles",
    "Pay only for work that meets your quality standards",
    "Scale your team up or down based on project needs",
    "Save 60% compared to traditional platforms",
  ];

  return (
    <div className="team-benefits-card">
      <h3 className="team-benefits-title">
        Team Benefits
      </h3>

      <ul className="team-benefits-list">
        {benefits.map((benefit, index) => (
          <li key={index} className="team-benefit-item">
            <div className="team-benefit-check">
              ✓
            </div>

            <span className="team-benefit-text">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamBenefitsInfoCard76;