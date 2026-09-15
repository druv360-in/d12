import React from "react";
import {
  TrendingUp,
  Eye,
  FileText,
  Users,
  Bookmark,
  Info,
} from "lucide-react";

function ProjectInsights69({
  views = 0,
  proposals = 0,
  interested = 0,
  saves = 0,
}) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow border border-slate-100">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={18} className="text-violet-600" />
        <h3 className="text-sm font-bold text-slate-800">
          Project Insights
        </h3>
      </div>

      {/* List */}
      <div className="flex flex-col gap-3 mb-4">

        {/* Views */}
        <div className="flex justify-between items-center p-3 rounded-xl bg-violet-50 text-slate-500">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Eye size={16} className="text-violet-600" />
            <span>Views</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {views}
          </span>
        </div>

        {/* Proposals */}
        <div className="flex justify-between items-center p-3 rounded-xl bg-violet-50 text-slate-500">
          <div className="flex items-center gap-2 text-sm font-medium">
            <FileText size={16} className="text-violet-600" />
            <span>Proposals</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {proposals}
          </span>
        </div>

        {/* Interested */}
        <div className="flex justify-between items-center p-3 rounded-xl bg-green-50 text-slate-500">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Users size={16} className="text-green-600" />
            <span>Interested</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {interested}
          </span>
        </div>

        {/* Saves */}
        <div className="flex justify-between items-center p-3 rounded-xl bg-yellow-50 text-slate-500">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Bookmark size={16} className="text-yellow-600" />
            <span>Saves</span>
          </div>
          <span className="text-sm font-bold text-slate-800">
            {saves}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-3 rounded-xl bg-purple-100 text-xs text-slate-500">
        <Info size={14} className="text-slate-400" />
        <span>Stats will update after publishing</span>
      </div>
    </div>
  );
}

export default ProjectInsights69;