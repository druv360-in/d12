import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

const PpHeader39 = ({
  onBack,
  onFavorite,
  isFavorited = false,
}) => {
  return (
    <header className="pp-header">
      <button
        className="pp-header-btn"
        onClick={onBack}
        type="button"
      >
        <ArrowLeft size={20} color="#ffffff" />
      </button>

      <h1 className="pp-header-title">
        Profile
      </h1>

      <button
        className="pp-header-btn"
        onClick={onFavorite}
        type="button"
      >
        <Heart
          size={20}
          color="#ffffff"
          fill={isFavorited ? "#ffffff" : "transparent"}
        />
      </button>
    </header>
  );
};

export default PpHeader39;