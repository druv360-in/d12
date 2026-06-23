import React from "react";
import { FiX } from "react-icons/fi";

function EditTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1E293B] rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 bg-[#1E293B] rounded-t-3xl">
          <h2 className="text-xl font-bold text-white">
            Edit Task
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            <FiX />
          </button>
        </div>

        {/* Form */}
        <div className="p-8">
          {/* Task Name */}
          <div className="mb-6">
            <label className="block text-gray-300 text-md font-semibold mb-3">
              Task Name <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              defaultValue="Complete payment gateway integration"
              className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-300 text-md font-semibold mb-3">
              Description
            </label>

            <textarea
              rows={4}
              defaultValue="Integrate Stripe and PayPal checkout flows into the platform."
              className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-3xl px-5 py-4 text-white resize-none outline-none"
            />
          </div>

          {/* Priority & Status */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Priority
              </label>

              <select
                defaultValue="High"
                className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-2xl px-3 py-2 text-white"
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Status
              </label>

              <select
                defaultValue="In Progress"
                className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-2xl px-3 py-2 text-white"
              >
                <option>To Do</option>
                <option>In Progress</option>
                <option>In Review</option>
                <option>Completed</option>
              </select>
            </div>
          </div>

          {/* Assigned Freelancer */}
          <div className="mb-6">
            <label className="block text-gray-300 text-md font-semibold mb-3">
              Assigned Freelancer
            </label>

            <input
              type="text"
              defaultValue="Emma Thompson"
              className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Start Date
              </label>

              <input
                type="date"
                defaultValue="2026-05-28"
                className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-3 py-2 text-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Due Date
              </label>

              <input
                type="date"
                defaultValue="2026-06-05"
                className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-3 py-2 text-white"
              />
            </div>
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label className="block text-gray-300 text-md font-semibold mb-3">
              Notes
            </label>

            <textarea
              rows={4}
              defaultValue="Webhook handlers still pending."
              className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-3xl px-5 py-4 text-white resize-none outline-none"
            />
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-2xl border border-[#334155] text-gray-300 hover:bg-[#2A364A]"
            >
              Cancel
            </button>

            <button className="px-3 py-2 rounded-2xl bg-gradient-to-r from-[#5B4CFF] to-[#A020F0] text-white font-semibold">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTaskModal;