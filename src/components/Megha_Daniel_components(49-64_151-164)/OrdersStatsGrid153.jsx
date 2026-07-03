// 153. Orders Stats Grid
function OrdersStatsGrid153() {
  const stats = [
  { label: "Active Orders", value: "2",      valueColor: "text-[#672AC9] dark:text-[#B9A1FF]" },
  { label: "Delivered",     value: "1",      valueColor: "text-emerald-600 dark:text-emerald-450" },
  { label: "Pending",       value: "1",      valueColor: "text-amber-600 dark:text-amber-450" },
  { label: "This Month",    value: "₹1,230", valueColor: "text-[#672AC9] dark:text-[#B9A1FF]" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 flex flex-col gap-3 shadow-xs dark:shadow-none transition-colors duration-300"
        >
          <span className="text-slate-450 dark:text-slate-400 text-sm font-medium">{s.label}</span>
          <h4 className={`text-3xl font-bold tracking-tight ${s.valueColor}`}>{s.value}</h4>
        </div>
      ))}
    </div>
  );
}

export default OrdersStatsGrid153;