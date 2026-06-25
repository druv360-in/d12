import React from "react";
import { FiImage, FiCheckCircle } from "react-icons/fi";

function completedWorkItem105() {
  return (
    <div className="w-full max-w-md bg-[#1E293B] border border-[#2C3A4F] rounded-3xl p-5">
      {/* Top Section */}
      <div className="flex items-start gap-4">
        {/* File Icon */}
        <div className="w-10 h-10 bg-[#F3EEF8] rounded-2xl flex items-center justify-center">
          <FiImage size={20} className="text-pink-500 text-2xl" />
        </div>

        {/* File Details */}
        <div className="flex-1">
          <h2 className="text-white text-xl font-bold">
            Homepage Design Mockup
          </h2>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
              alt="Marcus Johnson"
              className="w-7 h-7 rounded-full object-cover"
            />

            <span className="text-white text-sm">
              Marcus Johnson
            </span>

            <span className="text-white text-sm">
              2 hours ago
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-6">
        <button className="flex-1 bg-[#ECE8F5] text-[#9C7CFF] py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition">
          View File
        </button>

        <button className="flex items-center justify-center gap-2 flex-1 bg-[#DDF8E8] text-[#10B981] py-3 rounded-2xl font-semibold text-sm hover:opacity-90 transition">
          <FiCheckCircle className="text-2xl" />
          Verified
        </button>
      </div>
    </div>
  );
}

export default completedWorkItem105;