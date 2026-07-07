import React from "react";
import { Sparkles } from "lucide-react";

function AISuggestions70() {
  const suggestions = [
    "Based on your project scope, we recommend setting 3-5 milestones",
    "Similar projects in your category typically have 2-3 week timelines",
    'Consider adding "responsive design" to your skills for better matches',
  ];

  return (
    <div className="bg-white p-4 rounded-2xl">

      {/* AI Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow">

        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={20} className="text-white" />
          <h3 className="text-base font-bold">AI Suggestions</h3>
        </div>

        {/* List */}
        <ul className="flex flex-col gap-3">
          {suggestions.map((text, index) => (
            <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
              <span className="text-violet-200 mt-[2px]">•</span>
              <span className="text-white/90">{text}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default AISuggestions70;