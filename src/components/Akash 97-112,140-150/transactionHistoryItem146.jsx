import React from "react";
import { FiDownload } from "react-icons/fi";
import TransactionHistoryItem145 from "./transactionHistoryItem145";

function TransactionHistorySection146() {
  return (
    <div className="w-full max-w-md bg-[#F8F8FA] border border-gray-200 rounded-3xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#111827]">
          Transaction History
        </h2>

        <button className="flex items-center gap-1 text-xs font-medium text-[#8B5CF6] hover:text-[#7C3AED]">
          <FiDownload />
          Export
        </button>
      </div>

      {/* Transactions */}
      <div className="space-y-4">
        <TransactionHistoryItem145 />

        <TransactionHistoryItem145
          transaction={{
            title: "Withdrawal to PayPal",
            amount: "₹500.00",
            date: "Jun 3, 2026",
            client: "",
            type: "withdrawal",
            status: "Completed",
          }}
        />

        <TransactionHistoryItem145
          transaction={{
            title: "Logo Design with Brand Guidelines",
            amount: "₹180.00",
            date: "Jun 2, 2026",
            client: "Sarah Chen",
            type: "income",
            status: "Completed",
          }}
        />

        <TransactionHistoryItem145
          transaction={{
            title: "Website UI/UX Design - 5 Pages",
            amount: "₹450.00",
            date: "Jun 1, 2026",
            client: "Mike Johnson",
            type: "pending",
            status: "Pending",
          }}
        />

        <TransactionHistoryItem145
          transaction={{
            title: "Mobile App Icon Design",
            amount: "₹120.00",
            date: "May 30, 2026",
            client: "Emma Wilson",
            type: "income",
            status: "Completed",
          }}
        />

        <TransactionHistoryItem145
          transaction={{
            title: "Withdrawal to Bank Account",
            amount: "₹1000.00",
            date: "May 28, 2026",
            client: "",
            type: "withdrawal",
            status: "Completed",
          }}
        />

        <TransactionHistoryItem145
          transaction={{
            title: "YouTube Thumbnail Package",
            amount: "₹200.00",
            date: "May 27, 2026",
            client: "Content Creator",
            type: "pending",
            status: "Processing",
          }}
        />
      </div>
    </div>
  );
}

export default TransactionHistorySection146;