
import React from "react";
import {
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  UserRound,
  Clock3,
} from "lucide-react";

const SixtyThreeComponent = ({
  task,
  onView,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  const priorityColors = {
    high: "bg-red-50 text-red-600",
    medium: "bg-amber-50 text-amber-600",
    low: "bg-emerald-50 text-emerald-600",
  };

  const statusColors = {
    "In Progress":
      "bg-violet-50 text-violet-700",

    "To Do":
      "bg-gray-100 text-gray-600",

    Completed:
      "bg-emerald-50 text-emerald-600",
  };

  return (
    <div
      className={`
        w-full
        rounded-2xl
        px-5
        py-5
        lg:px-6
        lg:py-5
        border
        border-gray-200
        shadow-none
        ${
          task.status === "Completed"
            ? "bg-emerald-50/30"
            : "bg-white"
        }
      `}
    >
      {/* =====================================================
          TOP SECTION
      ===================================================== */}

      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        {/* =================================================
            CHECKBOX
        ================================================= */}

        <input
          type="checkbox"
          checked={task.status === "Completed"}
          onChange={() => onToggleComplete?.(task.id)}
          className="
            w-6
            h-6
            mt-1
            shrink-0
            accent-blue-600
            cursor-pointer
          "
        />

        {/* =================================================
            TASK INFORMATION
        ================================================= */}

        <div
          className="
            flex-1
            min-w-0
          "
        >
          {/* TASK TITLE */}

          <h3
            className={`
              text-xl
              lg:text-xl
              font-semibold
              leading-7
              ${
                task.status === "Completed"
                  ? "text-gray-400 line-through"
                  : "text-gray-900"
              }
            `}
          >
            {task.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              text-base
              text-gray-400
              mt-1
              leading-6
            "
          >
            {task.description}
          </p>

          {/* ASSIGNEE + DUE DATE */}

          <div
            className="
              flex
              items-center
              gap-4
              mt-2
              text-sm
              text-gray-400
              flex-wrap
            "
          >
            <span
              className="
                flex
                items-center
                gap-1.5
              "
            >
              <UserRound size={14} />

              {task.assignee}
            </span>

            <span
              className="
                flex
                items-center
                gap-1.5
              "
            >
              <Clock3 size={14} />

              Due {task.dueDate}
            </span>
          </div>
        </div>

        {/* =================================================
            PRIORITY + STATUS + MENU
        ================================================= */}

        <div
          className="
            flex
            items-center
            gap-2
            shrink-0
          "
        >
          {/* PRIORITY */}

          <span
            className={`
              px-3
              py-1.5
              rounded-full
              text-sm
              font-medium
              capitalize
              whitespace-nowrap
              ${priorityColors[task.priority]}
            `}
          >
            {task.priority}
          </span>

          {/* STATUS */}

          <span
            className={`
              px-3
              py-1.5
              rounded-full
              text-sm
              font-medium
              whitespace-nowrap
              ${statusColors[task.status]}
            `}
          >
            {task.status}
          </span>

          {/* MORE MENU */}

          <button
            type="button"
            className="
              p-1
              text-gray-400
              hover:text-gray-600
            "
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACTIONS
      ===================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          mt-4
          pl-10
        "
      >
        {/* LEFT BUTTONS */}

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          {/* VIEW */}

          <button
            type="button"
            onClick={() => onView?.(task.id)}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-violet-50
              text-violet-700
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              hover:bg-violet-100
              transition
            "
          >
            <Eye size={16} />

            View
          </button>

          {/* EDIT */}

          <button
            type="button"
            onClick={() => onEdit?.(task.id)}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-violet-50
              text-violet-700
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              hover:bg-violet-100
              transition
            "
          >
            <Edit size={16} />

            Edit
          </button>

          {/* DELETE */}

          <button
            type="button"
            onClick={() => onDelete?.(task.id)}
            className="
              flex
              items-center
              justify-center
              gap-2
              bg-red-50
              text-red-600
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              hover:bg-red-100
              transition
            "
          >
            <Trash2 size={16} />

            Delete
          </button>
        </div>

        {/* DETAILS */}

        <button
          type="button"
          className="
            flex
            items-center
            gap-1
            text-sm
            text-gray-400
            hover:text-gray-600
            transition
          "
        >
          Details

          <span className="text-lg leading-none">
            ›
          </span>
        </button>
      </div>
    </div>
  );
};

export default SixtyThreeComponent;
