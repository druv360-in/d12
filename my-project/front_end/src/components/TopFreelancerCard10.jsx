import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TopFreelancerCard10({ freelancer }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${freelancer.id}`, {
      state: {
        freelancer,
      },
    });
  };

  return (
    <div
      onClick={handleProfileClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleProfileClick();
        }
      }}
      className="
        w-full
        cursor-pointer
        rounded-3xl
        border
        border-gray-200/50
        bg-[#F1F3F5]
        p-6
        flex
        gap-5

        shadow-[0_8px_20px_rgba(0,0,0,0.14)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-[0_20px_40px_rgba(0,0,0,0.24)]
      "
    >
      {/* ==================================================
          AVATAR
      ================================================== */}

      <img
        src={freelancer.avatar}
        alt={freelancer.name}
        className="
          h-20
          w-20
          shrink-0
          rounded-2xl
          object-cover
          shadow-[0_6px_14px_rgba(0,0,0,0.12)]
        "
      />

      {/* ==================================================
          DETAILS
      ================================================== */}

      <div
        className="
          flex
          min-w-0
          flex-1
          justify-between
          gap-4
        "
      >
        {/* LEFT */}

        <div className="min-w-0 flex-1">
          {/* NAME */}

          <h4
            className="
              whitespace-nowrap
              text-xl
              font-bold
              text-gray-900
            "
          >
            {freelancer.name}
          </h4>

          {/* UNIVERSITY */}

          <p
            className="
              mt-1
              truncate
              text-sm
              text-gray-500
            "
          >
            {freelancer.university}
          </p>

          {/* RATING + PROJECTS */}

          <div
            className="
              mt-3
              flex
              items-center
              gap-5
            "
          >
            {/* RATING */}

            <div
              className="
                flex
                items-center
                gap-2
                whitespace-nowrap
                text-sm
                font-semibold
                text-gray-600
              "
            >
              <Star
                size={18}
                fill="#fbbf24"
                color="#fbbf24"
              />

              {freelancer.rating}
            </div>

            {/* PROJECTS */}

            <div
              className="
                whitespace-nowrap
                text-sm
                font-semibold
                text-gray-600
              "
            >
              {freelancer.projects} projects
            </div>
          </div>
        </div>

        {/* ==================================================
            RATE
        ================================================== */}

        <div
          className="
            flex
            shrink-0
            flex-col
            items-end
            justify-center
          "
        >
          <span
            className="
              text-sm
              text-gray-400
            "
          >
            From
          </span>

          <span
            className="
              whitespace-nowrap
              text-xl
              font-semibold
              text-purple-600
            "
          >
            ₹{freelancer.rate}/hr
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopFreelancerCard10;