import React from "react";
import { FiMail } from "react-icons/fi";

function SupportOptionEmailSupportCard111() {
  return (
    <div className="w-full max-w-sm bg-[#1E293B] border border-[#2C3A4F] rounded-3xl p-5 shadow-lg">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-12 h-12 bg-[#F8EAF2] rounded-2xl flex items-center justify-center">
          <FiMail className="text-pink-500 text-2xl" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-white text-2xl font-bold">
            Email Support
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            support@skillbuster.com
          </p>

          <p className="text-gray-200 text-sm mt-4 leading-7">
            Send us an email anytime, <span className="font-semibold">24/7</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportOptionEmailSupportCard111;