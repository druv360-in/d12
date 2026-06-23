import { useState, useEffect } from "react";

// 163. Traffic Sources & Client Demographics — bar-list style matching screenshot
function TrafficSourcesAndClientDemographics163() {
  const trafficSources = [
    { name: "Direct Search", views: 5606, percentage: 45 },
    { name: "Recommended", views: 3737, percentage: 30 },
    { name: "Social Media", views: 1869, percentage: 15 },
    { name: "External Links", views: 1246, percentage: 10 },
  ];

  const demographics = [
    { segment: "Startups", clients: 62, percentage: 40 },
    { segment: "Small Business", clients: 55, percentage: 35 },
    { segment: "Individual Creators", clients: 31, percentage: 20 },
    { segment: "Enterprise", clients: 8, percentage: 5 },
  ];

  // useState + useEffect to animate bars from 0 -> target width on mount,
  // avoiding the need to repeat this logic separately for each card.
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <StatBarCard title="Traffic Sources" items={trafficSources} animated={animated} unitLabel="views" />
      <StatBarCard title="Client Demographics" items={demographics} animated={animated} unitLabel="clients" />
    </div>
  );
}

// Shared presentational component — handles both cards since the layout is identical,
// only the data and unit label differ.
function StatBarCard({ title, items, animated, unitLabel }) {
  return (
    // style={{ backgroundColor: "#F8FAFC" }}
    <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6" >
      <h3 className="text-slate-900 text-lg font-bold mb-5">{title}</h3>

      <div className="flex flex-col gap-5">
        {items.map((item) => (
          <StatBarRow key={item.name || item.segment} item={item} animated={animated} unitLabel={unitLabel} />
        ))}
      </div>
    </div>
  );
}

function StatBarRow({ item, animated, unitLabel }) {
  const label = item.name || item.segment;
  const count = item.views ?? item.clients;
  const countLabel = unitLabel === "views" ? `${count.toLocaleString()} views` : `${count} clients`;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-700 dark:text-slate-300 font-medium">{label}</span>
        <div className="flex items-center gap-3">
          <span className="text-slate-400 dark:text-slate-500">{countLabel}</span>
          <span className="text-violet-600 dark:text-violet-400 font-bold w-10 text-right">{item.percentage}%</span>
        </div>
      </div>

      <div className="w-full bg-[#E8E3FC] dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
        <div
          className="bg-violet-600 h-2.5 rounded-full transition-all duration-700 ease-out"
          style={{ width: animated ? `${item.percentage}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default TrafficSourcesAndClientDemographics163;