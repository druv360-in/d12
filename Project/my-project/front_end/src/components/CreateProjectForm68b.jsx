import React, { useState } from "react";
import {
  FileText,
  Calendar,
  User,
  ChevronDown,
  Plus,
  Trash2,
} from "lucide-react";

function CreateProjectForm68b() {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    budget: "",
    deadline: "",
    freelancer: "",
    initialStatus: "Pending",
  });

  const [requirements, setRequirements] = useState([""]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRequirementChange = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };

  const addRequirement = () => {
    setRequirements([...requirements, ""]);
  };

  const removeRequirement = (index) => {
    if (requirements.length > 1) {
      setRequirements(requirements.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-3 bg-gray-50 p-4 pb-24 sm:p-6">
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Project Name *
        </label>

        <div className="relative">
          <FileText
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            name="projectName"
            placeholder="E-Commerce Website Development"
            value={formData.projectName}
            onChange={handleChange}
            className="w-full pl-11 pr-4 py-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>

      {/* Description */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Project Description *
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your project..."
          className="w-full p-3 border rounded-xl bg-gray-50 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      {/* Requirements */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold">
            Project Requirements
          </label>

          <button
            type="button"
            onClick={addRequirement}
            className="flex items-center gap-1 text-violet-600 font-medium"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        {requirements.map((req, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              value={req}
              onChange={(e) =>
                handleRequirementChange(index, e.target.value)
              }
              placeholder="Enter a requirement"
              className="flex-1 p-3 border rounded-xl bg-gray-50"
            />

            {requirements.length > 1 && (
              <button
                onClick={() => removeRequirement(index)}
                className="bg-red-50 text-red-600 p-3 rounded-xl"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Budget */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Budget ($)
        </label>

        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          placeholder="0"
          className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      {/* Deadline */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Deadline *
        </label>

        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>

      {/* Freelancer */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Assign Freelancer
        </label>

        <select
          name="freelancer"
          value={formData.freelancer}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl bg-gray-50"
        >
          <option value="">Select a freelancer</option>
          <option value="sarah">Sarah Johnson - React Developer</option>
          <option value="mike">Mike Chen - Full Stack Developer</option>
          <option value="emily">Emily Davis - UI/UX Designer</option>
        </select>

        <p className="text-xs text-gray-500 mt-2">
          You can assign a freelancer now or later.
        </p>
      </div>

      {/* Status */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <label className="block text-sm font-semibold mb-2">
          Initial Status
        </label>

        <select
          name="initialStatus"
          value={formData.initialStatus}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl bg-gray-50"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
}

export default CreateProjectForm68b;
