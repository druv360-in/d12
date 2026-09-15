import React from "react";
import { Plus } from "lucide-react";
import FiftyThreeComponent from "./53component.jsx";

const FiftyTwoComponent = ({ onAddMember, onMessage }) => {
  const teamMembers = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Full-Stack Developer",
      university: "Stanford University",
      hours: 156,
      earned: 5460,
      since: "Jan 2026",
      status: "active",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      university: "MIT",
      hours: 98,
      earned: 3920,
      since: "Feb 2026",
      status: "active",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "React Developer",
      university: "Harvard",
      hours: 210,
      earned: 8200,
      since: "Dec 2025",
      status: "active",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ];

  return (
    <div className="w-full rounded-2xl bg-white p-4 md:p-6">
      {/* Add Team Member Button */}
      <button
        type="button"
        onClick={onAddMember}
        className="w-full bg-violet-700 hover:bg-violet-800 text-white font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 mb-6 transition"
      >
        <Plus className="w-5 h-5" />
        Add Team Member
      </button>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-900 mb-4">
        Your Remote Team ({teamMembers.length})
      </h2>

      {/* Team Cards */}
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <FiftyThreeComponent
            key={member.id}
            member={member}
            onMessage={onMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default FiftyTwoComponent;
