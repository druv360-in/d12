import { Calendar } from "lucide-react";

// 161. Monthly Revenue Bar Chart (Horizontal layout as per mockup, theme-aware)
function MonthlyRevenueBarChart161() {
  const data = [
    { month: "Jan", revenue: 2100, orders: 18 },
    { month: "Feb", revenue: 2400, orders: 21 },
    { month: "Mar", revenue: 1900, orders: 16 },
    { month: "Apr", revenue: 2800, orders: 24 },
    { month: "May", revenue: 3200, orders: 28 },
    { month: "Jun", revenue: 3700, orders: 32 },
  ];

  const maxRevenue = Math.max(...data.map((d) => d.revenue));

  return (
    <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs transition-colors duration-300">
      <h3 className="text-slate-850 dark:text-white text-lg font-bold mb-6">Revenue Trend</h3>

      <div className="space-y-4">
        {data.map((d) => {
          // Calculate width percentage relative to maximum revenue
          const widthPercent = (d.revenue / maxRevenue) * 100;

          return (
            <div key={d.month} className="flex items-center gap-4">
              {/* Month label with calendar icon */}
              <div className="flex items-center gap-2.5 w-16 shrink-0 text-slate-500 dark:text-slate-400 font-semibold text-sm">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0" />
                <span>{d.month}</span>
              </div>

              {/* Horizontal Bar */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-950 rounded-full h-8 overflow-hidden relative">
                <div
                  className="bg-[#672AC9] rounded-full h-full flex items-center justify-end pr-4 transition-all duration-500 shadow-xs"
                  style={{ width: `${widthPercent}%`, minWidth: "15%" }}
                >
                  <span className="text-white text-xs font-bold font-mono">
                    ${d.revenue}
                  </span>
                </div>
              </div>

              {/* Orders count */}
              <div className="w-20 text-right shrink-0 text-slate-400 dark:text-slate-500 text-xs font-semibold">
                {d.orders} orders
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MonthlyRevenueBarChart161;
