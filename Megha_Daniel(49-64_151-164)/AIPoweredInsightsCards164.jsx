import { TrendingUp, Star, MousePointer2, Eye } from "lucide-react";

// 164. Key Insights Cards (Light theme styled to match screenshot)
function KeyInsightsCards164() {
  const insights = [
    {
      title: "Strong Growth",
      message: "Your revenue increased by 15% this month. Keep up the great work!",
      icon: TrendingUp,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
    {
      title: "High Rating",
      message: "Your 4.9 rating is excellent! This helps attract more clients.",
      icon: Star,
      iconColor: "text-[#672AC9]",
      iconBg: "bg-[#F3E7FF]",
    },
    {
      title: "Good CTR",
      message: "Your Logo Design gig has a 36% click rate - consider using similar strategies for other gigs.",
      icon: MousePointer2,
      iconColor: "text-amber-600",
      iconBg: "bg-amber-50",
    },
    {
      title: "Visibility Boost",
      message: "Most traffic comes from direct search. Optimize your gig titles for better discoverability.",
      icon: Eye,
      iconColor: "text-[#672AC9]",
      iconBg: "bg-[#F3E7FF]",
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-100 bg-[#F5F3FF] p-6">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-xl">📊</span>
        <h3 className="text-slate-900 text-lg font-bold">Key Insights</h3>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {insights.map((insight) => (
          <InsightCard key={insight.title} insight={insight} />
        ))}
      </div>
    </div>
  );
}

function InsightCard({ insight }) {
  const Icon = insight.icon;

  return (
    <div className="rounded-2xl bg-white border border-slate-100 p-5 flex gap-4">
      <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${insight.iconBg}`}>
        <Icon className={`w-5 h-5 ${insight.iconColor}`} />
      </div>
      <div>
        <h4 className="text-slate-900 font-bold text-sm mb-1">{insight.title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{insight.message}</p>
      </div>
    </div>
  );
}

export default KeyInsightsCards164;