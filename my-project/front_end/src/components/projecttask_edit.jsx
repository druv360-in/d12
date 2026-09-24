import React, { useEffect, useState } from "react";
import { X, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProjectTaskEdit = ({
  task,
  onClose,
  onSave,
  onDelete,
}) => {
  const navigate = useNavigate();

  const fallbackTask = {
    id: 1,
    title: "Complete payment gateway integration",
    description:
      "Integrate Stripe and PayPal checkout flows into the platform.",
    priority: "high",
    status: "In Progress",
    assignee: "Emma Thompson",
    startDate: "2026-05-28",
    dueDate: "2026-06-05",
    notes: "Webhook handlers still pending.",
  };

  const currentTask = task || fallbackTask;

  const normalizePriority = (priority) => {
    if (!priority) return "High";

    const value = String(priority).toLowerCase();

    if (value === "high") return "High";
    if (value === "medium") return "Medium";
    if (value === "low") return "Low";

    return priority;
  };

  const [formData, setFormData] = useState({
    title: currentTask.title || "",
    description: currentTask.description || "",
    priority: normalizePriority(currentTask.priority),
    status: currentTask.status || "To Do",
    assignee: currentTask.assignee || "",
    startDate: currentTask.startDate || "",
    dueDate: currentTask.dueDate || "",
    notes: currentTask.notes || "",
  });

  const [error, setError] = useState("");

  // Prevent the page behind the modal from scrolling
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Update form values
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (name === "title") {
      setError("");
    }
  };

  // Close modal
  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    navigate("/ongoing-projects");
  };

  // Save edited task
  const handleSave = () => {
    if (!formData.title.trim()) {
      setError("Task name is required.");
      return;
    }

    const updatedTask = {
      ...currentTask,
      ...formData,
      title: formData.title.trim(),
      priority: formData.priority.toLowerCase(),
    };

    // Let parent component handle saving if supplied
    if (onSave) {
      onSave(updatedTask);
      return;
    }

    // Otherwise save to localStorage
    try {
      const storedTasks = localStorage.getItem("skillbuster_tasks");

      let tasks = [];

      if (storedTasks) {
        try {
          tasks = JSON.parse(storedTasks);
        } catch {
          tasks = [];
        }
      }

      const existingIndex = tasks.findIndex(
        (item) => item.id === updatedTask.id
      );

      if (existingIndex !== -1) {
        tasks[existingIndex] = updatedTask;
      } else {
        tasks.push(updatedTask);
      }

      localStorage.setItem(
        "skillbuster_tasks",
        JSON.stringify(tasks)
      );

      navigate("/ongoing-projects");
    } catch (saveError) {
      console.error("Unable to save task:", saveError);
      setError("Unable to save the task. Please try again.");
    }
  };

  // Delete task
  const handleDelete = () => {
    // Let parent component handle deletion if supplied
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

      navigate("/ongoing-projects");
    } catch (deleteError) {
      console.error("Unable to delete task:", deleteError);
      navigate("/ongoing-projects");
    }
  };

  return (
    <>
     
      {/* BACKDROP */}
<div
  className="
    fixed
    inset-0
    z-[999]
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
        {/* MODAL */}
        <div
          className="
            relative
            flex
            w-full
            max-w-[600px]
            h-[590px]
            flex-col
            overflow-hidden
            rounded-[20px]
            bg-white
            shadow-[0_25px_70px_rgba(0,0,0,0.22)]
          "
          onMouseDown={(event) => {
            event.stopPropagation();
          }}
        >
          {/* HEADER */}
          <div
            className="
              flex
              h-[76px]
              shrink-0
              items-center
              justify-between
              border-b
              border-gray-200
              bg-[#fcf8ff]
              px-6
            "
          >
            <h2
              className="
                text-[25px]
                font-bold
                leading-[24px]
                text-[#111827]
              "
            >
              Edit Task
            </h2>

            <button
              type="button"
              onClick={handleClose}
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-[#6b7280]
                transition
                hover:bg-gray-100
                hover:text-gray-900
              "
              aria-label="Close"
            >
              <X size={19} strokeWidth={2} />
            </button>
          </div>

          {/* SCROLLABLE FORM */}
          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              px-6
              py-5
            "
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#6d28d9 transparent",
            }}
          >
            <div className="space-y-[18px]">

              {/* TASK NAME */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[18px]
                    font-semibold
                    leading-[18px]
                    text-[#6b7280]
                  "
                >
                  Task Name{" "}
                  <span className="text-[#ef4444]">*</span>
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="
                    h-[46px]
                    w-full
                    rounded-[11px]
                    border
                    border-[#dfe3e8]
                    bg-white
                    px-4
                    text-[14px]
                    font-normal
                    text-[#1f2937]
                    outline-none
                    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />

                {error && (
                  <p className="mt-1.5 text-[12px] text-red-500">
                    {error}
                  </p>
                )}
              </div>

              {/* DESCRIPTION */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[18px]
                    font-semibold
                    leading-[18px]
                    text-[#6b7280]
                  "
                >
                  Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="
                    min-h-[85px]
                    w-full
                    resize-none
                    rounded-[11px]
                    border
                    border-[#dfe3e8]
                    bg-white
                    px-4
                    py-3
                    text-[15px]
                    font-normal
                    leading-[21px]
                    text-[#1f2937]
                    outline-none
                    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />
              </div>

              {/* PRIORITY + STATUS */}
              <div className="grid grid-cols-2 gap-4">

                {/* PRIORITY */}
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[18px]
                      font-semibold
                      leading-[18px]
                      text-[#6b7280]
                    "
                  >
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="
                      h-[47px]
                      w-full
                      appearance-auto
                      rounded-[11px]
                      border
                      border-[#dfe3e8]
                      bg-white
                      px-4
                      text-[14px]
                      font-normal
                      text-[#1f2937]
                      outline-none
                      shadow-[0_1px_3px_rgba(0,0,0,0.08)]
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

                {/* STATUS */}
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[18px]
                      font-semibold
                      leading-[18px]
                      text-[#6b7280]
                    "
                  >
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="
                      h-[47px]
                      w-full
                      appearance-auto
                      rounded-[11px]
                      border
                      border-[#dfe3e8]
                      bg-white
                      px-4
                      text-[14px]
                      font-normal
                      text-[#1f2937]
                      outline-none
                      shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                      transition
                      focus:border-violet-500
                      focus:ring-2
                      focus:ring-violet-100
                    "
                  >
                    <option value="To Do">To Do</option>
                    <option value="In Progress">
                      In Progress
                    </option>
                    <option value="Completed">
                      Completed
                    </option>
                  </select>
                </div>
              </div>

              {/* ASSIGNED FREELANCER */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[18px]
                    font-semibold
                    leading-[18px]
                    text-[#6b7280]
                  "
                >
                  Assigned Freelancer
                </label>

                <input
                  type="text"
                  name="assignee"
                  value={formData.assignee}
                  onChange={handleChange}
                  className="
                    h-[46px]
                    w-full
                    rounded-[11px]
                    border
                    border-[#dfe3e8]
                    bg-white
                    px-4
                    text-[14px]
                    font-normal
                    text-[#1f2937]
                    outline-none
                    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />
              </div>

              {/* START DATE + DUE DATE */}
              <div className="grid grid-cols-2 gap-4">

                {/* START DATE */}
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[18px]
                      font-semibold
                      leading-[18px]
                      text-[#6b7280]
                    "
                  >
                    Start Date
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="
                        h-[47px]
                        w-full
                        rounded-[11px]
                        border
                        border-[#dfe3e8]
                        bg-white
                        px-4
                        pr-10
                        text-[14px]
                        font-normal
                        text-[#1f2937]
                        outline-none
                        shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                        transition
                        focus:border-violet-500
                        focus:ring-2
                        focus:ring-violet-100
                      "
                    />

                    <CalendarDays
                      size={16}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#111827]
                      "
                    />
                  </div>
                </div>

                {/* DUE DATE */}
                <div>
                  <label
                    className="
                      mb-2
                      block
                      text-[18px]
                      font-semibold
                      leading-[18px]
                      text-[#6b7280]
                    "
                  >
                    Due Date
                  </label>

                  <div className="relative">
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="
                        h-[47px]
                        w-full
                        rounded-[11px]
                        border
                        border-[#dfe3e8]
                        bg-white
                        px-4
                        pr-10
                        text-[14px]
                        font-normal
                        text-[#1f2937]
                        outline-none
                        shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                        transition
                        focus:border-violet-500
                        focus:ring-2
                        focus:ring-violet-100
                      "
                    />

                    <CalendarDays
                      size={16}
                      className="
                        pointer-events-none
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-[#111827]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* NOTES */}
              <div>
                <label
                  className="
                    mb-2
                    block
                    text-[18px]
                    font-semibold
                    leading-[18px]
                    text-[#6b7280]
                  "
                >
                  Notes
                </label>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={3}
                  className="
                    min-h-[66px]
                    w-full
                    resize-none
                    rounded-[11px]
                    border
                    border-[#dfe3e8]
                    bg-white
                    px-4
                    py-3
                    text-[14px]
                    font-normal
                    leading-[21px]
                    text-[#1f2937]
                    outline-none
                    shadow-[0_1px_3px_rgba(0,0,0,0.08)]
                    transition
                    focus:border-violet-500
                    focus:ring-2
                    focus:ring-violet-100
                  "
                />
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="
              flex
              h-[77px]
              shrink-0
              items-center
              gap-3
              border-t
              border-gray-200
              bg-white
              px-6
            "
          >
            {/* CANCEL */}
            <button
              type="button"
              onClick={handleClose}
              className="
                h-[47px]
                flex-1
                rounded-[18px]
                border
                border-[#dfe3e8]
                bg-white
                text-[18px]
                font-semibold
                text-[#6b7280]
                transition
                hover:bg-gray-50
                hover:text-gray-800
              "
            >
              Cancel
            </button>

            {/* SAVE CHANGES */}
            <button
              type="button"
              onClick={handleSave}
              className="
                h-[47px]
                flex-1
                rounded-[18px]
                bg-gradient-to-r
                from-violet-700
                to-violet-600
                text-[18px]
                font-semibold
                text-white
                shadow-[0_5px_14px_rgba(109,40,217,0.25)]
                transition
                hover:from-violet-800
                hover:to-violet-700
                hover:shadow-[0_7px_18px_rgba(109,40,217,0.32)]
              "
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectTaskEdit;