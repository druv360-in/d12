import React from "react";
import { CheckCircle, Lock, Clock } from "lucide-react";

const paymentHistoryData = {
  Large: [
    { id: 1, label: "Milestone 1", desc: "UI/UX Design & Wireframes", date: "Jun 10, 2026", amount: "24,000", status: "Released" },
    { id: 2, label: "Milestone 2", desc: "Frontend Development", date: "Jun 25, 2026", amount: "24,000", status: "In Escrow" },
    { id: 3, label: "Milestone 3", desc: "Backend + Deployment", date: "Jul 15, 2026", amount: "24,000", status: "Pending" }
  ],
  Medium: [
    { id: 1, label: "Installment 1", desc: "Initial Concepts & Revisions", date: "Jun 8, 2026", amount: "9,000", status: "Released" },
    { id: 2, label: "Installment 2", desc: "Final Delivery & Brand Guide", date: "Jun 20, 2026", amount: "9,000", status: "In Escrow" }
  ],
  Small: [
    { id: 1, label: "Full Payment", desc: "Complete project delivery — 5 edited reels", date: "Jun 18, 2026", amount: "4,500", status: "In Escrow" }
  ]
};

const statusConfig = {
  Released: { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", icon: <CheckCircle className="w-6 h-6 text-emerald-600" />, iconBg: "bg-white" },
  "In Escrow": { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", icon: <Lock className="w-6 h-6 text-amber-600" />, iconBg: "bg-white" },
  Pending: { bg: "bg-violet-50 border-violet-200", text: "text-violet-700", icon: <Clock className="w-6 h-6 text-violet-600" />, iconBg: "bg-white" }
};

const SeventyFourComponent = ({ selectedPlan = "Large" }) => {
  const items = paymentHistoryData[selectedPlan];

  return (
    <div className="bg-white rounded-2xl mx-4 mt-4 p-5 shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Payment History</h2>

      <div className="space-y-3">
        {items.map((item) => {
          const config = statusConfig[item.status];
          return (
            <div key={item.id} className={`rounded-2xl border p-4 flex items-center gap-4 ${config.bg}`}>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${config.iconBg}`}>
                {config.icon}
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500 truncate">{item.desc}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">₹{item.amount}</p>
                <p className={`text-sm font-semibold mt-1 ${config.text}`}>{item.status}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeventyFourComponent;