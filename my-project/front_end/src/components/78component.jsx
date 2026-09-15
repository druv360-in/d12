import React from "react";
import { Users, FileText, UserPlus, Edit, Trash2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website Development",
    desc: "Build a modern e-commerce platform with payment integration",
    budget: "$5,000",
    deadline: "15/07/2026",
    progress: 45,
    status: "In-progress",
    assigned: "Sarah Johnson"
  },
  {
    id: 2,
    title: "Mobile App UI/UX Design",
    desc: "Design user interface for fitness tracking mobile app",
    budget: "$2,500",
    deadline: "30/06/2026",
    progress: 0,
    status: "pending",
    assigned: null
  },
  {
    id: 3,
    title: "Brand Identity Package",
    desc: "Complete brand identity including logo, colors, and guidelines",
    budget: "$1,500",
    deadline: "20/05/2026",
    progress: 100,
    status: "completed",
    assigned: "Emily Davis"
  }
];

const statusConfig = {
  "In-progress": "bg-violet-100 text-violet-700",
  pending: "bg-amber-100 text-amber-700",
  completed: "bg-emerald-100 text-emerald-700"
};

const SeventyEightComponent = () => {
  return (
    <div className="px-4 lg:px-6 mt-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">My Projects</h2>

      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-2xl p-5 shadow-sm border-gray-100">
            {/* Title + Status */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusConfig[project.status]}`}>
                {project.status}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4">{project.desc}</p>

            {/* Budget / Deadline / Progress */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-emerald-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500">Budget</p>
                <p className="font-bold text-gray-900">{project.budget}</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500">Deadline</p>
                <p className="font-bold text-gray-900">{project.deadline}</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-3 text-center">
                <p className="text-xs text-gray-500">Progress</p>
                <p className="font-bold text-gray-900">{project.progress}%</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-violet-100 rounded-full h-2 mb-3">
              <div
                className="bg-amber-500 h-2 rounded-full"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            {/* Assigned */}
            {project.assigned && (
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Users className="w-4 h-4" />
                Assigned to {project.assigned}
              </div>
            )}

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              <button className="bg-violet-50 hover:bg-violet-100 text-violet-700 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-sm">
                <FileText className="w-4 h-4" /> View
              </button>
              <button className="bg-violet-50 hover:bg-violet-100 text-violet-700 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-sm">
                <UserPlus className="w-4 h-4" /> Proposals
              </button>
              <button className="bg-violet-50 hover:bg-violet-100 text-violet-700 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-sm">
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button className="bg-rose-50 hover:bg-rose-100 text-red-600 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 text-sm">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeventyEightComponent;