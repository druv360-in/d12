// 162. Gig Performance Table (Mockup styling, theme-aware)
function GigPerformanceTable162() {
  const gigs = [
    {
      title: "Professional Video Editing",
      views: "4,560",
      clicks: "890",
      ctr: "19.5%",
      orders: 45,
      conversion: "5.1%",
      revenue: "₹4,500",
    },
    {
      title: "Custom Logo Design",
      views: "3,420",
      clicks: "1,234",
      ctr: "36.1%",
      orders: 67,
      conversion: "5.4%",
      revenue: "₹5,360",
    },
    {
      title: "UI/UX Design",
      views: "2,890",
      clicks: "567",
      ctr: "19.6%",
      orders: 28,
      conversion: "4.9%",
      revenue: "₹5,600",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs transition-colors duration-300">
      <div className="p-6 border-b border-slate-50 dark:border-slate-800/80">
        <h3 className="text-slate-855 dark:text-white text-lg font-bold">Gig Performance</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm text-slate-700 dark:text-slate-350">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Gig Name</th>
              <th className="px-6 py-4">Views</th>
              <th className="px-6 py-4">Clicks</th>
              <th className="px-6 py-4">CTR</th>
              <th className="px-6 py-4">Orders</th>
              <th className="px-6 py-4">Conversion</th>
              <th className="px-6 py-4 text-right">Revenue</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100/70 dark:divide-slate-800/70">
            {gigs.map((g, index) => (
              <tr key={index} className="hover:bg-slate-50/30 dark:hover:bg-slate-950/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="text-slate-800 dark:text-slate-200 font-bold leading-tight">
                    {g.title}
                  </div>
                </td>
                <td className="px-6 py-4 font-mono font-medium text-slate-600 dark:text-slate-400">{g.views}</td>
                <td className="px-6 py-4 font-mono font-medium text-slate-600 dark:text-slate-400">{g.clicks}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-[#E8E3FC] dark:bg-[#3F2C71]/40 text-[#672AC9] dark:text-[#B4A7FF] rounded-lg px-2.5 py-1 text-xs font-bold font-mono">
                    {g.ctr}
                  </span>
                </td>
                <td className="px-6 py-4 font-mono font-medium text-slate-600 dark:text-slate-400">{g.orders}</td>
                <td className="px-6 py-4">
                  <span className="inline-block bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-lg px-2.5 py-1 text-xs font-bold font-mono">
                    {g.conversion}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-mono font-bold text-[#672AC9] dark:text-[#672AC9]">
                  {g.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GigPerformanceTable162;
