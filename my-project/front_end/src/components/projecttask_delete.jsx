import React, { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectTaskDelete = ({
  task,
  onClose,
  onDelete,
}) => {
  const navigate = useNavigate();

  const fallbackTask = {
    id: 1,
    title: "Complete payment gateway integration",
  };

  const currentTask = task || fallbackTask;

  // Prevent the page behind the modal from scrolling
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Close modal
  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    navigate("/ongoing-projects");
  };

  // Delete task
  const handleDelete = () => {
    // If parent handles deletion
    if (onDelete) {
      onDelete(currentTask.id);
      return;
    }

    // Otherwise delete from localStorage
    try {
      const storedTasks = localStorage.getItem("skillbuster_tasks");

      if (storedTasks) {
        let tasks = [];

        try {
          tasks = JSON.parse(storedTasks);
        } catch {
          tasks = [];
        }

        const updatedTasks = tasks.filter(
          (item) => item.id !== currentTask.id
        );

        localStorage.setItem(
          "skillbuster_tasks",
          JSON.stringify(updatedTasks)
        );
      }

      // Return to ongoing projects
      navigate("/ongoing-projects");
    } catch (deleteError) {
      console.error("Unable to delete task:", deleteError);

      // Still return to the project page
      navigate("/ongoing-projects");
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[1000]
        flex
        items-center
        justify-center
        bg-black/35
        backdrop-blur-[7px]
        p-4
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* DELETE CONFIRMATION MODAL */}
      <div
        className="
          relative
          flex
          w-full
          max-w-[460px]
          h-[280px]
          flex-col
          overflow-hidden
          rounded-[16px]
          bg-white
          shadow-[0_20px_55px_rgba(0,0,0,0.20)]
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* CONTENT */}
        <div
          className="
            flex
            flex-1
            flex-col
            items-center
            px-6
            pt-[23px]
          "
        >
          {/* WARNING ICON */}
          <div
            className="
              flex
              h-[56px]
              w-[56px]
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#fef0f0]
            "
          >
            <AlertTriangle
              size={27}
              strokeWidth={2.2}
              className="text-[#ef4444]"
            />
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[20px]
              text-[25px]
              font-bold
              leading-[22px]
              text-[#111827]
            "
          >
            Delete Project?
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[11px]
              max-w-[360px]
              text-center
              text-[17px]
              font-normal
              leading-[19px]
              text-[#6b7280]
            "
          >
            <span className="font-semibold text-[#374151]">
              "{currentTask.title}"
            </span>{" "}
            will be permanently removed from your task list.
          </p>
        </div>

        {/* BUTTONS */}
        <div
          className="
            flex
            shrink-0
            gap-3
            px-6
            pb-[24px]
          "
        >
          {/* CANCEL */}
          <button
            type="button"
            onClick={handleClose}
            className="
              h-[46px]
              flex-1
              rounded-[18px]
              border
              border-[#dfe3e8]
              bg-white
              text-[17px]
              font-semibold
              text-[#6b7280]
              transition
              hover:bg-gray-50
              hover:text-[#374151]
            "
          >
            Cancel
          </button>

          {/* DELETE */}
          <button
            type="button"
            onClick={handleDelete}
            className="
              h-[46px]
              flex-1
              rounded-[18px]
              bg-[#ef2929]
              text-[17px]
              font-semibold
              text-white
              transition
              hover:bg-[#dc2626]
              active:scale-[0.98]
            "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskDelete;