import React from "react";
import ChatButton35 from "./chat_button35";

const ServiceDetailsBody = ({ onChatClick }) => {
  return (
    <div className="service-body">

      {/* Hero Image */}
      <div className="service-image-container">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Website Development"
          className="service-image"
        />
      </div>

      {/* Service Title + Price */}
      <div className="service-title-section">
        <div>
          <h2 className="service-title">
            Modern Website Development
          </h2>

          <div className="rating-row">
            ⭐ <span>4.9</span>
            <small>(45 reviews)</small>
          </div>
        </div>

        <div className="price-section">
          <p>Starting at</p>
          <h3>$299</h3>
        </div>
      </div>

      {/* ================= CHAT COMPONENT (COMPONENT 35) ================= */}
      <ChatButton35 onChat={onChatClick} />

      {/* About */}
      <section className="about-section">
        <h3>About This Service</h3>

        <p>
          I will create a fully responsive, modern website using React and
          Tailwind CSS. Includes 5 pages, mobile optimization and clean code.
        </p>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h3>Skills & Tags</h3>

        <div className="tags-container">
          <span className="skill-tag">React</span>
          <span className="skill-tag">Tailwind</span>
          <span className="skill-tag">Responsive</span>
          <span className="skill-tag">Modern</span>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetailsBody;