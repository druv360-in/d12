import React from "react";

const PpCtaBar = ({ onMessage, onHire }) => {
  return (
    <div className="pp-cta">
      <button className="msg-btn" onClick={onMessage}>
        Message
      </button>

      <button className="hire-btn" onClick={onHire}>
        Hire Now
      </button>
    </div>
  );
};

export default PpCtaBar;