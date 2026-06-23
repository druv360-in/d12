import React from "react";

function RecentActivityItem107() {
  return (
    <div className="flex items-start gap-3 py-3 border-b border-[#2C3A4F] bg-[#1E293B] px-6 rounded-2xl">
      {/* Profile Image */}
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
        alt="Emma Thompson"
        className="w-10 h-10 rounded-full object-cover"
      />

      {/* Activity Content */}
      <div className="flex-1">
        <p className="text-sm leading-5">
          <span className="text-white font-semibold">
            Emma Thompson
          </span>{" "}
          <span className="text-gray-300">
            commented on payment integration
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-1">
          4 hours ago
        </p>
      </div>
    </div>
  );
}

export default RecentActivityItem107;