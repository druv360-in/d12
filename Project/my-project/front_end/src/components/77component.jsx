import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeventySevenComponent = ({ onCreate, stats = { total: 3, active: 1, done: 1 } }) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 lg:px-6">
      {/* Create New Project Button */}
      <button
  onClick={() => navigate("/create-new-project")}
  className="w-full bg-violet-700 hover:bg-violet-800 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-violet-200 mb-4 transition"
>
  <Plus className="w-5 h-5" />
  Create New Project
</button>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Active</p>
          <p className="text-2xl font-bold text-violet-700">{stats.active}</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <p className="text-sm text-gray-500">Done</p>
          <p className="text-2xl font-bold text-emerald-600">{stats.done}</p>
        </div>
      </div>
    </div>
  );
};

export default SeventySevenComponent;