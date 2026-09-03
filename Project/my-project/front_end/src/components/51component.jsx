// 51component.jsx

import React from "react";
import {
  Lock,
  Shield,
  ShieldCheck,
  CreditCard,
  X,
  Info
} from "lucide-react";


const FiftyOneComponent = ({
  show = false,
  projectAmount = "₹12,500",
  projectName = "Portfolio Website Development",
  onClose = () => {},
  onPay = () => {}
}) => {


  if (!show) return null;



  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-6
        bg-black/30
        backdrop-blur-md
      "
      onClick={onClose}
    >




      <div
        className="
          w-full
          max-w-2xl
          min-h-[650px]
          bg-white/95
          backdrop-blur-xl
          rounded-[40px]
          p-10
          shadow-2xl
          border
          border-white/50
          overflow-y-auto
        "
        onClick={(e)=>e.stopPropagation()}
      >





        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            mb-8
          "
        >


          <div
            className="
              flex
              items-center
              gap-5
            "
          >


            <div
              className="
                w-16
                h-16
                rounded-3xl
                bg-violet-700
                flex
                items-center
                justify-center
              "
            >

              <Lock
                size={32}
                className="text-white"
              />

            </div>




            <div>

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                "
              >
                Secure Escrow Payment
              </h2>


              <p
                className="
                  text-base
                  text-gray-500
                  mt-1
                "
              >
                Protected by SkillBuster
              </p>


            </div>



          </div>





          <button
            onClick={onClose}
            className="
              w-12
              h-12
              rounded-full
              bg-gray-100
              flex
              items-center
              justify-center
              hover:bg-gray-200
            "
          >

            <X size={24}/>

          </button>



        </div>









        {/* Amount Box */}


        <div
          className="
            bg-violet-50
            rounded-[32px]
            p-10
            text-center
            mb-8
            border
            border-violet-100
          "
        >


          <p
            className="
              text-lg
              text-gray-600
            "
          >
            Project Amount
          </p>



          <h3
            className="
              text-5xl
              font-bold
              text-violet-800
              mt-3
            "
          >

            {projectAmount}

          </h3>




          <p
            className="
              text-base
              text-gray-500
              mt-3
            "
          >

            {projectName}

          </p>



        </div>









        {/* Security Cards */}


        <div
          className="
            grid
            grid-cols-3
            gap-5
            mb-8
          "
        >




          <SecurityCard
            icon={
              <Shield
                size={30}
                className="text-green-500"
              />
            }
            text="Escrow Protected"
          />



          <SecurityCard
            icon={
              <Lock
                size={30}
                className="text-violet-600"
              />
            }
            text="SSL Secure"
          />



          <SecurityCard
            icon={
              <ShieldCheck
                size={30}
                className="text-amber-500"
              />
            }
            text="Verified Safe"
          />



        </div>









        {/* Information */}


        <div
          className="
            bg-emerald-50
            rounded-3xl
            p-5
            flex
            gap-4
            mb-5
          "
        >


          <Info
            size={26}
            className="
              text-emerald-600
              shrink-0
            "
          />


          <p
            className="
              text-base
              text-gray-700
            "
          >

            Your payment will be securely held in escrow and released only after you approve the completed work.

          </p>



        </div>







        <div
          className="
            bg-amber-50
            rounded-3xl
            p-5
            flex
            gap-4
            mb-8
          "
        >


          <Info
            size={26}
            className="
              text-amber-600
              shrink-0
            "
          />


          <p
            className="
              text-base
              text-gray-700
            "
          >

            Refund requests are available if the project is not delivered according to the agreement.

          </p>


        </div>









        {/* How it Works */}


        <div
          className="
            bg-violet-50
            rounded-[32px]
            p-7
            mb-8
          "
        >


          <h3
            className="
              text-lg
              font-bold
              text-gray-700
              mb-5
            "
          >

            HOW IT WORKS

          </h3>




          <Step
            number="1"
            text="Funds Secured in Escrow"
            active
          />


          <Step
            number="2"
            text="Awaiting Project Completion"
          />


          <Step
            number="3"
            text="Ready for Release"
          />


        </div>









        {/* Pay Button */}


        <button
          onClick={onPay}
          className="
            w-full
            py-5
            rounded-3xl
            bg-gradient-to-r
            from-purple-600
            to-violet-700
            text-white
            text-xl
            font-bold
            flex
            items-center
            justify-center
            gap-3
            shadow-xl
          "
        >

          <CreditCard size={28}/>

          Pay {projectAmount}

          — Escrow Protected

        </button>





        <p
          className="
            text-sm
            text-gray-400
            text-center
            mt-5
          "
        >

          Your card won't be charged until you confirm

        </p>



      </div>


    </div>

  );

};








function SecurityCard({
  icon,
  text
}) {

  return (

    <div
      className="
        bg-gray-50
        rounded-3xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-3
      "
    >

      {icon}


      <span
        className="
          text-sm
          text-gray-600
        "
      >
        {text}
      </span>


    </div>

  );

}







function Step({
  number,
  text,
  active
}) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
        mb-4
      "
    >


      <div
        className={`
          w-9
          h-9
          rounded-full
          flex
          items-center
          justify-center
          text-white
          font-bold

          ${
            active
            ?
            "bg-violet-600"
            :
            "bg-gray-300"
          }
        `}
      >

        {number}

      </div>




      <span
        className="
          text-base
          font-medium
          text-gray-700
        "
      >

        {text}

      </span>


    </div>

  );

}





export default FiftyOneComponent;