// 62. Dashboard Stats Grid
function DashboardStatsGrid() {
  const stats = [
    { label: "Team Size", value: "3", sub: "All active", subColor: "text-emerald-650 dark:text-emerald-400", icon: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-5a4 4 0 11-8 0 4 4 0 018 0zm6 3a4 4 0 10-8 0" },
    { label: "Active Orders", value: "2", sub: "In progress", subColor: "text-blue-600 dark:text-blue-400", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
    { label: "Total Spent", value: "$14,960", sub: "This month", subColor: "text-slate-500 dark:text-slate-400", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-9c-1.11 0-2.08.402-2.599 1" },
    { label: "Savings", value: "60%", sub: "vs Fiverr/Upwork", subColor: "text-blue-600 dark:text-blue-400", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-[#FAFAFA] dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-xl p-4 shadow-xs dark:shadow-none transition-colors duration-300">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-2">
            <svg className="w-4 h-4 text-[#672AC9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
            </svg>
            {s.label}
          </div>
          <div className="text-slate-900 dark:text-white text-xl font-bold mb-1">{s.value}</div>
          <div className={`text-xs font-medium ${s.subColor}`}>{s.sub}</div>
        </div>
      ))}
    </div>
  );
}
export default DashboardStatsGrid;