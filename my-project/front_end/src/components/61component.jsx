import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, MessageSquare } from "lucide-react";

const SixtyOneComponent = ({ member }) => {
  const navigate = useNavigate();

  const contributionWidth = `${member.contribution}%`;

  return (
    <div
      className="
        bg-white
        rounded-2xl
        p-5
        lg:p-6
        border
        border-gray-100
        shadow-sm
      "
    >

      {/* Profile */}

      <div
        className="
          flex
          items-start
          gap-4
          mb-5
        "
      >

        <div className="relative">

          <img
            src={member.avatar}
            alt={member.name}
            className="
              w-16
              h-16
              lg:w-20
              lg:h-20
              rounded-2xl
              object-cover
            "
          />

          <span
            className={`
              absolute
              bottom-1
              right-1
              w-4
              h-4
              rounded-full
              border-2
              border-white

              ${
                member.online
                  ? "bg-emerald-500"
                  : "bg-gray-300"
              }

            `}
          />

        </div>

        <div>

          <h3
            className="
              text-lg
              lg:text-2xl
              font-bold
              text-gray-900
            "
          >
            {member.name}
          </h3>

          <p
            className="
              text-sm
              lg:text-base
              text-violet-700
              font-semibold
              mt-1
            "
          >
            {member.role}
          </p>

        </div>

      </div>


      {/* Current Task */}

      <div
        className="
          bg-violet-50
          rounded-xl
          p-4
          mb-5
        "
      >

        <p
          className="
            text-sm
            lg:text-base
            text-gray-600
            italic
          "
        >
          "{member.currentTask}"
        </p>

      </div>


      {/* Contribution */}

      <div
        className="
          flex
          justify-between
          gap-5
          mb-5
        "
      >

        <div className="flex-1">

          <p
            className="
              text-sm
              text-gray-500
              mb-2
            "
          >
            Contribution
          </p>

          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex-1
                bg-violet-100
                rounded-full
                h-3
              "
            >

              <div
                className="
                  bg-violet-700
                  h-3
                  rounded-full
                "
                style={{
                  width: contributionWidth
                }}
              />

            </div>

            <span
              className="
                font-bold
                text-gray-900
                text-base
              "
            >
              {member.contribution}%
            </span>

          </div>

        </div>


        <div>

          <p
            className="
              text-sm
              text-gray-500
              mb-2
            "
          >
            Tasks
          </p>

          <p
            className="
              text-base
              font-bold
              text-gray-900
            "
          >
            {member.tasksCompleted}/{member.totalTasks}
          </p>

        </div>

      </div>


      {/* Buttons */}

      <div
        className="
          flex
          gap-3
        "
      >

        <button
          type="button"
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            bg-violet-50
            text-violet-700
            font-semibold
            py-3
            rounded-xl
            text-sm
            lg:text-base
            hover:bg-violet-100
          "
        >
          <Eye size={18} />

          View Work
        </button>


        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            navigate("/chat");
          }}
          className="
            flex-1
            flex
            items-center
            justify-center
            gap-2
            bg-pink-50
            text-pink-600
            font-semibold
            py-3
            rounded-xl
            text-sm
            lg:text-base
            hover:bg-pink-100
          "
        >
          <MessageSquare size={18} />

          Message
        </button>

      </div>

    </div>
  );
};

export default SixtyOneComponent;