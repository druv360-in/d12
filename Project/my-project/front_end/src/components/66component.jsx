import React from "react";
import { Clock } from "lucide-react";

const SixtySixComponent = () => {
  const activities = [
    {
      id: 1,
      name: "Marcus Johnson",
      action: "uploaded Homepage Design Mockup",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      name: "Emma Thompson",
      action: "commented on payment integration",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      timeAgo: "4 hours ago",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      action: 'completed "Design product detail pages"',
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timeAgo: "6 hours ago",
    },
    {
      id: 4,
      name: "System",
      action: "Project reached 65% completion",
      avatar: "https://i.pravatar.cc/80?img=11",
      timeAgo: "1 day ago",
    },
  ];

  return (
    <div
      className="
        w-full
        bg-white
        rounded-3xl
        px-7
        py-6
        shadow-sm
        border
        border-gray-100
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-3
          mb-7
        "
      >
        <Clock
          size={21}
          strokeWidth={2}
          className="text-amber-500"
        />

        <h2
          className="
            text-xl
            font-bold
            text-gray-900
          "
        >
          Recent Activity
        </h2>
      </div>

      {/* =====================================================
          ACTIVITY TIMELINE
      ===================================================== */}

      <div className="relative">

        {/* Vertical Timeline Line */}

        <div
          className="
            absolute
            left-[22px]
            top-6
            bottom-6
            w-px
            bg-violet-100
          "
        />

        {/* ===================================================
            ACTIVITY ITEMS
        =================================================== */}

        <div className="flex flex-col gap-6">

          {activities.map((activity) => (
            <div
              key={activity.id}
              className="
                relative
                flex
                items-start
                gap-5
              "
            >

              {/* =================================================
                  AVATAR
              ================================================= */}

              <div
                className="
                  relative
                  z-10
                  shrink-0
                  w-11
                  h-11
                "
              >
                <img
                  src={activity.avatar}
                  alt={activity.name}
                  className="
                    w-11
                    h-11
                    rounded-full
                    object-cover
                    bg-gray-100
                  "
                />
              </div>

              {/* =================================================
                  ACTIVITY CONTENT
              ================================================= */}

              <div
                className="
                  flex-1
                  min-w-0
                  pt-0.5
                "
              >

                <p
                  className="
                    text-[15px]
                    leading-5
                    text-gray-500
                  "
                >

                  {/* Name */}

                  <span
                    className="
                      font-bold
                      text-gray-900
                    "
                  >
                    {activity.name}
                  </span>

                  {/* Action */}

                  <span
                    className="
                      text-gray-500
                    "
                  >
                    {" "}
                    {activity.action}
                  </span>

                </p>

                {/* Time */}

                <p
                  className="
                    text-sm
                    text-gray-400
                    mt-1
                  "
                >
                  {activity.timeAgo}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default SixtySixComponent;