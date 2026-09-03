import React from "react";
import { CheckSquare, CheckCircle } from "lucide-react";

const approvalData = {
  Large: [
    { id: 1, label: "Milestone 1", desc: "UI/UX Design & Wireframes", status: "Approved" },
    { id: 2, label: "Milestone 2", desc: "Frontend Development", status: "Awaiting" },
    { id: 3, label: "Milestone 3", desc: "Backend + Deployment", status: "Not started" }
  ],
  Medium: [
    { id: 1, label: "Installment 1", desc: "Initial Concepts & Revisions", status: "Approved" },
    { id: 2, label: "Installment 2", desc: "Final Delivery & Brand Guide", status: "Awaiting" }
  ],
  Small: [
    { id: 1, label: "Full Payment", desc: "Complete project delivery — 5 edited reels", status: "Awaiting" }
  ]
};

const approvalConfig = {
  Approved: { text: "text-emerald-700", icon: <CheckCircle className="w-5 h-5 text-emerald-600" /> },
  Awaiting: { text: "text-amber-600", icon: <span className="text-base">⏳</span> },
  "Not started": { text: "text-gray-400", icon: null }
};

const SeventyFiveComponent = ({ selectedPlan = "Large" }) => {
  const items = approvalData[selectedPlan];

  return (
    <div className="bg-white rounded-2xl mx-4 mt-4 p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-4">
        <CheckSquare className="w-5 h-5 text-violet-700" />
        <h2 className="text-xl font-bold text-gray-900">Client Approval Status</h2>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const config = approvalConfig[item.status];
          return (
            <div key={item.id} className="bg-violet-50 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className={`flex items-center gap-1.5 font-semibold ${config.text}`}>
                {config.icon}
                {item.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeventyFiveComponent;