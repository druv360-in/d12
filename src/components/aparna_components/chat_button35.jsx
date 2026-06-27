import React from "react";
import {
  MessageCircle,
  Clock3,
  CheckCircle,
  Star,
} from "lucide-react";

const ChatButton35 = ({ onChat }) => {
  return (
    <div className="freelancer-section">

      <div className="freelancer-card">

        <div className="freelancer-left">

          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Emma Johnson"
            className="freelancer-avatar"
          />

          <div className="freelancer-info">
            <h4>Emma Johnson</h4>
            <p>Computer Science • Stanford University</p>
          </div>

        </div>

        {/* ✅ FIXED NAVIGATION */}
        <button
          className="chat-btn"
          type="button"
          onClick={() => {
            if (onChat) onChat();
          }}
        >
          <MessageCircle size={18} />
        </button>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <Clock3 size={18} className="stat-icon" />
          <span className="stat-label">Delivery</span>
          <h5>5 days</h5>
        </div>

        <div className="stat-card">
          <CheckCircle size={18} className="stat-icon success" />
          <span className="stat-label">Orders</span>
          <h5>45</h5>
        </div>

        <div className="stat-card">
          <Star size={18} className="stat-icon warning" />
          <span className="stat-label">Rating</span>
          <h5>4.9</h5>
        </div>

      </div>

    </div>
  );
};

export default ChatButton35;