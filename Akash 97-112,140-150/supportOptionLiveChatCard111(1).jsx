import React from "react";
import { FiMessageCircle } from "react-icons/fi";

function SupportOptionLiveChatCard111() {
  return (
    <div className="w-full max-w-sm bg-[#1E293B] border border-[#2C3A4F] rounded-3xl p-5 shadow-lg">
      <div className="flex items-start gap-2">
        {/* Icon */}
        <div className="w-12 h-12 bg-[#F3F0FF] rounded-2xl flex items-center justify-center">
          <FiMessageCircle className="text-[#6D6AFF] text-lg" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-white text-xl font-bold">
            Live Chat
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Average response: 2 minutes
          </p>

          <p className="text-gray-200 text-sm mt-4">
            Chat with our support team in real-time
          </p>
        </div>
      </div>
    </div>
  );
}

export default SupportOptionLiveChatCard111;