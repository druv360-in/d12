import React from "react";
import { FiX } from "react-icons/fi";

function AddNewTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#1E293B] rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 bg-[#1E293B] rounded-t-xl">
          <h2 className="text-3xl font-bold text-white">
            Add New Task
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
              placeholder="e.g. Design landing page"
              className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#6D6AFF]"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-gray-300 text-md font-semibold mb-3">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Describe the project task..."
              className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-3xl px-5 py-4 text-white placeholder-gray-500 resize-none outline-none focus:border-[#6D6AFF]"
            />
          </div>

          {/* Priority & Status */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Priority
              </label>

              <select className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none">
                <option>Medium</option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Status
              </label>

              <select className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none">
                <option>To Do</option>
                <option>In Progress</option>
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
              placeholder="e.g. Emma Thompson"
              className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white placeholder-gray-500 outline-none focus:border-[#6D6AFF]"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-2 gap-5 mb-6">
            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Start Date
              </label>

              <input
                type="date"
                className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-md font-semibold mb-3">
                Due Date
              </label>

              <input
                type="date"
                className="w-full bg-[#1A2437] border border-[#2C3A4F] rounded-2xl px-5 py-4 text-white outline-none"
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
              placeholder="Any additional notes..."
              className="w-full bg-[#07132D] border border-[#2C3A4F] rounded-3xl px-5 py-4 text-white placeholder-gray-500 resize-none outline-none focus:border-[#6D6AFF]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-gray-500 text-gray-300 hover:bg-gray-700"
            >
              Cancel
            </button>

            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5B4CFF] to-[#A020F0] text-white font-semibold">
              Create Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewTaskModal;