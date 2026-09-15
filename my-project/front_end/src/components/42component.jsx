import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

export default function Component42({
  title = "Profile",
  onBack,
}) {
  return (
    <div
      className="
        sticky
        top-0
        z-40
        w-full
        h-24
        px-6
        lg:px-10
        flex
        items-center
        justify-between
        bg-white
        border-b
        border-gray-200
      "
    >
      {/* Back Button */}
      <button
  onClick={() => {
    console.log("Button clicked");
    onBack?.();
  }}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gray-100
          transition
          hover:bg-gray-200
        "
      >
        <ArrowLeft size={22} />
      </button>

      {/* Center Title */}
      <h1
        className="
          absolute
          left-1/2
          -translate-x-1/2
          text-2xl
          font-bold
          text-gray-900
          sm:text-3xl
        "
      >
        {title}
      </h1>

      {/* Favourite */}
      <button
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gray-100
          transition
          hover:bg-gray-200
        "
      >
        <Heart size={22} />
      </button>
    </div>
  );
}