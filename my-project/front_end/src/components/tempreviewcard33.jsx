// tempreviewcard33.jsx
import React from "react";
import { Star } from "lucide-react";

export default function Tempreviewcard33({ avatar, name, date, rating, comment }) {
  return (
    <div className="bg-white border-gray-200 rounded-2xl p-4">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
          <h3 className="text-base font-bold text-gray-900">{name}</h3>
        </div>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
        ))}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">{comment}</p>
    </div>
  );
}