import * as Icons from "lucide-react";

export default function Stat23({
  icon = "FileText",
  bgColor = "bg-purple-600",
  trendIcon = "TrendingUp",
  trendColor = "text-green-500",
  count = "0",
  label = "Stat"
}) {
  const Icon = Icons[icon];
  const TrendIcon = Icons[trendIcon];

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border-gray-100">
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center`}>
          <Icon size={24} className="text-white" />
        </div>
        <TrendIcon size={20} className={trendColor} />
      </div>
      <p className="text-3xl font-bold text-gray-900 mt-4">{count}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
}