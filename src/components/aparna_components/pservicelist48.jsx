import React from "react";
import { Star } from "lucide-react";

const PpServiceList48 = () => {
  const services = [
    {
      title: "Modern Website Development",
      description:
        "I will create a fully responsive, modern website using React and Tailwind CSS. Includes 5 pages, mobile optimization, and clean code.",
      price: "$299",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400",
    },
    {
      title: "Custom Web Application",
      description:
        "Build a custom web application with database integration, user authentication, and admin dashboard.",
      price: "$599",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
  ];

  return (
    <section className="services48-section">

      <div className="services48-header">
        <h2>Services (2)</h2>
        <span>View All</span>
      </div>

      {services.map((service, index) => (
        <div key={index} className="service48-card">

          <img
            src={service.image}
            alt={service.title}
            className="service48-image"
          />

          <div className="service48-content">

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service48-footer">

              <div className="service48-rating">
                <Star size={14} fill="#FFC107" color="#FFC107" />
                <span>{service.rating}</span>
              </div>

              <div className="service48-price">
                {service.price}
              </div>

            </div>

          </div>

        </div>
      ))}
    </section>
  );
};

export default PpServiceList48;