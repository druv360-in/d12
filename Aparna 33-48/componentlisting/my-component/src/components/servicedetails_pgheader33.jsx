import ChatButton35 from "./chat_button35";
import React from "react";
import {
  Menu,
  ArrowLeft,
  Heart,
  ShoppingCart,
  User,
  Sun,
  Zap,
} from "lucide-react";

const ServiceDetailsPgHeader = ({
  onBack,
  onFavorite,
  isFavorited = false,
}) => {
  return (
    <div className="service-header-wrapper">
      {/* Top Navigation */}
      <div className="top-navbar">
        <button className="nav-icon">
          <Menu size={18} />
        </button>

        <div className="logo-section">
          <div className="logo-icon">
            <Zap size={10} fill="white" />
          </div>

          <span className="logo-text">
            SkillBuster
          </span>
        </div>

        <div className="nav-actions">
          <button className="nav-icon">
            <Sun size={16} />
          </button>

          <button className="nav-icon">
            <ShoppingCart size={16} />
          </button>

          <button className="nav-icon">
            <User size={16} />
          </button>
        </div>
      </div>

      {/* Header Area */}
      <div className="service-details-header">
        <button
          className="back-pill"
          onClick={onBack}
        >
          <ArrowLeft size={12} />
          <span>Back</span>
        </button>

        <div className="title-row">
          <h1>Service Details</h1>

          <button
            className="favorite-btn"
            onClick={onFavorite}
          >
            <Heart
              size={18}
              fill={isFavorited ? "currentColor" : "none"}
            />
          </button>
        </div>
      </div>

      <div className="header-divider" />
    </div>
  );
};

export default ServiceDetailsPgHeader;