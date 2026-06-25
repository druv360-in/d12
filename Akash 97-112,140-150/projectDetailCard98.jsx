import React from "react";
import {FaRegCalendarAlt,} from "react-icons/fa";
import { LuCircleCheck } from "react-icons/lu";
import { MdAttachMoney } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";

function ProjectDetailCard98() {
  return (
    <div className="bg-[#1E293B] rounded-3xl p-7 w-full max-w-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-white text-2xl font-bold leading-tight">
          E-commerce Platform <br />
          Development
        </h2>

        <span className="bg-[#D8FCE8] text-[#16A34A] text-base font-semibold px-5 py-2 rounded-full">
          active
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-200 text-base leading-9 mt-5">
        Building a complete multi-vendor e-commerce platform with
        React, Node.js, and MongoDB. Includes admin dashboard,
        vendor panels, and customer interface.
      </p>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-5 mt-8">
        {/* Deadline */}
        <div className="bg-[#ECE6F2] rounded-3xl p-5">
          <div className="flex items-center gap-2 text-[#6D6AFF]">
            <FaRegCalendarAlt size={20} />
            <span className="text-xs text-gray-500">Deadline</span>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-4">
            2025-06-15
          </h3>
        </div>

        {/* Budget */}
        <div className="bg-[#E8F2EC] rounded-3xl p-5">
          <div className="flex items-center gap-2 text-green-500">
            <MdAttachMoney size={22} />
            <span className="text-xs text-gray-500">Budget</span>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-4">
            $2500
          </h3>
        </div>

        {/* Progress */}
        <div className="bg-[#E8EEF7] rounded-3xl p-5">
          <div className="flex items-center gap-2 text-blue-500">
            <LuCircleCheck size={20} />
            <span className="text-xs text-gray-500">Progress</span>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-4">
            65%
          </h3>
        </div>

        {/* Days Left */}
        <div className="bg-[#F5F2DD] rounded-3xl p-5">
          <div className="flex items-center gap-2 text-orange-500">
            <IoTimeOutline size={20} />
            <span className="text-xs text-gray-500">Days Left</span>
          </div>

          <h3 className="text-base font-semibold text-gray-800 mt-4">
            18 days
          </h3>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-white text-lg font-semibold">
            Overall Progress
          </span>

          <span className="text-[#6D6AFF] text-lg font-bold">
            65%
          </span>
        </div>

        <div className="w-full h-4 bg-[#2E3B52] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#5B5CFF] to-[#C026D3]"
            style={{ width: "65%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailCard98;