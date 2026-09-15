import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

export default function Component42({
  title = "Service Details",
  onBack,
}) {
  return (
    <div
      className="
        sticky
        top-0
        z-40
        h-[92px]
        w-full
        px-5
        flex
        items-center
        justify-center
        bg-white
        border-b
        border-gray-200
      "
    >
      {/* CENTER TITLE + BACK ARROW */}
      <div className="relative flex items-center justify-center">
        
        {/* BACK ARROW */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="
            absolute
            right-full
            mr-4
            w-11
            h-11
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
            text-gray-900
            hover:bg-gray-200
            transition
            cursor-pointer
          "
        >
          <ArrowLeft
            size={24}
            strokeWidth={2.5}
          />
        </button>

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900">
          {title}
        </h1>
      </div>

      {/* HEART */}
      <button
        type="button"
        aria-label="Add to favorites"
        className="
          absolute
          right-5
          w-11
          h-11
          rounded-full
          bg-gray-100
          flex
          items-center
          justify-center
          text-gray-900
          hover:bg-gray-200
          transition
        "
      >
        <Heart
          size={22}
          strokeWidth={2}
        />
      </button>
    </div>
  );
}