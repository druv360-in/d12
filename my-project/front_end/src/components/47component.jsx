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
    mx-auto
    w-full
    max-w-[1600px]
    rounded-2xl
    border
    border-gray-200/70
    bg-[#F1F3F5]
    p-5
    shadow-[0_12px_25px_rgba(0,0,0,0.18)]
    transition-all
    duration-300
    ease-out
    hover:-translate-y-2
    hover:scale-[1.01]
    hover:shadow-[0_25px_50px_rgba(0,0,0,0.30)]
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
            shadow-[0_5px_12px_rgba(0,0,0,0.15)]
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
            rounded-xl
            bg-white
            px-3
            py-2
            shadow-[0_5px_12px_rgba(0,0,0,0.10)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-[0_8px_18px_rgba(0,0,0,0.16)]
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