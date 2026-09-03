import React from "react";
import { Star, Briefcase, Clock, MessageCircle, UserPlus } from "lucide-react";

const FiftySevenComponent = ({ freelancer, onHire, onViewProfile }) => {
  return (
    <div className="bg-white rounded-2xl p-4 border-gray-100 shadow-sm">
      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <img src={freelancer.avatar} alt={freelancer.name} className="w-12 h-12 rounded-xl object-cover" />
          <div>
            <h3 className="text-base font-bold text-gray-900">{freelancer.name}</h3>
            <p className="text-xs text-gray-500">{freelancer.university}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-bold text-gray-900">{freelancer.rating}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-1">
          <Briefcase className="w-3.5 h-3.5" />
          {freelancer.projects} projects
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {freelancer.responseTime}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-3">
        {freelancer.skills.map((skill, i) => (
          <span key={i} className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-medium rounded-full">
            {skill}
          </span>
        ))}
      </div>

      {/* Price + Buttons */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-lg font-bold text-gray-900">₹{freelancer.price} <span className="text-sm font-normal text-gray-500">/ hr</span></p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onViewProfile(freelancer.id)}
          className="flex-1 bg-violet-50 text-violet-700 font-semibold py-2.5 rounded-xl text-sm"
        >
          View Profile
        </button>
        <button className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-violet-700" />
        </button>
        <button 
          onClick={() => onHire(freelancer.id)}
          className="w-10 h-10 rounded-xl bg-violet-700 flex items-center justify-center"
        >
          <UserPlus className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default FiftySevenComponent;