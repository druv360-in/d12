import Stat23 from "./stat23";

export default function Stat24() {

  const stats = [

    {
      icon: "FileText",
      bgColor: "bg-purple-600",
      trendIcon: "TrendingUp",
      trendColor: "text-green-500",
      count: "12",
      label: "Projects Posted",
    },

    {
      icon: "Briefcase",
      bgColor: "bg-blue-600",
      trendIcon: "Clock",
      trendColor: "text-gray-400",
      count: "3",
      label: "Active Projects",
    },

    {
      icon: "Users",
      bgColor: "bg-green-500",
      trendIcon: "CheckCircle",
      trendColor: "text-green-500",
      count: "8",
      label: "Total Hires",
    },

    {
      icon: "Heart",
      bgColor: "bg-rose-500",
      trendIcon: "Star",
      trendColor: "text-yellow-500",
      count: "15",
      label: "Saved Freelancers",
    },

  ];

  return (
    <section className="w-full">

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-4
        "
      >

        {stats.map((stat, index) => (

          <Stat23
            key={index}
            {...stat}
          />

        ))}

      </div>

    </section>
  );
}