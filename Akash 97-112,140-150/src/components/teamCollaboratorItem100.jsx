import React from "react";
import {
  LuCircleCheck,
  LuEye,
  LuMessageSquare,
} from "react-icons/lu";

function TeamCollaboratorItem100() {
  return (
    <div className="w-full max-w-md bg-[#1E293B] rounded-3xl p-6 border border-[#2C3A4F]">
      {/* Profile Section */}
      <div className="flex gap-4 items-start">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
            alt="Profile"
            className="w-20 h-20 rounded-2xl object-cover"
          />

          <span className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>

        <div>
          <h2 className="text-white text-xl font-bold">
            Emma Thompson
          </h2>

          <p className="text-[#6D6AFF] text-lg font-semibold mt-1">
            Lead Developer
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="bg-[#E8EDF5] rounded-xl px-5 py-4 mt-5">
        <p className="text-[#1E40AF] text-sm italic">
          "Building API endpoints"
        </p>
      </div>

      {/* Contribution & Tasks */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <p className="text-white text-sm mb-3">Contribution</p>

          <div className="flex items-center gap-3">
            <div className="w-24 h-3 bg-[#2F3B52] rounded-full overflow-hidden">
              <div className="w-[45%] h-full bg-[#6D6AFF] rounded-full"></div>
            </div>

            <span className="text-white text-sm font-bold">
              45%
            </span>
          </div>
        </div>

        <div>
          <p className="text-white text-sm">Tasks</p>

          <p className="text-white text-sm font-bold mt-3">
            12/18 completed
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#EFE8F6] text-[#9C7CFF] py-4 rounded-full font-semibold text-xs">
          <LuEye size={20} />
          View Work
        </button>

        <button className="flex-1 flex items-center justify-center gap-2 bg-[#F8E6EF] text-[#F06292] py-4 rounded-full font-semibold text-xs">
          <LuMessageSquare size={20} />
          Message
        </button>
      </div>
    </div>
  );
}

export default TeamCollaboratorItem100;