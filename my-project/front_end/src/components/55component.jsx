import React from "react";
import { ArrowLeft } from "lucide-react";

const FiftyFiveComponent = ({ onBack }) => {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        w-full
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-5
        py-4
        sm:px-6
        lg:px-8
      "
    >

      {/* ===================================================
          LEFT SIDE
          =================================================== */}

      <div className="flex items-center gap-4">

        <button
          type="button"
          onClick={onBack}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#F3F0FA]
            text-gray-600
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#EDE7FA]
            hover:text-violet-700
            hover:shadow-[0_8px_18px_rgba(109,40,217,0.15)]
            active:scale-95
          "
        >
          <ArrowLeft size={21} />
        </button>


        <div>

          <h1
            className="
              text-xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-2xl
            "
          >
            Add Team Member
          </h1>

          <p
            className="
              mt-0.5
              text-sm
              text-gray-500
            "
          >
            Hire talented freelancers for your team
          </p>

        </div>

      </div>

    </header>
  );
};

export default FiftyFiveComponent;