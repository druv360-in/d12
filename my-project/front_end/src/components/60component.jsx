
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckSquare,
  Eye,
  MessageSquare,
} from "lucide-react";

const SixtyComponent = () => {
  const navigate = useNavigate();

  const collaborators = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Lead Developer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      contribution: 45,
      tasksCompleted: 12,
      totalTasks: 18,
      currentTask: "Building API endpoints",
      online: true,
    },

    {
      id: 2,
      name: "Marcus Johnson",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      contribution: 30,
      tasksCompleted: 8,
      totalTasks: 12,
      currentTask: "Working on checkout flow",
      online: false,
    },

    {
      id: 3,
      name: "Sophia Chen",
      role: "Backend Developer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      contribution: 25,
      tasksCompleted: 6,
      totalTasks: 10,
      currentTask: "Setting up database",
      online: true,
    },
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        p-6
        lg:p-7
        shadow-sm
        border
        border-gray-100
        w-full
      "
    >
      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-3
          mb-6
        "
      >
        <CheckSquare
          size={27}
          strokeWidth={2}
          className="text-violet-700"
        />

        <h2
          className="
            text-2xl
            lg:text-3xl
            font-bold
            text-gray-900
          "
        >
          Team Collaborators ({collaborators.length})
        </h2>
      </div>

      {/* =====================================================
          COLLABORATOR CARDS
      ===================================================== */}

      <div className="flex flex-col gap-5">
        {collaborators.map((member) => {
          const taskPercentage =
            (member.tasksCompleted / member.totalTasks) * 100;

          return (
            <div
              key={member.id}
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                lg:p-5

                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* =================================================
                  PROFILE
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  gap-4
                  mb-4
                "
              >
                {/* Avatar */}

                <div className="relative shrink-0">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      object-cover
                    "
                  />

                  {/* Online Indicator */}

                  {member.online && (
                    <span
                      className="
                        absolute
                        bottom-0
                        right-0
                        w-4
                        h-4
                        rounded-full
                        bg-emerald-500
                        border-2
                        border-white
                      "
                    />
                  )}
                </div>

                {/* =================================================
                    NAME + ROLE
                ================================================= */}

                <div className="min-w-0">
                  <h3
                    className="
                      text-2xl
                      lg:text-3xl
                      font-bold
                      text-gray-900
                      leading-tight
                    "
                  >
                    {member.name}
                  </h3>

                  <p
                    className="
                      text-base
                      lg:text-lg
                      text-violet-600
                      font-medium
                      mt-1
                    "
                  >
                    {member.role}
                  </p>
                </div>
              </div>

              {/* =================================================
                  CURRENT TASK
              ================================================= */}

              <div
                className="
                  ml-0
                  lg:ml-[72px]
                  bg-violet-50
                  rounded-xl
                  px-4
                  py-3
                  mb-4
                "
              >
                <p
                  className="
                    text-base
                    lg:text-lg
                    text-violet-700
                    italic
                  "
                >
                  "{member.currentTask}"
                </p>
              </div>

              {/* =================================================
                  CONTRIBUTION + TASKS
              ================================================= */}

              <div
                className="
                  ml-0
                  lg:ml-[72px]
                  grid
                  grid-cols-2
                  gap-6
                  mb-5
                "
              >
                {/* =================================================
                    CONTRIBUTION
                ================================================= */}

                <div>
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-2
                    "
                  >
                    <span
                      className="
                        text-sm
                        lg:text-base
                        text-gray-500
                      "
                    >
                      Contribution
                    </span>

                    <span
                      className="
                        text-base
                        lg:text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      {member.contribution}%
                    </span>
                  </div>

                  <div
                    className="
                      w-full
                      h-2
                      bg-violet-100
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-violet-700
                        rounded-full
                      "
                      style={{
                        width: `${member.contribution}%`,
                      }}
                    />
                  </div>
                </div>

                {/* =================================================
                    TASKS COMPLETED
                ================================================= */}

                <div>
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      mb-2
                    "
                  >
                    <span
                      className="
                        text-sm
                        lg:text-base
                        text-gray-500
                      "
                    >
                      Tasks
                    </span>

                    <span
                      className="
                        text-base
                        lg:text-lg
                        font-bold
                        text-gray-900
                      "
                    >
                      {member.tasksCompleted}/
                      {member.totalTasks} completed
                    </span>
                  </div>

                  <div
                    className="
                      w-full
                      h-2
                      bg-gray-100
                      rounded-full
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        h-full
                        bg-violet-500
                        rounded-full
                      "
                      style={{
                        width: `${taskPercentage}%`,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* =================================================
                  ACTION BUTTONS
              ================================================= */}

              <div
                className="
                  ml-0
                  lg:ml-[72px]
                  grid
                  grid-cols-2
                  gap-2
                "
              >
                {/* View Work */}

                <button
                  type="button"
                  onClick={() =>
                    console.log(
                      "View work:",
                      member.name
                    )
                  }
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-10
                    rounded-full
                    bg-violet-50
                    text-violet-700
                    text-base
                    font-medium
                    hover:bg-violet-100
                    transition
                  "
                >
                  <Eye size={17} />
                  View Work
                </button>

                {/* Message */}

                <button
                  type="button"
                  onClick={() => navigate("/chat")}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    h-10
                    rounded-full
                    bg-pink-50
                    text-pink-600
                    text-base
                    font-medium
                    hover:bg-pink-100
                    transition
                  "
                >
                  <MessageSquare size={17} />
                  Message
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixtyComponent;

