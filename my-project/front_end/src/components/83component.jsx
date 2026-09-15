import React from "react";

const statusColors = {
  "in-progress": "bg-violet-100 text-violet-700",
  pending: "bg-amber-100 text-amber-700", 
  completed: "bg-emerald-100 text-emerald-700"
};

const EightyThreeComponent = ({ order, onView, onContact }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border-gray-100 hover:shadow-md transition">
      {/* Header: Order No + Status */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{order.orderNo}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{order.company}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full capitalize ${statusColors[order.status]}`}>
          {order.status}
        </span>
      </div>

      {/* Amount + Deadline */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Amount</p>
          <p className="text-xl font-bold text-violet-700">{order.amount}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Deadline</p>
          <p className="text-base font-bold text-gray-900">{order.deadline}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onView(order.id)}
          className="bg-violet-50 hover:bg-violet-100 text-violet-700 font-semibold py-2.5 rounded-2xl text-sm transition"
        >
          View Details
        </button>
        <button
          onClick={() => onContact(order.id)}
          className="bg-pink-50 hover:bg-pink-100 text-pink-600 font-semibold py-2.5 rounded-2xl text-sm transition"
        >
          Contact Freelancer
        </button>
      </div>
    </div>
  );
};

export default EightyThreeComponent;