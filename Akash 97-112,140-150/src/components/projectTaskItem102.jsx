import React, { useState } from "react";
import {
  FiUser,
  FiClock,
  FiEye,
  FiEdit,
  FiTrash2,
  FiMoreVertical,
} from "react-icons/fi";
import TaskDetailsModal from "./taskDetailsModal102(3)";
import DeleteProjectModal from "./deleteProjectModal102(2)";
import EditTaskModal from "./EditTaskModal102(1)";

function ProjectTaskItem102() {
  const [selected, setSelected] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div
      className={`w-full max-w-xl rounded-3xl p-5 border cursor-pointer transition-all duration-300 ${
        selected
          ? "bg-gray-500/80 border-green-300"
          : "bg-[#1E293B] border-[#2C3A4F]"
      }`}
    >
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-2">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={selected}
            onChange={() => setSelected(!selected)}
            className="w-4 h-4 accent-blue-500 mt-1"
          />

          {/* Title */}
          <h2
            className={`text-base font-bold leading-tight ${
              selected
                ? "text-gray-300 line-through"
                : "text-white"
            }`}
          >
            Complete
            <br />
            payment
            <br />
            gateway
            <br />
            integration
          </h2>
        </div>

        {/* Status & Menu */}
        <div className="relative flex items-center gap-3">
          <span className="bg-[#FFE8E8] text-red-500 px-4 py-2 rounded-full text-xs font-semibold">
            High
          </span>

          <span
            className={`px-4 py-2 rounded-full text-xs font-semibold ${
              selected
                ? "bg-[#D7F7DF] text-green-600"
                : "bg-[#ECE8FF] text-[#7B61FF]"
            }`}
          >
            {selected ? "Completed" : "In Progress"}
          </span>

          <button
  onClick={(e) => {
    e.stopPropagation();
    setShowMenu((prev) => !prev);
  }}
  className="text-gray-400 text-xl p-1 rounded-full hover:bg-gray-700"
>
  <FiMoreVertical />
</button>

            {showMenu && (
  <div className="absolute top-12 right-0 w-64 bg-[#1E293B] rounded-3xl shadow-xl border border-[#2C3A4F] p-4 z-50">
    <button
  onClick={(e) => {
    e.stopPropagation();
    setShowDetails(true);
    setShowMenu(false);
  }}
  className="flex items-center gap-3 w-full py-3 text-[#A855F7] hover:bg-[#2A364A] rounded-lg px-2 transition"
>
  <FiEye size={20} />
  <span className="font-semibold text-md">
    View Project
  </span>
</button>

    <hr className="border-[#2C3A4F] my-2" />

    <button
  onClick={(e) => {
    e.stopPropagation();
    setShowEditModal(true);
    setShowMenu(false);
  }}
  className="flex items-center gap-3 w-full py-3 text-[#3B82F6] hover:bg-[#2A364A] rounded-lg px-2 transition"
>
      <FiEdit size={20} />
      <span className="font-semibold text-md">
        Edit Project
      </span>
    </button>

    <hr className="border-[#2C3A4F] my-2" />

    <button
  onClick={(e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  }}
  className="flex items-center gap-2 bg-[#FFECEC] text-red-500 text-xs px-4 py-2 rounded-full font-semibold"
>
  <FiTrash2 />
  Delete
</button>
  </div>
)}
        </div>
      </div>

      {/* Description */}
      <p
        className={`text-sm mt-5 leading-6 ${
          selected ? "text-gray-300" : "text-gray-300"
        }`}
      >
        Integrate Stripe and PayPal checkout flows into the platform.
      </p>

      {/* Assigned User & Due Date */}
      <div className="flex items-center gap-6 mt-5 flex-wrap">
        <div className="flex items-center gap-2 text-gray-300 text-sm">
          <FiUser />
          <span>Emma Thompson</span>
        </div>

        <div
          className={`flex items-center gap-2 text-sm ${
            selected ? "text-gray-300" : "text-red-500"
          }`}
        >
          <FiClock />
          <span>Due 2026-06-05</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-1 mt-6">
        <button
  onClick={(e) => {
    e.stopPropagation();
    setShowDetails(true);
  }}
  className="flex items-center gap-2 bg-[#EFE8FF] text-[#8B6CFF] text-xs px-4 py-2 rounded-full font-semibold"
>
  <FiEye />
  View
</button>

        <button
  onClick={(e) => {
    e.stopPropagation();
    setShowEditModal(true);
  }}
  className="flex items-center gap-2 bg-[#E8F1FF] text-[#4F8CFF] text-xs px-4 py-2 rounded-full font-semibold"
>
  <FiEdit />
  Edit
</button>

        <button
  onClick={(e) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  }}
  className="flex items-center gap-2 bg-[#FFECEC] text-red-500 text-xs px-4 py-2 rounded-full font-semibold"
>
  <FiTrash2 />
  Delete
</button>

        <button
  onClick={(e) => {
    e.stopPropagation();
    setShowDetails(true);
  }}
  className="flex items-center gap-1 text-gray-300 text-xs"
>
  Details
  <span className="text-lg">›</span>
</button>
<TaskDetailsModal
  isOpen={showDetails}
  onClose={() => setShowDetails(false)}
/>

<EditTaskModal
  isOpen={showEditModal}
  onClose={() => setShowEditModal(false)}
/>

<DeleteProjectModal
  isOpen={showDeleteModal}
  onClose={() => setShowDeleteModal(false)}
  onDelete={() => {
    console.log("Deleted");
    setShowDeleteModal(false);
  }}
/>
      </div>
    </div>
  );
}

export default ProjectTaskItem102;