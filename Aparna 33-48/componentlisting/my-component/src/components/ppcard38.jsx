import React from "react";
import { Play, Calendar, ExternalLink } from "lucide-react";

const PpCard38 = ({
  title,
  image,
  description,
  date,
  tags,
}) => {
  return (
    <div className="portfolio-card">

      <div className="portfolio-thumbnail">

        <img
          src={image}
          alt={title}
          className="portfolio-image"
        />

        <div className="play-button">
          <Play size={20} fill="#7C5CFF" />
        </div>

      </div>

      <div className="portfolio-card-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="tools-used">
          Tools Used
        </span>

        <div className="portfolio-tags">

          {tags.map((tag, index) => (
            <span
              key={index}
              className="portfolio-tag"
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="portfolio-footer">

          <div className="portfolio-date">
            <Calendar size={12} />
            <span>{date}</span>
          </div>

          <button className="view-project-btn">
            <ExternalLink size={12} />
            View Project
          </button>

        </div>

      </div>

    </div>
  );
};

export default PpCard38;