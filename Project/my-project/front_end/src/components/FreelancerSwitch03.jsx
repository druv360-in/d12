import { Gift, ArrowRight } from "lucide-react";

export default function FreelancerSwitch03() {
  return (
    <div className="w-full">

      <div
        className="
          w-full
          bg-gradient-to-r
          from-[#F8F5FF]
          to-[#F5F3FF]
          border
          border-[#E8E1FF]
          rounded-3xl
          px-5
          py-5
          sm:px-6
          lg:px-10
          lg:py-8
          shadow-sm
          flex
          items-center
          justify-between
        "
      >


        {/* Left Content */}

        <div
          className="
            flex
            items-center
            gap-4
            lg:gap-6
          "
        >


          {/* Icon */}

          <div
            className="
              w-16
              h-16
              lg:w-20
              lg:h-20
              rounded-2xl
              bg-[#6C2BD9]
              flex
              items-center
              justify-center
              shadow-lg
              shrink-0
            "
          >

            <Gift
              className="text-white"
              size={32}
            />

          </div>





          {/* Text */}

          <div>


            <h3
              className="
                text-[15px]
                sm:text-base
                lg:text-2xl
                font-semibold
                text-[#111827]
              "
            >
              Switch to Freelancer Mode
            </h3>



            <p
              className="
                text-sm
                lg:text-lg
                text-gray-500
                mt-1
              "
            >
              Manage gigs and earn money
            </p>


          </div>


        </div>







        {/* Arrow Button */}

        <button
          className="
            text-gray-400
            hover:text-[#6C2BD9]
            transition
          "
        >

          <ArrowRight
            size={28}
            className="lg:w-10 lg:h-10"
          />

        </button>




      </div>


    </div>
  );
}