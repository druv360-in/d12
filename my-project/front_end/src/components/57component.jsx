import React from "react";

import {
  Star,
  Briefcase,
  Clock,
  MessageCircle,
  UserPlus,
  Check,
} from "lucide-react";

const FiftySevenComponent = ({
  freelancer,
  onHire,
  onViewProfile,
  onMessage,
  requested = false,
}) => {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5

        shadow-[0_6px_18px_rgba(0,0,0,0.07)]

        transition-all
        duration-300
        ease-out

        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.13)]

        sm:p-6
      "
    >

      {/* =====================================================
          TOP ROW
          ===================================================== */}

      <div
        className="
          mb-4
          flex
          items-start
          justify-between
          gap-4
        "
      >

        {/* ===================================================
            PROFILE
            =================================================== */}

        <div
          className="
            flex
            min-w-0
            items-center
            gap-4
          "
        >

          <img
            src={freelancer.avatar}
            alt={freelancer.name}
            className="
              h-14
              w-14
              shrink-0
              rounded-xl
              border
              border-gray-200
              object-cover

              shadow-[0_5px_12px_rgba(0,0,0,0.08)]

              sm:h-16
              sm:w-16
            "
          />

          <div className="min-w-0">

            <h3
              className="
                truncate
                text-base
                font-bold
                text-gray-900
                sm:text-lg
              "
            >
              {freelancer.name}
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-gray-500
              "
            >
              {freelancer.university}
            </p>

          </div>

        </div>


        {/* ===================================================
            RATING
            =================================================== */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1
            rounded-full
            bg-[#FFF9E9]
            px-3
            py-1.5
          "
        >

          <Star
            className="
              h-4
              w-4
              text-[#D4AF37]
            "
            fill="#D4AF37"
          />

          <span
            className="
              text-sm
              font-bold
              text-gray-900
            "
          >
            {freelancer.rating}
          </span>

        </div>

      </div>


      {/* =====================================================
          STATS
          ===================================================== */}

      <div
        className="
          mb-4
          flex
          flex-wrap
          items-center
          gap-5
          text-xs
          text-gray-500
          sm:text-sm
        "
      >

        <div
          className="
            flex
            items-center
            gap-1.5
          "
        >

          <Briefcase className="h-4 w-4" />

          <span>
            {freelancer.projects} projects
          </span>

        </div>


        <div
          className="
            flex
            items-center
            gap-1.5
          "
        >

          <Clock className="h-4 w-4" />

          <span>
            {freelancer.responseTime}
          </span>

        </div>

      </div>


      {/* =====================================================
          SKILLS
          ===================================================== */}

      <div
        className="
          mb-5
          flex
          flex-wrap
          gap-2
        "
      >

        {freelancer.skills.map((skill, index) => (
          <span
            key={index}
            className="
              rounded-full
              bg-[#F5F0FB]
              px-3
              py-1.5
              text-xs
              font-medium
              text-violet-700

              transition-all
              duration-200

              hover:-translate-y-0.5
              hover:bg-violet-100
              hover:shadow-[0_5px_12px_rgba(109,40,217,0.10)]

              sm:text-sm
            "
          >
            {skill}
          </span>
        ))}

      </div>


      {/* =====================================================
          PRICE
          ===================================================== */}

      <div className="mb-5">

        <p
          className="
            text-lg
            font-bold
            text-gray-900
          "
        >
          ₹{freelancer.price}

          <span
            className="
              ml-1
              text-sm
              font-normal
              text-gray-500
            "
          >
            / hr
          </span>

        </p>

      </div>


      {/* =====================================================
          BUTTONS
          ===================================================== */}

      <div
        className="
          flex
          items-center
          gap-2
        "
      >

        {/* ===================================================
            VIEW PROFILE
            =================================================== */}

        <button
          type="button"
          onClick={() =>
            onViewProfile(freelancer)
          }
          className="
            flex
            h-12
            flex-1
            items-center
            justify-center

            rounded-full
            border
            border-gray-200
            bg-[#F7F4FC]

            px-4

            text-sm
            font-semibold
            text-gray-900

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:bg-[#F0E9FA]
            hover:text-violet-700
            hover:shadow-[0_8px_18px_rgba(109,40,217,0.12)]

            active:scale-[0.98]

            sm:text-base
          "
        >
          View Profile
        </button>


        {/* ===================================================
            MESSAGE
            =================================================== */}

        <button
          type="button"
          onClick={() =>
            onMessage(freelancer)
          }
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center

            rounded-full
            bg-[#F7F0FC]
            text-violet-700

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-violet-100
            hover:shadow-[0_8px_18px_rgba(109,40,217,0.14)]

            active:scale-95
          "
          title="Message"
        >

          <MessageCircle size={20} />

        </button>


        {/* ===================================================
            HIRE / REQUESTED
            =================================================== */}

        <button
          type="button"
          disabled={requested}
          onClick={() =>
            onHire(freelancer)
          }
          className={`
            flex
            h-12
            shrink-0
            items-center
            justify-center
            gap-2

            rounded-full

            px-4
            sm:px-6

            text-sm
            font-semibold
            sm:text-base

            transition-all
            duration-300

            ${
              requested
                ? `
                  cursor-default
                  border
                  border-[#E7D8A6]
                  bg-[#FFF9E9]
                  text-[#A58218]
                `
                : `
                  bg-violet-700
                  text-white

                  shadow-[0_8px_18px_rgba(109,40,217,0.22)]

                  hover:-translate-y-1
                  hover:bg-violet-800

                  hover:shadow-[0_14px_25px_rgba(109,40,217,0.30)]

                  active:scale-95
                `
            }
          `}
        >

          {requested ? (
            <>
              <Check size={18} />
              <span>Requested</span>
            </>
          ) : (
            <>
              <UserPlus size={18} />
              <span>Hire</span>
            </>
          )}

        </button>

      </div>

    </div>
  );
};

export default FiftySevenComponent;