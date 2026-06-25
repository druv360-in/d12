import React from "react";
import { FiClock } from "react-icons/fi";
import RecentActivityItem107 from "./recentActivityItem107.jsx";

function RecentActivitySection106() {
  return (
    <div className="bg-[#1E293B] p-6 rounded-3xl grid gap-3">

    
    <div className="flex items-center gap-3">
      {/* Icon */}
      <FiClock className="text-[#F97316] text-xl" />

      {/* Title */}
      <h2 className="text-white text-lg font-bold">
        Recent Activity
      </h2>
    </div>
    <RecentActivityItem107 />
    </div>
  );
}

export default RecentActivitySection106;