import React from "react";
import { LuSquareCheck } from "react-icons/lu";
import TeamCollaboratorItem100 from "./teamCollaboratorItem100.jsx";

function TeamCollaboratorItemSection99() {
  return (
    <div className=" bg-[#1E293B] px-6 py-8 rounded-3xl flex flex-col gap-3">
    <div className="flex items-center gap-3">
      <LuSquareCheck className="text-[#6D6AFF] text-3xl" size={20} />

      <h2 className="text-white text-xl font-bold">
        Team Collaborators (3)
      </h2>
    </div>
    <div>
        <TeamCollaboratorItem100 />
    </div>
    </div>
  );
}

export default TeamCollaboratorItemSection99;