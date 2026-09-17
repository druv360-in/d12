import React from "react";
import { Plus } from "lucide-react";
import FiftyThreeComponent from "./53component.jsx";

const FiftyTwoComponent = ({
  onAddMember,
  onMessage,
  onProfile,
}) => {

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

      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
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

      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
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

      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    },
  ];

  return (
    <div
      className="
        w-full
        rounded-2xl
        bg-white
        p-4
        md:p-6
      "
    >

      {/* =====================================================
          ADD TEAM MEMBER
      ===================================================== */}

      <button
        type="button"
        onClick={onAddMember}
        className="
          mb-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
          bg-gradient-to-r
          from-violet-700
          to-purple-600
          py-3.5
          font-semibold
          text-white
          shadow-[0_8px_20px_rgba(124,58,237,0.25)]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:from-violet-800
          hover:to-purple-700
          hover:shadow-[0_15px_30px_rgba(124,58,237,0.35)]
          active:scale-[0.98]
        "
      >
        <Plus className="h-5 w-5" />

        Add Team Member
      </button>

      {/* =====================================================
          TITLE
      ===================================================== */}

      <h2
        className="
          mb-4
          text-lg
          font-bold
          text-gray-900
        "
      >
        Your Remote Team ({teamMembers.length})
      </h2>

      {/* =====================================================
          TEAM CARDS
      ===================================================== */}

      <div className="space-y-4">

        {teamMembers.map((member) => (
          <FiftyThreeComponent
            key={member.id}
            member={member}
            onMessage={onMessage}
            onProfile={onProfile}
          />
        ))}

      </div>

    </div>
  );
};

export default FiftyTwoComponent;