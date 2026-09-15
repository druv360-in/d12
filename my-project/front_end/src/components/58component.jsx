import React from "react";
import { ArrowLeft } from "lucide-react";


const FiftyEightComponent = ({ onBack, onPayment }) => {

  return (

    <div
      className="
        w-full
      "
    >

      {/* ================= BACK BUTTON CARD ================= */}

      <div
        className="
          sticky
          top-0
          z-50
          bg-gray-50
          pt-2
        "
      >
        <div
          className="
            bg-white
            rounded-2xl
            border
            border-gray-100
            shadow-sm
            p-3
          "
        >

          <button

            onClick={onBack}

            className="
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

              className="
                text-gray-700
              "

            />
          </button>
        </div>
      </div>
      {/* ================= ONGOING PROJECT CARD ================= */}
      <div

        className="
          sticky
          top-[68px]
          z-40
          bg-gray-50
        "
      >
        <div

          className="
            bg-white
            rounded-3xl
            border
            border-gray-100
            shadow-sm
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
            {/* Title Section */}
            <div>
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
            {/* Payment Button */}
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