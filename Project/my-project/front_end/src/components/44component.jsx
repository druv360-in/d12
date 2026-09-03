import React from "react";

export default function PortfolioList44({ title = "Past Work & Portfolio", count = 0, children }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">{title}</h3>
        <span className="font-semibold text-purple-600">{count} Projects</span>
      </div>

      {/* Cards List */}
      <div className="flex flex-col gap-4">
        {children}
      </div>
    </div>
  );
}
