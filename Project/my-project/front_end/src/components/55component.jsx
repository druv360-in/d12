import React from "react";
import { ArrowLeft } from "lucide-react";

const FiftyFiveComponent = ({ onBack }) => {
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-100 bg-white px-4 py-3 sm:px-6 lg:px-8">

      <div className="flex items-center gap-3">

        <button
          onClick={onBack}
          className="
            w-9
            h-9
            rounded-full
            bg-gray-100
            flex
            items-center
            justify-center
          "
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>


        <div>

          <h1 className="text-lg font-bold text-gray-900">
            Add Team Member
          </h1>

          <p className="text-xs text-gray-500">
            Hire talented freelancers for your team
          </p>

        </div>

      </div>


    </div>
  );
};

export default FiftyFiveComponent;
