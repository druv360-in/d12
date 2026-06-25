import React from "react";
import { IoArrowBack } from "react-icons/io5";

function OngoingProjectsPageHeader97() {
  return (
    <div className="w-full bg-[#1E293B] px-6 py-8 flex items-center gap-5">
      <button className="text-white text-xl hover:opacity-80 transition">
        <IoArrowBack />
      </button>
      <div className="flex flex-col">
        <h1 className="text-white text-2xl font-bold">
          Ongoing Projects
        </h1>
        <p className="text-gray-300 text-base mt-1">
          Track progress and collaborate with your team
        </p>
      </div>
    </div>
  );
}

export default OngoingProjectsPageHeader97;