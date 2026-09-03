import React from "react";
import { CheckCircle } from "lucide-react";

const SeventyEightComponent = () => {
  return (
    <div className="px-4 lg:px-6">
      {/* Premium Template Marketplace Banner */}
      <div className="bg-violet-50 border-violet-100 rounded-2xl p-5 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Premium Template Marketplace</h2>
        <p className="text-sm text-gray-600 mb-4">
          Save time and money with ready-to-use templates created by skilled students. 
          Get instant access and support revenue sharing with creators.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {["Instant download", "Quality assured", "Budget-friendly", "Support creators"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventyEightComponent;