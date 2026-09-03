import React from "react";
import {
  ShieldCheck,
  ChevronRight
} from "lucide-react";


const FortyNineComponent = ({
  onPayClick
}) => {


  return (

    <div className="w-full">


      <div
        className="
          flex
          items-center
          justify-between
          bg-violet-50
          rounded-3xl
          px-5
          py-4
          border
          border-violet-100
          shadow-sm
        "
      >




        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-4
            min-w-0
          "
        >




          {/* Icon */}

          <div
            className="
              w-12
              h-12
              rounded-2xl
              bg-violet-700
              flex
              items-center
              justify-center
              shrink-0
            "
          >

            <ShieldCheck
              className="
                w-6
                h-6
                text-white
              "
              strokeWidth={2}
            />

          </div>







          {/* Text */}

          <div
            className="
              min-w-0
            "
          >

            <h3
              className="
                text-base
                font-bold
                text-violet-900
                truncate
              "
            >
              Portfolio Website — ₹12,500
            </h3>




            <p
              className="
                text-sm
                text-gray-500
                mt-1
              "
            >
              Escrow protection available
            </p>



          </div>



        </div>









        {/* Pay Button */}

        <button
          onClick={onPayClick}
          className="
            flex
            items-center
            gap-1
            text-sm
            font-bold
            text-violet-700
            hover:text-violet-900
            transition
            shrink-0
          "
        >

          Pay


          <ChevronRight
            className="
              w-5
              h-5
            "
          />


        </button>




      </div>


    </div>

  );

};


export default FortyNineComponent;