import React from "react";
import {
  ArrowLeft,
  Lock,
  Phone,
  MoreVertical
} from "lucide-react";


const FortyEightChatComponent = ({
  name = "Tech Startup Co.",
  status = "Online now",
  avatarUrl = "https://i.pravatar.cc/80?img=12",
  onBack = () => {},
  onSecurePay = () => {},
  onCall = () => {},
  onMore = () => {}
}) => {


  return (

    <div
      className="
        w-full

        h-20
        sm:h-24

        px-3
        sm:px-8

        flex

        items-center

        justify-between

        gap-2

        bg-white/80

        backdrop-blur-md

        border-b

        border-white/30

        shadow-sm
      "
    >





      {/* Left Section */}

      <div
        className="
          flex

          items-center

          gap-2

          sm:gap-5

          flex-1

          min-w-0
        "
      >




        {/* Back Button */}

        <button
          onClick={onBack}
          className="
            w-10
            h-10

            sm:w-14
            sm:h-14

            rounded-full

            bg-violet-50

            flex

            items-center

            justify-center

            shrink-0
          "
        >

          <ArrowLeft
            size={20}
            className="
              text-gray-700

              sm:w-6
              sm:h-6
            "
          />

        </button>







        {/* Avatar */}

        <div
          className="
            relative

            shrink-0
          "
        >

          <img
            src={avatarUrl}
            alt={name}

            className="
              w-10
              h-10

              sm:w-16
              sm:h-16

              rounded-full

              object-cover
            "
          />



          <span
            className="
              absolute

              bottom-0

              right-0

              w-3
              h-3

              sm:w-4
              sm:h-4

              bg-green-500

              rounded-full

              border-2

              border-white
            "
          />

        </div>








        {/* Name Section */}

        <div
          className="
            flex

            flex-col

            min-w-0
          "
        >


          <h2
            className="
              text-sm

              sm:text-xl

              font-bold

              text-gray-900

              truncate
            "
          >
            {name}
          </h2>



          <p
            className="
              text-xs

              sm:text-sm

              text-green-500

              font-medium
            "
          >
            {status}
          </p>


        </div>



      </div>









      {/* Right Section */}

      <div
        className="
          flex

          items-center

          gap-1

          sm:gap-2

          shrink-0
        "
      >





        {/* Secure Pay */}

        <button
          onClick={onSecurePay}
          className="
            flex

            items-center

            gap-1

            sm:gap-2

            px-3

            sm:px-7

            py-2

            sm:py-3

            rounded-full

            bg-gradient-to-r

            from-purple-600

            to-violet-700

            text-white

            text-xs

            sm:text-base

            font-semibold

            shadow-md
          "
        >

          <Lock
            size={15}
            className="
              sm:w-[18px]
              sm:h-[18px]
            "
          />


          <span
            className="
              hidden

              sm:block
            "
          >
            Secure Pay
          </span>


        </button>








        {/* Call */}

        <button
          onClick={onCall}
          className="
            w-10
            h-10

            sm:w-14
            sm:h-14

            rounded-full

            bg-violet-50

            flex

            items-center

            justify-center

            shrink-0
          "
        >

          <Phone
            size={18}
            className="
              text-gray-600

              sm:w-6
              sm:h-6
            "
          />

        </button>









        {/* More */}

        <button
          onClick={onMore}
          className="
            w-10
            h-10

            sm:w-14
            sm:h-14

            rounded-full

            bg-violet-50

            flex

            items-center

            justify-center

            shrink-0
          "
        >

          <MoreVertical
            size={18}
            className="
              text-gray-600

              sm:w-6
              sm:h-6
            "
          />

        </button>



      </div>



    </div>

  );

};


export default FortyEightChatComponent;