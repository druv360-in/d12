import { Eye, MousePointerClick, ShoppingBag, Star, TrendingUp } from "lucide-react";
import AnalyticsMetricCard160 from "./AnalyticsMetricCard160";

// Custom Rupee Icon component since we need ₹
function RupeeIcon(props) {
  return (
    <span {...props} className={`text-base font-bold select-none ${props.className || ""}`}>
      ₹
    </span>
  );
}

// 159. Analytics Metric Cards Section
function AnalyticsMetricCardsSection159() {
  const metrics = [
    {
      title: "Total Views",
      value: "12,458",
      change: "+18%",
      isPositive: true,
      icon: Eye,
      color: "bg-[#672AC9]/20 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
    {
      title: "Total Clicks",
      value: "3,892",
      change: "+25%",
      isPositive: true,
      icon: MousePointerClick,
      color: "bg-[#672AC9]/10 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
    {
      title: "Total Orders",
      value: "156",
      change: "+12%",
      isPositive: true,
      icon: ShoppingBag,
      color: "bg-[#672AC9]/20 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
    {
      title: "Total Revenue",
      value: "₹12,450",
      change: "+15%",
      isPositive: true,
      icon: RupeeIcon,
      color: "bg-[#672AC9]/10 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
    {
      title: "Avg. Rating",
      value: "4.9",
      change: "+0.2",
      isPositive: true,
      icon: Star,
      color: "bg-[#672AC9]/10 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
    {
      title: "Conversion Rate",
      value: "31.2%",
      change: "-2%",
      isPositive: false,
      icon: TrendingUp,
      color: "bg-[#672AC9]/20 dark:bg-[#672AC9]/20 text-[#672AC9] dark:text-[#672AC9]",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <AnalyticsMetricCard160 key={m.title} {...m} />
      ))}
    </div>
  );
}

export default AnalyticsMetricCardsSection159;