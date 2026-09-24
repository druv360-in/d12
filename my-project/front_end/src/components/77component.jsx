import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SeventySevenComponent = ({
  onCreate,
  stats = { total: 3, active: 1, done: 1 },
}) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 lg:px-6">

      {/* Create New Project Button */}
      <button
        onClick={() => navigate("/create-new-project")}
        className="
          w-full
          rounded-2xl
          bg-violet-700
          py-[35px]
          text-[17px]
          font-bold
          text-white
          shadow-lg
          shadow-violet-200
          transition-all
          duration-200
          hover:bg-violet-800
          hover:-translate-y-0.5
          hover:shadow-xl
          flex
          items-center
          justify-center
          gap-2
          mb-4
        "
      >
        <Plus className="w-5 h-5" />
        Create New Project
      </button>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-4">

        {/* Total */}
        <div
          className="
            rounded-2xl
            bg-white
            p-4
            text-center
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <p className="text-[15px] text-gray-500">
            Total
          </p>

          <p className="text-2xl font-bold text-gray-900">
            {stats.total}
          </p>
        </div>

        {/* Active */}
        <div
          className="
            rounded-2xl
            bg-white
            p-4
            text-center
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <p className="text-[15px] text-gray-500">
            Active
          </p>

          <p className="text-2xl font-bold text-violet-700">
            {stats.active}
          </p>
        </div>

        {/* Done */}
        <div
          className="
            rounded-2xl
            bg-white
            p-4
            text-center
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-1
            hover:shadow-md
          "
        >
          <p className="text-[15px] text-gray-500">
            Done
          </p>

          <p className="text-2xl font-bold text-emerald-600">
            {stats.done}
          </p>
        </div>

      </div>
    </div>
  );
};

export default SeventySevenComponent;