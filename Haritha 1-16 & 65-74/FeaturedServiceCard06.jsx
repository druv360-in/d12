import { Star, Clock } from "lucide-react";

function FeaturedServiceCard06({ service }) {
  return (
    <div className="service-card">
      <img 
        src={service.image} 
        alt={service.title} 
        className="service-image" 
      />
      
      <div className="service-content">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-desc">{service.desc}</p>
        
        <div className="service-meta">
          <div className="meta-item">
            <Star size={14} fill="#fbbf24" color="#fbbf24" />
            <span>{service.rating}</span>
          </div>
          <div className="meta-item">
            <Clock size={14} color="#9ca3af" />
            <span>{service.days} days</span>
          </div>
        </div>

        <div className="service-footer">
          <div className="seller-info">
            <img 
              src={service.avatar} 
              alt={service.name} 
              className="seller-avatar" 
            />
            <span className="seller-name">{service.name}</span>
          </div>
          <span className="service-price">${service.price}</span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedServiceCard06;