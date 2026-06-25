import React from "react";
import { FiMail } from "react-icons/fi";

function ContactUsPageHeader110() {
  return (
    <div className="w-full max-w-sm bg-gradient-to-r from-[#5B4CFF] to-[#A020F0] p-5 shadow-lg">
      <div className="flex items-start gap-3">
        {/* Icon */}
        <FiMail className="text-white text-3xl mt-1" />

        {/* Text */}
        <div>
          <h2 className="text-white text-2xl font-bold">
            Contact Us
          </h2>

          <p className="text-white/90 text-sm mt-1">
            We're here to help! Reach out anytime
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPageHeader110;