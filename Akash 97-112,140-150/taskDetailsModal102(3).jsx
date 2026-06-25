import React from "react";
import {
  FiX,
  FiCalendar,
  FiClock,
  FiUser,
  FiFlag,
  FiFileText,
} from "react-icons/fi";

function TaskDetailsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1E293B] rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="bg-[#1E293B] rounded-t-3xl px-8 py-7">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[#6D6AFF] text-lg font-bold uppercase">
                Project Details
              </p>

              <h1 className="text-sm font-bold text-white mt-3">
                Complete payment gateway integration
              </h1>

              <div className="flex gap-4 mt-6">
                <span className="px-5 py-2 rounded-full bg-[#ECE8FF] text-[#8B6CFF] text-sm  font-semibold">
                  In Progress
                </span>

                <span className="px-5 py-2 rounded-full bg-[#FFE8E8] text-sm  text-red-500 font-semibold">
                  high priority
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 text-3xl hover:text-gray-600"
            >
              <FiX />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <div>
            <h3 className="text-gray-400 text-sm font-semibold uppercase">
              Description
            </h3>

            <p className="text-white text-xs mt-3 leading-9">
              Integrate Stripe and PayPal checkout flows into the
              platform.
            </p>
          </div>

          {/* Dates */}
          <div className="flex gap-2 mt-8">
            <div className="bg-[#F5EEF5] rounded-3xl px-4 py-3">
              <div className="flex items-center gap-3 text-[#7C7CFF]">
                <FiCalendar size={20} />
                <span className="text-sm font-semibold">
                  Start Date
                </span>
              </div>

              <p className="text-gray-800 text-sm font-bold mt-2">
                2025-06-01
              </p>
            </div>

            <div className="grid item-center bg-[#FFF3F3] rounded-3xl px-4 py-3">
              <div className="flex items-center gap-3 text-red-500">
                <FiClock size={20} />
                <span className="text-sm font-semibold">
                  Due Date
                </span>
              </div>

              <p className="text-gray-800 text-sm font-bold mt-2">
                2026-06-05
              </p>
            </div>
          </div>

          {/* Assigned Freelancer */}
          <div className="bg-[#07132D] rounded-3xl p-6 mt-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                <FiUser className="text-[#6D6AFF] text-xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Assigned Freelancer
                </p>

                <h3 className="text-white text-sm font-bold">
                  Emma Thompson
                </h3>
              </div>
            </div>
          </div>

          {/* Priority */}
          <div className="bg-[#07132D] rounded-3xl p-6 mt-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FFF0B8] flex items-center justify-center">
                <FiFlag className="text-orange-500 text-xl" />
              </div>

              <div>
                <p className="text-gray-400 text-sm">
                  Priority
                </p>

                <h3 className="text-white text-sm font-bold">
                  High
                </h3>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#FFF8D9] border border-yellow-300 rounded-3xl p-6 mt-8">
            <div className="flex items-center gap-3 text-orange-500">
              <FiFileText size={22} />

              <h3 className="font-bold text-sm uppercase">
                Notes
              </h3>
            </div>

            <p className="text-gray-700 text-xs mt-4">
              Webhook handlers still pending.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailsModal;