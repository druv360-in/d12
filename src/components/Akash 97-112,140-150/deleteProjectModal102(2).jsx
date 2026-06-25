import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

function DeleteProjectModal({
  isOpen,
  onClose,
  onDelete,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-[#1E293B] rounded-3xl p-8 shadow-2xl">
        
        {/* Warning Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-[#FDECEC] flex items-center justify-center">
            <FiAlertTriangle className="text-red-500 text-xl" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-white text-xl font-bold text-center mt-8">
          Delete Project?
        </h2>

        {/* Description */}
        <p className="text-center text-gray-300 text-sm leading-8 mt-6">
          <span className="font-bold text-white">
            "Complete payment gateway integration"
          </span>{" "}
          will be permanently removed from your task list.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <button
            onClick={onClose}
            className="py-4 rounded-2xl border border-[#334155] text-gray-300 text-base font-semibold hover:bg-[#2A364A] transition"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="py-4 rounded-2xl bg-[#F44343] text-white text-base font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProjectModal;