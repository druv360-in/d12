// 160. Analytics Metric Card
function AnalyticsMetricCard160({ title, value, change, isPositive, icon: Icon, color }) {
  const iconBg = color || "bg-[#672AC9]/20 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9] border-[#672AC9]/30 dark:border-[#672AC9]/30";

  return (
    <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs flex flex-col justify-between gap-4 transition-colors duration-300">
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        {Icon && (
          <div className={`rounded-full p-2.5 flex items-center justify-center ${iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
        
        {change && (
          <span className={`inline-flex items-center gap-0.5 rounded-full px-3 py-1 text-xs font-bold ${
            isPositive
              ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400"
              : "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400"
          }`}>
            {isPositive ? "↑" : "↓"} {change}
          </span>
        )}
      </div>

      {/* Metric details */}
      <div className="space-y-1">
        <span className="text-slate-400 dark:text-slate-450 text-xs font-semibold block">{title}</span>
        <h3 className="text-slate-850 dark:text-white text-2xl font-bold tracking-tight">{value}</h3>
      </div>
    </div>
  );
}

export default AnalyticsMetricCard160;