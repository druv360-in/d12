import React from "react";
import { ArrowLeft, Bell } from "lucide-react";

const SeventyComponent = ({ onBack, hasNotification = true }) => {
  return (
    <div className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="flex items-center justify-between">
        
        {/* Left: Back Button + Title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center hover:bg-violet-100 transition"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <div>
            <h1 className="text-xl font-bold text-gray-900">Payment Centre</h1>
            <p className="text-sm text-gray-500">SkillBuster Escrow Protection</p>
          </div>
        </div>

        {/* Right: Notification Bell */}
        <button className="relative w-10 h-10 rounded-full bg-violet-50 flex items-center justify-center hover:bg-violet-100 transition">
          <Bell className="w-5 h-5 text-gray-700" />
          {hasNotification && (
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </button>

      </div>
    </div>
  );
};

export default SeventyComponent;