import { Star } from "lucide-react";

function TopFreelancerCard10({ freelancer }) {
  return (
    <div className="freelancer-card">
      <img 
        src={freelancer.avatar} 
        alt={freelancer.name} 
        className="freelancer-avatar" 
      />
      <div className="freelancer-main">
        <div className="freelancer-details">
          <h4 className="freelancer-name">{freelancer.name}</h4>
          <p className="freelancer-uni">{freelancer.university}</p>
          <div className="freelancer-stats">
            <div className="stat-item">
              <Star size={14} fill="#fbbf24" color="#fbbf24" />
              <span>{freelancer.rating}</span>
            </div>
            <div className="stat-item">
              <span>{freelancer.projects} projects</span>
            </div>
          </div>
        </div>
        <div className="freelancer-rate">
          <span className="rate-label">From</span>
          <span className="rate-value">${freelancer.rate}/hr</span>
        </div>
      </div>
    </div>
  );
}

export default TopFreelancerCard10;