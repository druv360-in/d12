import React from "react";
import { Star } from "lucide-react";

export default function ReviewCard47({
  avatar,
  name,
  date,
  rating,
  comment,
}) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-[0_4px_15px_rgba(0,0,0,0.06)]
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div
        className="
          flex
          items-start
          gap-3
        "
      >

        {/* AVATAR */}

        <img
          src={avatar}
          alt={name}
          className="
            h-12
            w-12
            shrink-0
            rounded-full
            object-cover
          "
        />


        {/* NAME + DATE */}

        <div className="min-w-0 flex-1">

          <h4
            className="
              text-base
              font-semibold
              text-gray-900
            "
          >
            {name}
          </h4>

          <p
            className="
              mt-1
              text-sm
              text-gray-400
            "
          >
            {date}
          </p>

        </div>


        {/* RATING */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
          "
        >

          <Star
            size={18}
            fill="#d4af37"
            color="#d4af37"
            strokeWidth={0}
          />

          <span
            className="
              text-base
              font-semibold
              text-gray-900
            "
          >
            {rating}
          </span>

        </div>

      </div>


      {/* =================================================
          COMMENT
      ================================================= */}

      <p
        className="
          mt-4
          text-base
          leading-[1.6]
          text-gray-500
        "
      >
        {comment}
      </p>

    </div>
  );
}