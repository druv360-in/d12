
import React from "react";
import { ArrowLeft } from "lucide-react";

const FiftyEightComponent = ({ onBack, onPayment }) => {
  return (
    <div className="w-full">
      {/* ================= ONGOING PROJECT HEADER ================= */}
      <div
        className="
        here   sticky
          top-0
          z-[100]
          w-full
          bg-gray-50
          pt-3
          pb-3
        "
      >
        <div
          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-[0_8px_25px_rgba(0,0,0,0.16)]
            p-5
            lg:p-7
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* ================= LEFT SECTION ================= */}
            <div className="flex items-center gap-4 min-w-0">
              {/* Back Button */}
              <button
                onClick={onBack}
                className="
                  shrink-0
                  w-11
                  h-11
                  rounded-full
                  bg-gray-100
                  flex
                  items-center
                  justify-center
                  hover:bg-gray-200
                  transition
                "
              >
                <ArrowLeft
                  size={22}
                  className="text-gray-700"
                />
              </button>

              {/* Title Section */}
              <div className="min-w-0">
                <h1
                  className="
                    text-2xl
                    lg:text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  Ongoing Projects
                </h1>

                <p
                  className="
                    mt-1
                    text-sm
                    lg:text-base
                    text-gray-500
                  "
                >
                  Track progress and collaborate with your team
                </p>
              </div>
            </div>

            {/* ================= PAYMENT BUTTON ================= */}
            <button
              onClick={onPayment}
              className="
                shrink-0
                bg-violet-700
                hover:bg-violet-800
                text-white
                font-semibold
                px-5
                py-3
                rounded-xl
                transition
              "
            >
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiftyEightComponent;

