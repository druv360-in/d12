import React from "react";
import { Star } from "lucide-react";

export default function ReviewCard47({ avatar, name, date, rating, comment }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text- font-semibold text-gray-900">{name}</h4>
          <p className="text-gray-400 text-">{date}</p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <Star size={14} fill="#fbbf24" color="#fbbf24" strokeWidth={0} />
          <span className="text- font-semibold text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Comment */}
      <p className="text-gray-600 text- leading-[1.6]">{comment}</p>
    </div>
  );
}