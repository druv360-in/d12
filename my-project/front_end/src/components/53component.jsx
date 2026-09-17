import React from "react";
import {
  Clock,
  DollarSign,
  Calendar,
} from "lucide-react";

const FiftyThreeComponent = ({
  member,
  onMessage,
  onProfile,
}) => {

  // =====================================================
  // VIEW PROFILE
  // =====================================================

  const handleViewProfile = (e) => {
    e.stopPropagation();

    if (onProfile) {
      onProfile(member);
    }
  };

  // =====================================================
  // MESSAGE
  // =====================================================

  const handleMessage = (e) => {
    e.stopPropagation();

    if (onMessage) {
      onMessage(member);
    }
  };

  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-4

        shadow-[0_8px_20px_rgba(0,0,0,0.10)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]
      "
    >

      {/* =====================================================
          TOP ROW
      ===================================================== */}

      <div
        className="
          mb-3
          flex
          items-start
          justify-between
        "
      >

        {/* AVATAR + INFO */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <img
            src={member.avatar}
            alt={member.name}
            className="
              h-14
              w-14
              rounded-xl
              object-cover
              shadow-[0_4px_10px_rgba(0,0,0,0.10)]
            "
          />

          <div>

            {/* NAME */}

            <h3
              className="
                text-base
                font-bold
                text-gray-900
              "
            >
              {member.name}
            </h3>

            {/* ROLE */}

            <p
              className="
                text-sm
                font-medium
                text-violet-700
              "
            >
              {member.role}
            </p>

            {/* UNIVERSITY */}

            <p
              className="
                text-xs
                text-gray-500
              "
            >
              {member.university}
            </p>

          </div>
        </div>

        {/* STATUS */}

        <span
          className="
            rounded-full
            bg-emerald-50
            px-3
            py-1
            text-xs
            font-semibold
            text-emerald-600
          "
        >
          {member.status}
        </span>

      </div>

      {/* =====================================================
          STATS
      ===================================================== */}

      <div
        className="
          mb-3
          grid
          grid-cols-3
          gap-2
        "
      >

        {/* TOTAL HOURS */}

        <div
          className="
            rounded-xl
            bg-violet-50
            p-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_8px_16px_rgba(0,0,0,0.10)]
          "
        >

          <Clock
            className="
              mb-1
              h-4
              w-4
              text-violet-700
            "
          />

          <p
            className="
              text-xs
              text-gray-500
            "
          >
            Total Hours
          </p>

          <p
            className="
              text-base
              font-bold
              text-gray-900
            "
          >
            {member.hours}
          </p>

        </div>

        {/* TOTAL EARNED */}

        <div
          className="
            rounded-xl
            bg-emerald-50
            p-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_8px_16px_rgba(0,0,0,0.10)]
          "
        >

          <DollarSign
            className="
              mb-1
              h-4
              w-4
              text-emerald-600
            "
          />

          <p
            className="
              text-xs
              text-gray-500
            "
          >
            Total Earned
          </p>

          <p
            className="
              text-base
              font-bold
              text-gray-900
            "
          >
            ${member.earned}
          </p>

        </div>

        {/* SINCE */}

        <div
          className="
            rounded-xl
            bg-violet-50
            p-3
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_8px_16px_rgba(0,0,0,0.10)]
          "
        >

          <Calendar
            className="
              mb-1
              h-4
              w-4
              text-violet-700
            "
          />

          <p
            className="
              text-xs
              text-gray-500
            "
          >
            Since
          </p>

          <p
            className="
              text-sm
              font-bold
              text-gray-900
            "
          >
            {member.since}
          </p>

        </div>

      </div>

      {/* =====================================================
          BUTTONS
      ===================================================== */}

      <div
        className="
          flex
          gap-2
        "
      >

        {/* =================================================
            VIEW PROFILE
        ================================================= */}

        <button
          type="button"
          onClick={handleViewProfile}
          className="
            flex-1
            rounded-xl
            bg-violet-50
            py-2.5
            text-sm
            font-semibold
            text-violet-700

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-violet-100
            hover:shadow-[0_8px_16px_rgba(124,58,237,0.15)]

            active:scale-[0.98]
          "
        >
          View Profile
        </button>

        {/* =================================================
            MESSAGE
        ================================================= */}

        <button
          type="button"
          onClick={handleMessage}
          className="
            flex-1
            rounded-xl
            bg-pink-50
            py-2.5
            text-sm
            font-semibold
            text-pink-600

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-pink-100
            hover:shadow-[0_8px_16px_rgba(236,72,153,0.15)]

            active:scale-[0.98]
          "
        >
          Message
        </button>

      </div>

    </div>
  );
};

export default FiftyThreeComponent;