import React, { useEffect, useRef } from "react";
import {
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectTaskSideOption = ({
  task,
  onClose,
}) => {
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        onClose?.();
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, [onClose]);

  // View Project
  const handleView = () => {
    if (!task?.id) {
      console.error("Task ID is missing:", task);
      return;
    }

    onClose?.();

    navigate(`/projecttask-view/${task.id}`, {
      state: {
        task,
      },
    });
  };

  // Edit Project
  const handleEdit = () => {
    if (!task?.id) {
      console.error("Task ID is missing:", task);
      return;
    }

    onClose?.();

    navigate(`/projecttask-edit/${task.id}`, {
      state: {
        task,
      },
    });
  };

  // Delete Project
  const handleDelete = () => {
    if (!task?.id) {
      console.error("Task ID is missing:", task);
      return;
    }

    onClose?.();

    navigate(`/projecttask-delete/${task.id}`, {
      state: {
        task,
      },
    });
  };

  return (
    <div
      ref={menuRef}
      className="
        absolute
        right-0
        top-[34px]
        z-[100]
        w-[160px]
        overflow-hidden
        rounded-[16px]
        border
        border-gray-100
        bg-white
        shadow-[0_8px_24px_rgba(0,0,0,0.14)]
      "
    >
      {/* VIEW PROJECT */}
      <button
        type="button"
        onClick={handleView}
        className="
          flex
          h-[46px]
          w-full
          items-center
          gap-3
          px-4
          text-left
          text-[14px]
          font-medium
          text-[#6b7280]
          transition
          hover:bg-violet-50
          hover:text-violet-700
        "
      >
        <Eye
          size={17}
          strokeWidth={2}
          className="shrink-0 text-violet-600"
        />

        <span>
          View Project
        </span>
      </button>

      {/* DIVIDER */}
      <div className="h-px bg-gray-100" />

      {/* EDIT PROJECT */}
      <button
        type="button"
        onClick={handleEdit}
        className="
          flex
          h-[46px]
          w-full
          items-center
          gap-3
          px-4
          text-left
          text-[14px]
          font-medium
          text-[#6b7280]
          transition
          hover:bg-violet-50
          hover:text-violet-700
        "
      >
        <Pencil
          size={17}
          strokeWidth={2}
          className="shrink-0 text-violet-600"
        />

        <span>
          Edit Project
        </span>
      </button>

      {/* DIVIDER */}
      <div className="h-px bg-gray-100" />

      {/* DELETE PROJECT */}
      <button
        type="button"
        onClick={handleDelete}
        className="
          flex
          h-[46px]
          w-full
          items-center
          gap-3
          px-4
          text-left
          text-[14px]
          font-medium
          text-red-500
          transition
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <Trash2
          size={17}
          strokeWidth={2}
          className="shrink-0 text-red-500"
        />

        <span>
          Delete Project
        </span>
      </button>
    </div>
  );
};

export default ProjectTaskSideOption;