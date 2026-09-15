import React from "react";
import { MessageCircle, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TopFreelancer48({
  onHire,
}) {
  const navigate = useNavigate();

  const handleMessage = () => {
    navigate("/chat/1", {
      state: {
        id: 1,
        name: "Tech Startup Co.",
        avatar:
          "https://i.pravatar.cc/100?img=12",
      },
    });
  };

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        border-t
        border-gray-200
        bg-white/5
        px-4
        py-9
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        backdrop-blur-md
        lg:left-[339px]
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1400px]
          items-center
          justify-center
          gap-3
          sm:gap-4
        "
      >
        {/* MESSAGE */}
        <button
          onClick={handleMessage}
          className="
            flex
            h-16
            w-[280px]
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-gray-200
            bg-white
            px-5
            text-base
            font-semibold
            text-purple-700
            shadow-sm
            transition
            hover:bg-purple-50
            hover:shadow-md
            active:scale-[0.98]
          "
        >
          <MessageCircle
            size={22}
            strokeWidth={2}
          />

          <span>Message</span>
        </button>

        {/* HIRE NOW */}
        <button
          onClick={onHire}
          className="
            flex
            h-16
            w-[280px]
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-gradient-to-r
            from-violet-600
            to-purple-600
            px-5
            text-base
            font-semibold
            text-white
            shadow-[0_4px_12px_rgba(124,58,237,0.25)]
            transition
            hover:from-violet-700
            hover:to-purple-700
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          <UserPlus
            size={22}
            strokeWidth={2}
          />

          <span>Hire Now</span>
        </button>
      </div>
    </div>
  );
}