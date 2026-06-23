import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import CompletedWorkItem105 from "./completedWorkItem105.jsx";

function CompletedWorkItemSection104() {
  return (
    <div className="bg-[#1E293B] p-6 rounded-3xl grid gap-3">
    <div className="flex items-center gap-3 bg-[#1E293B] p-1 rounded-3xl">
      {/* Icon */}
      <FiCheckCircle className="text-[#10B981] text-lg" />

      {/* Title */}
      <h2 className="text-white text-xl font-bold">
        Completed Work
      </h2>
    </div>
    <CompletedWorkItem105 />
    </div>
  );
}

export default CompletedWorkItemSection104;