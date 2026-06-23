import React from "react";

function EarningsSummaryCard142() {
  const stats = [
    {
      title: "Total Earned (All Time)",
      value: "₹12,450",
    },
    {
      title: "Total Withdrawn",
      value: "₹9,600",
    },
    {
      title: "Average Order Value",
      value: "₹198",
    },
  ];

  return (
    <div className="w-full max-w-md bg-[#F5F6F8] border border-gray-200 rounded-3xl p-4 shadow-sm">
      {/* Heading */}
      <h2 className="text-xl font-bold text-[#0F172A] mb-8">
        Quick Stats
      </h2>

      {/* Stats */}
      <div className="space-y-7">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-md">
                {stat.title}
              </p>

              <h3 className="text-[#0F172A] text-lg font-bold">
                {stat.value}
              </h3>
            </div>

            {/* Divider */}
            {index !== stats.length - 1 && (
              <div className="mt-5 border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EarningsSummaryCard142;