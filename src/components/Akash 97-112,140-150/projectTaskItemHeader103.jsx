import React, { useState } from "react";
import { FiCheckSquare, FiPlus } from "react-icons/fi";
import AddNewTaskModal from "./addNewTaskModal103(1)";

function ProjectTasksItemHeader103() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full bg-[#1E293B] rounded-2xl px-6 py-5 flex items-center gap-2 justify-around">
        {/* Left Section */}
        <div className="flex items-start gap-2">
          <FiCheckSquare className="text-[#5B6CFF] text-xl mt-1" />

          <div className="flex flex-col">
            <h2 className="text-white text-md font-bold leading-tight">
              Project Tasks
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              4 tasks · 1 completed
            </p>
          </div>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#6D5BFF] to-[#A020F0] text-white font-semibold p-3 rounded-2xl shadow-lg hover:opacity-90 transition"
        >
          <FiPlus className="text-xl" />
          <span className="text-xs">
            Add New
            <br />
            Project
          </span>
        </button>
      </div>

      {/* Modal */}
      <AddNewTaskModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default ProjectTasksItemHeader103;