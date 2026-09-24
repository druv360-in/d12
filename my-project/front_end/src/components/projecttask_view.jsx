import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  X,
  Save,
  Trash2,
  CalendarDays,
  UserRound,
  FileText,
  Flag,
  CircleDot,
} from "lucide-react";

const ProjectTaskView = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get task passed from Ongoing Projects page
  const selectedTask = location.state?.task;

  // Fallback task
  const fallbackTask = {
    id: 1,
    title: "Complete payment gateway integration",
    description:
      "Integrate Stripe and PayPal checkout flows into the platform.",
    status: "In Progress",
    priority: "high",
    startDate: "2026-05-28",
    dueDate: "2026-06-05",
    assignee: "Emma Thompson",
    notes: "Webhook handlers still pending.",
  };

  const task = selectedTask || fallbackTask;

  const [formData, setFormData] = useState({
    title: task.title || "",
    description: task.description || "",
    status: task.status || "To Do",
    priority:
      task.priority === "high"
        ? "High"
        : task.priority === "medium"
        ? "Medium"
        : task.priority === "low"
        ? "Low"
        : task.priority || "Medium",
    startDate: task.startDate || "",
    dueDate: task.dueDate || "",
    assignee: task.assignee || "",
    notes: task.notes || "",
  });

  // Prevent background scrolling while popup is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Update form fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Save task
  const handleSave = () => {
    try {
      const storedTasks = localStorage.getItem("skillbuster_tasks");

      let tasks = [];

      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
      }

      const updatedTask = {
        ...task,
        ...formData,
        priority: formData.priority.toLowerCase(),
      };

      const existingIndex = tasks.findIndex(
        (item) => item.id === updatedTask.id
      );

      if (existingIndex >= 0) {
        tasks[existingIndex] = updatedTask;
      } else {
        tasks.push(updatedTask);
      }

      localStorage.setItem("skillbuster_tasks", JSON.stringify(tasks));

      navigate("/ongoing-projects");
    } catch (error) {
      console.error("Failed to save task:", error);
    }
  };

  // Delete task
  const handleDelete = () => {
    try {
      const storedTasks = localStorage.getItem("skillbuster_tasks");

      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);

        const updatedTasks = tasks.filter(
          (item) => item.id !== task.id
        );

        localStorage.setItem(
          "skillbuster_tasks",
          JSON.stringify(updatedTasks)
        );
      }

      navigate("/ongoing-projects");
    } catch (error) {
      console.error("Failed to delete task:", error);
      navigate("/ongoing-projects");
    }
  };

  // Close popup
  const handleClose = () => {
    navigate("/ongoing-projects");
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-gray-900/40
        backdrop-blur-[6px]
        p-4
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      {/* POPUP CARD */}
      <div
        className="
          relative
          flex
          w-full
          max-w-[662px]
          h-[680px]
          sm:h-[700px]
          lg:h-[700px]
          flex-col
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_25px_70px_rgba(0,0,0,0.25)]
        "
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
      >
        {/* HEADER */}
        <div className="shrink-0 border-b border-gray-100 bg-white px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                Task Details
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                View and manage task information
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                transition
                hover:bg-gray-200
                hover:text-gray-700
              "
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-5">
            {/* TASK TITLE */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FileText size={18} className="text-violet-600" />
                Task Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                placeholder="Enter task title"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-gray-900
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                placeholder="Describe the task..."
              />
            </div>

            {/* STATUS + PRIORITY */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* STATUS */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CircleDot size={16} className="text-violet-600" />
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* PRIORITY */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Flag size={16} className="text-violet-600" />
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>

            {/* DATES */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* START DATE */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CalendarDays size={16} className="text-violet-600" />
                  Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />
              </div>

              {/* DUE DATE */}
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <CalendarDays size={16} className="text-violet-600" />
                  Due Date
                </label>

                <input
                  type="date"
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    text-gray-900
                    outline-none
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />
              </div>
            </div>

            {/* ASSIGNEE */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <UserRound size={16} className="text-violet-600" />
                Assigned To
              </label>

              <input
                type="text"
                name="assignee"
                value={formData.assignee}
                onChange={handleChange}
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                placeholder="Enter freelancer name"
              />
            </div>

            {/* NOTES */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Notes
              </label>

              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-gray-900
                  outline-none
                  transition
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                placeholder="Add additional notes..."
              />
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div
          className="
            relative
            z-30
            shrink-0
            border-t
            border-gray-100
            bg-white
            px-6
            py-4
          "
        >
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* DELETE */}
            <button
              type="button"
              onClick={handleDelete}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-red-50
                px-5
                py-3
                text-sm
                font-semibold
                text-red-600
                transition
                hover:bg-red-100
              "
            >
              <Trash2 size={17} />
              Delete Task
            </button>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleClose}
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-gray-700
                  transition
                  hover:bg-gray-50
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-violet-700
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  hover:bg-violet-800
                "
              >
                <Save size={17} />
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTaskView;