// tempreviewcard33.jsx

import React from "react";
import { Star } from "lucide-react";

export default function Tempreviewcard33({
  avatar,
  name,
  date,
  rating,
  comment,
}) {
  return (
    <div
      className="
        rounded-[22px]
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      {/* =====================================================
          TOP SECTION
      ====================================================== */}

      <div className="mb-3 flex items-start justify-between gap-4">

        {/* Freelancer */}
        <div className="flex items-center gap-3">

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

          <h3
            className="
              text-[18px]
              font-bold
              leading-tight
              text-gray-900
            "
          >
            {name}
          </h3>

        </div>


        {/* Date */}
        <span
          className="
            whitespace-nowrap
            text-[15px]
            text-gray-400
          "
        >
          {date}
        </span>

      </div>


      {/* =====================================================
          RATING
      ====================================================== */}

      <div className="mb-3 flex gap-1">

        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`
              h-5
              w-5
              ${
                i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            `}
          />
        ))}

      </div>


      {/* =====================================================
          REVIEW
      ====================================================== */}

      <p
        className="
          text-[16px]
          leading-relaxed
          text-gray-600
        "
      >
        {comment}
      </p>

    </div>
  );
}