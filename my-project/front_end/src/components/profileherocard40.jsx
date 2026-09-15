import React from "react";
import { Star, Briefcase, MessageSquare } from "lucide-react";

const ProfileHeroCard40 = () => {
  return (
    <div className="profile-hero-card">

      <div className="profile-hero-top">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Emma Thompson"
          className="profile-avatar"
        />

        <div className="profile-info">
          <h2>Emma Thompson</h2>
          <p>Computer Science @ Stanford University</p>
        </div>

      </div>

      <div className="profile-stats">

        <div className="profile-stat">
          <Star size={18} fill="white" color="white" />
          <h4>4.9</h4>
          <span>Rating</span>
        </div>

        <div className="profile-stat">
          <Briefcase size={18} />
          <h4>89</h4>
          <span>Projects</span>
        </div>

        <div className="profile-stat">
          <MessageSquare size={18} />
          <h4>127</h4>
          <span>Reviews</span>
        </div>

      </div>

    </div>
  );
};

export default ProfileHeroCard40;