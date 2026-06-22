import React from "react";
import { Play } from "lucide-react";

const PortfolioCard46 = () => {
  return (
    <div className="portfolio-card46">

      <div className="portfolio-thumb46">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="Product Demo Video"
        />

        <div className="play-btn46">
          <Play size={22} />
        </div>
      </div>

      <div className="portfolio-info46">
        <h3>Product Demo Video</h3>

        <p>
          Professional product showcase video with motion graphics,
          screen recordings and promotional storytelling.
        </p>
      </div>

    </div>
  );
};

export default PortfolioCard46;