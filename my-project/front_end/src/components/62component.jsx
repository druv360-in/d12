
import React, { useState } from "react";
import { CheckSquare, Plus } from "lucide-react";

import SixtyThreeComponent from "./63component.jsx";
import SixtyNineComponent from "./69component.jsx";

const SixtyTwoComponent = ({
  tasks,
  setTasks,
  onView,
  onEdit,
  onDelete,
}) => {
  const [showModal, setShowModal] = useState(false);

  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  /* =========================================================
     TOGGLE TASK COMPLETION
  ========================================================= */

  const handleToggleComplete = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        return {
          ...task,
          status:
            task.status === "Completed"
              ? "In Progress"
              : "Completed",
        };
      })
    );
  };

  /* =========================================================
     ADD NEW TASK
  ========================================================= */

  const handleAddTask = (newTask) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);

    setShowModal(false);
  };

  return (
    <div
      className="
        w-full
        bg-white
        rounded-3xl
        p-6
        lg:p-7
        shadow-sm
        border
        border-gray-100
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-start
          justify-between
          gap-4
          mb-6
        "
      >
        {/* LEFT SIDE */}

        <div>
          <div
            className="
              flex
              items-center
              gap-3
              mb-1
            "
          >
            <CheckSquare
              size={25}
              strokeWidth={2}
              className="text-violet-700"
            />

            <h2
              className="
                text-2xl
                lg:text-2xl
                font-bold
                text-gray-900
              "
            >
              Project Tasks
            </h2>
          </div>

          <p
            className="
              text-base
              text-gray-400
              ml-0
            "
          >
            {tasks.length} tasks · {completedCount} completed
          </p>
        </div>

        {/* =================================================
            ADD NEW TASK BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="
            flex
            items-center
            justify-center
            gap-2
            bg-violet-700
            hover:bg-violet-800
            text-white
            px-5
            py-3
            rounded-2xl
            text-base
            font-semibold
            whitespace-nowrap
            transition
            shadow-md
          "
        >
          <Plus
            size={19}
            strokeWidth={2}
          />

          Add New Task
        </button>
      </div>

      {/* =====================================================
          TASK LIST
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >
        {tasks.map((task) => (
          <SixtyThreeComponent
            key={task.id}
            task={task}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </div>

      {/* =====================================================
          ADD TASK MODAL
      ===================================================== */}

      <SixtyNineComponent
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddTask={handleAddTask}
      />
    </div>
  );
};

export default SixtyTwoComponent;

