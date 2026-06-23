import React from "react";
import {
  FiCreditCard,
  FiClock,
  FiTrendingUp,
  FiDollarSign,
} from "react-icons/fi";

function EarningsBalanceCards141() {
  const stats = [
    {
      title: "Available Balance",
      amount: "$2850.75",
      status: "Available",
      icon: <FiCreditCard />,
      iconBg: "bg-[#06B63F]",
      badgeBg: "bg-[#C8F7D6]",
      badgeText: "text-[#06B63F]",
      cardBg: "bg-[#EAF8F0]",
    },
    {
      title: "Pending Clearance",
      amount: "$1450.00",
      status: "Pending",
      icon: <FiClock />,
      iconBg: "bg-[#D99000]",
      badgeBg: "bg-[#FFF2C7]",
      badgeText: "text-[#D99000]",
      cardBg: "bg-[#F7F4E6]",
    },
    {
      title: "Earned This Month",
      amount: "$4320.50",
      status: "This Month",
      icon: <FiTrendingUp />,
      iconBg: "bg-[#5D5FEF]",
      badgeBg: "",
      badgeText: "text-[#8B5CF6]",
      cardBg: "bg-[#F7EEF8]",
    },
    {
      title: "Last Month",
      amount: "$3890.25",
      status: "+11.1%",
      icon: <FiDollarSign />,
      iconBg: "bg-[#3B82F6]",
      badgeBg: "",
      badgeText: "text-[#06B63F]",
      cardBg: "bg-[#EEF3FB]",
    },
  ];

  return (
    <div className="grid gap-5">
      {stats.map((item, index) => (
        <div
          key={index}
          className={`${item.cardBg} border border-gray-200 rounded-xl p-4 shadow-sm`}
        >
          {/* Top */}
          <div className="flex items-center justify-between">
            <div
              className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center text-white text-xl`}
            >
              {item.icon}
            </div>

            <div
              className={`px-4 py-1 rounded-full text-sm font-medium ${item.badgeBg} ${item.badgeText}`}
            >
              {item.status}
            </div>
          </div>

          {/* Content */}
          <div className="mt-6">
            <p className="text-gray-700 text-md">
              {item.title}
            </p>

            <h2 className="text-[#0F172A] text-xl font-bold mt-3">
              {item.amount}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EarningsBalanceCards141;