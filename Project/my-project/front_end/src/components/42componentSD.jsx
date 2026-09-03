import React from "react";
import { ArrowLeft, Heart } from "lucide-react";

export default function Component42({ title = "Service Details", onBack }) {
  return (
    <div
      className="
        sticky
        top-12
        z-40
        h-20
        px-5
        flex
        items-center
        justify-between
        bg-white/75
        backdrop-blur-md
        border-b
        border-white/30
        transition-all
        duration-300
      "
    >
      <button
        onClick={onBack}
        className="w-12 h-12 rounded-full bg-gray-100/80 backdrop-blur flex items-center justify-center"
      >
        <ArrowLeft size={22} />
      </button>

      <h1 className="text-3xl font-bold text-gray-900">
        {title}
      </h1>

      <button className="w-12 h-12 rounded-full bg-gray-100/80 backdrop-blur flex items-center justify-center">
        <Heart size={22} />
      </button>
    </div>
  );
}