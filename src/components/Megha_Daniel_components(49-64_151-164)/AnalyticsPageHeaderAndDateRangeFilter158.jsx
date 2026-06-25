import { useState } from "react";


// 158. Analytics Page Header And Date Range Filter
function AnalyticsPageHeaderAndDateRangeFilter158() {
  const [activeRange, setActiveRange] = useState("30 Days");


  const ranges = ["7 Days", "30 Days", "90 Days", "1 Year"];


  return (
    <div className="rounded-2xl border border-slate-100 bg-white px-6 py-5 flex items-center justify-between">
      {/* Left: Title */}
      <div>
        <h1 className="text-slate-900 text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-slate-400 text-sm mt-0.5">Track your performance and insights</p>
      </div>


      {/* Right: Date Range Pills */}
      <div className="flex items-center gap-2">
        {ranges.map((range) => {
          const isActive = activeRange === range;
          return (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[#672AC9] text-white"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {range}
            </button>
          );
        })}
      </div>
    </div>
  );
}


export default AnalyticsPageHeaderAndDateRangeFilter158;

