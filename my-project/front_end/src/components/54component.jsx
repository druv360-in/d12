import React from "react";
import { CheckCircle } from "lucide-react";

const FiftyFourComponent = () => {
  const benefits = [
    "Hire multiple freelancers for different roles",
    "Pay only for work done with transparent hourly tracking",
    "Scale your team up or down based on project needs",
    "Save 60% compared to traditional platforms"
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 via-violet-50 to-pink-50 rounded-2xl p-5 md:p-6 border border-gray-100">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
        Build Your Dream <br /> Remote Team
      </h2>

      {/* List */}
      <ul className="space-y-3">
        {benefits.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-violet-700 flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FiftyFourComponent;