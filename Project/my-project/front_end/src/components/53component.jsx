import React from "react";
import { Clock, DollarSign, Calendar } from "lucide-react";

const FiftyThreeComponent = ({ member, onMessage }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      {/* Top Row: Avatar + Info + Status */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src={member.avatar}
            alt={member.name}
            className="w-14 h-14 rounded-xl object-cover"
          />

          <div>
            <h3 className="text-base font-bold text-gray-900">
              {member.name}
            </h3>

            <p className="text-sm text-violet-700 font-medium">
              {member.role}
            </p>

            <p className="text-xs text-gray-500">
              {member.university}
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold">
          {member.status}
        </span>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-violet-50 rounded-xl p-3">
          <Clock className="w-4 h-4 text-violet-700 mb-1" />

          <p className="text-xs text-gray-500">
            Total Hours
          </p>

          <p className="text-base font-bold text-gray-900">
            {member.hours}
          </p>
        </div>

        <div className="bg-emerald-50 rounded-xl p-3">
          <DollarSign className="w-4 h-4 text-emerald-600 mb-1" />

          <p className="text-xs text-gray-500">
            Total Earned
          </p>

          <p className="text-base font-bold text-gray-900">
            ${member.earned}
          </p>
        </div>

        <div className="bg-violet-50 rounded-xl p-3">
          <Calendar className="w-4 h-4 text-violet-700 mb-1" />

          <p className="text-xs text-gray-500">
            Since
          </p>

          <p className="text-sm font-bold text-gray-900">
            {member.since}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          type="button"
          className="flex-1 bg-violet-50 text-violet-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-violet-100 transition"
        >
          View Profile
        </button>

        <button
          type="button"
          onClick={() => onMessage(member)}
          className="flex-1 bg-pink-50 text-pink-600 font-semibold py-2.5 rounded-xl text-sm hover:bg-pink-100 transition"
        >
          Message
        </button>
      </div>
    </div>
  );
};

export default FiftyThreeComponent;
