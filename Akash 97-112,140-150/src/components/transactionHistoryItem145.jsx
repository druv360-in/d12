
import React from "react";
import {
  FiTrendingUp,
  FiDownload,
  FiClock,
  FiCalendar,
  FiCheckCircle,
} from "react-icons/fi";

function TransactionHistoryItem145({
  transaction = {
    title: "Video Editing - Social Media Package",
    amount: "₹250.00",
    date: "Jun 5, 2026",
    client: "Alex Thompson",
    type: "income", // income | withdrawal | pending
    status: "Completed", // Completed | Pending | Processing
  },
}) {
  const typeStyles = {
    income: {
      icon: <FiTrendingUp />,
      iconBg: "bg-[#E8F6EF]",
      iconColor: "text-[#00A86B]",
      amountColor: "text-[#00A86B]",
      sign: "+",
    },

    withdrawal: {
      icon: <FiDownload />,
      iconBg: "bg-[#F1EAFE]",
      iconColor: "text-[#6D28D9]",
      amountColor: "text-red-500",
      sign: "-",
    },

    pending: {
      icon: <FiClock />,
      iconBg: "bg-[#FFF7E5]",
      iconColor: "text-[#D4A017]",
      amountColor: "text-[#00A86B]",
      sign: "+",
    },
  };

  const statusStyles = {
    Completed: {
      className: "bg-[#E8F6EF] text-[#00A86B]",
      icon: <FiCheckCircle size={14} />,
    },

    Pending: {
      className: "bg-[#FFF7E5] text-[#D4A017]",
      icon: <FiClock size={14} />,
    },

    Processing: {
      className: "bg-[#F1EAFE] text-[#6D28D9]",
      icon: <FiClock size={14} />,
    },
  };

  const current = typeStyles[transaction.type];
  const currentStatus = statusStyles[transaction.status];

  return (
    <div className="w-full bg-[#F8F8FA] border border-gray-200 rounded-3xl p-4 shadow-sm">
      <div className="flex gap-4">
        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-2xl ${current.iconBg} flex items-center justify-center text-lg ${current.iconColor}`}
        >
          {current.icon}
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Top */}
          <div className="flex justify-between gap-4">
            <h2 className="text-base font-bold text-[#111827] leading-tight">
              {transaction.title}
            </h2>

            <p
              className={`font-bold text-base whitespace-nowrap ${current.amountColor}`}
            >
              {current.sign} {transaction.amount}
            </p>
          </div>

          {/* Details */}
          <div className="flex items-center gap-2 mt-3 text-gray-500 text-xs flex-wrap">
            <div className="flex items-center gap-1">
              <FiCalendar />
              <span>{transaction.date}</span>
            </div>

            {transaction.client && (
              <>
                <span>•</span>
                <span>{transaction.client}</span>
              </>
            )}
          </div>

          {/* Status */}
          <div className="mt-4">
            <span
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${currentStatus.className}`}
            >
              {currentStatus.icon}
              {transaction.status}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionHistoryItem145;